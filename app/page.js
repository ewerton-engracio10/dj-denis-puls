import GalleryPhotos, { gallerySprite } from "./GalleryPhotos";

const A = {
  hero: "/assets/hero.webp",
  about: "/assets/about.webp",
  "service-wedding": "/assets/service-wedding.webp",
  "service-graduation": "/assets/service-graduation.webp",
  "service-corporate": "/assets/hero.webp",
  "service-15anos": "/assets/service-15anos.webp",
  "service-prewedding": "/assets/service-wedding.webp",
  gallery: "/assets/gallery.webp",
  logo: "/assets/logo.webp",
};

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="dot"/></svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7L11 6.3"/><path d="M14 11a4 4 0 0 0-5.7 0L6 13.3A4 4 0 0 0 11.7 19l1.3-1.3"/></svg>
);
const ReelsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m8 3 4 5M14 3l4 5M3 8h18"/><path d="m10 12 5 3-5 3v-6Z"/></svg>
);
const GalleryIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m5 17 4.5-4.5 3 3 2-2 4.5 3.5"/></svg>
);
const PlayIcon = () => <span className="playTriangle">▶</span>;

const cropFromGallery = (index) => ({
  x: `${(index % 5) * 25}%`,
  y: `${Math.floor(index / 5) * 100}%`,
});

