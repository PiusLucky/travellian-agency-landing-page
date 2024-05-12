"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import HeroSection from "./HeroSection";

interface IProps {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
}

function GroupedHeroSection({ currentIndex, setCurrentIndex }: IProps) {
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);

  const getCurrentBackground = () => {
    if (currentIndex === 0) {
      return "bg-hero";
    } else if (currentIndex === 1) {
      return "bg-hero-2";
    } else {
      return "bg-hero-3";
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(currentIndex);
      if (currentIndex === 2) {
        setCurrentIndex(0);
        return;
      }

      setCurrentIndex(currentIndex + 1);
    }, 10000);

    if (pauseAutoPlay) {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, pauseAutoPlay]);

  return (
    <div
      className={`flex flex-col w-full ${getCurrentBackground()} md:h-screen bg-no-repeat bg-bottom`}
    >
      <NavBar />
      <HeroSection
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setPauseAutoPlay={setPauseAutoPlay}
      />
    </div>
  );
}

export default GroupedHeroSection;
