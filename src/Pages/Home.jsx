import Hero from "../components/Hero";
import HomeMenu from "../components/HomeMenu";

// you can put everything and still fit in the 50 lines limit -1
export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <HomeMenu />
    </div>
  );
}
