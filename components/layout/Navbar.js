import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavbarItem from "../base/NavbarItem";
import LanguageSwitcher from "../shared/LanguageSwitcher";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <header className="pt-8 pb-3 px-2 bg-secondary-gradient border-b border-gray-700 border-opacity-60 lg:border-0">
      <div className="relative flex flex-col flex-wrap container items-start justify-between lg:items-center lg:flex-row text-white">
        <div
          onClick={() => setMobileMenuOpen(prevVal => !prevVal)}
          className="absolute inset-y-0 right-5 top-2 lg:hidden"
        >
          <i className={`fa ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
        <Link href="/">
          <a className="focus:outline-none">
            <figure>
              <Image src="/images/logo.svg" width="220" height="50" alt="Source Up Logo" />
            </figure>
          </a>
        </Link>
        <nav
          className={`${
            mobileMenuOpen ? "h-32" : "h-0 opacity-0 mt-0 pt-0"
          }  lg:opacity-100 lg:h-14 transition-all duration-150 overflow-visible  lg:flex flex-wrap items-center justify-center text-base mt-8  lg:mt-0`}
        >
          <ul className="items-center inline-block list-none space-y-5 lg:space-y-0 lg:inline-flex">
            <NavbarItem title="Services" pathname="/services" />
            <NavbarItem title={t("about")} pathname="/about" />
            <NavbarItem title="Contact" pathname="/contact" />
          </ul>
        </nav>
        <div className={`ml-auto lg:ml-0 lg:block ${!mobileMenuOpen && "hidden"}`}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
