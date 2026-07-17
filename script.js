/* ============================================================
   MANUAL CENTRAL — dados, busca e visualizador de fichas
   Imagens carregadas via link do Google Drive.
   ============================================================ */


const CATEGORY_PALETTE = [
  { color: "#2454B5", soft: "#E9F0FC" },
  { color: "#0F6FA6", soft: "#E4F2FA" },
  { color: "#4A5FC1", soft: "#ECEEFB" },
  { color: "#0F4C91", soft: "#E5EDF9" },
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
const CATEGORIES = {
  geral:        { label: "Geral",        code: "GER"  },
  avaliacao:    { label: "Avaliação",    code: "AVAL" },
  funcionarios: { label: "Funcionários", code: "FUNC" },
  alunos:       { label: "Alunos",       code: "ALU"  },
  turmas:       { label: "Turmas",       code: "TUR"  },
  relatorios:   { label: "Relatórios",   code: "REL"  },
  notas:        { label: "Notas",        code: "NOT"  },
  etapa1:       { label: "Etapa 1 - DSK",       code: "ETP1" },
  etapa2:       { label: "Etapa 2 - Central",       code: "ETP2" },
};

// Cada entrada representa uma página do manual.
// - "driveLink": link de compartilhamento do Google Drive da imagem
//   (o arquivo precisa estar com o compartilhamento em
//   "Qualquer pessoa com o link" -> "Leitor"). Aceita os formatos
//     https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing
//     https://drive.google.com/open?id=ID_DO_ARQUIVO
// - "youtubeLink": link do vídeo no YouTube (opcional). Aceita os
//   formatos
//     https://www.youtube.com/watch?v=ID_DO_VIDEO
//     https://youtu.be/ID_DO_VIDEO
//     https://www.youtube.com/shorts/ID_DO_VIDEO
// - "notes": texto livre (opcional) com observações sobre a
//   página, exibido num painel à esquerda quando o modal é
//   aberto. Aceita textos longos e quebras de linha (use \n ou
//   crases `` ` `` para escrever em várias linhas). Se ficar
//   vazio, o painel simplesmente não aparece.
// Se um campo ficar vazio, o botão correspondente na ficha (Abrir
// ficha / Assistir vídeo) simplesmente não aparece.
const MANUAL = [
  {
    driveLink: "https://drive.google.com/file/d/1R_Au8FQFZkHtZ_r33gxPR8tZ0u94ldXr/view?usp=drive_link", 
    youtubeLink: "", 
    title: "ETAPA 1: MOBIEDUCA.ME DSK ",
    subtitle: "Manual de usuário Mobieduca.me",
    category: "etapa1",
    keywords: "etapa 1 mobieduca.me dsk instalacao aparelhos reconhecimento facial validacao conectividade status funcionamento",
    notes: "Manual completo de utilização das ferramentas Mobieduca.me", // observações longas que aparecem no painel lateral do modal

  },
  {
    driveLink: "https://drive.google.com/file/d/1nIlkE74LUEV5ie0UBG6davBPEu0bHrIU/view", 
    youtubeLink: "", 
    title: "RECONHECIMENTO FACIAL ",
    subtitle: "Instalação dos Aparelhos de Reconhecimento Facial(para escolas comtempladas)  ",
    category: "etapa1",
    keywords: "etapa 1 mobieduca.me dsk instalacao aparelhos reconhecimento facial validacao conectividade status funcionamento",
    notes: "• Validação de Conectividade: Identificar na tela do aparelho se ele está devidamente conectado à rede (cabo ou Wi-Fi) e comunicando normalmente. "
  },
  {
    driveLink: "", 
    youtubeLink: "", 
    title: " Primeiro Acesso ao Sistema DSK",
    subtitle: "Configuração do software instalado no notebook: • Credenciais de Acesso: Utilizar as informações de login e o padrão de senha inicial fornecidos.",
    category: "etapa1",
    keywords: "etapa 1 mobieduca.me dsk instalacao aparelhos reconhecimento facial validacao conectividade status funcionamento",
    notes: ""
  },
  {
    driveLink: "https://drive.google.com/file/d/1J-KMOGwjwXuJg3Lucs-BeELrIZ7o7Dg5/view", 
    youtubeLink: "", 
    title: "Registro de Frequência pelo Mobieduca - DSK",
    subtitle: "Frequência do alunos utilizando as carteirinhas(IdCard) ",
    category: "etapa1",
    keywords: "etapa 1 carteirinha idcard DSK frequência registro mobieduca.me",
  },
  {
    driveLink: "https://drive.google.com/file/d/1hwzFlyg2JrEIEo0tK8wBtn0GH3C_AhNC/view", 
    youtubeLink: "https://www.youtube.com/watch?v=ykYWO5YZFMY", 
    title: "Registro de Frequência Manual - DSK",
    subtitle: "Registro de frequência manual dos alunos utilizando o Mobieduca.me",
    category: "etapa1",
    keywords: "etapa 1 frequência manual DSK registro mobieduca.me",
  },
  {
    driveLink: "https://drive.google.com/file/d/1eInoEl2UoA3HIzcIdvGwf85BXAIBgkGk/view?usp=sharing", 
    youtubeLink: "xxx", 
    title: "Registro de Frequência na Entrada - DSK",
    subtitle: "Registro de frequência dos alunos ao entrar na escola utilizando o Mobieduca.me",
    category: "etapa1",
    keywords: "etapa 1 frequência entrada DSK registro mobieduca.me",
  },
  {
    driveLink: "https://drive.google.com/file/d/1jdIQoN1PPbSohWJ_krCaFgpgc2XwjZfM/view", 
    youtubeLink: "xxx", 
    title: "Controle do Aluno - Cadastro - DSK",
    subtitle: "Manutenção da base local de estudantes para o correto funcionamento do reconhecimento facial:",
    category: "etapa1",
    keywords: "etapa 1 controle aluno cadastro DSK mobieduca.me",
  },
  {
    driveLink: "https://drive.google.com/file/d/1o6bOdOr5aGzEdEHbOKpn5uQrMlcEplwb/view", 
    youtubeLink: "xxx", 
    title: "Controle do Aluno - Cadastro - DSK ",
    subtitle: "Preechendo corretamente os campos de cadastro do aluno, para o correto funcionamento",
    category: "etapa1",
    keywords: "etapa 1 controle aluno cadastro DSK mobieduca.me",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Q0LahffEfWJv5gBB0TbPNSvdqngjexqw/view", 
    youtubeLink: "xxx", 
    title: "Controle do Aluno - Alteração - DSK ",
    subtitle: "Alterando corretamente os campos de cadastro do aluno, para o correto funcionamento",
    category: "etapa1",
    keywords: "etapa 1 controle aluno cadastro DSK mobieduca.me alteração",
  },
  {
    driveLink: "https://drive.google.com/file/d/1bt6lL4RLeOLEuzHPo5s9fGBilJcsP85v/view", 
    youtubeLink: "xxx", 
    title: "Turmas e Salas - DSK ",
    subtitle: "Visualização rápida da organização escolar: ",
    category: "etapa1",
    keywords: "turmas salas DSK mobieduca.me organização escolar listagem alunos enturmados",
    notes: "• Listagem por Turma: Acessar o menu de turmas e salas para extrair a lista completa de alunos enturmados de forma segmentada."
  },
  {
    driveLink: "https://drive.google.com/file/d/17EmW_j8n2qxxXgkeex9K3aNE8xJ6myES/view", 
    youtubeLink: "xxx", 
    title: "Controle de Funcionários",
    subtitle: "Gestão da equipe interna no ambiente local: ",
    category: "etapa1",
    keywords: "controle funcionários DSK mobieduca.me",
    notes: "• Cadastro de Funcionários: Acessar o menu de controle de funcionários para gerenciar a equipe interna, incluindo adições, edições e exclusões de registros."
  },

    /////////////// 2 ETAPA

  {
    driveLink: "https://drive.google.com/file/d/1b-LLKKft-grfOgezFCFVPgRjeblloMIz/view?usp=drive_link", 
    youtubeLink: "xxx", 
    title: "ETAPA 2: CENTRAL MOBIEDUCA.ME (GESTÃO)",
    subtitle: "https://central.mobieduca.me ",
    category: "etapa2",
    keywords: "central mobieduca.me gestão plataforma acesso login senha cpf",
    notes: "Como acessar: Acesse todas as plataformas MobiEduca.Me utilizando seu CPF como usuário e senha."
  },
  {
    driveLink: "https://drive.google.com/file/d/1rg_hcajI2W_nzGdsiMPZoaMb4sdexu1K/view", 
    youtubeLink: "https://youtu.be/ukJSrcVOSLg", 
    title: "Cadastro de alunos - Online - Passo 1",
    subtitle: "• Módulo Alunos: Efetuar matrículas completas, edições cadastrais profundas e atualizações de situação de matrícula para sincronia com a rede escolar",
    category: "etapa2",
    keywords: "cadastros alunos online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/165JT-A08c229636-RoyCxOG2T8Yz0Yf2/view", 
    youtubeLink: "https://youtu.be/ukJSrcVOSLg", 
    title: "Cadastro de alunos - Online - Passo 2",
    subtitle: "• Módulo Alunos: Efetuar matrículas completas, edições cadastrais profundas e atualizações de situação de matrícula para sincronia com a rede escolar",
    category: "etapa2",
    keywords: "cadastros alunos online MobiEduca.Me central",
  },
  {
    driveLink: "", 
    youtubeLink: "https://youtu.be/ZJDdZ9EfAAo", 
    title: "Cadastro de Turmas",
    subtitle: "• Módulo Turmas: Criar novas turmas, editar informações de turmas existentes e gerenciar a alocação de alunos para garantir uma organização eficiente do ambiente escolar.",
    category: "etapa2",
    keywords: "cadastros turmas online MobiEduca.Me central",
  },
  {
    driveLink: "", 
    youtubeLink: "https://youtu.be/7qArXamzheM", 
    title: "Remanejamento de Alunos",
    subtitle: "• Módulo Turmas: Realizar o remanejamento de alunos entre turmas, garantindo a correta distribuição e organização dos estudantes dentro do ambiente escolar.",
    category: "etapa2",
    keywords: "cadastros  remanejamento turmas online MobiEduca.Me central",
  },
  {
    driveLink: "", 
    youtubeLink: "https://youtu.be/tsVLS7uxP7M", 
    title: "Alterar situação de alunos",
    subtitle: "• Módulo Alunos: Alterar a situação de matrícula dos alunos, incluindo transferências, trancamentos e outras mudanças de status, para manter os registros atualizados e precisos.",
    category: "etapa2",
    keywords: "cadastros alteração remanejamento turmas online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1JvUTZdeOm928glOSLZwmxUqJxdrLCHVV/view", 
    youtubeLink: "", 
    title: "Cadastro de Funcionários - Online Passo 1",
    subtitle: "Cadastrar novos profissionais, editar dados de professores, definiratribuição de turmas e disciplinas ou excluir contas inativas.",
    category: "etapa2",
    keywords: "cadastro funcionários online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1fWcCH1dJTLkyKnBfgrg6DcEZgk9lKB6A/view?usp=sharing", 
    youtubeLink: "", 
    title: "Cadastro de Funcionários - Online Passo 2",
    subtitle: "Cadastrar novos profissionais, editar dados de professores, definiratribuição de turmas e disciplinas ou excluir contas inativas.",
    category: "etapa2",
    keywords: "cadastro funcionários online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1jBqZ1Gm5g7D8Rv9q9Y-B_hVZde6U7nO_/view?usp=sharing", 
    youtubeLink: "https://youtu.be/hYekfrjTwKU", 
    title: "Cadastro de Avaliações - Passo 1",
    subtitle: "Operacionalização das métricas de desempenho pedagógico:",
    category: "etapa2",
    keywords: "cadastro avaliações online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1l7xueXF0Ps5-tA7gJQT9_56OP--cm8VO/view?usp=sharing", 
    youtubeLink: "https://youtu.be/hYekfrjTwKU", 
    title: "Cadastro de Avaliações - Passo 2",
    subtitle: "• Nova Avaliação: Cadastrar uma nova avaliação ou simulado especificando o período letivo, turmas e disciplinas.",
    category: "etapa2",
    keywords: "cadastro avaliações online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1sOZGg1BNhsfJ_g_f_h0KrDP767aMZ3gN/view?usp=sharing", 
    youtubeLink: "https://youtu.be/hYekfrjTwKU", 
    title: "Cadastro de Avaliações - Passo 3",
    subtitle: "Disciplina da Avaliação: Associar as disciplinas correspondentes à avaliação cadastrada, garantindo a correta categorização e organização do conteúdo.",
    category: "etapa2",
    keywords: "cadastro avaliações online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/15Q8wGjU5qCYGuuD5KgEjckmdq09fzRrW/view?usp=sharing", 
    youtubeLink: "https://youtu.be/hYekfrjTwKU", 
    title: "Cadastro de Avaliações - Passo 4",
    subtitle: "Informando itens da Avaliação: Inserir os itens da avaliação, incluindo questões, alternativas e gabaritos, para compor o conteúdo completo da prova ou simulado.",
    category: "etapa2",
    keywords: "cadastro avaliações online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/15Q8wGjU5qCYGuuD5KgEjckmdq09fzRrW/view?usp=sharing", 
    youtubeLink: "https://youtu.be/hYekfrjTwKU", 
    title: "Cadastro de Avaliações - Passo 5",
    subtitle: "Gerando Cartões-Resposta: Após a finalização do cadastro da avaliação, gerar os cartões-resposta para impressão e distribuição aos alunos.",
    category: "etapa2",
    keywords: "cadastro avaliações online MobiEduca.Me central",
  },
  {
    driveLink: "https://drive.google.com/file/d/1ceq4XClPeY0zBWtYjN0ewfqBEmqZKn4n/view?usp=drive_link", 
    youtubeLink: "", 
    title: "Emissão de Documentos",
    subtitle: "Documentação Oficial: Localizar o módulo de emissão e gerar declarações ou relatórios pontuais solicitados pela comunidade escolar",
    category: "etapa2",
    keywords: "documentos emissão declarações relatórios MobiEduca.Me central",
  },
];

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
      ? "Não foi possível reconhecer esse link"
      : "Visualização indisponível, consulte outro material disponível no card do guia.";
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
      "Não foi possível carregar a imagem. Verifique o método de compartilhamento.";
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

// ---------------- init ----------------

buildTabs();
render();
searchInput.focus();
