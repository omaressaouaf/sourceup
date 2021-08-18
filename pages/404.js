import Button from "../components/base/Button";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/shared/ScrollAnimation";
import useTranslation from "next-translate/useTranslation";
import MetaData from "../components/layout/MetaData";

const Custom404 = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <MetaData title="Erreur 404" description="page non trouvée" />
      <div className="flex items-center justify-center mt-20">
        <ScrollAnimation animation="zoom-in">
          <div className="flex flex-col md:flex-row items-center gap-5 ml-10 xl:mr-32">
            <div className="border-r border-gray-400 border-opacity-50 pr-5">
              <Image src="/images/404.svg" width="500" height="270" alt="Not Found" layout="intrinsic" />
            </div>
            <div className="px-5">
              <h1 className="text-5xl text-transparent bg-clip-text bg-secondary-gradient py-2">
                {t("notFoundTitle")}
              </h1>
              <p className="text-gray-700 ml-1 mb-7">{t("notFoundParagraph")}</p>
              <Link href="/">
                <a>
                  <Button variant="brand">{t("goHome")}</Button>
                </a>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Custom404;
