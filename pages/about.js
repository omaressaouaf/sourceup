import About from "../components/about/About";
import Projects from "../components/about/Projects";
import MetaData from "../components/layout/MetaData";

const about = () => {

  return (
    <div className="relative">
      <MetaData
        title="À propos de nous"
        description="Nous sommes une équipe d'experts web diplômés, de marketeurs et de designers. notre passion est de développer et de donner vie à des idées"
        canonical="https://www.sourceup.ma/about"
      />
      <About />
      <Projects />
    </div>
  );
};

export default about;
