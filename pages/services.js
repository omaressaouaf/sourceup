import MetaData from "../components/layout/MetaData";
import Methodology from "../components/services/Methodology";
import Services from "../components/services/Services";

const services = () => {
  return (
    <div className="relative">
      <MetaData
        title="Nos Services"
        description="Nous offrons le développement d'applications / sites web, le marketing digital, la conception graphique et plus encore. commencez à développer votre entreprise aujourd'hui"
        canonical="https://www.sourceup.ma/services"
      />
      <Services />
      <Methodology />
    </div>
  );
};

export default services;
