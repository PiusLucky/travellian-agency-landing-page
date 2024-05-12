import React from "react";
import Header from "../common/Header";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function SpecialOfferSection() {
  const data = [
    {
      imageUrl: "/images/so_1.jpg",
      location: "Lisbon, Portugal",
      description:
        "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      amount: "500",
    },
    {
      imageUrl: "/images/so_2.jpg",
      location: "Athens, Greece",
      description:
        "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      amount: "800",
    },
    {
      imageUrl: "/images/so_3.jpg",
      location: "Rome, Italy",
      description:
        "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      amount: "750",
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between items-end">
        <div>
          <Header
            title="Special Offer"
            description="Check out our special offer and discounts"
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              className="w-[40px]"
              alt="left icon"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="/images/right_icon.svg"
              alt="right icon"
              className="w-[40px]"
            />
          </div>
        </div>
      </div>
      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <SpecialOfferCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SpecialOfferSection;
