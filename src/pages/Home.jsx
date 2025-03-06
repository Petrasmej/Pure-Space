import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import AudioPlayer from '../components/AudioPlayer';
import benefitsImg from '../assets/benefits-min.png';
import iphoneImg from '../assets/iphone.jpg';
import meditationImg from '../assets/meditation.jpg';
import teaLevanderImg from '../assets/teaLevander.jpg';
import mobileMockupImg from '../assets/mobileMockup-min.png';

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
          <Link to="/purespace" className="button button-hero">
            Zjistit více o programu Pure Space
          </Link>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <p className="info-text">
            V dnešní nejisté době, kdy nás každodenně bombardují negativní
            zprávy a neustálý tok informací, se mnozí z nás cítí zahlcení, plní
            stresu a úzkosti. Neustálé připojení k digitálnímu světu nás odvádí
            od skutečného života, naše mysli jsou přeplněné a těžko nacházíme
            klid.{' '}
            <strong>
              Pojďte si od této intenzivní digitální zátěže odpočinout, najít
              znovu radost a rovnováhu.
            </strong>{' '}
            Digitální detox a malé, ale mocné denní rituály mohou být klíčem k
            tomu, abychom se vrátili k sobě, k přítomnému okamžiku a opětovně
            objevili štěstí v jednoduchosti.
            <br />
            <strong className="strong-block">
              {' '}
              Stačí udělat první krok – a cesta ke klidnějšímu a vyrovnanějšímu
              životu může začít právě teď. Objevte náš program Pure Space.
            </strong>
          </p>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <h2 className="cards-heading">
            Najděte cestu k vnitřní rovnováze – tipy pro lepší duševní zdraví.
          </h2>
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
          <div className="points-container">
            <h3 className="benefits-h3">
              Jak PureSpace šetří čas, peníze a nervy?
            </h3>
            <ul className="points">
              <li className="point">
                Šetří čas – Učí efektivní metody, jak si rychle zklidnit mysl.
              </li>
              <li className="point">
                Šetří peníze – Alternativa k drahým terapiím a koučům.
              </li>
              <li className="point">
                Šetří nervy – Pomáhá zvládat emočně náročné situace a vyhnout se
                vyhoření.
              </li>
              <li className="point">
                Vše v jednoduché a srozumitelné formě. Žádné dlouhé přednášky,
                jen praktické kroky, které opravdu fungují.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="parallax">
        <div className="container parallax-cont">
          <h2>
            Harmonie pro vaši mysl – inspirace, jak o sebe pečovat každý den.{' '}
          </h2>
          <Link to="/purespace" className="button">
            Začni s programem Pure Space ještě dnes!
          </Link>
        </div>
      </section>

      <section className="digitalni-detox">
        <div className="container-grid">
          <div className="grid">
            <div className="grid-leftBox">
              <h2>Vyzkoušejte ještě dnes! </h2>
              <div className="test-joga">
                <h3>Máš 15 minut? Odpočiň si s joga nidrou.</h3>
                <AudioPlayer />
              </div>
              <div className="test">
                <h3>Týdenní plán pro digitální detox</h3>
                <p className="DD-text">
                  Digitální detox nám pomáhá znovu získat kontrolu nad tím, co
                  nás ovlivňuje. Zpomalte na pouhý týden a najděte rovnováhu ve
                  svém životě. Pojďme si spolu vytvořit týdenní plán digitálního
                  detoxu, který je navržen tak, aby vám pomohl ulevit od stresu,
                  osvobodit se od závislosti na technologiích a znovu objevit
                  radost z přítomného okamžiku. Každý den vás čekají jednoduché
                  úkoly. Vaše mysl vám poděkuje!
                </p>
                <a href="/tydenni-plan.pdf" className="button" target="_blank">
                  Stáhnout plán zdarma
                </a>
              </div>
            </div>
            <div className="grid-rightBox">
              <img
                className="phone"
                src={mobileMockupImg}
                loading="lazy"
                alt="Mobilní aplikace"
              />
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  );
};

export default Home;
