import { cn, playFair } from "@/lib/utils";
import { MapPin } from "lucide-react";
import React from "react";

interface IProps {
  title: string;
  location: string;
  imageUrl: string;
}

function PopularDestinationCard({ title, location, imageUrl }: IProps) {
  return (
    <div className="relative ">
      <img
        src={imageUrl}
        className="h-[500px] rounded-[26px] object-cover w-full"
      />
      <div className="absolute bottom-8 left-4">
        <p
          className={cn(
            playFair.className,
            "text-[28px] text-white font-medium"
          )}
        >
          {title}
        </p>
        <div className="text-[24px] text-white mt-4 flex items-center">
          <MapPin color="#fff" />
          &nbsp;{location}
        </div>
      </div>
    </div>
  );
}

export default PopularDestinationCard;
