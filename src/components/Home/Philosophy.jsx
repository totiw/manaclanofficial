import BG from "../../assets/Utils/futuristic-bg.webp";
import Neon from "../../assets/Utils/black-neon.webp";
import { Link as ScrollLink } from "react-scroll";
const Philosophy = () => {
  return (
    <div className="w-full h-48 lg:h-[683px] relative flex flex-row items-center justify-center px-4 lg:px-[100px] text-center text-white mt-10 mb-20">
      <img
        src={Neon}
        alt="mana clan neon black"
        className="absolute z-[2] w-[15%] lg:w-[9%] -top-14 lg:-top-32 left-0"
      />
      <div className="absolute z-[1] w-full h-full bg-black opacity-80"></div>
      <img src={BG} alt="mana futuristic background" className="absolute z-0 w-full h-full" />
      <div className="flex flex-col items-center gap-5 lg:gap-14">
        <blockquote className="z-30 font-bold text-xl lg:text-2xl 2xl:text-4xl select-none lg:tracking-[3px]">
          “TO FACE EVERY OBSTACLE BOTH FROM INSIDE AND OUT AS ONE FAMILY WHICH IS MANA”
        </blockquote>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="z-30 w-24 lg:w-28 2xl:w-[170px] text-xs lg:text-sm 2xl:text-lg font-bold py-2 2xl:py-3 bg-[#4F9AA8] rounded-tr-lg rounded-bl-lg hover:scale-90 duration-300 ease-out transition-all cursor-pointer"
        >
          FIND MORE
        </ScrollLink>
      </div>
    </div>
  );
};

export default Philosophy;
