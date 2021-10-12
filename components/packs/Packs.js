import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Button from "../base/Button";
import IntroHero from "../shared/IntroHero";
import ScrollAnimation from "../shared/ScrollAnimation";
import Link from "next/link";
import Heading from "../base/Heading";
import InOutAnimation from "../shared/InOutAnimation";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Packs() {
  const { t } = useTranslation("packs");
  const { locale } = useRouter();

  const packGroups = [
    {
      category: t("websites"),
      packs: [
        {
          name: t("staticWebsite"),
          price: 3500,
          advantages: [
            "1 Entire Product",
            "Free Web Hosting for 1 year",
            "1 Language",
            "Mobile Friendly & responsive Design",
            "2 Month of support",
          ],
          disadvantages: ["No Admin Panel", "No Free Initial SEO", "No Dynamic Data"],
        },
        {
          name: t("ecommerceWebsite"),
          price: 6500,
          oldPrice: 8000,
          popular: true,
          advantages: [
            "1 Entire Product",
            "Free Web Hosting for 1 year",
            "1 Language",
            "Mobile Friendly & responsive Design",
            "2 Month of support",
          ],
          disadvantages: ["No Admin Panel", "No Free Initial SEO", "No Dynamic Data"],
        },
        {
          name: t("webApplication"),
          price: 7500,
          advantages: [
            "1 Entire Product",
            "Free Web Hosting for 1 year",
            "1 Language",
            "Mobile Friendly & responsive Design",
            "2 Month of support",
          ],
          disadvantages: ["No Admin Panel", "No Free Initial SEO", "No Dynamic Data"],
        },
      ],
    },
    {
      category: t("graphicDesign"),
      packs: [],
    },
  ];
  const [selectedPackGroup, setSelectedPackGroup] = useState(packGroups[0]);
  useEffect(() => {
    setSelectedPackGroup(packGroups[0]);
  }, [locale]);

  return (
    <>
      <IntroHero title="Packs" subtitle={t("subtitle")} />
      <ScrollAnimation animation="fade-down">
        <div className="container flex flex-wrap items-start justify-center gap-5 my-8">
          {packGroups.map((packGroup, index) => {
            return (
              <Button
                onClick={() => setSelectedPackGroup(packGroup)}
                outline={selectedPackGroup.category !== packGroup.category}
                key={index}
                variant="brand"
              >
                {packGroup.category}
              </Button>
            );
          })}
        </div>
        <p className="text-gray-600 text-sm font-semibold ml-2 text-center">
          <i className="fa fa-exclamation-circle text-brand mr-2"></i>
          {t("pricesAreNegotiable")} {t("contactUsForMore")}{" "}
          <Link href="/contact">
            <a className="text-brand underline">{t("contactUs")}</a>
          </Link>
        </p>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up">
        <InOutAnimation animation="fade" elementKey={selectedPackGroup.category}>
          <div className="grid grid-cols-3 px-10 xl:px-36 gap-10 space-y-3 mt-14">
            {selectedPackGroup.packs.map((pack, index) => {
              return (
                <div
                  key={index}
                  className={`relative col-span-3 lg:col-span-1 px-7 pt-2 pb-7 border border-gray-50 border-opacity-50   transition-all duration-200 lg:duration-300 rounded-md font-semibold text-lg ${
                    pack.popular
                      ? "shadow-2xl scale-110 bg-brand-gradient text-gray-50"
                      : "bg-gray-50 text-gray-700 shadow-lg"
                  }`}
                >
                  {pack.popular && (
                    <div className="px-5 py-1 absolute -top-3 rounded-full bg-green-500 text-sm">{t("popular")}</div>
                  )}
                  <div className="text-center px-10 py-8">
                    <Heading size={1} noHeight className={pack.popular ? "text-gray-50" : "text-gray-600"}>
                      {pack.name}
                    </Heading>
                    <Heading size={2} noHeight className={`mt-5 ${pack.popular && "text-gray-50"}`}>
                      {pack.price} MAD{" "}
                      {pack.oldPrice && <span className="line-through text-sm">{pack.oldPrice} MAD</span>}
                    </Heading>
                  </div>
                  <div className="text-sm font-semibold space-y-4">
                    {pack.advantages.map((adv, index) => {
                      return (
                        <p key={index}>
                          <i className={`fa fa-check-circle mr-2 ${!pack.popular && "text-green-500"}`}></i> {adv}
                        </p>
                      );
                    })}
                    {pack.disadvantages.map((disadv, index) => {
                      return (
                        <p key={index}>
                          <i className={`fa fa-times  mr-3 ${!pack.popular && "text-red-500"}`}></i> {disadv}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-10">
                    <Link href="/contact">
                      <a>
                        <Button variant="brand" className="w-48">
                          Request
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </InOutAnimation>
      </ScrollAnimation>
    </>
  );
}

export default Packs;
