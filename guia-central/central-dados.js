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
};

const MANUAL = [
  // ==========================================
  // CATEGORIA: ALUNOS
  // ==========================================
   {
    driveLink: "https://drive.google.com/file/d/1IcwURzyvQPRU9BUAZHt0lJYFdu8y0fmD/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/ukJSrcVOSLg",
    notes: "",
    title: "Matrícula Alunos (Parte 1)",
    subtitle: "Passo a passo inicial para matricular alunos no sistema",
    category: "alunos",
    keywords: "matricula alunos parte 1 matricular novo aluno",
  },
  {
    driveLink: "https://drive.google.com/file/d/1l7B4fEoo493sEAl2PrcTtqXHIYbi1v9E/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Matrícula Alunos (Parte 2)",
    subtitle: "Conclusão e detalhes do processo de matrícula de alunos",
    category: "alunos",
    keywords: "matricula alunos parte 2 finalizar matricula cadastrar",
  },
  {
    driveLink: "https://drive.google.com/file/d/1IcwURzyvQPRU9BUAZHt0lJYFdu8y0fmD/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/tsVLS7uxP7M",
    notes: "",
    title: "Alterar situação - Alunos",
    subtitle: "Passo a passo inicial para alterar a situação dos alunos no sistema",
    category: "alunos",
    keywords: "alterar situacao alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1oukygELzpuEPKc5iJRpivJ9hWDc8w838/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/7qArXamzheM",
    notes: "",
    title: "Remanejamento",
    subtitle: "Procedimentos para remanejamento de alunos entre turmas ou unidades",
    category: "alunos",
    keywords: "remanejamento aluno transferir turma troca alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/128AxsULqtkB8qyv1fXn1Dn-yDXse6gnQ/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Movimentação Final",
    subtitle: "Encerramento e movimentação final dos alunos no ano letivo",
    category: "alunos",
    keywords: "movimentacao final alunos encerramento ano letivo aprovado reprovado",
  },
  
  
  {
    driveLink: "https://drive.google.com/file/d/1kqcosZ5NcIDTe2qJix8el-CY9SmO0iJK/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Cadastro PCD (Parte 1)",
    subtitle: "Registro inicial de informações para estudantes PCD",
    category: "alunos",
    keywords: "cadastro pcd parte 1 inclusao PCD necessidades especiais alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1V1Z77Ud1BfkjT6xRll3bjjjCASk8zd6H/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Cadastro PCD (Parte 2)",
    subtitle: "Complementação do cadastro de estudantes com deficiência",
    category: "alunos",
    keywords: "cadastro pcd parte 2 inclusao acessibilidade necessidades especiais alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1wVdcpUhqkzZveZFyZulu9QJu1z48sa-c/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Atestados e Documentos (Parte 1)",
    subtitle: "Solicitação e emissão inicial de documentos de estudantes",
    category: "alunos",
    keywords: "atestados documentos parte 1 declaracao matricula atestado medico alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1JIDFY-NybIJUTy2sHgQc8aPMyu1qDE63/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Atestados e Documentos (Parte 2)",
    subtitle: "Emissão e controle de documentação oficial e atestados",
    category: "alunos",
    keywords: "atestados documentos parte 2 declaracao certificado alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1VpILXV4wqWBbxDEo-oE-SNSeQ50PEaq7/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Movimentação Final de Alunos",
    subtitle: "Procedimento complementar de encerramento do ano letivo",
    category: "alunos",
    keywords: "movimentacao final alunos encerramento frequencia resultados",
  },
  

  // ==========================================
  // CATEGORIA: TURMAS
  // ==========================================
  {
    driveLink: "https://drive.google.com/file/d/1vftyMOihlq7gowS6KFyEZ-P3jJZCf4v3/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/ZJDdZ9EfAAo",
    notes: "",
    title: "Turmas",
    subtitle: "Gestão, criação e organização das turmas no sistema",
    category: "turmas",
    keywords: "turmas gestao de turmas sala criar turma",
  },
  {
    driveLink: "https://drive.google.com/file/d/1c4fBLENyS_ANSVw4ZDLMHMscsLCCXIDu/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Enturmação AEE",
    subtitle: "Procedimentos de enturmação para Atendimento Educacional Especializado",
    category: "turmas",
    keywords: "enturmacao aee atendimento educacional especializado inclusao turmas",
  },
  {
    driveLink: "https://drive.google.com/file/d/1qhAE6nGsMbS2HANRw4VrGeDVZRbIAsJD/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Enturmação AEE - Guia Adicional",
    subtitle: "Organização de salas e horários do AEE",
    category: "turmas",
    keywords: "enturmacao aee turmas atendimento especial alunos",
  },

  // ==========================================
  // CATEGORIA: ESCOLA
  // ==========================================
  {
    driveLink: "https://drive.google.com/file/d/1zSCCKPLVMPRl0Ew6Q0dpiIcLtuR5Ki24/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Ponto Eletrônico",
    subtitle: "Instruções sobre registro e controle de ponto eletrônico",
    category: "escola",
    keywords: "ponto eletronico frequencia ponto relogio funcionarios escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1mO7Fv2oSZdK3ZFtTPdDOuu6kMhheixq2/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Dashboard",
    subtitle: "Visão geral e indicadores do sistema escolar",
    category: "escola",
    keywords: "dashboard painel estatisticas indicadores resumo escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1oa77AWBdYf9R9c6fwnZS3paayeDYQyGi/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Sumário",
    subtitle: "Índice de conteúdos e navegação do manual",
    category: "escola",
    keywords: "sumario indice guia manual navegacao",
  },
  
  {
    driveLink: "https://drive.google.com/file/d/1y7LB2IF5yhcRf6zcN3aKL4mTUwx7LCyx/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Cadastro de Funcionários (Parte 1)",
    subtitle: "Passo a passo para registrar novos colaboradores",
    category: "escola",
    keywords: "cadastro funcionarios parte 1 servidores equipe professores escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1-PrilEarNaknh_T2q4-qC0M8P6AZEXRm/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Cadastro de Funcionários (Parte 2)",
    subtitle: "Inclusão de dados complementares de funcionários",
    category: "escola",
    keywords: "cadastro funcionarios parte 2 equipe colaboradores escola",
  },
 

  // ==========================================
  // CATEGORIA: AVALIACAO
  // ==========================================
  {
    driveLink: "https://drive.google.com/file/d/1Nyw11npBxugUX7i1Q9LPP52GGOvtboX0/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Avaliação: Cadastro (Parte 1)",
    subtitle: "Passos iniciais para cadastrar uma nova avaliação",
    category: "avaliacao",
    keywords: "avaliacao cadastro parte 1 criar avaliacao prova teste",
  },
  {
    driveLink: "https://drive.google.com/file/d/117d_tJNvCJfZJ17jP1_XEB9wwifDugl6/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Avaliação: Cadastro (Parte 2)",
    subtitle: "Detalhamento e parâmetros para cadastro de avaliações",
    category: "avaliacao",
    keywords: "avaliacao cadastro parte 2 provas exames testes",
  },
  {
    driveLink: "https://drive.google.com/file/d/1AcAIlpfMK8YZ0Td0Wrjq2OI280pSdE6z/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Avaliação: Disciplina (Parte 3)",
    subtitle: "Vincular avaliações às disciplinas específicas",
    category: "avaliacao",
    keywords: "avaliacao disciplina parte 3 materias prova",
  },
  {
    driveLink: "https://drive.google.com/file/d/1-v6cwg9rI7iRKceKSdg7PHOZ-hA-aCnv/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Avaliação: Gabarito (Parte 4)",
    subtitle: "Configuração e cadastro de gabaritos para avaliações",
    category: "avaliacao",
    keywords: "avaliacao gabarito parte 4 respostas prova simulado",
  },
  {
    driveLink: "https://drive.google.com/file/d/1DgxXthPlTwF5bhFdBd3MiPCG7HRxNT_m/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Avaliação: Informando os Itens",
    subtitle: "Inclusão de questões e itens estruturados na avaliação",
    category: "avaliacao",
    keywords: "avaliacao informando os itens questoes questoes prova",
  },
  {
    driveLink: "https://drive.google.com/file/d/13UUCRg90OvcdDAOUBIjD1_OVsIZAAACV/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Avaliação: Gerando Cartões",
    subtitle: "Geração e impressão de cartões de resposta de avaliações",
    category: "avaliacao",
    keywords: "avaliacao gerando cartoes resposta folha de resposta prova",
  },
  {
    driveLink: "https://drive.google.com/file/d/1cxIziMkbJoIVQJ1LympGkPg-ldeaZWQ2/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Notas",
    subtitle: "Lançamento e gerenciamento de notas dos estudantes",
    category: "avaliacao",
    keywords: "notas lancamento avaliacao boletim desempenho",
  },
  
  
  
  {
    driveLink: "https://drive.google.com/file/d/17iblLk5gzz8EQmkno0zihcxdiSomTDtE/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Acompanhamento (Parte 1)",
    subtitle: "Monitoramento e acompanhamento do desempenho escolar",
    category: "avaliacao",
    keywords: "acompanhamento parte 1 desempenho monitoramento rendimento alunos",
  },
  
  
  {
    driveLink: "https://drive.google.com/file/d/1IU0iHwV7DYJsMXqSaH4NIhR-2ItidCt4/view?usp=drivesdk",
    youtubeLink: "https://youtu.be/hYekfrjTwKU",
    notes: "",
    title: "Acompanhamento (Parte 2)",
    subtitle: "Análise avançada e relatórios de acompanhamento pedagógico",
    category: "avaliacao",
    keywords: "acompanhamento parte 2 analise dados pedagogical avaliacao",
  },
  
  

  // ==========================================
  // CATEGORIA: RELATORIOS
  // ==========================================
  {
    driveLink: "https://drive.google.com/file/d/1H_qM1qZ5-2ecfR58bFBrpFNC4YOwVYTh/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Relatório Espelho",
    subtitle: "Visualização e geração do relatório espelho de ponto",
    category: "relatorios",
    keywords: "relatorio espelho ponto frequencia relatorios",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Rire9G-IRTHFTfRlXwLNICmLV2DbQqIx/view?usp=drivesdk",
    youtubeLink: "",
    notes: "",
    title: "Ata de promoção",
    subtitle: "Relatório de ata de promoção e resultados finais dos alunos",
    category: "relatorios",
    keywords: "relatorios emissao dados impressao ata de promocao resultados finais alunos",
  },
  
];