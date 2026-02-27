import Navbar from "@/components/navbar";
import HeroSection from "./component/hero-section";
import WhyJoinUs from "./component/why-join-us";
import Community from "./component/community";
import Sponsor from "./component/sponsor";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyJoinUs />
      <Community />
      <Sponsor />
    </div>
  );
}