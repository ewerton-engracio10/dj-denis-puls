const A = {
  hero: "/assets/hero.webp",
  about: "/assets/about.webp",
  "service-wedding": "/assets/service-wedding.webp",
  "service-graduation": "/assets/service-graduation.webp",
  "service-corporate": "/assets/service-corporate.webp",
  "service-15anos": "/assets/service-15anos.webp",
  "service-prewedding": "/assets/service-prewedding.webp",
  gallery: "/assets/gallery.webp",
  logo: "/assets/logo.webp",
};

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="dot"/></svg>
);
const WhatsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.3 8.3 0 0 1-12.3 7.2L4 20l1.1-4A8.3 8.3 0 1 1 20.5 11.7Z"/><path d="M9.2 8.2c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5l.8 1.8c.1.3.1.5-.1.7l-.7.9c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.6 0 .5-.2 1.4-.7 1.9-.5.5-1.3.8-2.2.8-1.5 0-3.5-.8-5.4-2.6-1.8-1.7-2.9-3.8-3-5.4 0-.7.2-1.4.6-1.9Z" className="fill"/></svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
);
const PlayIcon = () => <span className="playTriangle">▶</span>;

const services = [
  ["service-wedding", "♡", "CASAMENTOS", "Do cerimonial à pista, cada momento pensado para emocionar."],
  ["service-graduation", "◇", "FORMATURAS", "A trilha sonora que marca o fim de um ciclo e o início de novas histórias."],
  ["service-corporate", "▣", "CORPORATIVOS", "Eventos empresariais com profissionalismo, elegância e energia na medida certa."],
  ["service-15anos", "15", "15 ANOS & FESTAS", "Diversão, emoção e muita música para celebrar do seu jeito."],
  ["service-prewedding", "✧", "PRÉ-WEDDING", "Ambiente leve e vibrante para comemorar antes do grande dia."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <header className="topbar shell">
          <a className="brand" href="#inicio" aria-label="DJ Denis Puls"><img src={A.logo} alt="Denis Puls" /></a>
          <nav>
            <a className="active" href="#inicio">INÍCIO</a>
            <a href="#sobre">SOBRE</a>
            <a href="#servicos">SERVIÇOS</a>
            <a href="#eventos">EVENTOS</a>
            <a href="#feedbacks">FEEDBACKS</a>
            <a href="#galeria">GALERIA</a>
            <a href="#contato">CONTATO</a>
          </nav>
          <a className="btn primary small" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">FAZER ORÇAMENTO <span>›</span></a>
        </header>

        <div className="heroArt" style={{backgroundImage:`url(${A.hero})`}} />
        <div className="shell heroContent">
          <div className="eyebrow">DJ DENIS PULS</div>
          <h1>MÚSICA QUE<br/><span>TRANSFORMA</span><br/>MOMENTOS.</h1>
          <p>Casamentos, formaturas, festas e eventos corporativos<br className="desktopOnly"/> com a energia certa para criar histórias inesquecíveis.</p>
          <div className="heroActions">
            <a className="btn primary" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">FAZER ORÇAMENTO <span>›</span></a>
            <a className="btn ghost" href="#galeria"><PlayIcon/> ASSISTIR VÍDEO</a>
          </div>
        </div>
        <div className="neonLine"/>
      </section>

      <section className="about shell" id="sobre">
        <div className="aboutPhoto" style={{backgroundImage:`url(${A.about})`}} />
        <div className="aboutCopy">
          <div className="eyebrow">SOBRE</div>
          <h2>MAIS DE 17 ANOS<br/><span>CRIANDO EXPERIÊNCIAS</span><br/>ÚNICAS.</h2>
          <p>Com um repertório eclético e atualizado, meu objetivo é sentir o público e entregar a trilha sonora perfeita para cada momento. Do clássico ao eletrônico, do romance à pista cheia.</p>
          <div className="stats">
            <div><b>🏆</b><strong>2x PRÊMIO</strong><small>Melhor DJ de Casamento<br/>Zankyou Brasil</small></div>
            <div><b>🎧</b><strong>+17 ANOS</strong><small>De experiência em<br/>eventos</small></div>
            <div><b>●●●</b><strong>EVENTOS</strong><small>Casamentos, formaturas,<br/>corporativos e festas</small></div>
          </div>
        </div>
      </section>

      <section className="services shell" id="servicos">
        <div className="servicesIntro">
          <div className="eyebrow">ATUAÇÃO</div>
          <h2>O SOM CERTO PARA<br/><span>CADA CELEBRAÇÃO</span></h2>
        </div>
        <div className="serviceGrid" id="eventos">
          {services.map(([img,icon,title,text]) => (
            <article className="serviceCard" key={title}>
              <div className="serviceImage" style={{backgroundImage:`url(${A[img]})`}}><span>{icon}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits shell">
        <div><span className="benefitIcon">▥</span><strong>REPERTÓRIO<br/>PERSONALIZADO</strong><small>Música do seu estilo,<br/>do seu jeito.</small></div>
        <div><span className="benefitIcon">◖◗</span><strong>EQUIPAMENTOS<br/>PROFISSIONAIS</strong><small>Som e iluminação de alta<br/>qualidade.</small></div>
        <div><span className="benefitIcon">▣</span><strong>PLANEJAMENTO<br/>COMPLETO</strong><small>Do briefing à execução,<br/>tudo alinhado.</small></div>
        <div><span className="benefitIcon">ϟ</span><strong>ENERGIA QUE<br/>CONTAGIA</strong><small>Pista cheia do início<br/>ao fim da festa.</small></div>
      </section>

      <section className="feedback shell" id="feedbacks">
        <div className="feedbackTitle">
          <div className="eyebrow">FEEDBACKS</div>
          <h2>O QUE DIZEM SOBRE<br/><span>A PISTA DO DENIS</span></h2>
        </div>
        <div className="testimonials">
          <blockquote><b>“</b><p>Queria te agradecer pelo ótimo trabalho que tu prestou no nosso casamento. Foi mais que perfeito!</p><footer>Cliente de casamento</footer></blockquote>
          <blockquote><b>“</b><p>Denis Puls estava sensacional, muito obrigada!</p><footer>Feedback de evento</footer></blockquote>
          <blockquote><b>“</b><p>A energia incrível! A pista nunca ficou vazia.</p><footer>Feedback de convidado</footer></blockquote>
        </div>
      </section>

      <section className="gallery" id="galeria" style={{backgroundImage:`linear-gradient(90deg,rgba(5,5,5,.32),rgba(5,5,5,.05)),url(${A.gallery})`}}>
        <div className="shell galleryCopy"><h2>MOMENTOS REAIS,<br/><span>EMOÇÕES VERDADEIRAS.</span></h2><a className="btn ghost" href="https://www.instagram.com/djdenispuls/" target="_blank" rel="noreferrer">▦ &nbsp; VER GALERIA COMPLETA</a></div>
      </section>

      <section className="cta shell" id="contato">
        <h2>VAMOS FAZER SUA<br/><span>HISTÓRIA INESQUECÍVEL?</span></h2>
        <div className="ctaRight"><p>Entre em contato e receba uma proposta personalizada<br/>para o seu evento.</p><div className="ctaActions"><a className="btn primary" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">FAZER ORÇAMENTO <span>›</span></a><a className="iconBtn" href="https://www.instagram.com/djdenispuls/" target="_blank" rel="noreferrer"><InstagramIcon/></a><a className="iconBtn" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer"><WhatsIcon/></a><a className="iconBtn" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer"><MailIcon/></a></div></div>
      </section>

      <footer className="footer shell">
        <div className="footerBrand"><img src={A.logo} alt="Denis Puls"/><p>Mais de 17 anos transformando eventos<br/>em experiências únicas através da música.</p></div>
        <div><h4>NAVEGAÇÃO</h4><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#eventos">Eventos</a><a href="#feedbacks">Feedbacks</a><a href="#galeria">Galeria</a><a href="#contato">Contato</a></div>
        <div><h4>SERVIÇOS</h4><span>Casamentos</span><span>Formaturas</span><span>Corporativos</span><span>15 Anos & Festas</span><span>Pré-Wedding</span></div>
        <div><h4>CONTATO</h4><a href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">Link de contato oficial</a><span>Porto Alegre/RS e região</span></div>
        <div><h4>SIGA-ME</h4><div className="socials"><a className="round" href="https://www.instagram.com/djdenispuls/" target="_blank" rel="noreferrer"><InstagramIcon/></a><a className="round" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">f</a><a className="round" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">𝕏</a></div></div>
      </footer>
      <div className="copyright">© 2026 Denis Puls DJ. Todos os direitos reservados.</div>
    </main>
  );
}
