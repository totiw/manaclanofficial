import { useState, useEffect } from "react";
import axios from "../../components/api/axios";
import Tabel from "../../components/Monster/Tabel";
import Pagination from "../../components/Monster/Pagination";
const Monster = () => {
  const [monsters, setMonsters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [monsterPerPage, setMonsterPerPage] = useState(10);

  const lastMonsterIndex = currentPage * monsterPerPage;
  const firsMonsterIndex = lastMonsterIndex - monsterPerPage;
  const currentMonsters = monsters.slice(firsMonsterIndex, lastMonsterIndex);
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
    <div id="monster-list" className="w-full lg:min-h-[87vh] flex flex-col items-center lg:py-6 lg:gap-7">
      <Tabel monsters={currentMonsters} />
      <Pagination
        totalMonster={monsters.length}
        monsterPerPage={monsterPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Monster;
