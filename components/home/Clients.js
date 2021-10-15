import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Heading from "../base/Heading";

const Clients = () => {
  const { t } = useTranslation("common")
  const clients = [
    {
      image: "tousalik.png",
    },
    {
      image: "volzak.png",
    },
    {
      image: "katsu.png",
    },
    {
      image: "yankees.jpg",
      bgColor: "bg-gray-900",
    },
    {
      image: "vccclub.png",
    },
    {
      image: "xeryos.png",
      bgColor: "bg-blue-800",
    },
  ];
  return (
    <div className="my-10">
      <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
        <span className="text-brand font-semibold  uppercase tracking-wider">Clients</span>
        <Heading size={4} className=" border-b-4 border-brand">
          {t("ourClients")}
        </Heading>
      </div>
      <div className="px-4 xl:px-16 py-5 flex gap-4 items-center lg:justify-between overflow-auto">
        {clients.map((client, index) => {
          return client.bgColor ? (
            <div key={index} className={`${client.bgColor} py-2 px-3 rounded-md`}>
              <Image
                src={`/images/clients/${client.image}`}
                width={190}
                height={80}
                alt={client.image}
              />
            </div>
          ) : (
            <Image
              key={index}
              src={`/images/clients/${client.image}`}
              width={140}
              height={100}
              alt={client.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
