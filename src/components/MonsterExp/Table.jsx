import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";

const Table = ({ monsterExp }) => {
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState(null);

  // SORTED WITH INPUT
  const handleFilterNum = (event) => {
    const name = event.target.name;
    const filtered = monsterExp.filter(
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
    const filtered = monsterExp.filter(
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
          DATA <span className="text-[#6BCBDD]">MONSTER EXP</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? monsterExp.length : sortedData.length} Items</p>
      </div>
      <div className="relative overflow-auto z-20 w-full lg:w-[80%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg py-5">
            <h2 className={`basis-1/12`}>#</h2>
            <h2 className={`basis-1/12`}>IMAGE</h2>
            {/* NAME */}
            <h2 className={`basis-1/12 lg:basis-3/12 flex flex-col items-center gap-3`}>
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
            {/* CHAR BASE */}
            <h2 className={`basis-2/12 lg:basis-1/12 flex flex-col items-center gap-3`}>
              <span>CHAR BASE</span>
              <input
                type="text"
                name="char_base"
                id="char_base"
                autoFocus
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* CHAR JOB */}
            <h2 className={`basis-2/12 flex flex-col items-center gap-3`}>
              <span>CHAR JOB</span>
              <input
                type="text"
                name="char_job"
                id="char_job"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* EXP BASE */}
            <h2 className={`basis-2/12 lg:basis-1/12 flex flex-col items-center gap-3`}>
              <span>EXP BASE</span>
              <input
                type="text"
                name="exp_base"
                id="exp_base"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* EXP JOB */}
            <h2 className={`basis-2/12 lg:basis-1/12 flex flex-col items-center gap-3`}>
              <span>EXP JOB</span>
              <input
                type="text"
                name="exp_job"
                id="exp_job"
                onChange={handleFilterString}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* TYPE */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>TYPE</span>
              <input
                type="number"
                name="type"
                id="type"
                onChange={handleFilterNum}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LEVEL */}
            <h2 className={`basis-1/12 flex flex-col items-center gap-3`}>
              <span>LEVEL</span>
              <input
                type="text"
                name="lvl"
                id="lvl"
                onChange={handleFilterNum}
                className="w-[90%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
          </div>
          {sortedData == null
            ? monsterExp.map((monster, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    monsterExp.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
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
                  <p className={`basis-1/12 lg:basis-3/12`}>{monster.name}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.char_base}</p>
                  <p className="basis-2/12">{monster.char_job}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.exp_base}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.exp_job}</p>
                  <p className="basis-1/12">{monster.type}</p>
                  <p className="basis-1/12">{monster.lvl}</p>
                </div>
              ))
            : sortedData.map((monster, index) => (
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
                        src={monster.image}
                        alt={monster.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-1/12 lg:basis-3/12`}>{monster.name}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.char_base}</p>
                  <p className="basis-2/12">{monster.char_job}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.exp_base}</p>
                  <p className="basis-2/12 lg:basis-1/12">{monster.exp_job}</p>
                  <p className="basis-1/12">{monster.type}</p>
                  <p className="basis-1/12">{monster.lvl}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Table;
