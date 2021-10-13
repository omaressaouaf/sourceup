import About from "../components/about/About";
import MetaData from "../components/layout/MetaData";
import Packs from "../components/packs/Packs";

const packs = () => {
  return (
    <div className="relative">
      <MetaData title="Nos Packs et Tarification" description="Découvrez nos packs les plus populaires parmi nos clients. Tous les prix sont négociables" canonical="https://www.sourceup.ma/packs" />
      <Packs />
    </div>
  );
};

export default packs;
