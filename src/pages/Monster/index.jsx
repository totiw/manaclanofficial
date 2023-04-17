import { useState, useEffect, lazy, Suspense } from "react";
import axios from "../../components/api/axios";
import Neon from "../../assets/Utils/black-neon.webp";
const Tabel = lazy(() => import("../../components/Monster/Table"));
// const Pagination = lazy(() => import("../../components/Monster/Pagination"));
const Monster = () => {
  // const [isDataChanging, setIsDataChanging] = useState(false);
  const [monsters, setMonsters] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [monsterPerPage, setMonsterPerPage] = useState(10);

  // const lastMonsterIndex = currentPage * monsterPerPage;
  // const firsMonsterIndex = lastMonsterIndex - monsterPerPage;
  // const currentMonsters = monsters.slice(firsMonsterIndex, lastMonsterIndex);

  const getMonster = async () => {
    try {
      const response = await axios.get("/get/monster");
      setMonsters(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getMonster();
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
          <Tabel monsters={monsters} />
        </Suspense>
        {/* <Suspense fallback={<p>Loading..</p>}>
          <Pagination
            totalMonster={monsters.length}
            currentPage={currentPage}
            monsterPerPage={monsterPerPage}
            setCurrentPage={setCurrentPage}
            isDataChanging={isDataChanging}
          />
        </Suspense> */}
      </div>
    </>
  );
};

export default Monster;
