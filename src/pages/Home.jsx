import '../styles/components/hero.css';
import HomeMenu from "../components/HomeMenu";
import HeroPCImg from "../assets/hero/Veganfresh-pc-hero.jpg";
import HeroMbeImg from "../assets/hero/Veganfresh-mobile-hero.jpg";


export default function Home() {
    return (
        <div className="home-page">
            <div className="hero-page">
                <div className="hero-bg">
                    <img src={HeroPCImg} alt="vegetables in a bowl" className='big-screen' />
                    <img src={HeroMbeImg} alt="vegetables in a bowl" className='small-screen' />
                </div>
                <div className="hero-content">
                    <h1> Hungry?</h1>
                    <p> Eat Fresh food, not Dead food!</p>
                </div>
            </div>
            <HomeMenu />
        </div>
    );
}