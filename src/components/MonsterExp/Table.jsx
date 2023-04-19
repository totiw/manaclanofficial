import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
import SortIcon from "../../assets/Utils/icons/sort-solid.svg";
import ManaWM from "../../assets/Utils/mana-wm.webp";

const Table = ({ monsterExp }) => {
  const navigate = useNavigate();
  const [sortDir, setSortDir] = useState(1);
  const [sortBy, setSortBy] = useState("lvl");
  const [sortedData, setSortedData] = useState(null);

  // SORTING
  const handleSort = (value) => {
    setSortBy(value);
    setSortDir((prev) => prev * -1);
  };

  // SEARCH WITH INPUT
  const handleFilterNum = (event) => {
    const name = event.target.name;
    const filtered = !sortedData
      ? monsterExp.filter((obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value))
      : sortedData.filter((obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value));
    if (event.target.value == "") {
      setSortedData(null);
    } else {
      setSortedData(filtered);
    }
  };
  const handleFilterString = (event) => {
    const name = event.target.name;
    const filtered = !sortedData
      ? monsterExp.filter(
          (obj) => typeof obj[name] === "string" && obj[name].toLowerCase().includes(event.target.value.toLowerCase())
        )
      : sortedData.filter(
          (obj) => typeof obj[name] === "string" && obj[name].toLowerCase().includes(event.target.value.toLowerCase())
        );
    if (event.target.value.toLowerCase() == "") {
      setSortedData(null);
    } else {
      setSortedData(filtered);
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
          DATA <span className="text-[#6BCBDD]">MONSTER EXP</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? monsterExp.length : sortedData.length} Items</p>
      </div>
      <div className="select-none relative overflow-auto z-20 w-full lg:w-[90%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-[10px] 2xl:text-base font-bold tracking-[1px]">
            <h2 className={`w-[20%] border border-white py-5 px-2 lg:px-2 2xl:px-3`}>#</h2>
            <h2 className={`w-[40%] border border-white py-5 px-2 lg:px-2 2xl:px-3`}>IMAGE</h2>
            {/* NAME */}
            <h2 className={`w-[150%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("name")} className="flex flex-row items-center gap-1">
                NAME
                {/* <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" /> */}
              </button>
              <input
                type="text"
                name="name"
                id="name"
                autoFocus
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
            {/* EXP BASE */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>EXP BASE</span>
              <input
                type="text"
                name="exp_base"
                id="exp_base"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* EXP JOB */}
            <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>EXP JOB</span>
              <input
                type="text"
                name="exp_job"
                id="exp_job"
                onChange={handleFilterString}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* TYPE */}
            {/* <h2 className={`w-[100%] border border-white py-5 px-2 lg:px-2 2xl:px-3 flex flex-col items-center gap-3`}>
              <span>TYPE</span>
              <input
                type="text"
                name="type"
                id="type"
                onChange={handleFilterNum}
                className="w-full h-8 lg:h-6 2xl:h-10 focus:ring-0 focus:outline-none rounded-sm px-4 lg:px-2 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2> */}
          </div>
          <div className="h-[500px] w-[1920px] lg:w-full overflow-auto scrollbar-hide">
            {sortedData == null
              ? monsterExp
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((monster, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1080px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        monsterExp.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[20%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[40%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={monster.image}
                            alt={monster.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[150%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        {monster.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.lvl}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.exp_base}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.exp_job}
                      </p>
                      {/* <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                      {monster.type}
                    </p> */}
                    </div>
                  ))
              : sortedData
                  .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                  .map((monster, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden w-[1080px] lg:w-full ${
                        index % 2 != 0 ? "bg-[#ffffff]" : "bg-[#dcdcdc]"
                      } flex flex-row items-center text-[#151540] text-center text-xs lg:text-[10px] 2xl:text-xs font-bold tracking-[1px] ${
                        monsterExp.length == index + 1 ? "border-white border-b-2" : ""
                      }`}
                    >
                      <img
                        src={ManaWM}
                        alt="mana watermark"
                        className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                      />
                      <p
                        className={`w-[20%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        {index + 1}
                      </p>
                      <div
                        className={`w-[40%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        <span className="w-[60%]">
                          <LazyLoadImage
                            effect="blur"
                            src={monster.image}
                            alt={monster.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      </div>
                      <p
                        className={`w-[150%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20`}
                      >
                        {monster.name}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.lvl}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.exp_base}
                      </p>
                      <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                        {monster.exp_job}
                      </p>
                      {/* <p className="w-[100%] flex flex-row justify-center items-center border-x border-y-0 border-[#b6b6b6] py-5 px-2 lg:py lg:px-2 2xl:px-3 h-20">
                  {monster.type}
                </p> */}
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
