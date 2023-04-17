import { Link } from "react-router-dom";
import Console from "../../assets/Utils/console.webp";
import Neon from "../../assets/Utils/black-neon.webp";
import Facebook from "../../assets/Socials/facebook.webp";
import Instagram from "../../assets/Socials/instagram.webp";
import Youtube from "../../assets/Socials/youtube.webp";
import Discord from "../../assets/Socials/discord.webp";
const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full h-72 bg-[#07080B] lg:h-[750px] flex flex-row justify-between items-center px-6 lg:px-[200px]"
    >
      <img src={Neon} alt="mana clan neon black" className="absolute top-0 right-0 w-20 lg:w-60 opacity-70" />
      <div className="flex flex-col gap-3 lg:gap-10">
        <div className="flex flex-row items-center gap-3 lg:gap-10">
          <img src={Facebook} alt="facebook icon" className="w-[22px] lg:w-[64px]" />
          <p className="text-white text-[12px] lg:text-3xl font-bold lg:tracking-[2px]">Manaclanid</p>
        </div>
        <div className="flex flex-row items-center gap-3 lg:gap-10">
          <img src={Instagram} alt="facebook icon" className="w-[22px] lg:w-[64px]" />
          <p className="text-white text-[12px] lg:text-3xl font-bold lg:tracking-[2px]">
            <Link to="https://www.instagram.com/manaclanid/" target="_blank">
              Manaclanid
            </Link>
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 lg:gap-10">
          <img src={Youtube} alt="facebook icon" className="w-[22px] lg:w-[64px]" />
          <p className="text-white text-[12px] lg:text-3xl font-bold lg:tracking-[2px]">Mana Gaming id</p>
        </div>
        <div className="flex flex-row items-center gap-3 lg:gap-10">
          <img src={Discord} alt="facebook icon" className="w-[22px] lg:w-[64px]" />
          <p className="text-white text-[12px] lg:text-3xl font-bold lg:tracking-[2px]">Mana Gaming id</p>
        </div>
      </div>
      <img src={Console} alt="Mana console" className="w-20 lg:w-96 h-20 lg:h-96 -rotate-12" />
    </div>
  );
};

export default Contact;
