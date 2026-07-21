/* ============================================================
   MANUAL ENGINE — motor genérico compartilhado por todas as
   páginas de manual do site (busca, cards, modal de imagem,
   zoom, modal de vídeo, menu mobile).

   IMPORTANTE: este arquivo espera que as constantes CATEGORIES
   e MANUAL já existam no escopo global. Carregue o arquivo de
   dados da página (ex.: dsk-dados.js) em uma tag <script> ANTES
   de carregar este arquivo.
   ============================================================ */

// Paleta de cores (tons de azul) usada para as categorias, na ordem
// em que elas aparecem em CATEGORIES. Se você adicionar uma nova
// categoria, ela recebe automaticamente a próxima cor da lista —
// não é preciso cadastrar nada no CSS.
const CATEGORY_PALETTE = [
  { color: "#2454B5", soft: "#E9F0FC" },
  { color: "#0fa692", soft: "#E4F2FA" },
  { color: "#c14a4a", soft: "#ECEEFB" },
  { color: "#916e0f", soft: "#E5EDF9" },
  { color: "#2E8FBF", soft: "#E6F3FA" },
  { color: "#5D6FB8", soft: "#EDEFFA" },
  { color: "#17679E", soft: "#E4F0F8" },
  { color: "#3E63A6", soft: "#E8EDFA" },
  { color: "#1D7A8C", soft: "#E2F2F1" },
  { color: "#5A4FB0", soft: "#ECEAFB" },
  { color: "#2C6BA0", soft: "#E5F0F8" },
  { color: "#476E9E", soft: "#E7EEF6" },
];

function getCategoryColors(key) {
  const keys = Object.keys(CATEGORIES);
  const index = keys.indexOf(key);
  const safeIndex = index >= 0 ? index : 0;
  return CATEGORY_PALETTE[safeIndex % CATEGORY_PALETTE.length];
}

// ---------------- estado ----------------

let activeCategory = "todos";
let currentQuery = "";
let filtered = [...MANUAL];
let modalIndex = -1;

// ---------------- utilidades ----------------

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchesQuery(item, query) {
  if (!query) return true;
  const haystack = normalize(`${item.title} ${item.subtitle || ""} ${item.keywords} ${item.notes || ""} ${CATEGORIES[item.category].label}`);
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return terms.every((term) => haystack.includes(term));
}

// Extrai o ID do arquivo a partir de um link do Google Drive em
// qualquer um dos formatos comuns de compartilhamento e devolve uma
// URL de imagem direta (funciona dentro de uma tag <img>).
function driveImageUrl(link) {
  if (!link) return null;
  const trimmed = link.trim();
  if (!trimmed) return null;

  const patterns = [
    /\/d\/([a-zA-Z0-9_-]{15,})/,      // .../file/d/ID/view
    /[?&]id=([a-zA-Z0-9_-]{15,})/,    // ...?id=ID  ou  open?id=ID
  ];

  let id = null;
  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) { id = match[1]; break; }
  }

  if (!id) return null;

  return `https://lh3.googleusercontent.com/d/${id}=w1600`;
}

// Extrai o ID do vídeo a partir de um link do YouTube em qualquer
// um dos formatos comuns e devolve a URL de embed correspondente.
function youtubeEmbedUrl(link) {
  if (!link) return null;
  const trimmed = link.trim();
  if (!trimmed) return null;

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/,             // youtu.be/ID
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/,  // youtube.com/shorts/ID
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/,   // youtube.com/embed/ID
    /[?&]v=([a-zA-Z0-9_-]{6,})/,                  // ...?v=ID
  ];

  let id = null;
  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) { id = match[1]; break; }
  }

  if (!id) return null;

  return `https://www.youtube.com/embed/${id}`;
}

function catalogCode(item) {
  const cat = CATEGORIES[item.category];
  const indexInCategory =
    MANUAL.filter((m) => m.category === item.category).indexOf(item) + 1;
  return `${cat.code}-${String(indexInCategory).padStart(2, "0")}`;
}

// ---------------- elementos ----------------

