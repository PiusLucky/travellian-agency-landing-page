import { cn, playFair } from "@/lib/utils";
import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  amount: string;
  duration: string;
}

function TripPlannerCard({
  imageUrl,
  title,
  description,
  amount,
  duration,
}: IProps) {
  return (
    <div>
      <div>
        <img
          src={imageUrl}
          alt="city"
          className="h-[399px] w-full object-cover rounded-[26px]"
        />
      </div>
      <div className="mt-[20px]">
        <div className="flex justify-between text-[#172432]">
          <p className="uppercase text-[18px]">{title}</p>
          <p>€{amount}/Day</p>
        </div>
        <p
          className={cn(
            playFair.className,
            "font-semibold text-[28px] py-[12px]"
          )}
        >
          {description}
        </p>
        <div className="flex justify-between">
          <div>
            <img src="/images/star_group.png" alt="star group" />
          </div>
          <p className="text-[18px]">{duration}</p>
        </div>
      </div>
    </div>
  );
}

export default TripPlannerCard;
