import { useState } from "react";
import Low1 from "../../assets/MonsterDrop/low-1.webp";
import Low2 from "../../assets/MonsterDrop/low-2.webp";
import Low3 from "../../assets/MonsterDrop/low-3.webp";
import Mid1 from "../../assets/MonsterDrop/mid-1.webp";
import Mid2 from "../../assets/MonsterDrop/mid-2.webp";
import Mid3 from "../../assets/MonsterDrop/mid-3.webp";
import Mid4 from "../../assets/MonsterDrop/mid-4.webp";
import Mid5 from "../../assets/MonsterDrop/mid-5.webp";
import Adv1 from "../../assets/MonsterDrop/advance-1.webp";
import Adv2 from "../../assets/MonsterDrop/advance-2.webp";
import Adv3 from "../../assets/MonsterDrop/advance-3.webp";
import Adv4 from "../../assets/MonsterDrop/advance-4.webp";
import Rare1 from "../../assets/MonsterDrop/rare-1.webp";
import Rare2 from "../../assets/MonsterDrop/rare-2.webp";
import Rare3 from "../../assets/MonsterDrop/rare-3.webp";
import Super1 from "../../assets/MonsterDrop/super-1.webp";
import Super2 from "../../assets/MonsterDrop/super-2.webp";
const MaterialList = () => {
  const [material, setMaterial] = useState("low");
  return (
    <div className="w-[80%] lg:w-[60%]">
      <h3 className="text-white text-center text-2xl lg:text-4xl font-bold tracking-[1px]">
        MATERIAL <span className="text-[#6BCBDD]">LIST</span>
      </h3>
      <select
        name="material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        id="material"
        className="w-[30%] lg:w-[10%] focus:ring-0 focus:outline-none rounded lg:py-2 lg:px-2 my-3 text-[#0E101D] lg:font-semibold"
      >
        <option value="low">Low</option>
        <option value="mid">Mid</option>
        <option value="adv">Advance</option>
        <option value="rare">Rare</option>
        <option value="super">Super</option>
      </select>
      <div className="flex flex-col">
        {material == "low" && (
          <>
            <img src={Low1} alt="material list" />
            <img src={Low2} alt="material list" />
            <img src={Low3} alt="material list" />
          </>
        )}
        {material == "mid" && (
          <>
            <img src={Mid1} alt="material list" />
            <img src={Mid2} alt="material list" />
            <img src={Mid3} alt="material list" />
            <img src={Mid4} alt="material list" />
            <img src={Mid5} alt="material list" />
          </>
        )}
        {material == "adv" && (
          <>
            <img src={Adv1} alt="material list" />
            <img src={Adv2} alt="material list" />
            <img src={Adv3} alt="material list" />
            <img src={Adv4} alt="material list" />
          </>
        )}
        {material == "rare" && (
          <>
            <img src={Rare1} alt="material list" />
            <img src={Rare2} alt="material list" />
            <img src={Rare3} alt="material list" />
          </>
        )}
        {material == "super" && (
          <>
            <img src={Super1} alt="material list" />
            <img src={Super2} alt="material list" />
          </>
        )}
      </div>
    </div>
  );
};

export default MaterialList;
