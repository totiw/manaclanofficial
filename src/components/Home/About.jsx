import { forwardRef } from "react";
import Poster from "../../assets/Utils/mana-poster.webp";
import Brand from "../../assets/Identity/mana-brand.webp";
const About = () => {
  return (
    <div
      id="about"
      className="relative overflow-hidden lg:overflow-visible flex flex-row w-full lg:h-[92vh] text-white"
    >
      <div className="relative flex flex-col lg:h-full lg:w-full z-[1] p-5 lg:py-14 lg:px-24">
        <div className="lg:hidden absolute top-0 bottom-0 left-0 right-0 bg-black opacity-75"></div>
        <h2 className="relative text-2xl lg:text-3xl 2xl:text-5xl text-[#6BCBDD] lg:tracking-[2px] font-bold mb-4 2xl:mb-16 select-none">
          About Mana
        </h2>
        <div className="relative lg:h-full flex flex-col gap-4 2xl:gap-8 text-xs lg:text-sm 2xl:text-xl font-bold">
          <p className="lg:leading-[23.8px] 2xl:leading-[33.8px] lg:tracking-[1px] select-none">
            MANA is Social Community Where Gamers and ifluencer can gather and socialize to form a solid community and
            forum Force For Good mission is to inspire and empower people. We create uplifting Community that encourage
            personal and global well-being, happiness, and respect each others.
          </p>
          <p className="lg:leading-[23.8px] 2xl:leading-[33.8px] lg:tracking-[1px] select-none">
            We will build a healthy and diverse community by pooling our resources, sharing our skills and working
            cooperatively. A community where everyone is respected, well-nourished and adequately housed, where our
            systems thrive and healthcare is available for everyone.
          </p>
          <p className="lg:leading-[23.8px] 2xl:leading-[33.8px] lg:tracking-[1px] select-none">
            MANA started from a pair of friends on Ragnarok X Generation which at that time was looking for comfortable
            community that they can join but, unfortunately they cannot find one so they decided to make their own
            community which is MANA.
          </p>
          <p className="lg:leading-[23.8px] 2xl:leading-[33.8px] lg:tracking-[1px] select-none">
            From then on MANA grew larger and larger , appeals to all type gamers from everywhere within south east
            Asia.
          </p>
        </div>
        <div className="z-[2] relative flex flex-col gap-6 lg:gap-10">
          <div className="h-2 2xl:h-3 w-[60%] lg:w-[80%] bg-[#EA0A8C] mt-7"></div>
          <img src={Brand} alt="mana brand" className="w-24 lg:w-32 2xl:w-60 opacity-20" />
        </div>
      </div>
      <img
        src={Poster}
        alt="mana poster"
        className="absolute lg:relative z-0 -translate-y-64 lg:-translate-y-0 lg:right-0 w-full lg:h-[100%] lg:w-auto"
      />
    </div>
  );
};

export default forwardRef(About);
