import Projects from "../components/projects/Projects";
import MetaData from "../components/layout/MetaData";

const about = () => {
  return (
    <div className="relative">
      <MetaData
        title="Nos Projets"
        description={`Découvrez le travail de ${process.env.NEXT_PUBLIC_APP_NAME} . nos clients nous font confiance dont volzak l'un des meilleurs vendeurs de chaussures au maroc`}
        canonical="https://www.sourceup.ma/projects"
      />
      <Projects />
    </div>
  );
};

export default about;
