import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MeditationList from '../components/MeditationList';
import mindfulnessImg from '../assets/mindfulness.jpg';
import orchidejImg from '../assets/orchidej.jpg';
import misaImg from '../assets/misa.jpg';
import logoIcon from '../assets/logo.svg';

const Mindfulness = () => {
  return (
    <>
      <Navbar />

      <section className="mindfulness">
        <div className="container">
          <div className="box-white">
            <h1 className="hero-white">Mindfulness</h1>
            <p className="info-text">
              Mindfulness není jen trend, ale vědecky ověřený nástroj pro
              posílení psychické odolnosti. Desítky let výzkumů trvale dokazují,
              že{' '}
              <strong>
                pravidelná praxe mindfulness snižuje stres, zlepšuje koncentraci
                a mění strukturu mozku
              </strong>{' '}
              – zvyšuje hustotu šedé hmoty v oblastech odpovědných za paměť a
              emoce a snižuje aktivitu amygdaly, čímž pomáhá regulovat úzkost.{' '}
              <strong>
                Mindfulness snižuje hladinu kortizolu, zlepšuje imunitu a
                podporuje psychickou pohodu a celkové zdraví.
              </strong>{' '}
              Stačí pár minut denně, žádné speciální vybavení – jen dech,
              pozornost a ochota zpomalit.
            </p>
            <h3> Co je mindfulness?</h3>
            <p className="info-text">
              <strong>
                Mindfulness (neboli vědomá pozornost) je stav,kdy se soustředíme
                na přítomný okamžik s otevřeností, bez hodnocení a v
                přítomnosti.
              </strong>{' '}
              Jde o schopnost plně si uvědomovat, co se děje v našem těle, mysli
              a okolí právě teď. <strong>Mindfulness je pro každého</strong>,
              nezávisle na tom, z jaké kultury pochází nebo jaký systém víry či
              náboženství vyznává. Projevuje se jak v meditaci, tak v běžných
              každodenních činnostech. V praxi jde o to, že se učíme být více
              tady a teď, místo abychom byli zahlceni myšlenkami o minulosti
              nebo budoucnosti. Díky tomu dovedeme lépe zvládat každodenní výzvy
              s větší lehkostí, klidem i efektivitou.
            </p>
          </div>
        </div>
      </section>

      <section className="obsah">
        <div className="container-grid">
          <div className="obsah-grid">
            <div className="grid-leftBox obsah-box">
              <h2>Obsah</h2>
              <a href="#kategorie"> Kategorie Mindfulness</a>
              <a href="#jakZacit">Jak začít s Mindfulness</a>
            </div>
            <div className="grid-rightBox">
              <img
                src={logoIcon}
                className="obsah-logo"
                loading="lazy"
                alt="logo Pure space- kapka vody"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="kategorie" id="kategorie">
        <div className="container">
          <h2>Kategorie</h2>
          <p className="info-text">
            <strong>
              Vyberte si oblast, která vás zajímá, a objevte různé praktiky,
              které můžete začlenit do svého života.
            </strong>
            Mindfulness zahrnuje široké spektrum praktik, které pomáhají
            posilovat pozornost, regulovat emoce a snižovat stres. Můžete si
            vybrat, co vám nejlépe vyhovuje – od meditace přes pohyb až po běžné
            činnosti. Nejtěžší částí je často samotný začátek – sebrat odvahu a
            najít si čas na vyzkoušení těchto technik. Mnozí z nás mají tendenci
            zůstávat v komfortní zóně, kde stres a napětí jednoduše ignorujeme.
            Jakmile však zjistíte, jak moc vám mindfulness může pomoci, začnete
            je praktikovat pravidelně a s radostí. Více informací k jednotlivým
            meditacím můžete najít na našem Instagramu.
          </p>
          <div className="klasik">
            <div className="klasik-left">
              <h3>Klasická mindfulness meditace</h3>
              <p className="mindfulness-text">
                Zklidněte mysl pomocí dechových a koncentračních technik.
                Objevte různé přístupy ke zklidnění mysli a posílení pozornosti.
                Neexistuje „lepší“ nebo „horší“ meditace. Každá má specifické
                přínosy a hodí se pro jiný typ člověka. zde jsou některé
                příklady mindfulness a jejich využití:
              </p>
              <ul className="mindfulness-list">
                <li>
                  <strong>Pokud chcete vnitřní klid a vhled: </strong>&nbsp;
                  Vipassaná, Zazen
                </li>
                <li>
                  <strong>Pokud bojujete se stresem a napětím: </strong>&nbsp;
                  Body Scan, Jóga Nidra, Pránájáma
                </li>
                <li>
                  <strong>Pokud chcete posílit empatii a laskavost:</strong>{' '}
                  &nbsp; Metta meditace
                </li>
                <li>
                  <strong>Pokud máte potíže se soustředěním: </strong>{' '}
                  &nbsp;Trátak, Mantra meditace, Sata Nama
                </li>
                <li>
                  <strong>Pokud potřebujete uvolnit emoce pohybem: </strong>
                  &nbsp; Dynamická meditace
                </li>
              </ul>
              <div className="medidationtypes-box">
                <MeditationList />
              </div>
            </div>
            <div className="klasik-right">
              <img
                className="klasik-img"
                src={mindfulnessImg}
                alt="Meditující žena"
              />
              <img className="klasik-img" src={orchidejImg} alt="Orchidej" />
              <img className="klasik-img" src={misaImg} alt="tibetske misky" />
            </div>
          </div>
        </div>
      </section>

      <section className="jakZacit" id="jakZacit">
        <div className="container"></div>
      </section>

      <Footer />
    </>
  );
};

export default Mindfulness;
