import Image from "next/image";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import ClientCaseStudies from "./Components/ClientsCaseStudy";
import BusinessTrust from "./Components/BusinessTrust";
import InTheNumbers from "./Components/IntheNumbers";
import ContactUs from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";
import FaqSection from "./Components/FAQ";
import MusicSlider from "./Components/ReelsSlider";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Services/>
    <ClientCaseStudies/>
    <BusinessTrust/>
    <InTheNumbers/>
    <FaqSection/>
    <MusicSlider/>
    <ContactUs/>
    </>
  );
}
