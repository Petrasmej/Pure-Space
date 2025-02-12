import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import pureSpacemImg from '../assets/PureSpace.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Sledování změn velikosti okna
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Zavřít menu při zvětšení obrazovky
      }
    };
    handleResize(); // Spustit ihned při načtení

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <a href="/" className="logo">
            <img src={logoImg} alt="Logo" height="60" />
            <img src={pureSpacemImg} alt="Pure Space" height="25" />
          </a>
        </div>

        {!isMobile && (
          <nav className="nav-right">
            <Link to="/TBA">Digitální Detox</Link>
            <Link to="/Mindfulness">Mindfulness</Link>
            <a href="#kontakt"> Kontakt</a>
            <Link to="/TBA" className="button">
              E-BOOK
            </Link>
          </nav>
        )}

        {/* Mobilní navigace - hamburger */}
        {isMobile && (
          <div className="nav-right">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
        )}
      </div>

      {/* Dropdown menu pro mobilní verzi */}
      {isOpen && isMobile && (
        <nav className="mobile-menu">
          <Link to="/TBA" onClick={() => setIsOpen(false)}>
            Digitální Detox
          </Link>
          <Link to="/Mindfulness" onClick={() => setIsOpen(false)}>
            Mindfulness
          </Link>
          <a href="#kontakt" onClick={() => setIsOpen(false)}>
            Kontakt
          </a>
          <Link to="/TBA" className="button" onClick={() => setIsOpen(false)}>
            E-BOOK
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
