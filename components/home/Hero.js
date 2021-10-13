import ScrollAnimation from "../shared/ScrollAnimation";
import useTranslation from "next-translate/useTranslation";
import Button from "../base/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <section className="text-gray-50 py-16 bg-secondary-gradient">
      <div className="flex flex-col items-start mt-8 gap-4 container lg:flex-row">
        <ScrollAnimation animation="zoom-in">
          <div className="flex flex-col items-start mb-16 text-left lg:mb-0">
            <div className="bg-secondary pr-1 pl-0 mb-5 inline-flex justify-center items-center rounded-full text-sm font-semibold">
              <div className="bg-brand text-gray-50 px-2 rounded-full m-1">{t("discount")}</div>
              <p className="px-2 text-gray-400">{t("discountText")}</p>
            </div>
            <h1 className="mb-8 text-2xl font-extrabold tracking-tight lg:text-5xl">
              {"Source Up " + t("heroTitle")}
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand to-brand-light">
                {t("webAndMobile")}
              </span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-400">{t("heroDescription")}</p>
            <div className="flex flex-col justify-center lg:flex-row">
              <Link href="/services">
                <a>
                  <Button variant="brand">{t("ourServices")}</Button>
                </a>
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        <div className="w-50 relative flex-grow">
          <ScrollAnimation animation="zoom-in">
            <Image alt="hero" width="1750" height="1000" layout="intrinsic" src="/images/hero.svg" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
