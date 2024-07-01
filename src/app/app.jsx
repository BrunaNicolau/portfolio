import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import AchievementsSection from "./sections/AchievementsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

export default function App() {
  const changeTheme = useSelector((state) => state.theme);
  return (
    <main
      className={`flex min-h-screen flex-col ${
        changeTheme.theme ? "bg-neutral-950" : "bg-stone-300"
      }`}
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
