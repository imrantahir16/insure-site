import CallToAction from "./components/cta/CallToAction";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import MainSection from "./components/mainSection/MainSection";

function App() {
  return (
    <div className="text-center">
      <Header />
      <HeroSection />
      <MainSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
