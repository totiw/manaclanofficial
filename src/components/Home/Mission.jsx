import MissionIcon from "../../assets/Utils/icons/bullseye-solid.svg";
const Mission = () => {
  return (
    <div
      id="mission"
      className="bg-[#346670] relative overflow-hidden w-full h-[600px] lg:h-[92vh] flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white gap-6 px-4 py-20 lg:px-24"
    >
      <img
        src={MissionIcon}
        alt="Mana "
        className="absolute top-0 right-0 translate-x-8 lg:translate-x-14 -translate-y-8 lg:-translate-y-14 w-44 lg:w-[512px] opacity-30"
      />
      <div className="w-full order-2 lg:order-1 flex flex-col gap-3 lg:gap-14 2xl:gap-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[50px] 2xl:w-[70px] lg:h-[50px] 2xl:h-[70px] rounded-full lg:text-xl 2xl:text-4xl font-bold">
            1
          </span>
          <p className="w-80 lg:w-[700px] 2xl:w-[900px] text-sm lg:text-lg 2xl:text-2xl 2xl:leading-9 font-bold lg:tracking-[1px]">
            To Create a supportive and thriving Community that share common value
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[50px] 2xl:w-[70px] lg:h-[50px] 2xl:h-[70px] rounded-full lg:text-xl 2xl:text-4xl font-bold">
            2
          </span>
          <p className="w-80 lg:w-[700px] 2xl:w-[900px] text-sm lg:text-lg 2xl:text-2xl 2xl:leading-9 font-bold lg:tracking-[1px]">
            Collaborate with one another, and contribute to the local economy and the well being of community.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[50px] 2xl:w-[70px] lg:h-[50px] 2xl:h-[70px] rounded-full lg:text-xl 2xl:text-4xl font-bold">
            3
          </span>
          <p className="w-80 lg:w-[700px] 2xl:w-[900px] text-sm lg:text-lg 2xl:text-2xl 2xl:leading-9 font-bold lg:tracking-[1px]">
            To Maintain a healthy vessel that connect all type of gamers around the world in hopes of achieving a
            similar goals.
          </p>
        </div>
      </div>
      <h2 className="order-1 lg:order-2 lg:rotate-90 font-bold text-3xl lg:text-5xl 2xl:text-7xl lg:tracking-[5px] lg:translate-x-28 mb-4 lg:mb-0 select-none">
        MISSION
      </h2>
    </div>
  );
};

export default Mission;
