import HeroText from "../components/Home/HeroText";
import HomeContent from "../components/Home/HomeContent";
import ResponsiveBG from "../components/Home/ResponsiveBG";

export default function Home() {
  return (
    <main className="bg-my-grey-light flex-1 relative">
      <ResponsiveBG />
      <HeroText />
      <HomeContent />
    </main>
  );
}
