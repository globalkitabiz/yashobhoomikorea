import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import PreRegistrationForm from "@/components/PreRegistrationForm";
import Media from "@/components/Media";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Registration />
        <PreRegistrationForm />
        <Media />
        <Partners />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
