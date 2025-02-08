import logoBlueImg from "../assets/logoBlue.svg";
import instagramImg from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="logo-block">
          <a href="/" className="link-block">
            <img src={logoBlueImg} loading="lazy" alt="Pure Space Logo" />
          </a>
          <div className="text-block">Pure Space</div>
        </div>
        <div id="kontakt" className="kontakt-block">
          <p>Kontakt</p>
          <a href="#" className="instagram">
            <img src={instagramImg} loading="lazy" alt="Instagram logo" />
          </a>
        </div>
      </div>
      <div className="copyright">© 2024 Pure Space. Všechna práva vyhrazena.</div>
    </footer>
  );
};

export default Footer;
