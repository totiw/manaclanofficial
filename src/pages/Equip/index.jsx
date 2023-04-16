import { useEffect } from "react";
const Equip = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return <div className="w-full h-[500px] text-white flex flex-row justify-center items-center font-bold">Equip</div>;
};

export default Equip;
