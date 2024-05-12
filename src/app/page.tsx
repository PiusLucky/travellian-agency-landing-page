"use client";

import { useState } from "react";
import BlogSection from "@/components/sections/BlogSection";
import DestinationGallerySection from "@/components/sections/DestinationGallerySection";
import FooterSection from "@/components/sections/FooterSection";
import GroupedHeroSection from "@/components/sections/GroupedHeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import PopularDestinationSection from "@/components/sections/PopularDestinationSection";
import SpecialOfferSection from "@/components/sections/SpecialOfferSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TripPlannerSection from "@/components/sections/TripPlannerSection";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main>
      <GroupedHeroSection
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <div className="px-4 xl:px-[182px] flex flex-col gap-8 md:gap-[100px]">
        <div className="pt-8 md:pt-[80px]">
          <PopularDestinationSection />
        </div>

        <SpecialOfferSection />
        <BlogSection />
        <TripPlannerSection />
        <DestinationGallerySection />
        <TestimonialSection />
        <NewsletterSection />
      </div>
      <FooterSection />
    </main>
  );
}