const services = [
  ["service-wedding", "♡", "CASAMENTOS", "Do cerimonial à pista, cada momento pensado para emocionar.", "center 42%", 6],
  ["service-graduation", "◇", "FORMATURAS", "A trilha sonora que marca o fim de um ciclo e o início de novas histórias.", "center 48%", 1],
  ["service-corporate", "▣", "CORPORATIVOS", "Eventos empresariais com profissionalismo, elegância e energia na medida certa.", "center 40%", 9],
  ["service-15anos", "15", "15 ANOS & FESTAS", "Diversão, emoção e muita música para celebrar do seu jeito.", "center 45%", 5],
  ["service-prewedding", "✧", "PRÉ-WEDDING", "Ambiente leve e vibrante para comemorar antes do grande dia.", "center 58%", 3],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <header className="topbar shell">
          <a className="brand" href="#inicio" aria-label="DJ Denis Puls"><img src={A.logo} alt="Denis Puls" /></a>
          <nav aria-label="Navegação principal">
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

        <div className="heroArt" style={{backgroundImage:`url(${A.hero})`}} role="img" aria-label="DJ Denis Puls em apresentação" />
        <div className="shell heroContent">
          <div className="eyebrow">DJ DENIS PULS</div>
          <h1>MÚSICA QUE<br/><span>TRANSFORMA</span><br/>MOMENTOS.</h1>
          <p>Casamentos, formaturas, festas e eventos corporativos<br className="desktopOnly"/> com a energia certa para criar histórias inesquecíveis.</p>
          <div className="heroActions">
            <a className="btn primary" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">FAZER ORÇAMENTO <span>›</span></a>
            <a className="btn ghost" href="https://www.instagram.com/djdenispuls/reels/" target="_blank" rel="noreferrer"><PlayIcon/> ASSISTIR VÍDEO</a>
          </div>
        </div>
        <div className="neonLine"/>
      </section>

      <section className="about shell" id="sobre">
        <div className="aboutPhoto" style={{backgroundImage:`url(${A.about})`}} role="img" aria-label="DJ Denis Puls tocando em evento" />
        <div className="aboutCopy">
          <div className="eyebrow">SOBRE</div>
          <h2>MAIS DE 17 ANOS<br/><span>CRIANDO EXPERIÊNCIAS</span><br/>ÚNICAS.</h2>
          <p>Com um repertório eclético e atualizado, meu objetivo é sentir o público e entregar a trilha sonora perfeita para cada momento. Do clássico ao eletrônico, do romance à pista cheia.</p>
          <div className="stats">
            <div><b className="statIcon statTrophy" aria-hidden="true"/><strong>2x PRÊMIO</strong><small>Melhor DJ de Casamento<br/>Zankyou Brasil</small></div>
            <div><b className="statIcon statHeadphones" aria-hidden="true"/><strong>+17 ANOS</strong><small>De experiência em<br/>eventos</small></div>
            <div><b className="statIcon statEvents" aria-hidden="true"/><strong>EVENTOS</strong><small>Casamentos, formaturas,<br/>corporativos e festas</small></div>
          </div>
        </div>
      </section>

      <section className="services shell" id="servicos">
        <div className="servicesIntro">
          <div className="eyebrow">ATUAÇÃO</div>
          <h2>O SOM CERTO PARA<br/><span>CADA CELEBRAÇÃO</span></h2>
        </div>
        <div className="serviceGrid" id="eventos" style={{"--desktop-service-sprite":`url("${gallerySprite}")`}}>
          {services.map(([img,icon,title,text,position,desktopPhoto]) => {
            const crop = cropFromGallery(desktopPhoto);
            return (
              <article className="serviceCard" key={title}>
                <div
                  className="serviceImage"
                  style={{
                    backgroundImage:`url(${A[img]})`,
                    backgroundPosition:position,
                    "--desktop-service-x":crop.x,
                    "--desktop-service-y":crop.y,
                  }}
                  role="img"
                  aria-label={`${title} com DJ Denis Puls`}
                ><span aria-hidden="true">{icon}</span></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="benefits shell" aria-label="Diferenciais">
        <div><span className="benefitIcon benefitMusic" aria-hidden="true"/><strong>REPERTÓRIO<br/>PERSONALIZADO</strong><small>Música do seu estilo,<br/>do seu jeito.</small></div>
        <div><span className="benefitIcon benefitAudio" aria-hidden="true"/><strong>EQUIPAMENTOS<br/>PROFISSIONAIS</strong><small>Som e iluminação de alta<br/>qualidade.</small></div>
        <div><span className="benefitIcon benefitPlan" aria-hidden="true"/><strong>PLANEJAMENTO<br/>COMPLETO</strong><small>Do briefing à execução,<br/>tudo alinhado.</small></div>
        <div><span className="benefitIcon benefitEnergy" aria-hidden="true"/><strong>ENERGIA QUE<br/>CONTAGIA</strong><small>Pista cheia do início<br/>ao fim da festa.</small></div>
      </section>

      <section className="feedback shell" id="feedbacks">
        <div className="feedbackTitle">
          <div className="eyebrow">FEEDBACKS</div>
          <h2>O QUE DIZEM SOBRE<br/><span>A PISTA DO DENIS</span></h2>
        </div>
        <div className="testimonials">
          <blockquote><b>“</b><p>Queria te agradecer pelo ótimo trabalho que tu prestou no nosso casamento. Foi mais que perfeito!</p><footer>Casamento</footer></blockquote>
          <blockquote><b>“</b><p>Denis Puls estava sensacional, muito obrigada!</p><footer>Ana Maria</footer></blockquote>
          <blockquote><b>“</b><p>A energia incrível! A pista nunca ficou vazia.</p><footer>Feedback de convidado</footer></blockquote>
        </div>
      </section>

      <section className="gallery" id="galeria" style={{backgroundImage:`linear-gradient(90deg,rgba(5,5,5,.32),rgba(5,5,5,.05)),url(${A.gallery})`}} role="img" aria-label="Pista de evento com DJ Denis Puls">
        <div className="shell galleryCopy">
          <h2>MOMENTOS REAIS,<br/><span>EMOÇÕES VERDADEIRAS.</span></h2>
          <a className="btn ghost galleryOpenBtn" href="#galeria-fotos"><GalleryIcon/> ABRIR GALERIA</a>
        </div>
      </section>

      <section className="photoGallery shell" id="galeria-fotos" aria-label="Galeria de fotos do DJ Denis Puls">
        <div className="photoGalleryHead">
          <div>
            <div className="eyebrow">GALERIA</div>
            <h2>REGISTROS DE<br/><span>MOMENTOS REAIS.</span></h2>
          </div>
          <p>Uma seleção de momentos, festas e experiências vividas na pista.</p>
        </div>
        <GalleryPhotos />
      </section>

      <section className="cta shell" id="contato">
        <h2>VAMOS FAZER SUA<br/><span>HISTÓRIA INESQUECÍVEL?</span></h2>
        <div className="ctaRight"><p>Entre em contato e receba uma proposta personalizada<br/>para o seu evento.</p><div className="ctaActions"><a className="btn primary" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">FAZER ORÇAMENTO <span>›</span></a><a className="iconBtn" aria-label="Instagram do DJ Denis Puls" href="https://www.instagram.com/djdenispuls/" target="_blank" rel="noreferrer"><InstagramIcon/></a><a className="iconBtn" aria-label="Linktree do DJ Denis Puls" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer"><LinkIcon/></a><a className="iconBtn" aria-label="Reels do DJ Denis Puls" href="https://www.instagram.com/djdenispuls/reels/" target="_blank" rel="noreferrer"><ReelsIcon/></a></div></div>
      </section>

      <footer className="footer shell">
        <div className="footerBrand"><img src={A.logo} alt="Denis Puls"/><p>Mais de 17 anos transformando eventos<br/>em experiências únicas através da música.</p></div>
        <div><h4>NAVEGAÇÃO</h4><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#eventos">Eventos</a><a href="#feedbacks">Feedbacks</a><a href="#galeria">Galeria</a><a href="#contato">Contato</a></div>
        <div><h4>SERVIÇOS</h4><span>Casamentos</span><span>Formaturas</span><span>Corporativos</span><span>15 Anos & Festas</span><span>Pré-Wedding</span></div>
        <div><h4>CONTATO</h4><a href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer">Linktree oficial</a><span>Porto Alegre/RS e região</span></div>
        <div><h4>SIGA-ME</h4><div className="socials"><a className="round" aria-label="Instagram do DJ Denis Puls" href="https://www.instagram.com/djdenispuls/" target="_blank" rel="noreferrer"><InstagramIcon/></a><a className="round" aria-label="Linktree do DJ Denis Puls" href="https://linktr.ee/djdenispuls" target="_blank" rel="noreferrer"><LinkIcon/></a><a className="round" aria-label="Reels do DJ Denis Puls" href="https://www.instagram.com/djdenispuls/reels/" target="_blank" rel="noreferrer"><ReelsIcon/></a></div></div>
      </footer>
      <div className="copyright">© 2026 Denis Puls DJ. Todos os direitos reservados.</div>
    </main>
  );
}
