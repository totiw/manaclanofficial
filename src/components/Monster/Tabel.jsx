import SearchIcon from "../../assets/Utils/icons/magnifying-glass-solid.svg";
import ChevronIcon from "../../assets/Utils/icons/chevron-down-solid.svg";
const Tabel = ({ monsters }) => {
  return (
    <div className="lg:w-[60%] lg:min-h-[100%] flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <div className="relative flex flex-row items-center">
          <img src={SearchIcon} alt="search icon" className="bg-white h-10 w-7 absolute left-2 pl-2 rounded-l-lg" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search monster.."
            autoFocus
            className="lg:w-96 h-10 focus:ring-0 focus:outline-none rounded-lg pl-12 pr-4 placeholder:font-semibold placeholder:tracking-[1px]"
          />
        </div>
        <button className="bg-[#4F9AA8] flex flex-row items-center gap-2 text-white font-bold text-base px-4 rounded-lg tracking-[1px]">
          Select by <img src={ChevronIcon} alt="chevron down" className="w-4" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r h-16 from-[#6BCBDD] to-[#63469B] flex flex-row items-center text-center text-white font-bold tracking-[1px]">
          <h2 className="basis-[14.2857143%]">LVL</h2>
          <h2 className="basis-[14.2857143%]">Monster</h2>
          <h2 className="basis-[14.2857143%]">Name</h2>
          <h2 className="basis-[14.2857143%]">Type</h2>
          <h2 className="basis-[14.2857143%]">HP</h2>
          <h2 className="basis-[14.2857143%]">ATK</h2>
          <h2 className="basis-[14.2857143%]">Info</h2>
        </div>
        {monsters.map((monster, index) => (
          <div
            key={index}
            className="bg-white flex flex-row items-center text-center text-sm font-bold tracking-[1px] py-2"
          >
            <p className="basis-[14.2857143%]">{monster.lvl}</p>
            <div className="basis-[14.2857143%] flex flex-row justify-center">
              <img src={monster.image} alt={monster.name} className="w-14" />
            </div>
            <p className="basis-[14.2857143%]">{monster.name}</p>
            <p className="basis-[14.2857143%]">{monster.type}</p>
            <p className="basis-[14.2857143%]">{monster.hp}</p>
            <p className="basis-[14.2857143%]">{monster.atk}</p>
            <button className="basis-[14.2857143%]">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabel;
