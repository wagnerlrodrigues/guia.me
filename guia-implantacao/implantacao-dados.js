/* ============================================================
   DADOS — Guia DSK
   Este arquivo define as categorias e as fichas específicas
   deste manual. Carregue-o ANTES de assets/manual-engine.js.
   ============================================================ */

const CATEGORIES = {
  alunos:       { label: "Alunos",       code: "ALU"  },
  turmas:       { label: "Turmas",       code: "TUR"  },
  escola:       { label: "Escola",       code: "ESC"  },
  frequencia:   { label: "Frequência",   code: "FREQ" },
  comunicados:  { label: "Comunicados",  code: "COM"  },
  avaliacao:    { label: "Avaliação",    code: "AVAL" },
  relatorios:   { label: "Relatórios",   code: "REL"  },
  etapa1:      { label: "Etapa 1",      code: "ETP1" },
  etapa2:      { label: "Etapa 2",      code: "ETP2" },
};

// Cada entrada representa uma página (arquivo) do guia DSK.
// - "driveLink": link de compartilhamento do Google Drive do arquivo
//   (o arquivo precisa estar com o compartilhamento em
//   "Qualquer pessoa com o link" -> "Leitor").
// - "youtubeLink": link do vídeo no YouTube (opcional).
// - "notes": observações longas (opcional), exibidas num painel à
//   esquerda quando a ficha é aberta.
// Se um campo ficar vazio, o botão/painel correspondente não aparece.
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