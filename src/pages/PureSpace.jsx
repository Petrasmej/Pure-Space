import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PureSpace = () => {
  return (
    <>
      <Navbar />

      <section className="PS-hero">
        <div className="container PS-cont">
          <h1 className="h1purespace">PURESPACE</h1>
          <h2 className="h2purespace">Najdi klid v chaotickém světě</h2>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PureSpace;
