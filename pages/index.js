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
        description={`Création de site web à petit prix Casablanca, Maroc. site vitrine et e-commerce et les applications mobile, le marketing digital et la conception graphique chez ${process.env.NEXT_PUBLIC_APP_NAME}`}
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
