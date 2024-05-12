"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [currentIndex, _] = useState(0);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = ["Home", "Explore", "Travel", "Blog", "Pricing"];

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-transparent p-4">
        <div className="flex justify-between mx-8 xl:mx-[184px] items-center">
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((link, index) => (
              <div key={index}>
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
                >
                  {link}
                </p>
                {currentIndex === index && (
                  <div className="w-12 h-1 bg-primary"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <Link
              href="/auth/login"
              className="hover:text-primary text-white cursor-pointer flex items-center gap-2 "
            >
              Login
            </Link>

            <MainButton
              text="Signup"
              classes="bg-primary rounded-[12px] w-[134px]"
            />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden  fixed top-0 w-full z-[999] py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : "bg-transparent"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[7rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                size={40}
                color="#fff"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <div key={index}>
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
                  >
                    {link}
                  </p>
                  {currentIndex === index && (
                    <div className="w-12 h-1 bg-primary"></div>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[40px] select-none">
                <Link
                  href="/auth/login"
                  className="hover:text-primary text-white cursor-pointer flex items-center gap-2 "
                >
                  Login
                </Link>

                <MainButton
                  text="Signup"
                  classes="bg-[#B63E22] rounded-[12px] w-[134px]"
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
