import useTranslation from "next-translate/useTranslation";
import Button from "../base/Button";
import Heading from "../base/Heading";
import Label from "../base/Label";
import TextField from "../base/TextField";
import IntroHero from "../shared/IntroHero";
import ScrollAnimation from "../shared/ScrollAnimation";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const { t: tServices } = useTranslation("services");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <IntroHero title="Contact" subtitle={t("contactUs")} />

      <ScrollAnimation animation="fade-up">
        <section className="px-5 md:px-10 2xl:px-36 -mt-8 z-30">
          <div className="grid lg:grid-cols-7 2xl:grid-cols-4 bg-white shadow-xl rounded-lg ">
            <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-brand-gradient text-gray-200 space-y-8 contact-sidebar px-7 py-11 ">
              <h1 className="text-xl  text-gray-50">{t("sidebarTitle")}</h1>
              <p className="text-sm">{t("sidebarParagraph")}</p>
              <div>
                <p className="mb-7">
                  <i className="fa fa-envelope text-gray-50 mr-4"></i>
                  {process.env.NEXT_PUBLIC_APP_EMAIL_PRO}
                </p>
                <p className="">
                  <i className="fa fa-phone-alt text-gray-50 mr-3"></i>
                  {process.env.NEXT_PUBLIC_APP_PHONE}
                </p>
              </div>
              <div className="flex gap-7">
                <a
                  href={process.env.NEXT_PUBLIC_APP_FACEBOOK}
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab text-gray-50 fa-lg fa-facebook text-center"></i>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_APP_INSTAGRAM}
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab text-gray-50 fa-lg fa-instagram text-center"></i>
                </a>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-5 2xl:col-span-3 px-8 py-10">
              <Heading size={2} className="font-semibold">
                {t("formTitle")}
              </Heading>
              <form action="#" method="POST">
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <Label fieldRequired>{t("name")}</Label>
                        <TextField placeholder="John Doe" required />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label>{t("phone")}</Label>
                        <TextField placeholder="+212 6-433423" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Label fieldRequired>Email</Label>
                        <TextField placeholder="johndoe@gmail.com" required type="email" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label>{t("subject")}</Label>
                        <TextField placeholder="Application web ecommerce" />
                      </div>
                      <div className="col-span-6">
                        <Label fieldRequired>{t("message")}</Label>
                        <TextField textarea={true} placeholder=". . . . . . . . . . . ." required />
                      </div>
                      <div className="col-span-6">
                        <Label>{t("about")}</Label>
                        <div className="flex flex-wrap gap-4">
                          <label className="inline-flex items-center mt-3">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">
                              {tCommon("expertisesSection.webDevelopment")}
                            </span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">
                              {tCommon("expertisesSection.mobileDevelopment")}
                            </span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{tServices("graphicDesign")}</span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">
                              {tServices("digitalMarketing")} / SEO
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-right">
                    <Button variant="brand" className="w-40 h-12">
                      {t("send")}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default ContactForm;
