import React from "react";
import PageHeader from "@/components/pageHeader/pageHeader";
import {
  DonateHero,
  DonateContent,
  DonateCallToAction,
} from "@/components/donate";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/harvest.jpg";

const DonatePage = () => {
  return (
    <>
      <PageHeader title="Donate" image={img} />
      <DonateHero />
      <DonateContent />
      <DonateCallToAction />
    </>
  );
};

export default DonatePage;
