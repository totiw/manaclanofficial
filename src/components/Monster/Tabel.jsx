import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SearchIcon from "../../assets/Utils/icons/magnifying-glass-solid.svg";
import ChevronIcon from "../../assets/Utils/icons/chevron-down-solid.svg";
import Details from "./Details";
const Tabel = ({ query, setQuery, monsters, currentMonsters, sort, setSort }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isDetailOpened, setIsDetailOpened] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [breakPoint, setBreakPoint] = useState("desktop");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const getDetails = (id) => {
    monsters.map((monster) => {
      if (id == monster.id) {
        setSelectedData({
          ...selectedData,
          lvl: monster.lvl,
          name: monster.name,
          image: monster.image,
          size: monster.size,
          type: monster.type,
          element: monster.element,
          hp: monster.hp,
          atk: monster.atk,
          def: monster.def,
          matk: monster.matk,
          mdef: monster.mdef,
          hit: monster.hit,
          flee: monster.flee,
        });
      }
    });
    setIsDetailOpened(true);
  };

  const sortBy = (type) => {
    setSort(type);
    setIsSortOpen(false);
  };

  useEffect(() => {
    if (windowWidth > 576) {
      setBreakPoint("desktop");
    } else if (windowWidth < 576) {
      setBreakPoint("mobile");
    }

    window.addEventListener("resize", detectWidth);
  });
  return (
    <>
      <Details isOpen={isDetailOpened} setIsOpen={setIsDetailOpened} data={selectedData} />
      <div className="relative z-20 w-[90%] lg:w-[70%] lg:min-h-[100%] flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <div className="relative flex flex-row items-center">
            <img
              src={SearchIcon}
              alt="search icon"
              className="bg-white h-8 lg:h-10 w-6 lg:w-7 absolute left-0 pl-2 rounded-l-lg"
            />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search monster.."
              autoFocus
              onChange={(e) => setQuery(e.target.value)}
              className="w-48 lg:w-96 h-8 lg:h-10 focus:ring-0 focus:outline-none rounded-lg pl-10 pr-4 font-semibold placeholder:font-semibold lg:placeholder:tracking-[1px] placeholder:tracking-tighter"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="bg-[#4F9AA8] h-full flex flex-row items-center gap-1 lg:gap-2 text-white font-bold text-sm lg:text-base px-3 lg:px-4 rounded-lg lg:tracking-[1px]"
            >
              {sort == "" ? "Sort by" : sort.toUpperCase()}{" "}
              <img
                src={ChevronIcon}
                alt="chevron down"
                className={`${isSortOpen ? "rotate-180" : "rotate-0"} w-3 lg:w-4 duration-500 ease-out transition-all`}
              />
            </button>
            <div
              className={`${
                isSortOpen ? "h-40 opacity-100" : "h-0 opacity-0"
              } bg-[#EA0A8C] absolute w-full top-full right-0 flex flex-col rounded-lg font-semibold text-white duration-500 ease-in-out transition-all`}
            >
              <button onClick={() => sortBy("lvl")} className="py-2 hover:bg-[#EA0A8C] brightness-110 rounded-t-lg">
                LVL
              </button>
              <button onClick={() => sortBy("type")} className="py-2 hover:bg-[#EA0A8C] brightness-110">
                Type
              </button>
              <button onClick={() => sortBy("hp")} className="py-2 hover:bg-[#EA0A8C] brightness-110">
                HP
              </button>
              <button onClick={() => sortBy("atk")} className="py-2 hover:bg-[#EA0A8C] brightness-110 rounded-b-lg">
                ATK
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-gradient-to-r h-16 from-[#6BCBDD] to-[#63469B] background-animate flex flex-row items-center text-center text-white text-sm lg:text-base font-bold tracking-[1px] rounded-t-lg">
            <h2 className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/6"}`}>LVL</h2>
            <h2 className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>Monster</h2>
            <h2 className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>Name</h2>
            {breakPoint == "desktop" && (
              <>
                <h2 className="basis-[14.2857143%]">Type</h2>
                <h2 className="basis-[14.2857143%]">HP</h2>
                <h2 className="basis-[14.2857143%]">ATK</h2>
              </>
            )}
            <h2 className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>Info</h2>
          </div>
          {query == "" &&
            currentMonsters.map((monster, index) => (
              <div
                key={index}
                className={`${
                  index == currentMonsters.length - 1 ? "rounded-b-lg" : ""
                } bg-white flex flex-row items-center text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3`}
              >
                <p className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/6"}`}>{monster.lvl}</p>
                <div
                  className={`${
                    breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"
                  } flex flex-row justify-center`}
                >
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                    src={monster.image}
                    alt={monster.name}
                    className="w-14"
                  />
                </div>
                <p className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>{monster.name}</p>
                {breakPoint == "desktop" && (
                  <>
                    <p className="basis-[14.2857143%]">{monster.type}</p>
                    <p className="basis-[14.2857143%]">{monster.hp}</p>
                    <p className="basis-[14.2857143%]">{monster.atk}</p>
                  </>
                )}
                <div className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>
                  <button
                    onClick={() => getDetails(monster.id)}
                    className={`bg-gradient-to-r from-[#6BCBDD] to-[#6BCBDD] px-3 lg:px-5 py-2 rounded-md lg:rounded-lg text-white hover:from-[#4F9AA8] hover:to-[#EA0B8D] transition-all duration-500 ease-out`}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          {(query != "" || sort != "") &&
            monsters
              .filter((monster) => monster.name.toLowerCase().includes(query))
              .map((monster, index) => (
                <div
                  key={index}
                  className={`${
                    index == monsters.filter((monster) => monster.name.toLowerCase().includes(query)).length - 1
                      ? "rounded-b-lg"
                      : ""
                  } bg-white flex flex-row items-center text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3`}
                >
                  <p className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/6"}`}>{monster.lvl}</p>
                  <div
                    className={`${
                      breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"
                    } flex flex-row justify-center`}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src={monster.image}
                      alt={monster.name}
                      className="w-14"
                      placeholderSrc={`/src/assets/Identity/mana-logo.webp`}
                    />
                  </div>
                  <p className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>{monster.name}</p>
                  {breakPoint == "desktop" && (
                    <>
                      <p className="basis-[14.2857143%]">{monster.type}</p>
                      <p className="basis-[14.2857143%]">{monster.hp}</p>
                      <p className="basis-[14.2857143%]">{monster.atk}</p>
                    </>
                  )}
                  <div className={`${breakPoint == "desktop" ? "basis-[14.2857143%]" : "basis-1/3"}`}>
                    <button
                      onClick={() => getDetails(monster.id)}
                      className={`bg-gradient-to-r from-[#6BCBDD] to-[#6BCBDD] px-3 lg:px-5 py-2 rounded-md lg:rounded-lg text-white hover:from-[#4F9AA8] hover:to-[#EA0B8D] transition-all duration-500 ease-out`}
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Tabel;