const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearBtn");
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");
const resultCountEl = document.getElementById("resultCount");
const emptyStateEl = document.getElementById("emptyState");
const emptyQueryEl = document.getElementById("emptyQuery");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalFrame = document.getElementById("modalFrame");
const zoomViewport = document.getElementById("zoomViewport");
const modalImg = document.getElementById("modalImg");
const modalFallback = document.getElementById("modalFallback");
const fallbackCode = document.getElementById("fallbackCode");
const fallbackFilename = document.getElementById("fallbackFilename");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalOpenDrive = document.getElementById("modalOpenDrive");
const modalNotes = document.getElementById("modalNotes");
const modalNotesText = document.getElementById("modalNotesText");

const zoomToolbar = document.getElementById("zoomToolbar");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");
const zoomLevelEl = document.getElementById("zoomLevel");

const videoModalOverlay = document.getElementById("videoModalOverlay");
const videoModalClose = document.getElementById("videoModalClose");
const videoIframe = document.getElementById("videoIframe");
const videoModalTag = document.getElementById("videoModalTag");
const videoModalTitle = document.getElementById("videoModalTitle");
const videoOpenYoutube = document.getElementById("videoOpenYoutube");
const videoModalNotes = document.getElementById("videoModalNotes");
const videoModalNotesText = document.getElementById("videoModalNotesText");

// ---------------- montar abas de categoria ----------------

function buildTabs() {
  const allTab = document.createElement("button");
  allTab.className = "tab active";
  allTab.dataset.category = "todos";
  allTab.innerHTML = `<span class="dot"></span> Todos`;
  allTab.addEventListener("click", () => setCategory("todos"));
  tabsEl.appendChild(allTab);

  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const count = MANUAL.filter((m) => m.category === key).length;
    if (count === 0) return;
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.dataset.category = key;
    tab.innerHTML = `<span class="dot" style="background:${getCategoryColors(key).color}"></span> ${meta.label}`;
    tab.addEventListener("click", () => setCategory(key));
    tabsEl.appendChild(tab);
  });
}

function setCategory(key) {
  activeCategory = key;
  [...tabsEl.children].forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === key);
  });
  render();
}

// ---------------- render dos cards ----------------

function render() {
  filtered = MANUAL.filter((item) => {
    const catOk = activeCategory === "todos" || item.category === activeCategory;
    const queryOk = matchesQuery(item, currentQuery);
    return catOk && queryOk;
  });

  gridEl.innerHTML = "";

  filtered.forEach((item, i) => {
    const cat = CATEGORIES[item.category];
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--i", i);
    const colors = getCategoryColors(item.category);
    card.style.setProperty("--cat-color", colors.color);
    card.style.setProperty("--cat-soft", colors.soft);

    const hasImage = !!driveImageUrl(item.driveLink);
    const hasVideo = !!youtubeEmbedUrl(item.youtubeLink);

    const openImageBtn = hasImage ? `
        <button type="button" class="card-btn primary" data-action="open-image">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Abrir ficha
        </button>` : "";

    const openVideoBtn = hasVideo ? `
        <button type="button" class="card-btn" data-action="open-video">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="6 4 20 12 6 20 6 4"></polygon>
          </svg>
          Assistir vídeo
        </button>` : "";

    card.innerHTML = `
      <div class="card-top">
        <span class="card-code">${catalogCode(item)}</span>
        <span class="card-section"><span class="dot"></span>${cat.label}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-subtitle">${item.subtitle || ""}</p>
      <div class="card-actions">
        ${openImageBtn}
        ${openVideoBtn}
        <!-- espaço reservado para outros botões (ex.: baixar, favoritar, copiar link) -->
      </div>
    `;

    const imgBtn = card.querySelector('[data-action="open-image"]');
    if (imgBtn) imgBtn.addEventListener("click", () => openModal(i));

    const vidBtn = card.querySelector('[data-action="open-video"]');
    if (vidBtn) vidBtn.addEventListener("click", () => openVideoModal(item));

    gridEl.appendChild(card);
  });

  const n = filtered.length;
  resultCountEl.textContent = n
    ? `${n} ${n === 1 ? "ficha encontrada" : "fichas encontradas"}`
    : "";

  emptyStateEl.hidden = n !== 0;
  gridEl.hidden = n === 0;
  if (n === 0) {
    emptyQueryEl.textContent = currentQuery ? `"${currentQuery}"` : "esse filtro";
  }
}

