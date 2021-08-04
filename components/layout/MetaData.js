import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MetaData = ({ title, description, canonical }) => {
  const router = useRouter();

  let constructedTitle = `${process.env.NEXT_PUBLIC_APP_NAME} - Développement Web / mobile, marketing digital, conception graphique`;
  if (title) {
    constructedTitle = `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Name of service",
    image: "https://somewebsite.com/static/images/some-image.jpg",
    description:
      "I seek the means to fight injustice. To turn fear against those who prey on the fearful. Someone like you. Someone who'll rattle the cages. My anger outweighs my guilt.",
    brand: "Company Name",
    review: {
      "@type": "Review",
      name: "Company Name ",
      reviewBody:
        "It was a dog. It was a big dog. It's not who I am underneath but what I do that defines me. Well, you see... I'm buying this hotel and setting some new rules about the pool area.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      datePublished: "2020-04-06",
      author: { "@type": "Person", name: "Emma" },
    },
  };
  return (
    <Head>
      <title>{constructedTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="création site web, site web, logiciel, logiciels, informatique, conseil, erp, crm, vidéoconférence, développement, développement logiciel, application mobile, software, websites, websites development, mobile development, web development, digital marketing, graphic design"
      />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={constructedTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={process.env.NEXT_PUBLIC_APP_URL + "/images/logo-col.jpg"}
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + router.pathname} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
      <meta name="twitter:image:alt" content={process.env.NEXT_PUBLIC_APP_NAME + " Logo"} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="alternate" hreflang="fr-MA" href="https://sourceup.ma/" />
      <link rel="alternate" hreflang="en-MA" href="https://sourceup.ma/en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
};

export default MetaData;
