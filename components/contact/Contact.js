import useTranslation from "next-translate/useTranslation";
import Button from "../base/Button";
import Heading from "../base/Heading";
import Label from "../base/Label";
import TextField from "../base/TextField";
import IntroHero from "../shared/IntroHero";
import ScrollAnimation from "../shared/ScrollAnimation";
import useValidation from "../../hooks/useValidation";
import { emailRegex } from "../../global/helpers";
import { useState } from "react";
import Toast from "../base/Toast";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const { t: tServices } = useTranslation("services");
  const { t: tCommon } = useTranslation("common");

  const { registerInput, wrapHandleSubmit, errors, reset } = useValidation();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async formData => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await res.json();
      if (res.ok) {
        setSuccessMsg(t("emailSent"));
        reset();
      } else {
        setErrorMsg(t("emailNotSent"));
      }
    } catch (err) {
      setErrorMsg(t("emailNotSent"));
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <Toast showToast={successMsg.length > 0} icon="fa fa-check-circle" variant="brand">
        {successMsg}
      </Toast>
      <Toast showToast={errorMsg.length > 0} icon="fas fa-exclamation-circle" variant="error">
        {errorMsg}
      </Toast>
      <IntroHero title="Contact" subtitle={t("contactUs")} />

      <ScrollAnimation animation="fade-up">
        <section className="px-5 md:px-10 2xl:px-36 -mt-8 z-30">
          <div className="grid lg:grid-cols-7 2xl:grid-cols-4 bg-white shadow-xl rounded-lg ">
            <div className="sidebar col-span-4 lg:col-span-2 2xl:col-span-1 bg-brand-gradient text-gray-200 space-y-8 contact-sidebar px-7 py-11 ">
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
                  target="_blank"
                >
                  <i className="fab text-gray-50 fa-lg fa-facebook text-center"></i>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_APP_INSTAGRAM}
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <i className="fab text-gray-50 fa-lg fa-instagram text-center"></i>
                </a>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-5 2xl:col-span-3 px-8 py-10">
              <Heading size={2} className="font-semibold">
                {t("formTitle")}
              </Heading>
              <form onSubmit={wrapHandleSubmit(handleSubmit)}>
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <Label fieldRequired>{t("name")}</Label>
                        <TextField
                          {...registerInput("name", {
                            required: { value: true, message: `${t("name")} ${t("isRequired")}` },
                          })}
                          error={errors.name ? true : false}
                          helperText={errors.name && errors.name.message}
                          placeholder="Ex : John Doe"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label>{t("phone")}</Label>
                        <TextField
                          {...registerInput("phone")}
                          error={errors.phone ? true : false}
                          helperText={errors.phone && errors.phone.message}
                          placeholder="Ex : +212 6-433423"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Label fieldRequired>Email</Label>
                        <TextField
                          {...registerInput("email", {
                            required: { value: true, message: `Email ${t("isRequired")}` },
                            pattern: {
                              value: emailRegex,
                              message: `Email ${t("isInvalid")}`,
                            },
                          })}
                          error={errors.email ? true : false}
                          helperText={errors.email && errors.email.message}
                          placeholder="Ex : johndoe@gmail.com"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label>{t("subject")}</Label>
                        <TextField
                          {...registerInput("subject")}
                          error={errors.subject ? true : false}
                          helperText={errors.subject && errors.subject.message}
                          placeholder="Ex : Pack Ecommerce"
                        />
                      </div>
                      <div className="col-span-6">
                        <Label fieldRequired>{t("message")}</Label>
                        <TextField
                          {...registerInput("message", {
                            required: {
                              value: true,
                              message: `${t("message")} ${t("isRequired")}`,
                            },
                          })}
                          error={errors.message ? true : false}
                          helperText={errors.message && errors.message.message}
                          textarea={true}
                          placeholder=". . . . . . . . . . . ."
                        />
                      </div>
                      <div className="col-span-6">
                        <Label>Services</Label>
                        <div className="flex flex-wrap gap-4">
                          <label className="inline-flex items-center mt-3">
                            <input
                              {...registerInput("services")}
                              type="checkbox"
                              value="Web Development"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">
                              {tCommon("expertisesSection.webDevelopment")}
                            </span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              {...registerInput("services")}
                              type="checkbox"
                              value="Mobile Development"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">
                              {tCommon("expertisesSection.mobileDevelopment")}
                            </span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              {...registerInput("services")}
                              type="checkbox"
                              value="Graphic Design"
                              className="form-checkbox h-5 w-5 text-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{tServices("graphicDesign")}</span>
                          </label>
                          <label className="inline-flex items-center mt-3">
                            <input
                              {...registerInput("services")}
                              type="checkbox"
                              value="Digital Marketing"
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
                    <Button disabled={loading} variant="brand" className="w-40 h-12">
                      {loading && <i className="fa fa-spinner fa-spin mr-2"></i>}
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
