import React, { useState } from "react";
import logo from './../../images/logo.png';
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (label) => {
    setActiveLink(label);
  };

  return (
    <nav className="bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto w-[120px] mr-2" />
          <span className="font-sans text-white font-semibold text-2xl mr-0">
            TicketWiz
          </span>
        </div>

        
        <ul className="flex space-x-4 pr-[50px]">
          <NavItem label="Home" to="home" active={activeLink === "Home"} onClick={handleLinkClick} />
          <NavItem label="Featured events" to="featured-events" active={activeLink === "Featured events"} onClick={handleLinkClick} />
          <NavItem label="Create event" to="create-events" active={activeLink === "Create event"} onClick={handleLinkClick} />
          <NavItem label="Our clients" to="our-clients" active={activeLink === "Our clients"} onClick={handleLinkClick} />
          <NavItem label="Contact" to="contact" active={activeLink === "Contact"} onClick={handleLinkClick} />
          <NavItem label="Login" to="login" active={activeLink === "Login"} onClick={handleLinkClick} />
        </ul>
      </div>
    </nav>
  );
};

function NavItem({ label, to, active, onClick }) {
  const linkClasses = `text-white ${
    active
      ? "bg-text-color text-main-blue px-2 py-1 rounded-full cursor-pointer"
      : "hover:bg-text-color hover:text-main-blue px-1 py-1 rounded-full cursor-pointer"
  } text-base font-dm-sans text-sm`;

  return (
    <li>
      <Link
        to={to}
        className={linkClasses}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => onClick(label)}
      >
        {label}
      </Link>
    </li>
  );
}

export default Navbar;
