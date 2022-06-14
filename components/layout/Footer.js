import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../shared/LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-secondary-gradient text-gray-50 mt-auto">
      <div className="container flex flex-col  md:flex-row items-start justify-between pb-2 pt-14 2xl:px-32">
        <div className="flex flex-col items-start py-7 px-12 w-10/12 mx-auto md:mx-0 mb-10 md:w-auto bg-secondary border-t-4 border-brand shadow-lg rounded-md">
          <figure className="mx-auto">
            <Image src="/images/logo-col.svg" width="200" height="200" alt="Source Up Logo" />
          </figure>
          <p className="text-sm text-gray-400 mb-1 mt-4">
            <span className="font-bold"> Email </span> : {process.env.NEXT_PUBLIC_APP_EMAIL_PRO}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-bold"> {t("phone")} </span>: {process.env.NEXT_PUBLIC_APP_PHONE}
          </p>
        </div>
        <div className="px-4">
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">{t("quickLinks")}</h1>
          <nav className="mb-10">
            <ul className="space-y-5 list-none text-gray-400">
              <li>
                <Link href="/">
                  <a className="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:outline-none">
                    {t("home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:outline-none">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:outline-none">
                    {t("about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:outline-none">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="px-4 mb-9">
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">{t("ourSocialMedia")}</h1>
          <div className="text-gray-400 text-sm">
            <p>{t("followUsOnSocialMedia")}</p>
            <div className="flex items-center mt-4 space-x-4">
              <a
                href={process.env.NEXT_PUBLIC_APP_FACEBOOK}
                rel="noopener noreferrer"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook fa-2x hover:text-brand transition-all duration-300"></i>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_APP_INSTAGRAM}
                rel="noopener noreferrer"
                aria-label="Instagram"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x hover:text-brand transition-all duration-300"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 ">
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">{t("language")}</h1>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="p-8 mt-4 bg-secondary-dark border-t border-gray-800 border-opacity-80">
        <div className="flex items-center justify-center">
          <p className="text-sm">
          {t("allRightsReserved")} © 2022 {process.env.NEXT_PUBLIC_APP_NAME}{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
