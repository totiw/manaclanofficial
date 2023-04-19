import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
import SortIcon from "../../assets/Utils/icons/sort-solid.svg";
import ManaWM from "../../assets/Utils/mana-wm.webp";

const Table = ({ awakens }) => {
  const navigate = useNavigate();
  const [sortDir, setSortDir] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortedData, setSortedData] = useState(null);

  // SORTING
  const handleSort = (value) => {
    setSortBy(value);
    setSortDir((prev) => prev * -1);
  };

  // SEARCH WITH INPUT
  const handleFilterString = (event) => {
    const name = event.target.name;
    const filtered = !sortedData
      ? awakens.filter(
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
          DATA <span className="text-[#6BCBDD]">AWAKEN</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? awakens.length : sortedData.length} Items</p>
      </div>
      <div className="select-none relative overflow-auto z-20 w-full lg:w-[90%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-[10px] 2xl:text-base font-bold tracking-[1px]">
            <h2 className={`w-[20%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              #
            </h2>
            <h2 className={`w-[40%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
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
            {/* SLOT */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("slot")} className="flex flex-row items-center gap-1">
                SLOT
                {/* <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" /> */}
              </button>
              <select
                name="slot"
                id="slot"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold"
              >
                <option value=""></option>
                <option value="Muffler" className="capitalize">
                  Muffler
                </option>
                <option value="Armor" className="capitalize">
                  Armor
                </option>
                <option value="Face" className="capitalize">
                  Face
                </option>
                <option value="Mouth" className="capitalize">
                  Mouth
                </option>
                <option value="Secondary" className="capitalize">
                  Secondary
                </option>
                <option value="Headgear" className="capitalize">
                  Headgear
                </option>
                <option value="Accessory" className="capitalize">
                  Accessory
                </option>
                <option value="Back" className="capitalize">
                  Back
                </option>
                <option value="Shoes" className="capitalize">
                  Shoes
                </option>
                <option value="Weapon" className="capitalize">
                  Weapon
                </option>
              </select>
            </h2>
            {/* BEFORE AWAKENING */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>BEFORE AWAKENING</span>
              <input
                type="text"
                name="before"
                id="before"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* UPGRADE LV.1 ~ LV.15 */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>UPGRADE LV.1 ~ LV.15</span>
              <input
                type="text"
                name="upgrade"
                id="upgrade"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* AWAKENING ★/★★/★★★ */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>AWAKENING ★/★★/★★★</span>
              <input
                type="text"
                name="awakening"
                id="awakening"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
          </div>
          <div className="h-[500px] w-[1920px] lg:w-full overflow-auto scrollbar-hide">
            {sortedData == null
              ? awakens
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((awaken, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1080px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        awakens.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[20%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[40%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={awaken.image}
                            alt={awaken.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {awaken.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.slot}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.before}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.upgrade}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.awakening}
                      </p>
                    </div>
                  ))
              : sortedData
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((awaken, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1080px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        awakens.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[20%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[40%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={awaken.image}
                            alt={awaken.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32`}
                      >
                        {awaken.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.slot}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.before}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.upgrade}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py-2 lg:px-2 2xl:px-3 h-32 lg:h-32">
                        {awaken.awakening}
                      </p>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
