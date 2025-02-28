import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Services from "./components/services";

export default function App() {
  return (
    <div className="min-h-screen font-lexend text-white">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
