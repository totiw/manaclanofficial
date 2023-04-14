import Brand from "../../assets/Identity/mana-brand.webp";
const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="w-full flex flex-col items-center gap-[50px] lg:gap-[160px] text-white">
        <span className="w-full h-[10px] lg:h-[25px] bg-gradient-to-r from-[#8ED5E2] to-[#EA0A8C]"></span>
        <img src={Brand} alt="Brand Mana Clan" className="w-24 lg:w-[444px]" />
        <span className="w-full h-[10px] lg:h-[25px] bg-gradient-to-r from-[#EA0A8C] to-[#8ED5E2]"></span>
      </div>
      <p className="py-7 lg:py-9 font-bold text-sm lg:text-[32px] tracking-[2px]">
        copyright &copy; 2023 ManaClanId - Alright Reserved
      </p>
    </footer>
  );
};

export default Footer;
