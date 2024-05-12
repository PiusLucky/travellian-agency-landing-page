import React from "react";

function FooterSection() {
  const menus = ["Home", "Explore", "Travel", "Blog", "Pricing"];
  const informations = [
    "Destinations",
    "Supports",
    "Terms & COnditions",
    "Privacy",
  ];

  const contacts = [
    "+123 456 789",
    "info@travellian.com",
    "1245, New York, USA",
  ];

  const socials = [
    "/images/facebook.png",
    "/images/pinterest.png",
    "/images/instagram.png",
    "/images/twitter.png",
  ];
  return (
    <section className="bg-[#172432] text-white pb-[140px] px-4 xl:px-[182px] flex flex-col gap-8 md:flex-row justify-between pt-[240px]">
      <div>
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <p>Copyright © Travellian 2020 All rights reserved</p>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Menu</p>
        <div className="flex flex-col gap-3">
          {menus.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Information</p>
        <div className="flex flex-col gap-3">
          {informations.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Contact Info</p>
        <div className="flex flex-col gap-3">
          {contacts.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Follow us on</p>
        <div className="flex gap-3 items-center">
          {socials.map((item, index) => (
            <div key={index}>
              <img src={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
