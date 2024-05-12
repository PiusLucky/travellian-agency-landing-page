import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import TripPlannerCard from "../cards/TripPlannerCard";

function TripPlannerSection() {
  const data = [
    {
      imageUrl: "/images/tp_1.jpg",
      title: "Guided Tour",
      description: "Paris City Tour",
      amount: "99",
      duration: "7 Days tour",
    },
    {
      imageUrl: "/images/tp_2.jpg",
      title: "Guided Tour II",
      description: "Paris City Tour",
      amount: "99",
      duration: "7 Days tour",
    },
    {
      imageUrl: "/images/tp_3.jpg",
      title: "Guided Tour III",
      description: "Paris City Tour",
      amount: "99",
      duration: "7 Days tour",
    },
    {
      imageUrl: "/images/tp_4.jpg",
      title: "Guided Tour IV",
      description: "Paris City Tour",
      amount: "99",
      duration: "7 Days tour",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <Header
          title="Trip Planners"
          description="20 years from now you will be more disappointed by the things that you didn't do. Stop regretting and start travelling, start throwing off the bowlines."
        />
        <div className="relative inline-block z-10 mt-[35px]">
          <MainButton text="View all trip plans" classes="w-[180px]" />
          <div className="absolute -top-4 -left-4 w-[43px] h-[43px] bg-[#172432] -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-[43px] h-[43px] bg-[#767E86] -z-10"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TripPlannerCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default TripPlannerSection;
