import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import LanguageSwitcher from "../shared/LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-secondary-gradient text-gray-50 mt-auto">
      <div className="container flex flex-col  md:flex-row items-start justify-between pb-2 pt-14 2xl:px-32">
        <div className="flex flex-col items-start p-7 w-10/12 mx-auto md:mx-0 mb-10 md:w-auto bg-secondary border-t-4 border-brand shadow-lg rounded-md">
          <figure className="mx-auto">
            <img src="/images/logo-col.svg" width="120" height="50" alt="Source Up Logo" />
          </figure>
          <p className="text-sm text-gray-400 mb-1 mt-4">
            <span className="font-bold"> Email </span> : sourceupbusiness@gmail.com
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-bold"> {t("phone")} </span>: +212 6-56209865
          </p>
        </div>
        <div className="px-4">
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">
            {t("quickLinks")}
          </h1>
          <nav className="mb-10 space-y-4 list-none text-gray-400">
            <ul>
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
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">
            {t("ourSocialMedia")}
          </h1>
          <div className="text-gray-400 text-sm">
            <p>{t("followUsOnSocialMedia")}</p>
            <div className="flex items-center mt-4 space-x-4">
              <a href="https://facebook.com" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x hover:text-brand transition-all duration-300"></i>
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x hover:text-brand transition-all duration-300"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 ">
          <h1 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">
            {t("language")}
          </h1>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="p-8 mt-4 bg-secondary-dark border-t border-gray-800 border-opacity-80">
        <div className="flex items-center justify-center">
          <p className="text-sm">©Copyright {process.env.APP_NAME}. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
