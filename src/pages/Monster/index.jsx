import { useState, useEffect, lazy, Suspense } from "react";
import axios from "../../components/api/axios";
import Neon from "../../assets/Utils/black-neon.webp";
const Tabel = lazy(() => import("../../components/Monster/Tabel"));
const Pagination = lazy(() => import("../../components/Monster/Pagination"));
const Monster = () => {
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [monsterPerPage, setMonsterPerPage] = useState(10);

  const lastMonsterIndex = currentPage * monsterPerPage;
  const firsMonsterIndex = lastMonsterIndex - monsterPerPage;
  const currentMonsters = monsters
    .filter((monster) => monster.name.toLowerCase().includes(query.toLowerCase()))
    .slice(firsMonsterIndex, lastMonsterIndex);

  const sortedItems = [...monsters].sort((a, b) => {
    if (sort === "lvl") {
      return a.lvl < b.lvl ? -1 : 1;
    } else if (sort === "type") {
      return a.type < b.type ? -1 : 1;
    } else if (sort === "hp") {
      return a.hp < b.hp ? -1 : 1;
    } else if (sort === "atk") {
      return a.atk < b.atk ? -1 : 1;
    } else {
      return 0;
    }
  });
  const getMonster = async () => {
    try {
      const response = await axios.get("/get/monster");
      setMonsters(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
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
          <Tabel
            query={query}
            setQuery={setQuery}
            monsters={sortedItems}
            currentMonsters={currentMonsters}
            sort={sort}
            setSort={setSort}
          />
        </Suspense>
        <Suspense fallback={<p>Loading..</p>}>
          <Pagination
            query={query}
            totalMonster={monsters.length}
            currentPage={currentPage}
            monsterPerPage={monsterPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Monster;
