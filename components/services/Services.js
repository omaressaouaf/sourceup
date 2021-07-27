import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollAnimation from "../shared/ScrollAnimation";
import InOutAnimation from "../shared/InOutAnimation";
import Button from "../base/Button";
import Heading from "../base/Heading";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import IntroHero from "../shared/IntroHero";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation("services");
  const { t: tCommon } = useTranslation("common");
  const { locale } = useRouter();

  // services
  const services = [
    {
      name: "Software",
      title: t("softwareDevelopment"),
      image: "software.svg",
      nodes: [
        {
          title: tCommon("expertisesSection.webDevelopment"),
          description: t("webDevelopmentDescription"),
        },
        {
          title: tCommon("expertisesSection.mobileDevelopment"),
          description: t("mobileDevelopmentDescription"),
        },
        {
          title: t("codeDebugging"),
          description: t("codeDebuggingDescription"),
        },
      ],
    },
    {
      name: "Maintenance",
      title: t("codeMaintenance"),
      image: "maintenance.svg",
      nodes: [
        {
          title: t("extendingFeatures"),
          description: t("extendingFeaturesDescription"),
        },
        {
          title: t("debugging"),
          description: t("debuggingDescription"),
        },
      ],
    },
    {
      name: t("graphicDesign"),
      title: t("graphicDesignAndIllustrations"),
      image: "graphicdesign.svg",
      nodes: [
        {
          title: t("logoDesign"),
          description: t("logoDesignDescription"),
        },
        {
          title: t("businessCards"),
          description: t("businessCardsDescription"),
        },
      ],
    },
    {
      name: t("digitalMarketing"),
      title: t("digitalMarketing"),
      image: "marketing.svg",
      nodes: [
        {
          title: t("seo"),
          description: t("seoDescription"),
        },
        {
          title: t("socialMediaAds"),
          description: t("socialMediaAdsDescription"),
        },
      ],
    },
  ];
  const [selectedService, setSelectedService] = useState(services[0]);
  useEffect(() => {
    setSelectedService(services[0]);
  }, [locale]);

  // typewriting animation
  const [introHeroTitle, setIntroHeroTitle] = useState(services[0].name);
  const [typewritingAnimationIteration, setTypewritingAnimationIteration] = useState(0);
  const onTypewritingAnimationUpdate = ({ width }) => {
    if (width === "0%") {
      setIntroHeroTitle(services[typewritingAnimationIteration].name);
      setTypewritingAnimationIteration(prevVal => prevVal + 1);
    }
  };

  return (
    <>
      <IntroHero
        titleIsNode={true}
        title={
          <motion.h1
            onUpdate={onTypewritingAnimationUpdate}
            initial={{
              overflow: "hidden",
              borderRight: ".12em solid rgb(245, 160, 2)",
              whiteSpace: "nowrap",
              width: 0,
            }}
            animate={[
              {
                width: "100%",
                transition: { duration: 2, repeat: services.length * 2 - 2, repeatType: "reverse" },
              },
              {
                borderColor: ["rgba(255, 166, 0, 0)", "rgba(255, 166, 0, 0)", "rgb(245, 160, 2)"],
                transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
              },
            ]}
            className="text-2xl font-extrabold tracking-tight lg:h-14 lg:text-5xl"
          >
            {introHeroTitle}
          </motion.h1>
        }
        subtitle={t("subtitle")}
      />

      <div className="px-10 lg:px-14 w-full">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 order-2 lg:order-1 lg:col-span-3">
            <ScrollAnimation animation="fade-right">
              <div className="flex flex-wrap items-start gap-5 my-8">
                {services.map((service, index) => {
                  return (
                    <Button
                      onClick={() => setSelectedService(service)}
                      outline={selectedService.name !== service.name}
                      key={index}
                      variant="brand"
                    >
                      {service.name}
                    </Button>
                  );
                })}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="zoom-in">
              <InOutAnimation animation="fade" elementKey={selectedService.name}>
                <Heading size={2}>{selectedService.title}</Heading>
                <div className="space-y-4">
                  {selectedService.nodes.map((node, index) => {
                    return (
                      <h5 key={index} className="text-lg text-secondary font-semibold text-left">
                        <i className="fa fa-chevron-right text-brand mr-1"></i> {node.title} :
                        <span className="text-gray-600 text-sm font-semibold ml-2">
                          {node.description}
                        </span>
                      </h5>
                    );
                  })}
                </div>
              </InOutAnimation>
            </ScrollAnimation>
          </div>
          <div className="col-span-5 -mb-20 -mt-24 lg:mb-0  lg:-mt-40 order-1 lg:order-2 lg:col-span-2 z-20">
            <ScrollAnimation animation="zoom-in">
              <InOutAnimation animation="fade" elementKey={selectedService.name}>
                <Image
                  src={`/images/services/${selectedService.image}`}
                  alt={selectedService.title}
                  quality={100}
                  width="500"
                  height="500"
                  layout="responsive"
                />
              </InOutAnimation>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
