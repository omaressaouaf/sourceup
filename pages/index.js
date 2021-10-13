import MetaData from "../components/layout/MetaData";
import Hero from "../components/home/Hero";
import Expertises from "../components/home/Expertises";
import Technologies from "../components/home/Technologies";
import LatestProjects from "../components/projects/LatestProjects";
import FAQs from "../components/home/FAQs";
import WaveDivider from "../components/shared/WaveDivider";
import Clients from "../components/home/Clients";

export default function Home() {
  return (
    <>
      <MetaData
        description={`${process.env.NEXT_PUBLIC_APP_NAME} est une agence marocaine spécialisée dans la création des site Web et les applications mobile pour votre affaire, les système de conception avec une interface utilisateur, les logos et les cartes de visite`}
        canonical="https://www.sourceup.ma/"
      />
      <Hero />
      <Expertises />
      <WaveDivider />
      <Technologies />
      <LatestProjects />
      <WaveDivider className="mt-10" />
      <FAQs />
      <Clients />
    </>
  );
}
