import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Brand from "../../assets/Identity/mana-brand.webp";
import Menu from "../../assets/Utils/icons/bars-solid.svg";
import Xmark from "../../assets/Utils/icons/xmark-solid.svg";
import Footer from "./Footer";

const Layout = () => {
  const routeLocation = useLocation();
  const [offset, setOffset] = useState(-100);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
    if (windowWidth > 576) {
      setOffset(-100);
    } else if (windowWidth < 576) {
      setOffset(-80);
    }

    window.addEventListener("resize", detectWidth);
  }, []);

  useEffect(() => {
    if (windowWidth > 576) {
      setIsMenuOpen(false);
    }
    window.addEventListener("resize", detectWidth);
  }, [windowWidth]);
  return (
    <>
      {/* Mobile Nav */}
      <div
        className={`z-50 h-full w-full bg-[#4F9AA8] fixed top-0 right-0 flex flex-col justify-evenly items-center nav-link text-white duration-500 ease-in-out transition-all ${
          isMenuOpen ? "" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsMenuOpen((prev) => !prev)} className="absolute top-5 right-5 w-8 p-1">
          <img src={Xmark} alt="menu button" />
        </button>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="vision"
          smooth={true}
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Vision
        </ScrollLink>
        <ScrollLink
          to="mission"
          smooth={true}
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Mission
        </ScrollLink>
        <Link
          to="/monster-list"
          smooth={true}
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Monster
        </Link>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </ScrollLink>
      </div>
      <nav className="lg:hidden h-[80px] flex flex-row justify-between items-center px-[20px] text-white">
        <div className="flex flex-row grow">
          <Link to="/">
            <img src={Brand} alt="mana-brand" className="w-[30%]" />
          </Link>
        </div>
        <div className="flex flex-row grow justify-end">
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="w-8 p-1">
            <img src={Menu} alt="menu button" />
          </button>
        </div>
      </nav>
      <nav
        className={`${
          isSticky ? "-translate-y-0" : "-translate-y-full"
        } bg-[#4F9AA8] fixed z-40 top-0 lg:hidden h-[80px] flex flex-row justify-between items-center px-[20px] text-white duration-500 ease-in-out transition-all`}
      >
        <div className="flex flex-row grow">
          <Link to="/">
            <img src={Brand} alt="mana-brand" className="w-[30%]" />
          </Link>
        </div>
        <div className="flex flex-row grow justify-end">
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="w-8 p-1">
            <img src={Menu} alt="menu button" />
          </button>
        </div>
      </nav>
      {/* Desktop Nav */}
      <nav
        className={`hidden lg:z-50 lg:w-full h-[122px] top-0 lg:flex flex-row justify-between items-center px-[100px] text-white`}
      >
        {routeLocation.pathname == "/" && (
          <div className="flex flex-row gap-[58px] nav-link">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="vision"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Vision
            </ScrollLink>
            <ScrollLink
              to="mission"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Mission
            </ScrollLink>
            <Link to="/monster-list" className="select-none tracking-[1.5px] cursor-pointer">
              Monster
            </Link>
          </div>
        )}
        <div className={`flex flex-row grow ${routeLocation.pathname == "/" ? "justify-center" : ""}`}>
          <Link to="/">
            <img src={Brand} alt="mana-brand" width="168" />
          </Link>
        </div>
        <div className="flex flex-row grow justify-end">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={offset}
            className="bg-[#EA0A8C] flex flex-row items-center justify-center px-7 py-1 text-[20px] font-extrabold rounded-lg cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
      <nav
        className={`bg-[#4F9AA8] hidden fixed ${
          isSticky ? "-translate-y-0" : "-translate-y-full"
        } lg:z-50 lg:w-full h-[122px] top-0 lg:flex flex-row justify-between items-center px-[100px] text-white duration-500 ease-in-out transition-all`}
      >
        {routeLocation.pathname == "/" && (
          <div className="flex flex-row gap-[58px] nav-link">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="vision"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Vision
            </ScrollLink>
            <ScrollLink
              to="mission"
              smooth={true}
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Mission
            </ScrollLink>
            <Link to="/monster-list" className="select-none tracking-[1.5px] cursor-pointer">
              Monster
            </Link>
          </div>
        )}
        <div className={`flex flex-row grow ${routeLocation.pathname == "/" ? "justify-center" : ""}`}>
          <Link to="/">
            <img src={Brand} alt="mana-brand" width="168" />
          </Link>
        </div>
        <div className="flex flex-row grow justify-end">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={offset}
            className="bg-[#EA0A8C] flex flex-row items-center justify-center px-7 py-1 text-[20px] font-extrabold rounded-lg cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
