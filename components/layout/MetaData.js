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
          ? `${process.env.APP_NAME } - Développement Web / mobile, marketing digital, conception graphique`
          : process.env.APP_NAME}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MetaData;
