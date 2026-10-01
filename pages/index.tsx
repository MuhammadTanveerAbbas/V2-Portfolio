import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import Page from "../components/utility/Page";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Process from "../components/home/Process";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-16 sm:mt-24 space-y-20 sm:space-y-28 lg:space-y-36">
        <Projects />
        <Skills />
        <Services />
        <Process />
        <Stats />
      </div>
      <CTA />
    </Page>
  );
}
