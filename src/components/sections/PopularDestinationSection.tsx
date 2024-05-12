import React from "react";
import Header from "../common/Header";
import PopularDestinationCard from "../cards/PopularDestinationCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function PopularDestinationSection() {
  const data = [
    {
      title: "Monument of Berlin",
      location: "Berlin, Germany",
      imageUrl: "/images/pd_1.jpg",
    },
    {
      title: "Millennium Bridge",
      location: "London, United Kingdom",
      imageUrl: "/images/pd_2.jpg",
    },
    {
      title: "Rialto Bridge",
      location: "Venice, Italy",
      imageUrl: "/images/pd_3.jpg",
    },
    {
      title: "Millennium Bridge",
      location: "London, United Kingdom",
      imageUrl: "/images/pd_2.jpg",
    },
  ];
  return (
    <section className="">
      <div className="flex  flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Popular Destinations"
            description="Most popular destinations around the world, from historical places to natural wonders."
            isLongUnderline
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              alt="left icon"
              className="w-[40px]"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <PopularDestinationCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PopularDestinationSection;
