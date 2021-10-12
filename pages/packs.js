import About from "../components/about/About";
import MetaData from "../components/layout/MetaData";
import Packs from "../components/packs/Packs";

const packs = () => {
  return (
    <div className="relative">
      <MetaData title="Nos packs et prix" description="" canonical="https://www.sourceup.ma/packs" />
      <Packs />
    </div>
  );
};

export default packs;
