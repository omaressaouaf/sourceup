import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Button from "../base/Button";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";

const Projects = () => {
  const { t } = useTranslation("about");

  const projects = [
    {
      name: "Tousalik",
      description: t("tousalikDescription"),
      image: "tousalik.png",
      url: "https://tousalik.com",
      category: {
        name: t("marketing"),
        icon: "fa fa-chart-line",
        color: "text-brand",
      },
    },
    {
      name: "Yankees",
      description: t("yankeesDescription"),
      image: "yankees.png",
      url: "https://yankees.ma",
      category: {
        name: t("foodDelivery"),
        icon: "fa fa-hamburger",
        color: "text-green-600",
      },
    },
    {
      name: "ConnecTo",
      description: t("connectoDescription"),
      image: "connecto.png",
      url: "https://connecto.sourceup.ma",
      category: {
        name: t("entertainment"),
        icon: "fab fa-twitter",
        color: "text-blue-500",
      },
    },
  ];
  return (
    <section className="">
      <ScrollAnimation animation="zoomIn">
        <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
          <span className="text-brand font-semibold  uppercase tracking-wider">{t('projects')}</span>
          <Heading size={4} className=" border-b-4 border-brand">
            {t('ourLatestProjects')}
          </Heading>
        </div>
        <div className="grid grid-cols-3 px-10 xl:px-36 gap-10">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="col-span-3 lg:col-span-1 text-center bg-gray-50 border border-gray-50 border-opacity-50  shadow-lg hover:shadow-2xl hover:scale-105 focus:scale-105 focus:shadow-2xl transition-all duration-300 rounded-md font-semibold text-lg text-secondary-dark"
              >
                <div className="">
                  <Image
                    placeholder="blur"
                    blurDataURL={`/images/projects/${project.image}`}
                    src={`/images/projects/${project.image}`}
                    className="shadow"
                    width="550"
                    height="280"
                  />
                </div>
                <div className="text-center px-10 py-8">
                  <h1 className="mb-3 text-lg">
                    <i className={`pr-2 ${project.category.icon} ${project.category.color}`}></i>
                    {project.category.name}
                  </h1>

                  <Heading size={4}>{project.name}</Heading>
                  <p className="text-sm font-semibold text-gray-700 mb-5">{project.description}</p>
                  <a href={project.url} target="_blank">
                    <Button variant="brand">
                      <i className="fa fa-location-arrow mr-2"></i> Visit Site
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
