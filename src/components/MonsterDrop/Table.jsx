import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
import SortIcon from "../../assets/Utils/icons/sort-solid.svg";
import ManaWM from "../../assets/Utils/mana-wm.webp";

const Table = ({ monsterDrop }) => {
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
      ? monsterDrop.filter((obj) => typeof obj[name] === "number" && obj[name].toString().includes(event.target.value))
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
      ? monsterDrop.filter(
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
      <div className="w-full lg:w-[80%] flex flex-col items-center lg:items-start">
        <span
          onClick={() => navigate(-1)}
          className="hidden w-8 lg:flex flex-row rotate-180 mb-5 lg:-translate-x-10 cursor-pointer"
        >
          <img src={ArrowIcon} alt="arrow icon" />
        </span>
        <h2 className="mt-5 flex flex-row justify-center lg:justify-start gap-3 tracking-[1px] text-2xl lg:text-4xl font-bold text-white select-none">
          DATA <span className="text-[#6BCBDD]">MONSTER DROP</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? monsterDrop.length : sortedData.length} Items</p>
      </div>
      <div className="select-none relative overflow-auto z-20 w-full lg:w-[80%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg py-5">
            <h2 className={`basis-1/12`}>#</h2>
            <h2 className={`basis-1/12`}>IMAGE</h2>
            {/* NAME */}
            <h2 className={`basis-1/12 lg:basis-1/12 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("name")} className="flex flex-row items-center gap-1">
                NAME
                <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" />
              </button>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* BASE */}
            <h2 className={`basis-1/12 lg:basis-1/12 flex flex-col items-center gap-3`}>
              <span>BASE</span>
              <input
                type="text"
                name="base"
                id="base"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* EXP */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>EXP</span>
              <input
                type="text"
                name="exp"
                id="exp"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LOCATION */}
            <h2 className={`basis-1/12 lg:basis-3/12 flex flex-col items-center gap-3`}>
              <span>LOCATION</span>
              <input
                type="text"
                name="location"
                id="location"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LEVEL */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <button onClick={() => handleSort("lvl")} className="flex flex-row items-center gap-1">
                LEVEL
                <img src={SortIcon} alt="sort icon" className="w-4 opacity-80" />
              </button>
              <input
                type="text"
                name="lvl"
                id="lvl"
                onChange={handleFilterNum}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* DROP */}
            <h2 className={`basis-2/12 flex flex-col items-center gap-3`}>DROP</h2>
            {/* DROP PLUS */}
            <h2 className={`basis-3/12 flex flex-col items-center gap-3`}>PLUS</h2>
          </div>
          {sortedData == null
            ? monsterDrop
                .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                .map((monster, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                      monsterDrop.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                    }`}
                  >
                    <img
                      src={ManaWM}
                      alt="mana watermark"
                      className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                    />
                    <p className={`basis-1/12`}>{index + 1}</p>
                    <div className={`basis-1/12 flex flex-row justify-center`}>
                      <span className="w-[60%]">
                        <LazyLoadImage
                          effect="blur"
                          src={monster.image}
                          alt={monster.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    </div>
                    <p className={`basis-1/12 lg:basis-1/12`}>{monster.name}</p>
                    <p className="basis-1/12 lg:basis-1/12">{monster.base}</p>
                    <p className="basis-1/12">{monster.exp}</p>
                    <p className="basis-1/12 lg:basis-3/12">{monster.location}</p>
                    <p className="basis-1/12">{monster.lvl}</p>
                    <div className={`basis-2/12 flex flex-row justify-center`}>
                      <span className="w-[80%]">
                        <LazyLoadImage
                          effect="blur"
                          src={monster.drop}
                          alt={monster.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    </div>
                    <div className="min-h-[200px] basis-3/12 flex flex-col items-center justify-center gap-1 flex-wrap">
                      {monster.dropplus.map((drop, index) => (
                        <span className="w-[40%]" key={index}>
                          <LazyLoadImage
                            effect="blur"
                            src={drop}
                            alt={monster.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ))
            : sortedData
                .sort((a, b) => (a[sortBy] > b[sortBy] ? sortDir : sortDir * -1))
                .map((monster, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                      sortedData.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                    }`}
                  >
                    <img
                      src={ManaWM}
                      alt="mana watermark"
                      className="absolute w-full bg-blend-overlay opacity-10 -translate-y-8"
                    />
                    <p className={`basis-1/12`}>{index + 1}</p>
                    <div className={`basis-1/12 flex flex-row justify-center`}>
                      <span className="w-[60%]">
                        <LazyLoadImage
                          effect="blur"
                          src={monster.image}
                          alt={monster.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    </div>
                    <p className={`basis-1/12 lg:basis-1/12`}>{monster.name}</p>
                    <p className="basis-1/12 lg:basis-1/12">{monster.base}</p>
                    <p className="basis-1/12">{monster.exp}</p>
                    <p className="basis-1/12 lg:basis-3/12">{monster.location}</p>
                    <p className="basis-1/12">{monster.lvl}</p>
                    <div className={`basis-2/12 flex flex-row justify-center`}>
                      <span className="w-[80%]">
                        <LazyLoadImage
                          effect="blur"
                          src={monster.drop}
                          alt={monster.name}
                          placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                        />
                      </span>
                    </div>
                    <div className="min-h-[200px] basis-3/12 flex flex-col items-center justify-center flex-wrap">
                      {monster.dropplus.map((drop) => (
                        <span className="w-[30%]">
                          <LazyLoadImage
                            effect="blur"
                            src={drop}
                            alt={monster.name}
                            placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </>
  );
};

export default Table;
