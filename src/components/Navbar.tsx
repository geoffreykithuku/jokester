import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Random",
      path: "/random",
    },
  ];

  return (
    <div className="h-20 justify-center w-full bg-[#2B2A4C] text-white px-5 sm:px-10 md:px-16 text-lg">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex items-center w-full">
          <div className="h-10 w-10 rounded-full">
            <img
              src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="ml-2 font-bold">Jokester</p>
        </div>
        <ul
          className={`items-center justify-center w-full md:flex  gap-10 font-medium ${
            isOpen
              ? "flex-col w-full top-[70px] font-normal absolute flex left-0 gap-5 pb-6  bg-[#2b2a4c]"
              : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`w-full mx-auto hover:text-[#EA906C] hover:border-b border-[#EA906C] ${
                  location.pathname === link.path
                    ? "text-[#EA906C] border-b border-[#EA906C]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={toggle} className="h-8 w-8" />
          ) : (
            <Menu onClick={toggle} className="h-8 w-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
