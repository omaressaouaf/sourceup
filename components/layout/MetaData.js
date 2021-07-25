import Head from "next/head";
import PropTypes from "prop-types";

const MetaData = ({ title, description }) => {
  return (
    <Head>
      <title>
        {title && `${title} -`} {process.env.APP_NAME}
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
