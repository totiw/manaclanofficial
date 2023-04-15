const Pagination = ({ totalMonster, monsterPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let index = 1; index < Math.ceil(totalMonster / monsterPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="flex flex-row gap-3">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`${page == currentPage ? "bg-[#4F9AA8]" : ""} text-white border rounded-md py-1 px-2`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
