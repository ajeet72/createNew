import BenefitsSection from "@/components/benefitsSection";
import CallToAction from "@/components/callToAction";
import ContactForm from "@/components/contactSection";
import CursorGradient from "@/components/cursorGradient";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import ProcessSection from "@/components/processSection";
import ProjectsSection from "@/components/projectsSection";
import ServiceSection from "@/components/serviceSection";
import SkillsComponent from "@/components/skillsSection";
import TestimonialsSection from "@/components/testimonialSection";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <TopBar />
        <HeroSection id="home"/>
        <ServiceSection id="services"/>
        <BenefitsSection id="benefits"/>
        <ProcessSection id="approach"/>
        <SkillsComponent id="skills"/>
        <ProjectsSection id="projects"/>
        <TestimonialsSection id="testimonials"/>
        <ContactForm id="contact"/>
        <CallToAction id="cta"/>
        <Footer />
      </div>
    </main>
  );
}