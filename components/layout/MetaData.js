import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import PropTypes from "prop-types";

const MetaData = ({ title, description }) => {
  const { pathname } = useRouter();
  return (
    <Head>
      <title>
        {title && `${title} -`}{" "}
        {pathname === "/"
          ? `${process.env.NEXT_PUBLIC_APP_NAME} - Développement Web / mobile, marketing digital, conception graphique`
          : process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="création site web, site web, logiciel, logiciels, informatique, conseil, erp, crm, vidéoconférence, développement, développement logiciel, application mobile, software, websites, websites development, mobile development, web development, digital marketing, graphic design"
      />
    </Head>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MetaData;
