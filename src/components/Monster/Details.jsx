const Details = ({ data, isOpen, setIsOpen }) => {
  console.log(data);
  return (
    <>
      <div
        className={`fixed ${
          isOpen ? "z-40 scale-100 opacity-70" : "z-0 scale-0 opacity-0"
        } top-0 left-0 h-screen w-screen bg-black duration-1000 ease-out transition-all`}
      ></div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "scale-100" : "scale-0"
        } fixed z-50 w-screen h-screen top-0 left-0 flex flex-row justify-center items-center text-white delay-200 duration-700 ease-out transition-all`}
      >
        <div className="bg-[#48496A] w-screen lg:w-[60%] h-screen lg:h-[70%] px-3 lg:px-10 py-8 lg:rounded-lg select-none">
          <div className="w-full h-full bg-[#151540] flex flex-col lg:flex-row lg:gap-10 justify-evenly lg:justify-around rounded-lg px-7 lg:px-20 lg:py-20">
            <div className="w-full lg:w-[40%] flex flex-col items-center justify-between gap-5 lg:gap-0">
              <img src={data.image} alt={data.name} className="w-[50%] lg:w-[320px]" />
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-baseline gap-1 lg:gap-2">
                <span className="text-xl lg:text-2xl font-bold tracking-[2px]">{data.name}</span>
                <span className="text-sm font-semibold tracking-[1px]">Lv.{data.lvl}</span>
              </div>
              <div className="flex flex-row justify-center gap-3">
                <span className="bg-[#EA0B8D] py-1 px-3 rounded-lg text-sm font-bold tracking-[3px]">{data.type}</span>
                <span className="bg-[#4F9AA8] py-1 px-3 rounded-lg text-sm font-bold tracking-[3px]">
                  {data.element}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-[38%] flex flex-col justify-between gap-8 lg:gap-0 px-12 lg:p-0">
              <div className="w-full flex flex-row text-sm lg:text-lg lg:font-bold tracking-[2px]">
                <div className="basis-1/2 flex flex-col gap-3">
                  <span>Size</span>
                  <span>HP</span>
                  <span>ATK</span>
                  <span>DEF</span>
                  <span>HIT</span>
                  <span>M-ATK</span>
                  <span>M-DEF</span>
                  <span>Flee</span>
                </div>
                <div className="basis-1/2 flex flex-col gap-3">
                  <span>: {data.size}</span>
                  <span>: {data.hp}</span>
                  <span>: {data.atk}</span>
                  <span>: {data.def}</span>
                  <span>: {data.hit}</span>
                  <span>: {data.matk}</span>
                  <span>: {data.mdef}</span>
                  <span>: {data.flee}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#FF2C2C] rounded-lg py-2 font-bold tracking-[2px] hover:scale-90 transition-all duration-200 hover:brightness-90"
              >
                BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
