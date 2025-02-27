import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PureSpace = () => {
  return (
    <>
      <Navbar />

      <section className="TBA">
        <div className="container TBA-cont">
          <h1 className="TBA-header">Stránka se připravuje.</h1>
          <Link to="/" className="button">
            Domů
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PureSpace;
