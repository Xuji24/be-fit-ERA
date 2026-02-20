import Navbar from "@/components/navbar";
import HeroSection from "./component/hero-section";
import WhyJoinUs from "./component/why-join-us";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyJoinUs />
    </div>
  );
}