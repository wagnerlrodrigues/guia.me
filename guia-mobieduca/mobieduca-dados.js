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
    driveLink: "https://drive.google.com/file/d/1jdIQoN1PPbSohWJ_krCaFgpgc2XwjZfM/view", // DSK_08 - ALUNO - MATRICULAR.pdf
    youtubeLink: "",
    notes: "",
    title: "Matricular aluno (parte 1)",
    subtitle: "Passo a passo para matricular um novo aluno no sistema",
    category: "alunos",
    keywords: "dsk 8 aluno matricular parte 1 alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1o6bOdOr5aGzEdEHbOKpn5uQrMlcEplwb/view", // DSK_09 - ALUNO - MATRICULAR.pdf
    youtubeLink: "",
    notes: "",
    title: "Matricular aluno (parte 2)",
    subtitle: "Continuação do processo de matrícula do aluno",
    category: "alunos",
    keywords: "dsk 9 aluno matricular parte 2 alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Q0LahffEfWJv5gBB0TbPNSvdqngjexqw/view", // DSK_10 - ALUNO - ALTERAR.pdf
    youtubeLink: "",
    notes: "",
    title: "Alterar dados do aluno",
    subtitle: "Como editar as informações cadastrais de um aluno",
    category: "alunos",
    keywords: "dsk 10 aluno alterar dados do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1kfmCc34JVU84-kOmTa4R-p5milWEEEQC/view", // DSK_11 - ALUNO - FOTOS.pdf
    youtubeLink: "",
    notes: "",
    title: "Fotos do aluno",
    subtitle: "Como cadastrar ou atualizar a foto do aluno",
    category: "alunos",
    keywords: "dsk 11 aluno fotos do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1MzeCePKbm8wdgf5vreVtoMqLoJLJPPYk/view", // DSK_12 - ALUNO - SITUAÇÃO.pdf
    youtubeLink: "",
    notes: "",
    title: "Situação do aluno",
    subtitle: "Consulta e alteração da situação do aluno no sistema",
    category: "alunos",
    keywords: "dsk 12 aluno situacao do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1GQ7jGEIMa95v_CZX-0y6aUZzHE8cOqV-/view", // DSK_13 - ALUNO - OCORRENCIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Ocorrência do aluno (parte 1)",
    subtitle: "Como registrar uma ocorrência do aluno",
    category: "alunos",
    keywords: "dsk 13 aluno ocorrencia do parte 1 alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/12QBG-F22Iu9QcovnfAeTYoLg_C0aY3Zs/view", // DSK_14 - ALUNO - OCORRENCIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Ocorrência do aluno (parte 2)",
    subtitle: "Continuação do registro de ocorrências do aluno",
    category: "alunos",
    keywords: "dsk 14 aluno ocorrencia do parte 2 alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/16Ie8R5neoh5bfJ95QdCyEO1Y15cwG-wA/view", // DSK_15 - ALUNO - PROVISÓRIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Matrícula provisória",
    subtitle: "Como realizar uma matrícula provisória",
    category: "alunos",
    keywords: "dsk 15 aluno provisoria matricula alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1cF3G9NB5VhObQ3q59heuWorzSDl1t5QJ/view", // DSK_16 - ALUNO - BOLETIM.pdf
    youtubeLink: "",
    notes: "",
    title: "Boletim do aluno",
    subtitle: "Consulta do boletim escolar do aluno",
    category: "alunos",
    keywords: "dsk 16 aluno boletim do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1jCSyn8g0siSTBVZOAwGalcIPjtBkQH-w/view", // DSK_17 - ALUNO - NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Notas do aluno",
    subtitle: "Consulta das notas lançadas para o aluno",
    category: "alunos",
    keywords: "dsk 17 aluno notas do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1vK9gYTmG01cT09x1H0ZxCtK0GC8xoAWL/view", // DSK_18 - ALUNO - MSG.pdf
    youtubeLink: "",
    notes: "",
    title: "Mensagens do aluno",
    subtitle: "Como enviar ou consultar mensagens do aluno",
    category: "alunos",
    keywords: "dsk 18 aluno msg mensagens do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1_AHdtS_uPzuEYzpxhoo8Mlczvuy-4Wxy/view", // DSK_19 - ALUNO - PAINEL.pdf
    youtubeLink: "",
    notes: "",
    title: "Painel do aluno",
    subtitle: "Visão geral do painel individual do aluno",
    category: "alunos",
    keywords: "dsk 19 aluno painel do alunos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1bt6lL4RLeOLEuzHPo5s9fGBilJcsP85v/view", // DSK_20 - TURMAS E SALA.pdf
    youtubeLink: "",
    notes: "",
    title: "Turmas e salas",
    subtitle: "Cadastro e organização de turmas e salas",
    category: "turmas",
    keywords: "dsk 20 turmas e sala salas",
  },
  {
    driveLink: "https://drive.google.com/file/d/1gAukpp87qmJfwjiW5wBG20n3TNRDMR9C/view", // DSK_21 - ESCOLA.pdf
    youtubeLink: "",
    notes: "",
    title: "Dados da escola",
    subtitle: "Cadastro e configuração dos dados gerais da escola",
    category: "escola",
    keywords: "dsk 21 escola dados da",
  },
  {
    driveLink: "https://drive.google.com/file/d/1HC9I20WGlhFZ_edbkChtrW0VfAHxsYAV/view", // DSK_22 - REMANEJAMENTO.pdf
    youtubeLink: "",
    notes: "",
    title: "Remanejamento de aluno",
    subtitle: "Como remanejar um aluno de turma",
    category: "escola",
    keywords: "dsk 22 remanejamento de aluno escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/17EmW_j8n2qxxXgkeex9K3aNE8xJ6myES/view", // DSK_23 - CORPO DOCENTE.pdf
    youtubeLink: "",
    notes: "",
    title: "Corpo docente (parte 1)",
    subtitle: "Cadastro e gestão do corpo docente",
    category: "escola",
    keywords: "dsk 23 corpo docente parte 1 escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1WTWZnHqA25WOvrCpMS3FF5kZ7j-JsBAW/view", // DSK_24 - CORPO DOCENTE.pdf
    youtubeLink: "",
    notes: "",
    title: "Corpo docente (parte 2)",
    subtitle: "Continuação da gestão do corpo docente",
    category: "escola",
    keywords: "dsk 24 corpo docente parte 2 escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/16FXZtGwejTP1GxSulGC-3iPjSNieS9IN/view", // DSK_25- CARTEIRINHA.pdf
    youtubeLink: "",
    notes: "",
    title: "Carteirinha do aluno",
    subtitle: "Emissão da carteirinha de identificação do aluno",
    category: "escola",
    keywords: "dsk 25 carteirinha do aluno escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1iFtaR821mNlkWxm2QZrGuAOC_eJwArs2/view", // DSK_26 - HORÁRIO.pdf
    youtubeLink: "",
    notes: "",
    title: "Horário de aulas",
    subtitle: "Cadastro e consulta do horário de aulas",
    category: "escola",
    keywords: "dsk 26 horario de aulas escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1HTYOoCFo9q8wj5WlIDRdneT4dB0m2-u0/view", // DSK_27 - FOTOGRAFAR-.pdf
    youtubeLink: "",
    notes: "",
    title: "Fotografar aluno",
    subtitle: "Como capturar a foto do aluno pelo sistema",
    category: "escola",
    keywords: "dsk 27 fotografar fotografar aluno escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1goectXAJF6FqB-KlkBYI9wUfg8-p2tuw/view", // DSK_28 - MAPA DE ACOMPANHAMENTO.pdf
    youtubeLink: "",
    notes: "",
    title: "Mapa de acompanhamento",
    subtitle: "Consulta ao mapa de acompanhamento do aluno",
    category: "escola",
    keywords: "dsk 28 mapa de acompanhamento escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1-AVa3YeBfy4ms02iX131CQOS_FnXgpth/view", // DSK_29 - FICHAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Fichas",
    subtitle: "Emissão de fichas cadastrais",
    category: "escola",
    keywords: "dsk 29 fichas escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1ibDMgZPxKu6CdXibJVRHdhu-jJdP-ErU/view", // DSK_30 - DISCIPLINAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Disciplinas",
    subtitle: "Cadastro das disciplinas oferecidas pela escola",
    category: "escola",
    keywords: "dsk 30 disciplinas escola",
  },
  {
    driveLink: "https://drive.google.com/file/d/1J-KMOGwjwXuJg3Lucs-BeELrIZ7o7Dg5/view", // DSK_33 - FREQUÊNCIA - REGISTRO DE CARTEIRINHAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Registro de frequência por carteirinha",
    subtitle: "Como registrar a frequência usando a carteirinha do aluno",
    category: "frequencia",
    keywords: "dsk 33 frequencia registro de carteirinhas por carteirinha",
  },
  {
    driveLink: "https://drive.google.com/file/d/1QCXojWJq2V1CrRRMMXb-0v_QmREkvV1u/view", // DSK_34 - FALTOSOS E ALERTA.pdf
    youtubeLink: "",
    notes: "",
    title: "Alunos faltosos e alertas",
    subtitle: "Consulta de alunos faltosos e emissão de alertas",
    category: "frequencia",
    keywords: "dsk 34 faltosos e alerta alunos alertas frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/16EURjFLbJOIOmvEiq4A_yIUpFIsN7A2f/view", // DSK_35 - FREQUÊNCIA NA ENTRADA.pdf
    youtubeLink: "",
    notes: "",
    title: "Frequência na entrada",
    subtitle: "Registro de frequência no momento da entrada do aluno",
    category: "frequencia",
    keywords: "dsk 35 frequencia na entrada",
  },
  {
    driveLink: "https://drive.google.com/file/d/1ZWDGPQD4r_ta3vglv7FcEu6ns1IEWTkq/view", // DSK_36 - 2ª VIA LISTAGEM DE FALTOSO.pdf
    youtubeLink: "",
    notes: "",
    title: "2ª via da listagem de faltosos",
    subtitle: "Emissão da segunda via da listagem de alunos faltosos",
    category: "frequencia",
    keywords: "dsk 36 2 via listagem de faltoso da faltosos frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1kvM7Hh1sLuTCduQCSaoq3kEw8-czt5KA/view", // DSK_37 - PONTO DOS SERVIDORES.pdf
    youtubeLink: "",
    notes: "",
    title: "Ponto dos servidores",
    subtitle: "Registro e consulta do ponto dos servidores",
    category: "frequencia",
    keywords: "dsk 37 ponto dos servidores frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1j0T38a6wu2kGE-9kDgSGXvj-XGYsAz-D/view", // DSK_38 - ATESTADO.pdf
    youtubeLink: "",
    notes: "",
    title: "Atestado",
    subtitle: "Como registrar um atestado",
    category: "frequencia",
    keywords: "dsk 38 atestado frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1VGik9AsgONw-CprOwXQyT5AKHP1aHb0N/view", // DSK_39 - SAIDA ANTECIPADA.pdf
    youtubeLink: "",
    notes: "",
    title: "Saída antecipada",
    subtitle: "Como registrar a saída antecipada de um aluno",
    category: "frequencia",
    keywords: "dsk 39 saida antecipada frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1kiS_Dx4REAOvq-BJLGv8OZSkD_cw9M4e/view", // DSK_40 - SAIDA SEM AUTORIZAÇÃO.pdf
    youtubeLink: "",
    notes: "",
    title: "Saída sem autorização",
    subtitle: "Como registrar uma saída sem autorização",
    category: "frequencia",
    keywords: "dsk 40 saida sem autorizacao frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1otQeNsOVWm-2QcPnXKe4hZLnG_J1eTCf/view", // DSK_41 - AJUSTE DE FREQUÊNCIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Ajuste de frequência",
    subtitle: "Como ajustar manualmente a frequência de um aluno",
    category: "frequencia",
    keywords: "dsk 41 ajuste de frequencia",
  },
  {
    driveLink: "https://drive.google.com/file/d/1pD8le4k--oha7J23_pQ7KzXz12mVlWeY/view", // DSK_42 - COMUNICADOS E AVISOS.pdf
    youtubeLink: "",
    notes: "",
    title: "Comunicados e avisos",
    subtitle: "Como criar e enviar comunicados e avisos",
    category: "comunicados",
    keywords: "dsk 42 comunicados e avisos",
  },
  {
    driveLink: "https://drive.google.com/file/d/1tvvCTzpBPZT3cn98uOIuNHMkri7UKLCE/view", // DSK_45 - FERRAMENTAS - LANÇAMENTO DE NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Lançamento de notas",
    subtitle: "Passo a passo para lançar as notas dos alunos",
    category: "avaliacao",
    keywords: "dsk 45 ferramentas lancamento de notas avaliacao",
  },
  {
    driveLink: "https://drive.google.com/file/d/1keJSC0iiFdFNWyBHigqF5D1_782U4lvd/view", // DSK_46 - FERRAMENTAS - COMPARATIVODE NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Comparativo de notas",
    subtitle: "Consulta comparativa das notas dos alunos",
    category: "avaliacao",
    keywords: "dsk 46 ferramentas comparativode notas comparativo de avaliacao",
  },
  {
    driveLink: "https://drive.google.com/file/d/1ZjO3MkJ9odXHwbYDTiP0U_XISPWtWX25/view", // DSK_47 - AVALIAÇÃO 360.pdf
    youtubeLink: "",
    notes: "",
    title: "Avaliação 360",
    subtitle: "Visão geral da avaliação 360",
    category: "avaliacao",
    keywords: "dsk 47 avaliacao 360",
  },
  {
    driveLink: "https://drive.google.com/file/d/1FigFAJNqb8kaUS_lfzJ3_q9FLvhw0GVS/view", // DSK_48 - AVALIAÇÃO 360 - ADC DISICIPLINA.pdf
    youtubeLink: "",
    notes: "",
    title: "Avaliação 360 — adicionar disciplina",
    subtitle: "Como adicionar uma disciplina na avaliação 360",
    category: "avaliacao",
    keywords: "dsk 48 avaliacao 360 adc disiciplina adicionar disciplina",
  },
  {
    driveLink: "https://drive.google.com/file/d/1wD1qL60XljfkjxM0RZPkQmkdtYe1B7-o/view", // DSK_49 - AVALIAÇÃO 360 - IMPRIMINDO.pdf
    youtubeLink: "",
    notes: "",
    title: "Avaliação 360 — impressão",
    subtitle: "Como imprimir os resultados da avaliação 360",
    category: "avaliacao",
    keywords: "dsk 49 avaliacao 360 imprimindo impressao",
  },
  {
    driveLink: "https://drive.google.com/file/d/1WTnuT7-sYCQmbGnGvNV_qGm-qEITqcDj/view", // DSK_50 - ALTERAR SITUAÇÃO.pdf
    youtubeLink: "",
    notes: "",
    title: "Alterar situação",
    subtitle: "Como alterar a situação de um aluno ou registro",
    category: "avaliacao",
    keywords: "dsk 50 alterar situacao avaliacao",
  },
  {
    driveLink: "https://drive.google.com/file/d/1-EStTNA2M_jXmQcrt8UiFtnBMc2OnIny/view", // DSK_51 - EMISSÃO DE CSCP.pdf
    youtubeLink: "",
    notes: "",
    title: "Emissão de CSCP",
    subtitle: "Como emitir o CSCP",
    category: "avaliacao",
    keywords: "dsk 51 emissao de cscp avaliacao",
  },
  {
    driveLink: "https://drive.google.com/file/d/1henXV42n6q8o31pENhS0aYBAHmgc9qPo/view", // DSK_55 - RELATÓRIOS - ALUNO.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de aluno",
    subtitle: "Emissão do relatório geral do aluno",
    category: "relatorios",
    keywords: "dsk 55 relatorios aluno relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1bwgD9gX9thjwTU78WyWlpspdn3v43lTx/view", // DSK_56 - RELATÓRIOS - FICHA DE TELEFONES.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — ficha de telefones",
    subtitle: "Emissão da ficha de telefones para contato",
    category: "relatorios",
    keywords: "dsk 56 relatorios ficha de telefones relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1g8SO45gCUDl2y2kBicbwicm31GWuFjt0/view", // DSK_57 - RELATÓRIOS -  PERFIL ELETRONICO.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — perfil eletrônico",
    subtitle: "Emissão do relatório de perfil eletrônico",
    category: "relatorios",
    keywords: "dsk 57 relatorios perfil eletronico relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1FDaJxMwvoRehXFNemwKnK_sgov0mm0TX/view", // DSK_58 - RELATÓRIOS - FICHA DE MATRICULA.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — ficha de matrícula",
    subtitle: "Emissão da ficha de matrícula do aluno",
    category: "relatorios",
    keywords: "dsk 58 relatorios ficha de matricula relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Zq5nD3P-eDFjdSazItap0Uf1_Y8okBkj/view", // DSK_59 - RELATÓRIOS - ANIVERSÁRIANTE.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de aniversariantes",
    subtitle: "Emissão da listagem de aniversariantes",
    category: "relatorios",
    keywords: "dsk 59 relatorios aniversariante relatorio de aniversariantes",
  },
  {
    driveLink: "https://drive.google.com/file/d/19QIUER72rW4seOKXSj3sIsBbw0YTtLXx/view", // DSK_60 - RELATÓRIOS - FREQUÊNCIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de frequência",
    subtitle: "Emissão do relatório de frequência dos alunos",
    category: "relatorios",
    keywords: "dsk 60 relatorios frequencia relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1R1SPQ7cI21YSzQw8M7SfYGOLT6kW4Usd/view", // DSK_61 - RELATÓRIOS - OCORRÊNCIAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de ocorrências",
    subtitle: "Emissão do relatório de ocorrências registradas",
    category: "relatorios",
    keywords: "dsk 61 relatorios ocorrencias relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1xKqJF9IPSNUdB1gM8euOopSGxBrk564R/view", // DSK_62 - RELATÓRIOS - SITUAÇÃO.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de situação",
    subtitle: "Emissão do relatório de situação dos alunos",
    category: "relatorios",
    keywords: "dsk 62 relatorios situacao relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Z5361jxdWde6kfCahpQWnZbACQDZqWZ_/view", // DSK_63 - RELATÓRIOS - CODIGO MAX.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — código MAX",
    subtitle: "Emissão do relatório de código MAX",
    category: "relatorios",
    keywords: "dsk 63 relatorios codigo max relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1ZfXY3C1fhF0HfdvKdesXCz2vNPITrhCm/view", // DSK_64 - RELATÓRIOS -  PAIS - LISTAGEM.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — listagem de pais",
    subtitle: "Emissão da listagem de pais e responsáveis",
    category: "relatorios",
    keywords: "dsk 64 relatorios pais listagem relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1hNYtZl_a4uPBrxPGX6qIg4r3OwlUb06w/view", // DSK_65 - RELATÓRIOS - CORPO DOCENTE.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório do corpo docente",
    subtitle: "Emissão do relatório do corpo docente",
    category: "relatorios",
    keywords: "dsk 65 relatorios corpo docente relatorio do",
  },
  {
    driveLink: "https://drive.google.com/file/d/1xMhzBJQxB4Am9I7vrWOFjNMj6p55Z3Yp/view", // DSK_66 - RELATÓRIOS - CHECKLIST - E NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — checklist e notas",
    subtitle: "Emissão do checklist de lançamento de notas",
    category: "relatorios",
    keywords: "dsk 66 relatorios checklist e notas relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1pfpg2bhROP4ofhgMre396bkhSkCiUH2a/view", // DSK_67 - RELATÓRIOS - OCORRENCIA.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de ocorrência",
    subtitle: "Emissão do relatório individual de ocorrência",
    category: "relatorios",
    keywords: "dsk 67 relatorios ocorrencia relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1pluJMVgpB2aZGRap5nl2O-oC__WutVpT/view", // DSK_68 - RELATÓRIOS - NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de notas",
    subtitle: "Emissão do relatório de notas dos alunos",
    category: "relatorios",
    keywords: "dsk 68 relatorios notas relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1oQhYeX79oGkoomlis5ytWcPDCkeC0M5s/view", // DSK_69 - RELATÓRIOS - BOLETIM.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de boletim",
    subtitle: "Emissão do relatório de boletim escolar",
    category: "relatorios",
    keywords: "dsk 69 relatorios boletim relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1an7V-H1sIHNQboXfM4h_abLOdB7deAYf/view", // DSK_70 - RELATÓRIOS - FICHAS - LANCAMENTO DE NOTAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — fichas de lançamento de notas",
    subtitle: "Emissão de fichas para lançamento manual de notas",
    category: "relatorios",
    keywords: "dsk 70 relatorios fichas lancamento de notas relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/13Vl6hLSf5cb8f0CJTg6koDDQyjIhtak-/view", // DSK_71 - RELATÓRIOS - FICHAS DE NOTAS AUTOMATICAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — fichas de notas automáticas",
    subtitle: "Emissão de fichas de notas geradas automaticamente",
    category: "relatorios",
    keywords: "dsk 71 relatorios fichas de notas automaticas relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1N31Wk32BF6BjZpSSHZpOt8dLg8iu8nV6/view", // DSK_72 - RELATÓRIOS - CONTROLE DE TAREFAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — controle de tarefas",
    subtitle: "Emissão do relatório de controle de tarefas",
    category: "relatorios",
    keywords: "dsk 72 relatorios controle de tarefas relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1G76PHtV14eZpe032ltR5L5nS2ZMh2omy/view", // DSK_73 - RELATÓRIOS - DIAGNOSTICO DE BULLYING.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — diagnóstico de bullying",
    subtitle: "Emissão do relatório de diagnóstico de bullying",
    category: "relatorios",
    keywords: "dsk 73 relatorios diagnostico de bullying relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1cYmnuPSCCuStnp71A2bzWK3pt3MFMrxN/view", // DSK_74 - RELATÓRIOS - SAUDE ALUNO.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de saúde do aluno",
    subtitle: "Emissão do relatório de saúde do aluno",
    category: "relatorios",
    keywords: "dsk 74 relatorios saude aluno relatorio de do",
  },
  {
    driveLink: "https://drive.google.com/file/d/1wtXVzCmJVTIlgdZfETTQoVbRqlaY4hlx/view", // DSK_75 - RELATÓRIOS - SAUDE PROFESSOR.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de saúde do professor",
    subtitle: "Emissão do relatório de saúde do professor",
    category: "relatorios",
    keywords: "dsk 75 relatorios saude professor relatorio de do",
  },
  {
    driveLink: "https://drive.google.com/file/d/1Naq8mYGxyAr0qoyu52yjQRlFsI2p6Dk_/view", // DSK_76 - RELATÓRIOS - AULA.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório de aula",
    subtitle: "Emissão do relatório de aula",
    category: "relatorios",
    keywords: "dsk 76 relatorios aula relatorio de",
  },
  {
    driveLink: "https://drive.google.com/file/d/1vPdn7anv4MNTtB7lSp62xROBg7T8F7WU/view", // DSK_77 - RELATÓRIOS - ETIQUETAS.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — etiquetas",
    subtitle: "Emissão de etiquetas de identificação",
    category: "relatorios",
    keywords: "dsk 77 relatorios etiquetas relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/180LfraIYx8TzPCdTKzW6Il4MNkqrT3f7/view", // DSK_78 - RELATÓRIOS - CAROMETRO.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — carômetro",
    subtitle: "Emissão do carômetro da turma",
    category: "relatorios",
    keywords: "dsk 78 relatorios carometro relatorio",
  },
  {
    driveLink: "https://drive.google.com/file/d/1oV3c_DsXurZNyVKdq3pOvTYHFY_OHFzu/view", // DSK_79 - RELATÓRIOS - E-CARTEIRA.pdf
    youtubeLink: "",
    notes: "",
    title: "Relatório — e-carteira",
    subtitle: "Emissão da e-carteira do aluno",
    category: "relatorios",
    keywords: "dsk 79 relatorios e carteira relatorio",
  },
];