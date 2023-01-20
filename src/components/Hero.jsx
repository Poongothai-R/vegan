import '../styles/components/hero.css';
import HeroMbeImg from '../assets/hero/Veganfresh-mobile-hero.jpg';
import HeroPCImg from '../assets/hero/Veganfresh-pc-hero.jpg';


export default function Hero() {
    return (
        <div className="hero-page">
            <div className="hero-bg">
                <img src={HeroPCImg} alt="vegetables in a bowl" className='big-screen' />
                <img src={HeroMbeImg} alt="vegetables in a bowl" className='small-screen' />
            </div>
            <div className="hero-content">
                <h2> Hungry?</h2>
                <p> Eat Fresh food, not Dead food!</p>
            </div>
        </div>
    );
};