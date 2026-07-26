import HeroVideo from "@/components/home/herovideo";
import FloatingLinks from "@/components/home/floatingLinks";
import HomeWidgets from "@/components/home/HomeWidgets";
import AutoImageCarousel from "@/components/home/AutoImageCarousel";
import AboutKEC from "@/components/home/about-kec";

export default function Home() {
  return (
    <div>
      <HeroVideo videoSrc="/videos/hero.mp4" startTime={7} />
      <FloatingLinks />
      <HomeWidgets />
      <AutoImageCarousel />
      <AboutKEC />
    </div>
  );
}