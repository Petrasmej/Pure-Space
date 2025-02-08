import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import benefitsImg from '../assets/benefits-min.png';
import iphoneImg from '../assets/iphone.jpg';
import meditationImg from '../assets/meditation.jpg';
import teaLevanderImg from '../assets/teaLevander.jpg';
import mobileMockupImg from '../assets/mobileMockup-min.png';
import NotesImg from '../assets/notes.jpg';
import snihKvetImg from '../assets/snihKvet.jpg';
import treesLakeImg from '../assets/treesLake.jpg';
import teaCupsImg from '../assets/teaCups.jpg';
import skyImg from '../assets/sky.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <video autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Váš prohlížeč nepodporuje přehrávání videa.
        </video>
        <div className="hero-text">
          <h1>Najděte svůj vnitřní klid</h1>
          <Link to="/TBA" className="button button-hero">
            Zjistit více o programu Pure Space
          </Link>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <p className="info-text">
            V dnešní nejisté době, kdy nás každodenně bombardují negativní
            zprávy a neustálý tok informací, mnozí z nás se cítí zahlcení, plní
            stresu a úzkosti. Neustálé připojení k digitálnímu světu nás odvádí
            od skutečného života, naše mysli jsou přeplněné a těžko nacházíme
            klid. Co kdyby existoval způsob, jak si od této intenzivní digitální
            zátěže odpočinout? Jak najít znovu radost a rovnováhu? Digitální
            detox a malé, ale mocné denní rituály mohou být klíčem k tomu,
            abychom se vrátili k sobě, k přítomnému okamžiku a opětovně objevili
            štěstí v jednoduchosti.
            <br />
            <strong>
              {' '}
              Stačí udělat první krok – a cesta ke klidnějšímu a vyrovnanějšímu
              životu může začít právě teď.
            </strong>
          </p>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="card-box">
            <Link to="/TBA" className="link-card">
              <div className="card">
                <div className="card-imgwrap">
                  <img src={iphoneImg} alt="Telefon a digitální detox" />
                </div>
                <div className="card-textwrap">
                  <h3 className="heading card-heading">Digitální detox</h3>
                </div>
              </div>
            </Link>
            <Link to="/Mindfulness" className="link-card">
              <div className="card">
                <div className="card-imgwrap">
                  <img src={meditationImg} alt="Meditace" />
                </div>
                <div className="card-textwrap">
                  <h3 className="heading card-heading">Mindfulness</h3>
                </div>
              </div>
            </Link>
            <Link to="/TBA" className="link-card">
              <div className="card">
                <div className="card-imgwrap">
                  <img src={teaLevanderImg} alt="Čajový rituál" />
                </div>
                <div className="card-textwrap">
                  <h3 className="heading card-heading">Denní rituály</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Benefity programu Pure Space</h2>
          <img
            className="benefits-img"
            src={benefitsImg}
            alt="Výhody programu"
          />
        </div>
      </section>

      <section className="parallax"></section>

      <section className="digitalni-detox">
        <div className="container-grid">
          <div className="grid">
            <div className="grid-leftBox reverse1">
              <img
                src={mobileMockupImg}
                loading="lazy"
                alt="Mobilní aplikace"
              />
            </div>
            <div className="grid-rightBox reverse2">
              <h2>Digitální detox</h2>
              <p>
                Digitální detox nám pomáhá znovu získat kontrolu nad tím, co nás
                ovlivňuje. Jakmile ztišíme digitální šum, otevře se nám prostor
                pro hlubší propojení s námi samotnými.
              </p>
              <Link to="/TBA" className="button">
                Zjistit více
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="detox-plan">
        <div className="container-grid">
          <div className="grid">
            <div className="grid-leftBox">
              <h2>Týdenní plán</h2>
              <p>
                Vyzkoušejte týdenní plán digitálního detoxu a objevte klid
                uprostřed chaosu! Představte si, že byste mohli na pouhý týden
                zpomalit, vypnout neustálý digitální šum a znovu najít rovnováhu
                ve svém životě. Pojďme si spolu vytvořit týdenní plán
                digitálního detoxu, který je navržen tak, aby vám pomohl ulevit
                od stresu, osvobodit se od závislosti na technologiích a znovu
                objevit radost z přítomného okamžiku. Každý den vás čekají
                jednoduché úkoly a malé rituály, které vám ukážou, jak snadné je
                najít klid a energii, aniž byste museli utéct na odlehlý ostrov.
                Připojte se k této výzvě a poznejte, jaké to je skutečně být
                offline a plně přítomní – stačí začít. Vaše mysl i tělo vám
                poděkují!
              </p>
              <a href="/tydenni-plan.pdf" className="button" target="_blank">
                Stáhnout plán zdarma
              </a>
            </div>
            <div className="grid-rightBox">
              <img src={NotesImg} loading="lazy" alt="Týdenní plán" />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-wrapper">
          <img src={treesLakeImg} loading="lazy" alt="Scéna přírody" />
          <img src={snihKvetImg} loading="lazy" alt="Západ slunce" />
          <img src={teaCupsImg} loading="lazy" alt="Šálek čaje" />
          <img src={skyImg} loading="lazy" alt="Přírodní scenérie" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
