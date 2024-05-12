import React from "react";
import Header from "../common/Header";
import { cn, playFair } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function BlogSection() {
  return (
    <section>
      <div>
        <Header
          title="Our Blog"
          description="An insight into the incredible experience in the world"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-[80px]">
        <div className="w-full">
          <img
            src="/images/blog.jpg"
            alt="feature blog image"
            className="h-[500px] rounded-[26px] w-full object-cover"
          />
        </div>
        <div>
          <p
            className={cn(
              playFair.className,
              "leading-tight text-[30px] md:text-[54px]"
            )}
          >
            Beautiful Italy <br />
            Let&apos;s travel
          </p>
          <p className="py-4">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound the actual teachings of the great
            explorer of the truth, the master- builder of human happiness. No
            one rejects, dislike, or avoids plasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremly painful. Nor
            again is there anyone who loves or pursues.
          </p>

          <div className="text-primary flex items-center gap-3">
            Read More
            <ArrowRight color="#FF7757" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
