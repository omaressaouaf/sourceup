import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";
import IntroHero from "../shared/IntroHero";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <IntroHero title={t("about")} subtitle={t("subtitle")} />

      <section>
        <div className="container flex flex-col items-start py-16 mx-auto lg:items-start md:flex-row -mt-28 md:mt-0 z-50">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <ScrollAnimation animation="fade-right">
              <div className="h-80 lg:h-128 relative shadow-2xl">
                <Image
                  className="rounded-md"
                  src="/images/about.jpg"
                  placeholder="blur"
                  blurDataURL="/images/about.jpg"
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </ScrollAnimation>
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <ScrollAnimation animation="zoom-in">
              <Heading size={4}>{t("getToKnowUs")}</Heading>
              <div className="flex items-center gap-3 mt-4">
                <Image src="/images/icon.svg" width="60" height="60" alt="source up logo" />
                <div>
                  <h2 className="font-semibold text-xl mb-1 ml-1">SourceUp</h2>
                  <p className="font-semibold text-sm text-gray-700">
                  &quot;Source Code your business to the net&quot;
                  </p>
                </div>
              </div>

              <p className="my-8 rounded-lg font-mono leading-relaxed text-left  ">
                <span className="text-brand-light font-black">&lt;</span> {t("aboutParagraph")}{" "}
                <span className="text-brand-light font-black"> /&gt;</span>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
