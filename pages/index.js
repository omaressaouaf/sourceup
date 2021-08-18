import MetaData from "../components/layout/MetaData";
import Hero from "../components/home/Hero";
import Expertises from "../components/home/Expertises";
import Technologies from "../components/home/Technologies";
import Projects from "../components/about/Projects";
import FAQs from "../components/home/FAQs";
import WaveDivider from "../components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <MetaData
        description="Créez un site Web / une application mobile pour votre affaire. et créez votre système de conception avec une interface utilisateur, un logo et une carte de visite"
        canonical="https://www.sourceup.ma"
      />
      <Hero />
      <Expertises />
      <WaveDivider />
      <Technologies />
      <Projects />
      <WaveDivider className="mt-10" />
      <FAQs />
    </>
  );
}
