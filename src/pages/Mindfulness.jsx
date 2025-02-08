import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Mindfulness = () => {
  return (
    <>
      <Navbar />
      
      <section className="Mindfulness">
        <div className="container">
          <div className="box-white">
            <h1 className="hero-white" >Mindfulness</h1>
            <p className="info-text">
            Mindfulness není jen trend, ale vědecky ověřený nástroj pro posílení psychické odolnosti. Výzkumy ukazují, že pravidelná praxe mindfulness snižuje stres, zlepšuje koncentraci a mění strukturu mozku – zvyšuje hustotu šedé hmoty v oblastech odpovědných za paměť a emoce a snižuje aktivitu amygdaly, čímž pomáhá regulovat úzkost. Mindfulness snižuje hladinu kortizolu, zlepšuje imunitu a podporuje celkové zdraví. Stačí pár minut denně, žádné speciální vybavení – jen dech, pozornost a ochota zpomalit.<br/> 
              <strong> Co je mindfulness?</strong> <br/>
              Mindfulness (neboli vědomá pozornost) je stav, kdy se soustředíme na přítomný okamžik s otevřeností, bez hodnocení a přítomnosti. Jde o schopnost plně si uvědomovat, co se děje v našem těle, mysli a okolí právě teď. Mindfulness se může projevovat jak v meditaci, tak v běžných každodenních činnostech. Pomáhá nám zlepšit soustředění, snížit stres, lépe se vyrovnávat s emocemi a zlepšit psychickou pohodu.
              Praktiky mindfulness zahrnují různé techniky, jako je meditace, pohyb, vědomé dýchání nebo soustředění se na konkrétní činnosti (např. jídlo, sprchu, chůzi). V praxi jde o to, že se učíme být více "tady a teď", místo abychom byli zahlceni myšlenkami o minulosti nebo budoucnosti. 
            </p>
          </div>
        </div>
      </section>

      <section className="kategorie">
        <div className="container">
          <h2>Kategorie</h2>
          <p className="info-text">Mindfulness zahrnuje široké spektrum praktik, které pomáhají posilovat pozornost, regulovat emoce a snižovat stres. Můžete si vybrat, co vám nejlépe vyhovuje – od meditace přes pohyb až po běžné činnosti. Vyberte si oblast, která vás zajímá, a objevte různé praktiky, které můžete začlenit do svého života. 
          </p>
                  
        </div>
      </section>

        
      <Footer />
    </>
  );
};

export default Mindfulness;
