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
      name: "M2E Automation",
      description: t("m2eautomationDescription"),
      image: "m2eautomation.png",
      url: "https://m2euautomation.ma",
      category: {
        name: t("automation"),
        icon: "fa fa-tools",
        color: "text-yellow-500",
      },
    },
    {
      name: "Sbeauty Care",
      description: t("sbeautycareDescription"),
      image: "sbeautycare.png",
      url: "https://sbeautycare.ma",
      category: {
        name: t("cosmetic"),
        icon: "fa fa-ring",
        color: "text-pink-500",
      },
    },
    {
      name: "DigiTech",
      description: t("digitechDescription"),
      image: "digitech.png",
      url: "https://digitechproducts.net",
      category: {
        name: t("digitalProducts"),
        icon: "fa fa-tv",
        color: "text-blue-500",
      },
    },
    {
      name: "Nadia Chellaoui",
      description: t("nadiachellaouiDescription"),
      image: "nadiachellaoui.png",
      url: "https://www.nadiachellaoui.com",
      category: {
        name: t("fashion"),
        icon: "fa fa-shopping-cart",
        color: "text-pink-500",
      },
    },
    {
      name: "T-Both Performance",
      description: t("tbothperformanceDescription"),
      image: "tbothperformance.png",
      url: "https://t-bothperformance.com",
      category: {
        name: t("onlineTraining"),
        icon: "fa fa-graduation-cap",
        color: "text-blue-500",
      },
    },
    {
      name: "Noor Fès",
      description: t("noorfesDescription"),
      image: "noorfes.png",
      url: "https://noorfes.co.il",
      category: {
        name: t("foodDelivery"),
        icon: "fa fa-oil-can",
        color: "text-green-500",
      },
    },
    {
      name: "MOROCCO ARGAN",
      description: t("moroccoarganDescription"),
      image: "moroccoargan.png",
      url: "https://moroccoargan.co.il",
      category: {
        name: t("foodDelivery"),
        icon: "fa fa-oil-can",
        color: "text-green-500",
      },
    },
    {
      name: "Rollings Times",
      description: t("rollingstimesDescription"),
      image: "rollingstimes.png",
      url: "https://rollingstimes.com",
      category: {
        name: t("ecommerce"),
        icon: "fa fa-shopping-cart",
        color: "text-yellow-600",
      },
    },
    {
      name: "JEL FORMATIONS",
      description: t("jelformationsDescription"),
      image: "jelformations.png",
      url: "https://jelformations.fr",
      category: {
        name: t("onlineTraining"),
        icon: "fa fa-graduation-cap",
        color: "text-blue-500",
      },
    },
    {
      name: "CPFIP",
      description: t("cpfipDescription"),
      image: "cpfip.png",
      url: "https://www.cpfip.fr",
      category: {
        name: t("onlineTraining"),
        icon: "fa fa-graduation-cap",
        color: "text-blue-500",
      },
    },
    {
      name: "Transyanis",
      description: t("transyanisDescription"),
      image: "transyanis.png",
      url: "https://transyanis.ma",
      category: {
        name: t("exportationAndImportation"),
        icon: "fa fa-truck",
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