// ---------------- busca ----------------

searchInput.addEventListener("input", (e) => {
  currentQuery = e.target.value;
  clearBtn.hidden = currentQuery.length === 0;
  render();
});

clearBtn.addEventListener("click", () => {
  currentQuery = "";
  searchInput.value = "";
  clearBtn.hidden = true;
  searchInput.focus();
  render();
});

// ---------------- zoom ----------------

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.25;

let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let panStartX = 0;
let panStartY = 0;

function applyZoomTransform() {
  modalImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
  zoomLevelEl.textContent = `${Math.round(zoomScale * 100)}%`;
  zoomViewport.classList.toggle("zoomed", zoomScale > 1);
  zoomOutBtn.disabled = zoomScale <= ZOOM_MIN;
  zoomInBtn.disabled = zoomScale >= ZOOM_MAX;
}

function resetZoom() {
  zoomScale = 1;
  panX = 0;
  panY = 0;
  isDragging = false;
  zoomViewport.classList.remove("dragging");
  applyZoomTransform();
}

function setZoom(newScale) {
  zoomScale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, newScale));
  if (zoomScale === ZOOM_MIN) { panX = 0; panY = 0; }
  applyZoomTransform();
}

zoomInBtn.addEventListener("click", () => setZoom(zoomScale + ZOOM_STEP));
zoomOutBtn.addEventListener("click", () => setZoom(zoomScale - ZOOM_STEP));
zoomResetBtn.addEventListener("click", () => resetZoom());

zoomViewport.addEventListener("wheel", (e) => {
  if (modalFallback && !modalFallback.hidden) return;
  e.preventDefault();
  const direction = e.deltaY > 0 ? -1 : 1;
  setZoom(zoomScale + direction * ZOOM_STEP);
}, { passive: false });

zoomViewport.addEventListener("pointerdown", (e) => {
  if (zoomScale <= ZOOM_MIN) return;
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  panStartX = panX;
  panStartY = panY;
  zoomViewport.classList.add("dragging");
  zoomViewport.setPointerCapture(e.pointerId);
});

zoomViewport.addEventListener("pointermove", (e) => {
  if (!isDragging) return;
  panX = panStartX + (e.clientX - dragStartX);
  panY = panStartY + (e.clientY - dragStartY);
  applyZoomTransform();
});

function endDrag(e) {
  isDragging = false;
  zoomViewport.classList.remove("dragging");
}

zoomViewport.addEventListener("pointerup", endDrag);
zoomViewport.addEventListener("pointerleave", endDrag);

zoomViewport.addEventListener("click", () => {
  if (!isDragging && zoomScale === ZOOM_MIN) {
    setZoom(ZOOM_MIN + ZOOM_STEP * 2);
  }
});

// ---------------- modal ----------------

function openModal(index) {
  modalIndex = index;
  updateModal();
  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
  modalImg.src = "";
  resetZoom();
}

