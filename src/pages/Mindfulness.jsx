import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MeditationList from '../components/MeditationList';
import mindfulnessImg from '../assets/mindfulness.jpg';
import orchidejImg from '../assets/orchidej.jpg';
import misaImg from '../assets/misa.jpg';
import contentImg from '../assets/contentMindfulness.jpg';
import meditationImg from '../assets/meditation.jpg';

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
                a podporuje psychickou pohodu a celkové zdraví.{' '}
              </strong>{' '}
              <span className="more-text">Více...</span>
              <span className="hidden-text">
                Mindfulness mění strukturu mozku – zvyšuje hustotu šedé hmoty v
                oblastech odpovědných za paměť a emoce a snižuje aktivitu
                amygdaly, čímž pomáhá regulovat úzkost.{' '}
                <strong>
                  Mindfulness snižuje hladinu kortizolu, zlepšuje imunitu a
                  podporuje psychickou pohodu a celkové zdraví.
                </strong>{' '}
                Stačí pár minut denně, žádné speciální vybavení – jen dech,
                pozornost a ochota zpomalit.
              </span>
            </p>
            <h3 className="h3grey"> Co je mindfulness?</h3>
            <p className="info-text toggle-text">
              Mindfulness (neboli vědomá pozornost) je stav, kdy se soustředíme
              na přítomný okamžik s otevřeností, bez hodnocení a v přítomnosti.{' '}
              <span className="more-text">Více...</span>
              <span className="hidden-text">
                Jde o schopnost plně si uvědomovat, co se děje v našem těle,
                mysli a okolí právě teď.{' '}
                <strong>Mindfulness je pro každého</strong>, nezávisle na tom, z
                jaké kultury pochází nebo jaký systém víry či náboženství
                vyznává. Projevuje se jak v meditaci, tak v běžných každodenních
                činnostech. V praxi jde o to, že se učíme být více tady a teď,
                místo abychom byli zahlceni myšlenkami o minulosti nebo
                budoucnosti. Díky tomu dovedeme lépe zvládat každodenní výzvy s
                větší lehkostí, klidem i efektivitou.
              </span>
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
                src={contentImg}
                className="obsah-logo"
                loading="lazy"
                alt="štítek Mindfulness"
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
                  &nbsp; Loving-kindness meditace
                </li>
                <li>
                  <strong>Pokud máte potíže se soustředěním: </strong>{' '}
                  &nbsp;Mantra meditace
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

      <section className="parallax-mindfulness">
        <div className="container parallax-cont">
          <h2>
            Vyzkoušejte mindfulness a najděte harmonii ve svém každodenním
            životě.
          </h2>
          <Link to="/TBA" className="button">
            Zjistit více o programu Pure Space
          </Link>
        </div>
      </section>

      <section className="jakZacit" id="jakZacit">
        <div className="container">
          <div>
            <h2>Jak začít s mindfulness</h2>
            <p className="info-text">
              Jedním z nejjednodušších způsobů, jak začít s mindfulness, je
              začít pravidelně meditovat. Začněte s krátkými meditacemi, třeba
              5–10 minut denně. Můžete se zaměřit na svůj dech, tělo nebo
              myšlenky. Pokud máte problémy s udržením pozornosti, zkuste
              aplikace pro meditaci (např. Headspace, Calm nebo Insight Timer).
              Nejdůležitější je začít a být vděční za každý moment, kdy se
              zaměříte na přítomnost. Nezáleží na tom, zda máte pocit, že to
              děláte správně, nebo jak dlouho vydržíte – jde o to, že to děláte
              a každá minuta se počítá.
            </p>
          </div>
          <div className="cardM m1">
            <div className="card-textwrapM">
              <h3 className="heading card-heading">1. Dýchání</h3>
              <p className="card-text">
                Vědomé dýchání je základním kamenem mindfulness. Snažte se během
                dne zaměřit na své dýchání, vnímejte, jak vzduch vstupuje a
                opouští vaše tělo. Zkuste se na chvíli zastavit a dýchat pomalu
                a hluboce, když se cítíte ve stresu nebo zaneprázdněni.
              </p>
            </div>
          </div>

          <div className="cardM m2">
            <div className="card-textwrapM">
              <h3 className="heading card-heading">
                2. Mindfulness v každodenním životě
              </h3>
              <p className="card-text">
                Mindfulness může být součástí jakékoli činnosti, kterou děláte.
                Můžete začít být více přítomní při jídle (všímejte si chutí,
                textury a vůní), při chůzi (vnímejte pohyb svého těla a
                prostředí kolem vás), nebo při sprchování (vnímejte teplotu
                vody, doteky na kůži).
              </p>
            </div>
          </div>

          <div className="cardM m3">
            <div className="card-textwrapM">
              <h3 className="heading card-heading">
                3. Buďte trpěliví a k sobě laskaví
              </h3>
              <p className="card-text">
                Mindfulness je dovednost, kterou si vybudujete časem. Nezáleží
                na tom, jak dobří jste hned na začátku. Pokud vaše mysl
                zabloudí, je to normální – stačí si to uv2domit, nehodnotit, jen
                ji jemně vrátit k přítomnému okamžiku. Buďte trpěliví a laskaví
                sami na sebe.
              </p>
            </div>
          </div>

          <div className="cardM m4">
            <div className="card-textwrapM">
              <h3 className="heading card-heading">
                4. Vyzkoušejte různé techniky
              </h3>
              <p className="card-text">
                Vyberte si techniky, které vám nejvíce vyhovují. Někomu může
                více vyhovovat meditace, jiný zase dává přednost pohybovým
                formám jako jóga nebo tai chi. Každá technika má své výhody, a
                můžete experimentovat, která vám nejlépe sedí.
              </p>
            </div>
          </div>

          <div className="cardM m5">
            <div className="card-textwrapM">
              <h3 className="heading card-heading h5">
                5. Vytvořte si pravidelný čas pro mindfulness
              </h3>
              <p className="card-text">
                Zkuste si každý den vyhradit několik minut, kdy se soustředíte
                pouze na přítomnost – ať už je to během meditace nebo při nějaké
                každodenní činnosti. I když se vám nebude chtít, zkuste to
                alespoň na chvíli. Čím častěji budete praxi opakovat, tím
                přirozenější se stane.
              </p>
            </div>
          </div>

          <div className="steps-grid">
            <div className="grid-leftBox">
              <div className="steps">
                <h3>Shrnutí kroků</h3>
                <p>
                  1. Začněte meditací (5-10 minut denně, postupně můžete
                  přidávat).
                </p>
                <p>2. Cvičte vědomé dýchání. </p>
                <p>
                  3. Pracujte na mindfulness během běžných činností (jídlo,
                  chůze, sprcha).{' '}
                </p>
                <p>4. Buďte trpěliví a laskaví k sobě. </p>
                <p>
                  5. Vyzkoušejte různé praktiky a najděte tu, která vám nejvíce
                  vyhovuje.{' '}
                </p>
                <p>6. Vytvořte si pravidelný čas pro mindfulness.</p>
                <p>
                  Tímto způsobem se mindfulness stane přirozenou součástí vašeho
                  života a pomůže vám zlepšit soustředění, psychickou pohodu a
                  schopnost lépe reagovat na stres.
                </p>
              </div>
            </div>
            <div className="grid-rightBox">
              <img src={meditationImg} alt="Meditace" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mindfulness;
