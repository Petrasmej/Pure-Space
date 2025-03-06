import snihKvetImg from '../assets/snihKvet.jpg';
import yogaImg from '../assets/yoga.jpg';
import teaCupsImg from '../assets/teaCups.jpg';
import skyImg from '../assets/sky.jpg';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="instaBox">
        <h2>Sledujte nás na Instagramu </h2>
        <a
          href="https://www.instagram.com/wellbeinginchaos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">@wellbeinginchaos</button>
        </a>
      </div>
      <div className="gallery-wrapper">
        <img src={teaCupsImg} loading="lazy" alt="Šálek čaje" />
        <img src={snihKvetImg} loading="lazy" alt="Západ slunce" />
        <img src={yogaImg} loading="lazy" alt="joginka" />
        <img src={skyImg} loading="lazy" alt="Přírodní scenérie" />
      </div>
    </section>
  );
};

export default Gallery;
