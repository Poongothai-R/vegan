import Hero from "../components/Hero";
import HomeMenu from "../components/HomeMenu";


export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <HomeMenu />
        </div>
    );
}