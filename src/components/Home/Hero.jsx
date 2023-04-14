import { useState, useEffect } from "react";
import Logo from "../../assets/Identity/mana-logo.webp";
import Brand from "../../assets/Identity/mana-brand.webp";
import Neon from "../../assets/Utils/black-neon.webp";

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="hero" className="w-full flex flex-col items-center gap-5 lg:gap-11 mt-2 mb-10 lg:pt-14 lg:pb-24">
        <img
          src={Neon}
          alt="mana clan neon black"
          className={`absolute z-20 top-[80px] right-0 w-[15%] lg:w-[9%] translate-y-[${scrollPos * 0.5}px]`}
        />

        {/* Logo & Brand */}
        <img src={Logo} alt="Logo Mana Clan" className="w-[50%] lg:w-[20%]" />
        <img src={Brand} alt="Brand Mana Clan" className="w-[30%] lg:w-[12%]" />
      </div>
    </>
  );
};

export default Hero;
