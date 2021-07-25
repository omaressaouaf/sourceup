import { useRouter } from "next/dist/client/router";
import Dropdown from "../base/Dropdown";
import DropdownItem from "../base/DropdownItem";

const LanguageSwitcher = () => {
  const { locale: currentLocale, locales, pathname } = useRouter();

  const localesFullWord = {
    en: "English",
    fr: "Français",
  };

  return (
    <Dropdown
      title={localesFullWord[currentLocale]}
      icon="fa fa-globe"
      className="border border-brand border-opacity-80 hover:bg-brand-gradient focus:bg-brand-gradient rounded"
      items={locales.map(loc => {
        return (
          <DropdownItem
            key={loc}
            title={localesFullWord[loc]}
            image={`/images/${loc}.png`}
            pathname={pathname}
            locale={loc}
            scroll={false}
          />
        );
      })}
    />
  );
};

export default LanguageSwitcher;
