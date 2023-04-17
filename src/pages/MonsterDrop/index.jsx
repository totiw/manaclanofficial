import { useState, useEffect, lazy, Suspense } from "react";
import axios from "../../components/api/axios";
import Neon from "../../assets/Utils/black-neon.webp";
const Tabel = lazy(() => import("../../components/MonsterDrop/Table"));
const MaterialList = lazy(() => import("../../components/MonsterDrop/MaterialList"));
const Monster = () => {
  const [monsterDrop, setMonsters] = useState([]);
  const getMonsterDrop = async () => {
    try {
      const response = await axios.get("/get/monsterdrop");
      setMonsters(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getMonsterDrop();
  }, []);
  return (
    <>
      <img src={Neon} alt="black neon" className="absolute z-0 top-[80px]top-[80px] right-0 w-[15%] lg:w-[9%]" />
      <img src={Neon} alt="black neon" className="absolute z-0 bottom-0 left-0 w-[15%] lg:w-[9%]" />
      <div
        id="monster-list"
        className="relative z-10 w-full lg:min-h-[87vh] flex flex-col items-center lg:py-6 gap-8 lg:gap-10"
      >
        <Suspense fallback={<p>Loading..</p>}>
          <Tabel monsterDrop={monsterDrop} />
        </Suspense>
        <MaterialList />
      </div>
    </>
  );
};

export default Monster;
