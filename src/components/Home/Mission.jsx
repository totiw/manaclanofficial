import MissionIcon from "../../assets/Utils/icons/bullseye-solid.svg";
const Mission = () => {
  return (
    <div
      id="mission"
      className="bg-[#346670] relative overflow-hidden w-full h-[600px] lg:h-[1080px] flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white gap-6 px-4 py-20 lg:px-24"
    >
      <img
        src={MissionIcon}
        alt="Mana "
        className="absolute top-0 right-0 translate-x-8 lg:translate-x-14 -translate-y-8 lg:-translate-y-14 w-44 lg:w-[512px] opacity-30"
      />
      <div className="w-full order-2 lg:order-1 flex flex-col gap-3 lg:gap-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[50px]">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[100px] lg:h-[100px] rounded-full lg:text-[64px] font-bold">
            1
          </span>
          <p className="w-60 lg:w-[762px] text-sm lg:text-[32px] lg:leading-9 font-bold lg:tracking-[3px]">
            To Create a supportive and thriving Community that share common value
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[50px]">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[100px] lg:h-[100px] rounded-full lg:text-[64px] font-bold">
            2
          </span>
          <p className="w-72 w-60 lg:w-[762px] text-sm lg:text-[32px] lg:leading-9 font-bold lg:tracking-[3px]">
            Collaborate with one another, and contribute to the local economy and the well being of community.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[50px]">
          <span className="bg-[#ED6CA9] flex flex-row justify-center items-center w-8 h-8 lg:w-[100px] lg:h-[100px] rounded-full lg:text-[64px] font-bold">
            3
          </span>
          <p className="w-72 w-60 lg:w-[762px] text-sm lg:text-[32px] lg:leading-9 font-bold lg:tracking-[3px]">
            To Maintain a healthy vessel that connect all type of gamers around the world in hopes of achieving a
            similar goals.
          </p>
        </div>
      </div>
      <h2 className="order-1 lg:order-2 lg:rotate-90 font-bold text-3xl lg:text-8xl lg:tracking-[5px] lg:translate-x-28 mb-4 lg:mb-0 select-none">
        MISSION
      </h2>
    </div>
  );
};

export default Mission;
