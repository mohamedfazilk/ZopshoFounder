
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import PassionsSection from "@/components/PassionsSection";
import PhotosSection from "@/components/PhotosSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServiceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <PassionsSection />
      <PhotosSection />
      <ServicesSection/>
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;
