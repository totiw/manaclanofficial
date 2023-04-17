import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowIcon from "../../assets/Utils/icons/arrow-right-solid.svg";
import SortIcon from "../../assets/Utils/icons/sort-solid.svg";
// import Details from "./Details";
const Tabel = ({ monsters }) => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState(1);
  const [sortedData, setSortedData] = useState(null);
  // const [breakPoint, setBreakPoint] = useState("desktop");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // SEARCH WITH INPUT
  const handleFilterNum = (event) => {
    const name = event.target.name;
    const filtered = monsters.filter(
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
    const filtered = monsters.filter(
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

  useEffect(() => {
    if (sortedData != null) {
      setSortedData(sortedData.sort(() => sorting));
    } else {
      monsters.sort(() => sorting);
    }
  }, [sorting]);

  // GET DETAILS PER MONSTER
  // const getDetails = (monster) => {
  //   setSelectedData({
  //     ...selectedData,
  //     lvl: monster.lvl,
  //     name: monster.name,
  //     image: monster.image,
  //     size: monster.size,
  //     type: monster.type,
  //     element: monster.element,
  //     hp: monster.hp,
  //     atk: monster.atk,
  //     def: monster.def,
  //     matk: monster.matk,
  //     mdef: monster.mdef,
  //     hit: monster.hit,
  //     flee: monster.flee,
  //   });
  //   setIsDetailOpened(true);
  // };

  // DETECT WINDOW WIDTH
  // const detectWidth = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   if (windowWidth > 576) {
  //     setBreakPoint("desktop");
  //   } else if (windowWidth < 576) {
  //     setBreakPoint("mobile");
  //   }

  //   window.addEventListener("resize", detectWidth);
  // });
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
          DATA <span className="text-[#6BCBDD]">MONSTER</span>
        </h2>
        <span className="w-[20%] lg:w-[15%] h-1 lg:h-2 bg-[#EA0A8C] flex flex-row mt-5"></span>
        <p className="text-white mt-3">Total {sortedData == null ? monsters.length : sortedData.length} Items</p>
      </div>
      <div className="select-none relative overflow-auto z-20 w-full lg:w-[80%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-col relative z-10">
          <div className="w-[1080px] lg:w-full bg-gradient-to-r from-[#6BCBDD] to-[#63469B] background-animate flex flex-row text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg py-5">
            <h2 className={`basis-full`}>#</h2>
            <h2 className={`basis-full`}>Monster</h2>
            {/* Name */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <button
                onClick={() => {
                  setSorting((prev) => prev * -1);
                }}
                className="flex flex-row items-center"
              >
                Name
                {/* <img src={SortIcon} alt="sort icon" className="w-3 opacity-80" /> */}
              </button>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleFilterString}
                className="w-[85%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* TYPE */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>Type</span>
              <select
                name="type"
                id="type"
                onChange={handleFilterString}
                className="w-[85%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold"
              >
                <option value=""></option>
                <option value="undead" className="capitalize">
                  undead
                </option>
                <option value="dragon" className="capitalize">
                  dragon
                </option>
                <option value="angel" className="capitalize">
                  angel
                </option>
                <option value="brute" className="capitalize">
                  brute
                </option>
                <option value="fish" className="capitalize">
                  fish
                </option>
                <option value="plant" className="capitalize">
                  plant
                </option>
                <option value="demon" className="capitalize">
                  demon
                </option>
                <option value="formless" className="capitalize">
                  formless
                </option>
                <option value="insect" className="capitalize">
                  insect
                </option>
              </select>
            </h2>
            {/* ELEMENT */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>ELEMENT</span>
              <select
                name="element"
                id="element"
                onChange={handleFilterString}
                className="w-[85%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold"
              >
                <option value=""></option>
                <option value="dark" className="capitalize">
                  dark
                </option>
                <option value="ghost" className="capitalize">
                  ghost
                </option>
                <option value="holy" className="capitalize">
                  holy
                </option>
                <option value="shadow" className="capitalize">
                  shadow
                </option>
                <option value="fire" className="capitalize">
                  fire
                </option>
                <option value="neutral" className="capitalize">
                  neutral
                </option>
                <option value="undead" className="capitalize">
                  undead
                </option>
                <option value="poison" className="capitalize">
                  poison
                </option>
                <option value="water" className="capitalize">
                  water
                </option>
                <option value="earth" className="capitalize">
                  earth
                </option>
                <option value="wind" className="capitalize">
                  wind
                </option>
              </select>
            </h2>
            {/* SIZE */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>SIZE</span>
              <select
                name="size"
                id="size"
                onChange={handleFilterString}
                className="w-[85%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold"
              >
                <option value=""></option>
                <option value="small" className="capitalize">
                  small
                </option>
                <option value="medium" className="capitalize">
                  medium
                </option>
                <option value="large" className="capitalize">
                  large
                </option>
              </select>
            </h2>
            {/* HP */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>HP</span>
              <input
                type="number"
                name="hp"
                id="hp"
                min={0}
                autoFocus
                onChange={handleFilterString}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* ATK */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>ATK</span>
              <input
                type="number"
                name="atk"
                id="atk"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* DEF */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>DEF</span>
              <input
                type="number"
                name="def"
                id="def"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* HIT */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>HIT</span>
              <input
                type="number"
                name="hit"
                id="hit"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* M-ATK */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>M-ATK</span>
              <input
                type="number"
                name="matk"
                id="matk"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* M-DEF */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>M-DEF</span>
              <input
                type="number"
                name="mdef"
                id="mdef"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* Flee */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>Flee</span>
              <input
                type="number"
                name="flee"
                id="flee"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* LVL */}
            <h2 className={`basis-full flex flex-col items-center gap-3`}>
              <span>LVL</span>
              <input
                type="number"
                name="lvl"
                id="lvl"
                min={0}
                onChange={handleFilterNum}
                className="w-[70%] h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg px-4 text-[#0E101D] font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
              />
            </h2>
            {/* <h2 className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>Info</h2> */}
          </div>
          {sortedData == null
            ? monsters.map((monster, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    monsters.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
                  <p className={`basis-full`}>{index + 1}</p>
                  <div className={`basis-full flex flex-row justify-center`}>
                    <span className="w-[60%]">
                      <LazyLoadImage
                        effect="blur"
                        src={monster.image}
                        alt={monster.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-full`}>{monster.name}</p>
                  <p className="basis-full">{monster.type}</p>
                  <p className="basis-full">{monster.element}</p>
                  <p className="basis-full">{monster.size}</p>
                  <p className="basis-full">{monster.hp}</p>
                  <p className="basis-full">{monster.atk}</p>
                  <p className="basis-full">{monster.def}</p>
                  <p className="basis-full">{monster.hit}</p>
                  <p className="basis-full">{monster.matk}</p>
                  <p className="basis-full">{monster.mdef}</p>
                  <p className="basis-full">{monster.flee}</p>
                  <p className={`basis-full`}>{monster.lvl}</p>
                </div>
              ))
            : sortedData.map((monster, index) => (
                <div
                  key={index}
                  className={`w-[1080px] lg:w-full bg-[#0E101D] flex flex-row items-center text-white text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3 ${
                    sortedData.length == index + 1 ? "border-none rounded-b-lg" : "border-white border-b-2"
                  }`}
                >
                  <p className={`basis-full`}>{index + 1}</p>
                  <div className={`basis-full flex flex-row justify-center`}>
                    <span className="w-[60%]">
                      <LazyLoadImage
                        effect="blur"
                        src={monster.image}
                        alt={monster.name}
                        placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                      />
                    </span>
                  </div>
                  <p className={`basis-full`}>{monster.name}</p>
                  <p className="basis-full">{monster.type}</p>
                  <p className="basis-full">{monster.element}</p>
                  <p className="basis-full">{monster.size}</p>
                  <p className="basis-full">{monster.hp}</p>
                  <p className="basis-full">{monster.atk}</p>
                  <p className="basis-full">{monster.def}</p>
                  <p className="basis-full">{monster.hit}</p>
                  <p className="basis-full">{monster.matk}</p>
                  <p className="basis-full">{monster.mdef}</p>
                  <p className="basis-full">{monster.flee}</p>
                  <p className={`basis-full`}>{monster.lvl}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Tabel;
