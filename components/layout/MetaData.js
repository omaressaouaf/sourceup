import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MetaData = ({ title, description, canonical }) => {
  const router = useRouter();

  let constructedTitle = `${process.env.NEXT_PUBLIC_APP_NAME} - Création site web Casablanca, Maroc et les applications mobile, marketing digital, conception graphique`;
  if (title) {
    constructedTitle = `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: process.env.NEXT_PUBLIC_APP_NAME,
    legalName: "Elite Strategies Llc",
    url: process.env.NEXT_PUBLIC_APP_URL,
    logo: process.env.NEXT_PUBLIC_APP_URL + "/images/logo-col.jpg",
    foundingDate: "2021",
    founders: [
      {
        "@type": "Person",
        name: "Omar Essaouaf",
      },
      {
        "@type": "Person",
        name: "Oussama Rafii",
      },
      {
        "@type": "Person",
        name: "Mohamed ben wannes",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Verdun",
      addressCountry: "MOROCCO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[+212 656-209865]",
      email: process.env.NEXT_PUBLIC_APP_EMAIL_PRO,
    },
    sameAs: [process.env.NEXT_PUBLIC_APP_FACEBOOK, process.env.NEXT_PUBLIC_APP_INSTAGRAM],
  };
  return (
    <Head>
      <link rel="icon" type="image/png" href="favicon.ico"></link>
      <title>{constructedTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="sourceup, source up, sourceup maroc, sourceup casablanca, sourceup casa, source up maroc, source up casablanca, source up casa, sourceup web, source up web, création site web, création site web vitrine, création site web e-commerce, site web, site internet maroc, Pack création site internet, développement web à, création d'un site web prix, Création de site web à petit prix, création d'un site web professionnel, creation site web boutique en ligne, agence informatique au maroc, agence digitale informatique, agence web et informatique, creation des sites web maroc, conception web, logiciel, logiciels, informatique, conseil, erp, crm, marketing digital, développement, développement logiciel, application mobile, agence informatique, informatique, Publicité sur internet, gestion de social media, social media ads, software, websites, websites development, web design, web development, mobile development, web development, digital marketing, graphic design, IT agency, web development maroc, web development agency maroc, web application maroc, web development business, volzak, yankees, yankees smashburger, vcc-club, xeryos, tousalik, katsu"
      />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={constructedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_APP_URL + "/images/logo-col.jpg"} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + router.pathname} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
      <meta name="twitter:image:alt" content={process.env.NEXT_PUBLIC_APP_NAME + " Logo"} />
      <link rel="alternate" hrefLang="fr-MA" href="https://sourceup.ma/" />
      <link rel="alternate" hrefLang="en-MA" href="https://sourceup.ma/en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
};

export default MetaData;
