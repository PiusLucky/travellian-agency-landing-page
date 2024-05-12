import { cn, playFair } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div>
        <motion.img
          src={imageUrl}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          animate={hover ? { y: -50 } : { y: 0 }}
          alt="city"
          className="h-[399px] w-full object-cover rounded-[26px]"
        />
      </div>
      <motion.div
        animate={hover ? { opacity: 1, y: -30 } : { opacity: 0, y: 0 }}
        className="mt-[20px]"
      >
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
      </motion.div>
    </div>
  );
}

export default TripPlannerCard;
