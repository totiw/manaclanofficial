import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
const Table = ({ equips }) => {
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState(null);

  // SORTED WITH INPUT
  const handleFilterNum = (event) => {
    const name = event.target.name;
    const filtered = equips.filter(
      (obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value)
    );
    if (event.target.value == "") {
      setSortedData(null);
      // setIsDataChanging(false);
    } else {
      setSortedData(filtered);
      // setIsDataChanging(true);
    }
  };

  const handleFilterString = (event) => {
    const name = event.target.name;
    const filtered = equips.filter(
      (obj) => typeof obj[name] === "string" && obj[name].toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value.toLowerCase() == "") {
      setSortedData(null);
      // setIsDataChanging(false);
    } else {
      setSortedData(filtered);
      // setIsDataChanging(true);
    }
  };
  return (
    <>
      <div className="w-full lg:w-[80%] flex flex-col items-center lg:items-start">
        <span
          onClick={() => navigate(-1)}
          className="hidden w-8 lg:flex flex-row rotate-180 mb-5 lg:-translate-x-10 cursor-pointer"
        >
          <img src={ArrowIcon} alt="arrow icon" />
        </span>
        <h2 className="mt-5 flex flex-row justify-center lg:justify-start gap-3 tracking-[1px] text-2xl lg:text-4xl font-bold text-white select-none">
          DATA <span className="text-[#6BCBDD]">EQUIP</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? equips.length : sortedData.length} Items</p>
      </div>
      <div className="relative overflow-auto z-20 w-full lg:w-[80%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg py-5">
            <h2 className={`basis-1/12`}>#</h2>
            <h2 className={`basis-1/12`}>Equip</h2>
            {/* NAME */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>NAME</span>
              <input
                type="text"
                name="name"
                id="name"
                autoFocus
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LEVEL */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>LEVEL</span>
              <input
                type="number"
                name="lvl"
                id="lvl"
                onChange={handleFilterNum}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* POWER */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>POWER</span>
              <input
                type="number"
                name="power"
                id="power"
                onChange={handleFilterNum}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* TYPE */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>TYPE</span>
              <input
                type="text"
                name="type"
                id="type"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* JOB */}
            <h2 className={`basis-3/12 flex flex-col items-center gap-3`}>
              <span>JOB</span>
              <input
                type="text"
                name="job"
                id="job"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* SLOT */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>SLOT</span>
              <input
                type="number"
                name="slot"
                id="slot"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* CRAFT */}
            <h2 className={`basis-2/12`}>CRAFT</h2>
          </div>
          {sortedData == null
            ? equips.map((equip, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    equips.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
                  <p className={`basis-1/12`}>{index + 1}</p>
                  <div className={`basis-1/12 flex flex-row justify-center`}>
                    <span className="w-[60%]">
                      <LazyLoadImage
                        effect="blur"
                        src={equip.image}
                        alt={equip.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-1/12`}>{equip.name}</p>
                  <p className="basis-1/12">{equip.lvl}</p>
                  <p className="basis-1/12">{equip.power}</p>
                  <p className="basis-1/12">{equip.type}</p>
                  <p className="basis-3/12">{equip.job}</p>
                  <p className="basis-1/12">{equip.slot}</p>
                  <div className={`basis-2/12 flex flex-row justify-center`}>
                    {equip.craft ? (
                      <span className="w-[60%]">
                        <LazyLoadImage
                          effect="blur"
                          src={equip.craft}
                          alt={equip.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    ) : (
                      <p>No Image Displayed</p>
                    )}
                  </div>
                </div>
              ))
            : sortedData.map((equip, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    sortedData.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
                  <p className={`basis-1/12`}>{index + 1}</p>
                  <div className={`basis-1/12 flex flex-row justify-center`}>
                    <span className="w-[60%]">
                      <LazyLoadImage
                        effect="blur"
                        src={equip.image}
                        alt={equip.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-1/12`}>{equip.name}</p>
                  <p className="basis-1/12">{equip.lvl}</p>
                  <p className="basis-1/12">{equip.power}</p>
                  <p className="basis-1/12">{equip.type}</p>
                  <p className="basis-3/12">{equip.job}</p>
                  <p className="basis-1/12">{equip.slot}</p>
                  <div className={`basis-2/12 flex flex-row justify-center`}>
                    {equip.craft ? (
                      <span className="w-[60%]">
                        <LazyLoadImage
                          effect="blur"
                          src={equip.craft}
                          alt={equip.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    ) : (
                      <p>No Image Displayed</p>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Table;