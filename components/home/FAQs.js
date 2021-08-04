import Image from "next/image";
import { useEffect, useState } from "react";
import Heading from "../base/Heading";
import ScrollAnimation from "../shared/ScrollAnimation";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const FAQs = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const faqsArray = [
    {
      question: t("faqsSection.howMuchForSoftware"),
      answer: t("faqsSection.howMuchForSoftwareAnswer"),
      answerOpen: false,
    },
    {
      question: t("faqsSection.howMuchForHosting"),
      answer: t("faqsSection.howMuchForHostingAnswer"),
      answerOpen: false,
    },
    {
      question: t("faqsSection.doYouOfferPaymentSchedule"),
      answer: t("faqsSection.doYouOfferPaymentScheduleAnswer"),
      answerOpen: false,
    },
  ];
  const [faqs, setFaqs] = useState(faqsArray);

  useEffect(() => {
    setFaqs(faqsArray);
  }, [locale]);

  const toggleAnswerOpen = answer => {
    const changedFaqs = faqs.map(faq =>
      faq.answer === answer
        ? { ...faq, answerOpen: !faq.answerOpen }
        : { ...faq, answerOpen: false }
    );
    setFaqs(changedFaqs);
  };

  return (
    <section className="bg-gray-100 border-b border-gray-200 py-10">
      <ScrollAnimation animation="zoom-in">
        <div className="mt-8 text-center">
          <Image src="/images/faqs.svg" alt="Faq" width="600" height="300" />
        </div>
        <div className="flex flex-col items-center space-y-5 mb-10 px-5 mt-10">
          <span className="text-brand font-semibold  uppercase tracking-wider">FAQs</span>
          <Heading size={4} className=" border-b-4 border-brand">
            {t("faqsSection.faqs")}
          </Heading>
        </div>
        <div>
          <dl className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col">
            {faqs.map((faq, index) => {
              return (
                <div key={index}>
                  <div className="question-and-answer xl:cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg group">
                    <dt className="question">
                      <div
                        onClick={() => toggleAnswerOpen(faq.answer)}
                        className="flex justify-between"
                      >
                        <div className="text-gray-800 font-semibold">{faq.question}</div>
                        <div className="text-gray-600">
                          <i
                            className={`fa fa-chevron-circle-${faq.answerOpen ? "up" : "down"}`}
                          ></i>
                        </div>
                      </div>
                    </dt>
                    <dd
                      className={`answer mt-2 leading-snug text-sm text-gray-700 transition-all duration-150 ${
                        faq.answerOpen ? "opacity-100 h-44 md:h-20" : "opacity-0 h-0"
                      }`}
                    >
                      {faq.answer}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default FAQs;
