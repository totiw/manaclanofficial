import VisionIcon from "../../assets/Utils/icons/eye-solid.svg";
const Vision = () => {
  return (
    <div
      id="vision"
      className="relative flex flex-row overflow-hidden justify-center items-center w-full h-60 lg:h-[550px] bg-[#4F9AA8] text-white"
    >
      <img
        src={VisionIcon}
        alt="vision icon"
        className="absolute top-0 left-0 w-44 lg:w-[400px] 2xl:w-[700px] -translate-y-10 lg:-translate-y-40 2xl:-translate-y-52 -translate-x-7 lg:-translate-x-28 2xl:-translate-x-32 opacity-30"
      />
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between justify-center items-center w-full h-full px-4">
        <h2 className="lg:-rotate-90 font-bold text-3xl lg:text-5xl 2xl:text-7xl lg:tracking-[5px] lg:-translate-x-10 select-none">
          VISION
        </h2>
        <blockquote className="font-bold text-center lg:text-left text-sm lg:text-3xl 2xl:text-4xl lg:w-[950px] tracking-[2px] leading-4 lg:tracking-[5px] select-none">
          “ TO CREATE SOUTH EAST ASIA'S LEADING GAMING COMMUNITY”
        </blockquote>
      </div>
    </div>
  );
};

export default Vision;
