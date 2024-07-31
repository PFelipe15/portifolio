const GameBeeBrain = './image.png';
const clinicaPlataforma = './image2.png';
const coronaImg = "./Corona.png";
const automacaoImg = "./automacao.png";
const quizLogicaImg = "./quizLogica.png";
const loginPage = "./langingPage.png";
const webScraping = "./WebScraping.png";

const data = [
  {
    id: 1,
    titulo: "GameBeeBrain",
    img: clinicaPlataforma,
    Descricao:
      "Jogo de perguntas e respostas que identifica o perfil cerebral do jogador usando Vite.js, Next.js e animações.",
    link: "https://github.com/PFelipe15/GameBeeBrain",
  linkBuild: "https://beelivesolutions.com/welcomepage.html",
    tecnologias: ["Javascript", "Next.js", "Firebase Firestore", "Framer Motion", "NoSql"],
  },
  {
    id: 2,
    titulo: "Clinica Plataforma",
    img: GameBeeBrain,
    Descricao:
      "Plataforma para clinica urologica urovida, com blog pessoal e informações de tratamentos, usando React, Next.js e CMS Notion.",
    link: "https://github.com/PFelipe15/ClinicaPlataforma",
    linkBuild: 'https://www.clinicaurovida.com.br/',
    tecnologias: ["Javascript", "React", "Next.js", "CMS", "Blog","NotionAPI","API","GoogleApi"],
  },
 
  {
    id: 4,
    titulo: "AUTOMAÇÃO JS",
    img: automacaoImg,
    Descricao:
      "Sistema de web scraping com Node.js e Puppeteer para extrair títulos de pesquisa, com opções de screenshot e PDF.",
    link: "https://github.com/PFelipe15/Challenger02/",
    linkBuild: null,
    tecnologias: ["Javascript", "Node", "express", "Api", "Puppeter"],
  },
  {
    id: 5,
    titulo: "QUIZ",
    img: quizLogicaImg,
    Descricao:
      "Quiz de lógica de programação para medir conhecimentos, com perguntas, score e análise final, usando React.",
    link: "https://github.com/PFelipe15/quizlogica",
    linkBuild: "https://quizlogica.netlify.app/",
    tecnologias: ["Javascript", "React", "ApiContext"],
  },
  {
    id: 6,
    titulo: "Pagina de Login",
    img: loginPage,
    Descricao:
      "Landing page estática de login para treinar CSS e HTML, sem frameworks, para a companhia Dev&Cia.",
    link: "https://github.com/PFelipe15/LoginDevCia",
    linkBuild: "https://pfelipe15.github.io/LoginDevCia/",
    tecnologias: ["CSS", "HTML"],
  },
  {
    id: 7,
    titulo: "WebScraping Produtos",
    img: webScraping,
    Descricao:
      "Projeto de automação para raspagem de informações de produtos com Puppeteer e MongoDB, facilitando a filtragem por preço e pesquisa.",
    link: "https://github.com/PFelipe15/backend.git",
    linkBuild: null,
    tecnologias: ["Javascript", "Node", "express", "Api", "Puppeter", "mongoDb", "noSql"],
  },
];

export default data;
