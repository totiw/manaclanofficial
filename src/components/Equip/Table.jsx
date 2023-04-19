import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
import SortIcon from "../../assets/Utils/icons/sort-solid.svg";
import ManaWM from "../../assets/Utils/mana-wm.webp";

const Table = ({ equips }) => {
  const navigate = useNavigate();
  const [sortDir, setSortDir] = useState(1);
  const [sortBy, setSortBy] = useState("lvl");
  const [sortedData, setSortedData] = useState(null);

  // SORTING
  const handleSort = (value) => {
    setSortBy(value);
    setSortDir((prev) => prev * -1);
  };

  // SORTED WITH INPUT
  const handleFilterNum = (event) => {
    const name = event.target.name;
    const filtered = !sortedData
      ? equips.filter((obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value))
      : sortedData.filter((obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value));
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
    const filtered = !sortedData
      ? equips.filter(
          (obj) => typeof obj[name] === "string" && obj[name].toLowerCase().includes(event.target.value.toLowerCase())
        )
      : sortedData.filter(
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
      <div className="w-full lg:w-[90%] flex flex-col items-center lg:items-start">
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
      <div className="select-none relative overflow-auto z-20 w-full lg:w-[90%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1920px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-[10px] 2xl:text-base font-bold tracking-[1px]">
            <h2 className={`w-[30%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              #
            </h2>
            <h2 className={`w-[80%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              IMAGE
            </h2>
            {/* NAME */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("name")} className="flex flex-row items-center gap-1">
                NAME
                {/* <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" /> */}
              </button>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LEVEL */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("lvl")} className="flex flex-row items-center gap-1">
                LEVEL
                {/* <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" /> */}
              </button>
              <input
                type="text"
                name="lvl"
                id="lvl"
                onChange={handleFilterNum}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* POWER */}
            <h2 className={`w-[60%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("power")} className="flex flex-row items-center gap-1">
                POWER
                {/* <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" /> */}
              </button>
              <input
                type="text"
                name="power"
                id="power"
                onChange={handleFilterNum}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* TYPE */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>TYPE</span>
              <input
                type="text"
                name="type"
                id="type"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* JOB */}
            <h2 className={`w-[250%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>JOB</span>
              <input
                type="text"
                name="job"
                id="job"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* SLOT */}
            <h2 className={`w-[60%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>SLOT</span>
              <input
                type="text"
                name="slot"
                id="slot"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* DESC */}
            <h2 className={`w-[150%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              DESC
            </h2>
            {/* CRAFT */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              CRAFT
            </h2>
          </div>
          <div className="h-[500px] w-[1920px] lg:w-full overflow-auto scrollbar-hide">
            {sortedData == null
              ? equips
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((equip, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1920px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        equips.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[30%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[80%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={equip.image}
                            alt={equip.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {equip.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.lvl}
                      </p>
                      <p className="w-[60%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.power}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.type}
                      </p>
                      <p className="w-[250%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.job}
                      </p>
                      <p className="w-[60%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.slot}
                      </p>
                      <p className="w-[150%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.desc}
                      </p>
                      <div
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
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
                          <p className="text-sm">No Image Displayed</p>
                        )}
                      </div>
                    </div>
                  ))
              : sortedData
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((equip, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1920px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        equips.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[30%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[80%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={equip.image}
                            alt={equip.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {equip.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.lvl}
                      </p>
                      <p className="w-[60%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.power}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.type}
                      </p>
                      <p className="w-[250%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.job}
                      </p>
                      <p className="w-[60%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.slot}
                      </p>
                      <p className="w-[150%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {equip.desc}
                      </p>
                      <div
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
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
                          <p className="text-sm">No Image Displayed</p>
                        )}
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
