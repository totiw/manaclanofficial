import { useState, useEffect, lazy, Suspense } from "react";
import axios from "../../components/api/axios";
import Neon from "../../assets/Utils/black-neon.webp";
const Tabel = lazy(() => import("../../components/Collection/Table"));
const Collection = () => {
  const [collections, setCollections] = useState([]);

  const getCollection = async () => {
    try {
      const response = await axios.get("/get/cardcollection");
      setCollections(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getCollection();
  }, []);
  return (
    <>
      <img src={Neon} alt="black neon" className="absolute z-0 top-[80px]top-[80px] right-0 w-[15%] lg:w-[9%]" />
      <img src={Neon} alt="black neon" className="absolute z-0 bottom-0 left-0 w-[15%] lg:w-[9%]" />
      <div
        id="cardcollection"
        className="relative z-10 w-full lg:min-h-[87vh] flex flex-col items-center lg:py-6 gap-8 lg:gap-10"
      >
        <Suspense fallback={<p>Loading..</p>}>
          <Tabel collections={collections} />
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

export default Collection;
