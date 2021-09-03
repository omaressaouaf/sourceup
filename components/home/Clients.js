import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Heading from "../base/Heading";

const Clients = () => {
  const { t } = useTranslation("common");
  return (
    <div className="my-10">
      <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
        <span className="text-brand font-semibold  uppercase tracking-wider">Clients</span>
        <Heading size={4} className=" border-b-4 border-brand">
          {t("ourClients")}
        </Heading>
      </div>
      <div className="container py-5 flex items-center justify-between">
        <Image
          src="/images/clients/tousalik.png"
          className="opacity-80 hover:opacity-100 transition-all duration-150"
          width={140}
          height={100}
        />
        <Image
          src="/images/clients/volzak.png"
          width={140}
          height={100}
          className="opacity-80 hover:opacity-100 transition-all duration-150"
        />
        <div className="bg-gray-900 py-2 px-3 rounded-md">
          <Image
            src="/images/clients/yankees.jpg"
            width={190}
            height={80}
            className="opacity-80 hover:opacity-100 transition-all duration-150"
          />
        </div>
        <Image
          src="/images/clients/vcc-club.png"
          width={140}
          height={100}
          className="opacity-80 hover:opacity-100 transition-all duration-150"
        />
        <div className="bg-blue-800 py-2 px-3 rounded-md">
          <Image
            src="/images/clients/xeryos.png"
            width={190}
            height={80}
            className="opacity-80 hover:opacity-100 transition-all duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
