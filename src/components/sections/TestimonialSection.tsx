import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/t_1.png",
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      name: "John Doe",
      position: "Accountant",
    },
    {
      imageUrl: "/images/t_2.png",
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      name: "John Smith",
      position: "Journalist, HWO News",
    },
    {
      imageUrl: "/images/t_3.png",
      review:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      name: "Tamara Bellis",
      position: "Managing Director, JTH",
    },
  ];
  return (
    <section>
      <div className="flex  flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Traveler's Experiences"
            description="Here some awesome feedback from our travelers"
            isLongUnderline
          />
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TestimonialCard {...item} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-16 md:mt-[100px]">
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
    </section>
  );
}

export default TestimonialSection;
