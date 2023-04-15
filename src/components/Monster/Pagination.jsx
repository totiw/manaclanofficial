import { useState, useEffect } from "react";
const Pagination = ({ monsterPerPage, totalMonster, setCurrentPage, currentPage }) => {
  const totalPage = Math.ceil(totalMonster / monsterPerPage);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);
  const [display, setDisplay] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const next = () => {
    setFirst((prev) => prev + 1);
    setLast((prev) => prev + 1);
  };

  const prev = () => {
    setFirst((prev) => prev - 1);
    setLast((prev) => prev - 1);
  };

  useEffect(() => {
    let pages = [];
    for (let index = 1; index < totalPage; index++) {
      pages.push(index);
    }
    setDisplay(pages.slice(first, last));
  }, []);

  return (
    <div
      className="max-w-[90%] lg:max-w-[500px] flex flex-row flex-wrap
     justify-center gap-3 mb-5 lg:mb-40"
    >
      <button onClick={() => prev()} className={`text-white border rounded-md py-1 px-2`}>
        &laquo;
      </button>
      {display &&
        display.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${page == currentPage ? "bg-[#4F9AA8]" : ""} text-white border rounded-md py-1 px-2`}
          >
            {page}
          </button>
        ))}
      <button onClick={() => next()} className={`text-white border rounded-md py-1 px-2`}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;