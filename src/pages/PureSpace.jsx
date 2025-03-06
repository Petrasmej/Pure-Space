import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

const PureSpace = () => {
  return (
    <>
      <Navbar />

      <section className="PS-hero">
        <div className="container PS-cont">
          <h1 className="h1purespace">PURE SPACE</h1>
          <h2 className="h2purespace">Najdi klid v chaotickém světě</h2>
        </div>
      </section>

      <section className="PS-Intro">
        <div className="container">
          <h2 className="benefits-h3">
            Zbav se stresu, najdi vnitřní rovnováhu a radost v přítomnosti.
          </h2>
          <div className="points-container">
            <ul className="points">
              <li className="point">
                Máš pocit, že z nekonečných povinností a těžkých životních
                situací pociťuješ stres a úzkost?
              </li>
              <li className="point">
                Přehlcuje tě svět plný informací, sociálních sítí a negativních
                zpráv?
              </li>
              <li className="point">
                Chceš se cítit klidnější, soustředěnější a spokojenější?
              </li>
            </ul>
          </div>
          <h3 className="text-center">
            Pokud jsi odpověděl/a ANO, nebuď na to sám/sama, PureSpace je tu
            právě pro tebe.
          </h3>
          <h2 className="benefits-h3">Co je Pure Space?</h2>
          <p className="info-text">
            PureSpace je <strong>online program</strong>, který tě prakticky a
            efektivně naučí, jak se{' '}
            <strong>zklidnit, soustředit a zvládnout stres</strong>. Osvědčené
            strategie pro{' '}
            <strong>dlouhodobou psychickou i fyzickou odolnost</strong> zaměřené
            na vědecky podložené mindfulness a denní rituály na základě tisíce
            let prověřené ajurvedy jako kotvy v každodenním shonu. Digitální
            detox, aby nás technologie nevyčerpávaly.{' '}
            <strong>Jasné návody, které zvládne každý</strong>, žádné složité
            teorie.
          </p>
          <div className="center">
            <Link to="/TBA" className="button">
              Začni s programem Pure Space ještě dnes!
            </Link>
          </div>

          <h2 className="benefits-h3">Pro koho je program Pure Space?</h2>
          <div className="points-container">
            <ul className="points">
              <li className="point">Lidé s vysokým pracovním vytížením.</li>
              <li className="point">
                Přepracovaní rodiče, kteří hledají chvilku klidu.
              </li>
              <li className="point">
                Pro každého, kdo chce efektivně zvládat stres a úzkost.
              </li>
              <li className="point">
                Lidé, kteří si procházejí těžkou životní situací.
              </li>

              <li className="point">
                Pro každého, kdo chce žít spokojenější život.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="PS-parallax">
        <div className="container parallax-cont">
          <h2>
            Nečekej, až tě stres pohltí. Udělej první krok k vnitřnímu klidu
            ještě dnes!{' '}
          </h2>
          <Link to="/TBA" className="button">
            Vstup do programu Pure Space
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="law">
            PureSpace je podpůrný vzdělávací program zaměřený na duševní pohodu.
            Nenahrazuje lékařskou ani psychoterapeutickou péči. V případě
            závažných psychických či fyzických obtíží se prosím obraťte na svého
            lékaře.
          </p>{' '}
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  );
};

export default PureSpace;
