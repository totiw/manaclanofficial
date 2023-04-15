import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SearchIcon from "../../assets/Utils/icons/magnifying-glass-solid.svg";
import ChevronIcon from "../../assets/Utils/icons/chevron-down-solid.svg";
const Tabel = ({ monsters, currentMonsters }) => {
  const [query, setQuery] = useState("");
  const [breakPoint, setBreakPoint] = useState("desktop");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
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
    <div className="w-[90%] lg:w-[70%] lg:min-h-[100%] flex flex-col gap-5">
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
        <button className="bg-[#4F9AA8] flex flex-row items-center gap-1 lg:gap-2 text-white font-bold text-sm lg:text-base px-3 lg:px-4 rounded-lg lg:tracking-[1px]">
          Sort by <img src={ChevronIcon} alt="chevron down" className="w-3 lg:w-4" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r h-16 from-[#6BCBDD] to-[#63469B] flex flex-row items-center text-center text-white text-sm lg:text-base font-bold tracking-[1px]">
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
              className="bg-white flex flex-row items-center text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3"
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
                <button className={`bg-[#6BCBDD] px-3 lg:px-5 py-2 rounded-md lg:rounded-lg text-white`}>
                  Details
                </button>
              </div>
            </div>
          ))}
        {query != "" &&
          monsters
            .filter((monster) => monster.name.toLowerCase().includes(query))
            .map((monster, index) => (
              <div
                key={index}
                className="bg-white flex flex-row items-center text-center text-xs lg:text-base font-bold tracking-[1px] py-4 lg:py-3"
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
                  <button className={`bg-[#6BCBDD] px-3 lg:px-5 py-2 rounded-md lg:rounded-lg text-white`}>
                    Details
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Tabel;
