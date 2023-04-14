import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Brand from "../../assets/Identity/mana-brand.webp";
import Menu from "../../assets/Utils/icons/bars-solid.svg";
import Xmark from "../../assets/Utils/icons/xmark-solid.svg";
import ArrowUp from "../../assets/Utils/icons/chevron-up-solid.svg";
import Footer from "./Footer";

const Layout = () => {
  const routeLocation = useLocation();
  const [goUp, setGoUp] = useState(false);
  const [offset, setOffset] = useState(-80);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 500) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
      if (document.documentElement.scrollTop > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
    if (windowWidth > 576) {
      setOffset(-90);
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
      <span
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`bg-[#EA0A8C] fixed z-50 w-10 lg:w-12 h-10 lg:h-12 bottom-4 right-4 p-2 rounded drop-shadow-xl cursor-pointer duration-300 ease-out transition-all ${
          goUp ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <img src={ArrowUp} alt="go to top page mana" />
      </span>
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
          smooth="true"
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="vision"
          smooth="true"
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Vision
        </ScrollLink>
        <ScrollLink
          to="mission"
          smooth="true"
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Mission
        </ScrollLink>
        <Link
          to="/monster-list"
          smooth="true"
          duration={500}
          offset={offset}
          className="select-none tracking-[2px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Monster
        </Link>
        <ScrollLink
          to="contact"
          smooth="true"
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
        } bg-[#4F9AA8] fixed z-40 top-0 lg:hidden h-[80px] flex flex-row justify-between items-center px-[20px] text-white duration-500 ease-in-out transition-all shadow-lg`}
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
          <div className="relative z-10 flex flex-row gap-[58px] nav-link">
            <ScrollLink
              to="about"
              smooth="true"
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="vision"
              smooth="true"
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Vision
            </ScrollLink>
            <ScrollLink
              to="mission"
              smooth="true"
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
        <div
          className={`${routeLocation.pathname == "/" ? "absolute z-0 w-full left-0" : ""} left-0 flex flex-row grow ${
            routeLocation.pathname == "/" ? "justify-center" : ""
          }`}
        >
          {routeLocation.pathname == "/" ? (
            <ScrollLink to="hero" smooth="true" duration={500} offset={offset - 20} className="cursor-pointer">
              <img src={Brand} alt="mana-brand" width="138" />
            </ScrollLink>
          ) : (
            <Link to="/">
              <img src={Brand} alt="mana-brand" width="138" />
            </Link>
          )}
        </div>
        <div className="flex flex-row grow justify-end nav-link">
          <ScrollLink
            to="contact"
            smooth="true"
            duration={500}
            offset={offset}
            className="relative z-10 bg-[#EA0A8C] flex flex-row items-center justify-center px-7 py-1 rounded-lg cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
      <nav
        className={`bg-[#4F9AA8] hidden fixed ${
          isSticky ? "-translate-y-0" : "-translate-y-full"
        } lg:z-50 lg:w-full h-[90px] top-0 lg:flex flex-row justify-between items-center px-[100px] text-white duration-500 ease-in-out transition-all shadow-lg`}
      >
        {routeLocation.pathname == "/" && (
          <div className="relative z-10 flex flex-row gap-[58px] nav-link">
            <ScrollLink
              to="about"
              smooth="true"
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="vision"
              smooth="true"
              duration={500}
              offset={offset}
              className="select-none tracking-[1.5px] cursor-pointer"
            >
              Vision
            </ScrollLink>
            <ScrollLink
              to="mission"
              smooth="true"
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
        <div
          className={`${routeLocation.pathname == "/" ? "absolute z-0 w-full left-0" : ""} flex flex-row grow ${
            routeLocation.pathname == "/" ? "justify-center" : ""
          }`}
        >
          {routeLocation.pathname == "/" ? (
            <ScrollLink to="hero" smooth="true" duration={500} offset={offset - 20} className="cursor-pointer">
              <img src={Brand} alt="mana-brand" width="138" />
            </ScrollLink>
          ) : (
            <Link to="/">
              <img src={Brand} alt="mana-brand" width="138" />
            </Link>
          )}
        </div>
        <div className="flex flex-row grow justify-end nav-link">
          <ScrollLink
            to="contact"
            smooth="true"
            duration={500}
            offset={offset}
            className="relative z-10 bg-[#EA0A8C] flex flex-row items-center justify-center px-7 py-1 rounded-lg cursor-pointer"
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
