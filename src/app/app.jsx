import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import AchievementsSection from "./sections/AchievementsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";

export default function App({ pageProps }) {
  const changeTheme = useSelector((state) => state.theme);

  useEffect(() => {
    datadogRum.init({
      applicationId: '1cba1d95-5af6-484a-a033-a248bf61ebda',
      clientToken: 'pub73c4ecc1a36377623f5ccb183c39ead0',
      site: 'us5.datadoghq.com',
      service: 'portofolio',
      env: 'production',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
  });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col ${
        changeTheme.theme ? "bg-neutral-950" : "bg-stone-300"
      }`}
    >
      <Navbar {...pageProps} />
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
