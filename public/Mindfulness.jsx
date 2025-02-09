import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MeditationList from '../components/MeditationList';
import mindfulnessImg from '../assets/mindfulness.jpg';
import orchidejImg from '../assets/orchidej.jpg';
import misaImg from '../assets/misa.jpg';

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
              posílení psychické odolnosti. Výzkumy ukazují, že pravidelná praxe
              mindfulness snižuje stres, zlepšuje koncentraci a mění strukturu
              mozku – zvyšuje hustotu šedé hmoty v oblastech odpovědných za
              paměť a emoce a snižuje aktivitu amygdaly, čímž pomáhá regulovat
              úzkost. Mindfulness snižuje hladinu kortizolu, zlepšuje imunitu a
              podporuje celkové zdraví. Stačí pár minut denně, žádné speciální
              vybavení – jen dech, pozornost a ochota zpomalit.
              <br />
              <strong> Co je mindfulness?</strong>
              Mindfulness (neboli vědomá pozornost) je stav, kdy se soustředíme
              na přítomný okamžik s otevřeností, bez hodnocení a přítomnosti.
              Jde o schopnost plně si uvědomovat, co se děje v našem těle, mysli
              a okolí právě teď. Mindfulness se může projevovat jak v meditaci,
              tak v běžných každodenních činnostech. Pomáhá nám zlepšit
              soustředění, snížit stres, lépe se vyrovnávat s emocemi a zlepšit
              psychickou pohodu. Praktiky mindfulness zahrnují různé techniky,
              jako je meditace, pohyb, vědomé dýchání nebo soustředění se na
              konkrétní činnosti (např. jídlo, sprchu, chůzi). V praxi jde o to,
              že se učíme být více tady a teď, místo abychom byli zahlceni
              myšlenkami o minulosti nebo budoucnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="obsah">
        <div className="obsah-container">
          <h2>Obsah</h2>
          <a href="#kategorie"> Kategorie Mindfulness</a>
          <a href="#jakZacit">Jak začít s Mindfulness</a>
        </div>
      </section>

      <section className="kategorie" id="kategorie">
        <div className="container">
          <h2>Kategorie</h2>
          <p className="info-text">
            Mindfulness zahrnuje široké spektrum praktik, které pomáhají
            posilovat pozornost, regulovat emoce a snižovat stres. Můžete si
            vybrat, co vám nejlépe vyhovuje – od meditace přes pohyb až po běžné
            činnosti. Vyberte si oblast, která vás zajímá, a objevte různé
            praktiky, které můžete začlenit do svého života.
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
                  {' '}
                  <strong>Pokud chcete vnitřní klid a vhled: </strong>{' '}
                  Vipassaná, Zazen
                </li>
                <li>
                  {' '}
                  <strong>Pokud bojujete se stresem a napětím: </strong> Body
                  Scan, Jóga Nidra, Pránájáma
                </li>
                <li>
                  {' '}
                  <strong>
                    Pokud chcete posílit empatii a laskavost:
                  </strong>{' '}
                  Metta meditace
                </li>
                <li>
                  {' '}
                  <strong>Pokud máte potíže se soustředěním: </strong> Trátak,
                  Mantra meditace, Sata Nama
                </li>
                <li>
                  <strong>Pokud potřebujete uvolnit emoce pohybem: </strong>{' '}
                  Dynamická meditace
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
