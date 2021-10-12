import useTranslation from "next-translate/useTranslation";
import React from "react";
import IntroHero from "../shared/IntroHero";
import Image from "next/image";
import Button from "../base/Button";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";

const Projects = () => {
  const { t } = useTranslation("projects");

  const projects = [
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

    {
      name: "VCC-Club",
      description: t("vccClubDescription"),
      image: "vccclub.png",
      url: "https://www.vcc-club.com/",
      category: {
        name: t("finance"),
        icon: "fa fa-credit-card",
        color: "text-brand",
      },
    },
    {
      name: "Xeryos",
      description: t("xeryosDescription"),
      image: "xeryos.png",
      url: "https://www.xeryos.com/",
      category: {
        name: t("finance"),
        icon: "fa fa-credit-card",
        color: "text-brand",
      },
    },
    {
      name: "Katsu Sushi",
      description: t("katsuDescription"),
      image: "katsu.png",
      url: "https://www.katsu.ma/",
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
    <>
      <IntroHero title={t("projects")} subtitle={t("subtitle")} />
      <ScrollAnimation animation="fade-up">
        <div className="container -mt-10 grid grid-cols-2 px-10 xl:px-52 2xl:px-72 gap-10">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="col-span-3 md:col-span-1 text-center bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-200 lg:duration-300 rounded-md font-semibold text-lg text-secondary-dark"
              >
                <div>
                  <Image
                    alt={project.name}
                    placeholder="blur"
                    blurDataURL={`/images/projects/${project.image}`}
                    src={`/images/projects/${project.image}`}
                    width="550"
                    height="280"
                    className="rounded-sm"
                  />
                </div>
                <div className="text-center px-10 py-8 border border-gray-50 border-opacity-50 ">
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
      </ScrollAnimation>
    </>
  );
};

export default Projects;
