import React from "react";
import MetaData from "../components/layout/MetaData";
import IntroHero from "../components/shared/IntroHero";
import ContactForm from "../components/contact/ContactForm";
import useTranslation from "next-translate/useTranslation";

function contact() {
  const { t } = useTranslation("contact");

  return (
    <>
      <MetaData
        title="Contact"
        description="contactez-nous à tout moment pour votre projet web, mobile, conception graphique"
      />
      <IntroHero title="Contact" subtitle={t("contactUs")} />
      <ContactForm />
    </>
  );
}

export default contact;
