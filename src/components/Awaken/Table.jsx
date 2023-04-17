import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";

const Table = ({ awakens }) => {
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState(null);

  // SORTED WITH INPUT
  const handleFilterString = (event) => {
    const name = event.target.name;
    const filtered = awakens.filter(
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
          DATA <span className="text-[#6BCBDD]">AWAKEN</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? awakens.length : sortedData.length} Items</p>
      </div>
      <div className="relative overflow-auto z-20 w-full lg:w-[80%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg py-5">
            <h2 className={`basis-1/12`}>#</h2>
            <h2 className={`basis-1/12`}>IMAGE</h2>
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
            {/* SLOT */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>SLOT</span>
              <select
                name="slot"
                id="slot"
                value=""
                onChange={handleFilterString}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold"
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
            <h2 className={`basis-3/12 flex flex-col items-center gap-3`}>
              <span>BEFORE AWAKENING</span>
              <input
                type="text"
                name="before"
                id="before"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* UPGRADE LV.1 ~ LV.15 */}
            <h2 className={`basis-2/12 flex flex-col items-center gap-3`}>
              <span>UPGRADE LV.1 ~ LV.15</span>
              <input
                type="text"
                name="upgrade"
                id="upgrade"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* AWAKENING ★/★★/★★★ */}
            <h2 className={`basis-3/12 flex flex-col items-center gap-3`}>
              <span>AWAKENING ★/★★/★★★</span>
              <input
                type="text"
                name="awakening"
                id="awakening"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
          </div>
          {sortedData == null
            ? awakens.map((awaken, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    awakens.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
                  <p className={`basis-1/12`}>{index + 1}</p>
                  <div className={`basis-1/12 flex flex-row justify-center`}>
                    <span className="w-[60%]">
                      <LazyLoadImage
                        effect="blur"
                        src={awaken.image}
                        alt={awaken.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-1/12`}>{awaken.name}</p>
                  <p className="basis-1/12">{awaken.slot}</p>
                  <p className="basis-3/12">{awaken.before}</p>
                  <p className="basis-2/12">{awaken.upgrade}</p>
                  <p className="basis-3/12">{awaken.awakening}</p>
                </div>
              ))
            : sortedData.map((awaken, index) => (
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
                        src={awaken.image}
                        alt={awaken.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-1/12`}>{awaken.name}</p>
                  <p className="basis-1/12">{awaken.slot}</p>
                  <p className="basis-3/12">{awaken.before}</p>
                  <p className="basis-2/12">{awaken.upgrade}</p>
                  <p className="basis-3/12">{awaken.awakening}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Table;
