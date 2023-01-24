import "../styles/components/hero.css";
import HeroMbeImg from "../assets/hero/Veganfresh-mobile-hero.jpg";
import HeroPCImg from "../assets/hero/Veganfresh-pc-hero.jpg";

export default function Hero() {
  return (
    <div className="hero-page">
      <div className="hero-bg">
        {/* Nice detail, tomorrow i will teach a new HTML tag called picture to solve this issue and make it shorter */}
        <img
          src={HeroPCImg}
          alt="vegetables in a bowl"
          className="big-screen"
        />
        <img
          src={HeroMbeImg}
          alt="vegetables in a bowl"
          className="small-screen"
        />
      </div>
      <div className="hero-content">
        {/* this is the h1 tag -1 */}
        <h2> Hungry?</h2>
        <p> Eat Fresh food, not Dead food!</p>
      </div>
    </div>
  );
}
