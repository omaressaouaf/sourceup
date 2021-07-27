import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import ScrollAnimation from "../shared/ScrollAnimation";
import Heading from "../base/Heading";

const Technologies = () => {
  const stacks = {
    Backend: [
      {
        name: "PHP",
        website: "https://www.php.net/",
        logo: "php.svg",
      },
      {
        name: "Laravel",
        website: "https://laravel.com/",
        logo: "laravel.svg",
      },
      {
        name: "NodeJs",
        website: "https://nodejs.org/en/",
        logo: "nodejs.svg",
      },
      {
        name: "ExpressJs",
        website: "https://expressjs.com/",
        logo: "expressjs.svg",
      },
      {
        name: "Python",
        website: "https://www.python.org/",
        logo: "python.svg",
      },
      {
        name: "Django",
        website: "https://www.djangoproject.com/",
        logo: "django.svg",
      },
    ],
    Frontend: [
      {
        name: "Javascript",
        website: "https://www.javascript.com/",
        logo: "javascript.svg",
      },
      {
        name: "ReactJs",
        website: "https://reactjs.org/",
        logo: "react.svg",
      },
      {
        name: "VueJs",
        website: "https://vuejs.org/",
        logo: "vuejs.svg",
      },
    ],
    Mobile: [
      {
        name: "React Native",
        website: "https://reactnative.dev/",
        logo: "react.svg",
      },
      {
        name: "Flutter",
        website: "https://flutter.dev/",
        logo: "flutter.svg",
      },
      {
        name: "Ionic",
        website: "https://ionicframework.com/",
        logo: "ionic.svg",
      },
      {
        name: "Quasar Framework",
        website: "https://quasar.dev/",
        logo: "quasar.svg",
      },
    ],
    CMS: [
      {
        name: "Wordpress",
        website: "https://wordpress.com/",
        logo: "wordpress.svg",
      },
      {
        name: "Prestashop",
        website: "https://www.prestashop.com/en",
        logo: "prestashop.svg",
      },
    ],
  };

  const { t } = useTranslation("common");

  return (
    <section className="bg-gray-100 border-b border-gray-300 align-start px-5 md:px-8 pb-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1 order-2 md:order-1 md:py-20 lg:py-24">
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-col items-start mb-14 border-l-4 border-brand px-5">
              <Heading size={4}>{t("technologiesSection.technologiesIntegration")}</Heading>
              <p className="text-gray-700 font-semibold">
                {t("technologiesSection.technologiesDescription")}
              </p>
            </div>

            <div className="grid grid-cols-4">
              {Object.keys(stacks).map((stack, index) => {
                return (
                  <div key={index} className="col-span-2 lg:col-span-1 mb-10">
                    <Heading size={1} className="font-semibold">
                      <i className="fa fa-chevron-right text-brand mr-2"></i> {stack}
                    </Heading>
                    <ul className="-mt-3 font-semibold text-gray-700 space-y-2">
                      {stacks[stack].map((technology, index) => {
                        return (
                          <li key={index} className="mb-4">
                            <a
                              className="flex items-center gap-3"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={technology.website}
                            >
                              <Image
                                src={`/images/technologies/${technology.logo}`}
                                width="33"
                                height="33"
                                quality={100}
                                alt={technology.name}
                                layout="fixed"
                              />
                              {technology.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
        <motion.div
          initial={{ y: -45 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="col-span-2 md:col-span-1 order-1 md:order-2"
        >
            <Image
              src="/images/dashboard.svg"
              alt="SourceUp Dashboard"
              quality={100}
              width="792"
              height="670"
              layout="responsive"
            />
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
