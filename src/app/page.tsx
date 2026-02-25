import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

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
        <Partners />
      </main>
      <Footer />
    </>
  );
}
