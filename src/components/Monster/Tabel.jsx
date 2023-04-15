const Tabel = ({ monsters }) => {
  return (
    <div className="lg:w-[60%] lg:min-h-[100%] flex flex-col bg-green-400">
      <div className="flex flex-row">
        <input type="text" name="search" id="search" className="w-[400px]" />
        <button className="bg-[#4F9AA8]">Select by</button>
      </div>
      <div className="flex flex-col">
        <div className="bg-red-400 flex flex-row text-center">
          <h2 className="basis-[14.2857143%]">LVL</h2>
          <h2 className="basis-[14.2857143%]">Monster</h2>
          <h2 className="basis-[14.2857143%]">Name</h2>
          <h2 className="basis-[14.2857143%]">Type</h2>
          <h2 className="basis-[14.2857143%]">HP</h2>
          <h2 className="basis-[14.2857143%]">ATK</h2>
          <h2 className="basis-[14.2857143%]">Info</h2>
        </div>
        <h2>{monsters.length}</h2>
        {monsters.map((monster, index) => (
          <div key={index} className="bg-blue-500 flex flex-row text-center">
            <p className="basis-[14.2857143%]">{monster.lvl}</p>
            <div className="basis-[14.2857143%] flex flex-row justify-center">
              <img src={monster.image} alt={monster.name} className="w-[50%]" />
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
