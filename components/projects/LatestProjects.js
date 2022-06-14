import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import Button from "../base/Button";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";

const LatestProjects = () => {
  const { t } = useTranslation("projects");

  const projects = [
    {
      name: "Topo Maroc",
      description: t("topomarocDescription"),
      image: "topomaroc.png",
      url: "https://www.topomaroc.com/",
      category: {
        name: t("topography"),
        icon: "fa fa-tools",
        color: "text-yellow-500",
      },
    },
    {
      name: "ChronoPrint",
      description: t("chronoprintDescription"),
      image: "chronoprint.png",
      url: "https://chronoprint.ma",
      category: {
        name: t("onlinePrinting"),
        icon: "fa fa-print",
        color: "text-green-600",
      },
    },
    {
      name: "Volzak",
      description: t("volzakDescription"),
      image: "volzak.png",
      url: "https://volzak.com/",
      category: {
        name: t("ecommerce"),
        icon: "fa fa-shopping-cart",
        color: "text-yellow-600",
      },
    },
  ];
  return (
    <section className="">
      <ScrollAnimation animation="zoom-in">
        <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
          <span className="text-brand font-semibold  uppercase tracking-wider">
            {t("projects")}
          </span>
          <Heading size={4} className=" border-b-4 border-brand">
            {t("ourLatestProjects")}
          </Heading>
        </div>
        <div className="grid grid-cols-3 px-10 xl:px-36 gap-10">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="col-span-3 lg:col-span-1 text-center bg-gray-50 border border-gray-50 border-opacity-50  shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 lg:duration-300 rounded-md font-semibold text-lg text-secondary-dark"
              >
                <div className="">
                  <Image
                    alt={project.name}
                    placeholder="blur"
                    blurDataURL={`/images/projects/${project.image}`}
                    src={`/images/projects/${project.image}`}
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
                  <a href={project.url} rel="noopener noreferrer" target="_blank">
                    <Button variant="brand">
                      <i className="fa fa-location-arrow mr-2"></i> {t("visitSite")}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-10 container">
          <Link href="/projects">
            <a className="text-center w-3/4 md:w-11/12 lg:w-1/4">
              <Button variant="secondary" outline className="w-full" >
                {t("seeMore")}
              </Button>
            </a>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default LatestProjects;
