import useTranslation from "next-translate/useTranslation";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";

const Methodology = () => {
  const { t } = useTranslation("services");

  const steps = [
    {
      title: t("planning"),
      description: t("planningDescription"),
      icon: "fa-cog",
    },
    {
      title: t("designing"),
      description: t("designingDescription"),
      icon: "fa-layer-group",
    },
    {
      title: t("developing"),
      description: t("developingDescription"),
      icon: "fa-code-branch",
    },
    {
      title: t("deploying"),
      description: t("deployingDescription"),
      icon: "fa-server",
    },
  ];

  return (
    <div className="md:container mx-auto w-full h-full">
      <ScrollAnimation animation="zoomIn">
        <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
          <span className="text-brand font-semibold  uppercase tracking-wider">
            {t("methodology")}
          </span>
          <Heading size={4} className=" border-b-4 border-brand">
            {t("ourMethodology")}
          </Heading>
        </div>
      </ScrollAnimation>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>
        {steps.map((step, index) => {
          return (
            <ScrollAnimation key={index} animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}>
              <div
                key={index}
                className={`mb-8 flex justify-between items-start gap-2 md:gap-0 md:items-center w-full ${
                  index % 2 === 0 ? "right-timeline" : "left-timeline flex-row-reverse"
                } `}
              >
                <div className="order-1 w-1/12 md:w-5/12"></div>
                <div className="z-10  flex items-center order-1 bg-brand-gradient shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-gray-50 font-semibold text-l">{index + 1}</h1>
                </div>
                <div
                  className={`z-10 order-1 font-semibold text-lg  rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 focus:scale-105 focus:shadow-2xl transition-all duration-300 w-9/12 md:w-5/12  px-6 py-4 ${
                    index % 2 === 0
                      ? "bg-brand-gradient text-gray-50"
                      : "bg-gray-100 text-secondary-dark"
                  }`}
                >
                  <h2 className="mb-3">
                    <i
                      className={`fa mr-2 ${step.icon} ${
                        index % 2 !== 0 && " text-transparent bg-clip-text bg-brand-gradient"
                      }`}
                    ></i>
                    {step.title}
                  </h2>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default Methodology;
