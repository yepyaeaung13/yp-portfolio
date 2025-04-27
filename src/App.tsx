import NavbarAndHero from "./components/NavbarAndHero";
import AboutMeAndSkill from "./components/AboutMeAndSkill";
import Works from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="font-IBM-Plex-Mono">
      <NavbarAndHero />
      <AboutMeAndSkill />
      <Works />
      <Footer />
    </main>
  );
}

export default App;
