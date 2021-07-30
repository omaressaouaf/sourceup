import React from "react";
import MetaData from "../components/layout/MetaData";
import Contact from "../components/contact/Contact";

const contact = () => {

  return (
    <>
      <MetaData
        title="Contact"
        description="contactez-nous à tout moment pour votre projet web, mobile, conception graphique"
      />
      <Contact />
    </>
  );
};

export default contact;