function updateModal() {
  const item = filtered[modalIndex];
  if (!item) return;

  resetZoom();

  const cat = CATEGORIES[item.category];
  modalTag.textContent = `${catalogCode(item)} · ${cat.label}`;
  const modalColors = getCategoryColors(item.category);
  modalTag.style.setProperty("--cat-color", modalColors.color);
  modalTag.style.setProperty("--cat-soft", modalColors.soft);
  modalTitle.textContent = item.title;

  if (item.driveLink && item.driveLink.trim()) {
    modalOpenDrive.href = item.driveLink;
    modalOpenDrive.style.setProperty("--cat-color", modalColors.color);
    modalOpenDrive.style.setProperty("--cat-soft", modalColors.soft);
    modalOpenDrive.hidden = false;
  } else {
    modalOpenDrive.removeAttribute("href");
    modalOpenDrive.hidden = true;
  }

  if (item.notes && item.notes.trim()) {
    modalNotesText.textContent = item.notes;
    modalNotes.hidden = false;
  } else {
    modalNotesText.textContent = "";
    modalNotes.hidden = true;
  }

  fallbackCode.textContent = catalogCode(item);
  fallbackCode.style.setProperty("--cat-color", modalColors.color);
  fallbackCode.style.setProperty("--cat-soft", modalColors.soft);

  const url = driveImageUrl(item.driveLink);

  modalPrev.disabled = modalIndex <= 0;
  modalNext.disabled = modalIndex >= filtered.length - 1;

  if (!url) {
    fallbackFilename.textContent = item.driveLink
      ? "Não foi possível reconhecer esse link do Google Drive."
      : "Nenhum link do Google Drive cadastrado para esta ficha ainda.";
    zoomViewport.hidden = true;
    zoomToolbar.hidden = true;
    modalFallback.hidden = false;
    return;
  }

  modalFallback.hidden = true;
  zoomViewport.hidden = false;
  zoomToolbar.hidden = false;
  modalImg.alt = item.title;
  modalImg.src = url;
}

modalImg.addEventListener("error", () => {
  if (!modalOverlay.hidden) {
    fallbackFilename.textContent =
      "Não foi possível carregar a imagem. Verifique se o compartilhamento do arquivo no Drive está definido como \"Qualquer pessoa com o link\".";
    zoomViewport.hidden = true;
    zoomToolbar.hidden = true;
    modalFallback.hidden = false;
  }
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
modalPrev.addEventListener("click", () => {
  if (modalIndex > 0) { modalIndex -= 1; updateModal(); }
});
modalNext.addEventListener("click", () => {
  if (modalIndex < filtered.length - 1) { modalIndex += 1; updateModal(); }
});

// ---------------- modal de vídeo ----------------

function openVideoModal(item) {
  const embedUrl = youtubeEmbedUrl(item.youtubeLink);
  if (!embedUrl) return;

  const cat = CATEGORIES[item.category];
  videoModalTag.textContent = `${catalogCode(item)} · ${cat.label}`;
  const videoColors = getCategoryColors(item.category);
  videoModalTag.style.setProperty("--cat-color", videoColors.color);
  videoModalTag.style.setProperty("--cat-soft", videoColors.soft);
  videoModalTitle.textContent = item.title;
  videoOpenYoutube.href = item.youtubeLink;
  videoOpenYoutube.style.setProperty("--cat-color", videoColors.color);
  videoOpenYoutube.style.setProperty("--cat-soft", videoColors.soft);

  if (item.notes && item.notes.trim()) {
    videoModalNotesText.textContent = item.notes;
    videoModalNotes.hidden = false;
  } else {
    videoModalNotesText.textContent = "";
    videoModalNotes.hidden = true;
  }

  videoIframe.src = `${embedUrl}?rel=0`;
  videoModalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  videoModalOverlay.hidden = true;
  document.body.style.overflow = "";
  videoIframe.src = ""; // interrompe a reprodução ao fechar
}

videoModalClose.addEventListener("click", closeVideoModal);
videoModalOverlay.addEventListener("click", (e) => {
  if (e.target === videoModalOverlay) closeVideoModal();
});

document.addEventListener("keydown", (e) => {
  if (modalOverlay.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft" && !modalPrev.disabled) { modalIndex -= 1; updateModal(); }
  if (e.key === "ArrowRight" && !modalNext.disabled) { modalIndex += 1; updateModal(); }
  if (e.key === "+" || e.key === "=") setZoom(zoomScale + ZOOM_STEP);
  if (e.key === "-") setZoom(zoomScale - ZOOM_STEP);
});

document.addEventListener("keydown", (e) => {
  if (videoModalOverlay.hidden) return;
  if (e.key === "Escape") closeVideoModal();
});

// ---------------- menu de navegação (mobile) ----------------

const navToggle = document.getElementById("navToggle");
const siteNavLinks = document.getElementById("siteNavLinks");

if (navToggle && siteNavLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNavLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNavLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      siteNavLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ---------------- init ----------------

buildTabs();
render();
searchInput.focus();
