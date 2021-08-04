import useTranslation from "next-translate/useTranslation";
import Button from "../base/Button";
import Heading from "../base/Heading";
import Link from "next/link";

const ContactShortInfo = () => {
  const { t } = useTranslation("contact");

  return (
    <section className="pt-10 pb-14">
      <div className="container">
        <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
          <span className="text-brand font-semibold  uppercase tracking-wider">contact</span>
          <Heading size={4} className=" border-b-4 border-brand">
            {t("contactUs")}
          </Heading>
        </div>
        <div className="flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 mt-20  justify-between">
          <div className="flex items-start gap-3 mx-auto lg:mx-px">
            <Link href="/contact">
              <a>
                <Button variant="brand" className="w-64 h-16">
                  # {t("reachTheTeam")}
                </Button>
              </a>
            </Link>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-6 w-14 h-14 item inline-flex items-center justify-center rounded-full bg-brand-gradient">
              <i className="fa fa-envelope text-gray-50 fa-lg"></i>
            </div>
            <div className="flex flex-col space-y-1 text-gray-800">
              <p className="text-xl">Email</p>
              <p className="text-sm font-semibold text-gray-700">{process.env.NEXT_PUBLIC_APP_EMAIL_PRO}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-6 w-14 h-14 item inline-flex items-center justify-center rounded-full bg-brand-gradient">
              <i className="fa fa-phone-alt text-gray-50 fa-lg"></i>
            </div>
            <div className="flex flex-col space-y-1 text-gray-800">
              <p className="text-xl">{t("phone")}</p>
              <p className="text-sm font-semibold text-gray-700">{process.env.NEXT_PUBLIC_APP_PHONE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactShortInfo;
