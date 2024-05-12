import { cn, playFair } from "@/lib/utils";
import React from "react";

interface IProps {
  title: string;
  description: string;
  isLongUnderline?: boolean;
}

function Header({ title, description, isLongUnderline = true }: IProps) {
  return (
    <div>
      <p className={cn(playFair.className, "text-[30px] md:text-[64px]")}>
        {title}
      </p>
      {isLongUnderline ? (
        <div className="w-[300px] h-1 bg-primary my-4 mt-0"></div>
      ) : (
        <div className="w-[100px] h-1 bg-primary my-4 mt-0"></div>
      )}
      <p className="text-customGray">{description}</p>
    </div>
  );
}

export default Header;
