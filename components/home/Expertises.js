import useTranslation from "next-translate/useTranslation";
import ScrollAnimation from "../shared/ScrollAnimation";
import BrowserIcon from "../svg/BrowserIcon";
import GraphicDesignIcon from "../svg/GraphicDesignIcon";
import MobileIcon from "../svg/MobileIcon";
import Heading from "../base/Heading";

const Expertises = () => {
  const { t } = useTranslation("common");
  const expertises = [
    {
      title: t("expertisesSection.mobileDevelopment"),
      description: t("expertisesSection.mobileDevelopmentDescription"),
      icon: <MobileIcon />,
    },
    {
      title: t("expertisesSection.webDevelopment"),
      description: t("expertisesSection.webDevelopmentDescription"),
      icon: <BrowserIcon />,
    },
    {
      title: t("expertisesSection.graphicDesign"),
      description: t("expertisesSection.graphicDesignDescription"),
      icon: <GraphicDesignIcon />,
    },
  ];

  return (
    <section className="container my-10">
      <ScrollAnimation animation="fade-right">
        <div className="flex flex-col items-start space-y-5 mb-10 border-l-4 border-brand px-5">
          <span className="text-brand font-semibold  uppercase tracking-wider">
            {t("expertisesSection.expertise")}
          </span>
          <Heading size={4}>{t("expertisesSection.expertiseTitle")}</Heading>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="zoom-in">
        <div className="grid grid-cols-3 gap-10 ">
          {expertises.map((exp, index) => {
            return (
              <div
                key={index}
                className="p-10 col-span-3 lg:col-span-1 text-center bg-gray-100 border border-gray-200 border-opacity-50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 lg:duration-300 rounded-md font-semibold text-lg text-secondary-dark"
              >
                <div className="p-6 w-24 h-24 item inline-flex items-center justify-center rounded-full bg-brand-gradient">
                  {exp.icon}
                </div>
                <h2 className="mb-2 mt-5">{exp.title}</h2>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Expertises;
