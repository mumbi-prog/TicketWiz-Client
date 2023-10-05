import React, { useState } from "react";
import logo from './../../images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Login"); // State to track the active link

  const handleLinkClick = (label) => {
    setActiveLink(label);
  };

  return (
    <div className="bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px] items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side with the logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto w-[120px] mr-2" />
          <span className="font-sans text-white font-semibold text-2xl mr-0">
            TicketWiz
          </span>
        </div>

        {/* Right side with tabs */}
        <ul className="flex space-x-4">
          <NavItem
            label="Home"
            active={activeLink === "Home"}
            onClick={handleLinkClick}
            smallText={true}
          />
          <NavItem
            label="Featured events"
            active={activeLink === "Featured events"}
            onClick={handleLinkClick}
            smallText={true}
          />
          <NavItem
            label="Create event"
            active={activeLink === "Create event"}
            onClick={handleLinkClick}
            smallText={true}
          />
          <NavItem
            label="Our clients"
            active={activeLink === "Our clients"}
            onClick={handleLinkClick}
            smallText={true}
          />
          <NavItem
            label="Contact"
            active={activeLink === "Contact"}
            onClick={handleLinkClick}
            smallText={true}
          />
          <NavItem
            label="Login"
            active={activeLink === "Login"}
            onClick={handleLinkClick}
            smallText={true}
          />
        </ul>
      </div>
    </div>
  );
};

function NavItem({ label, active, onClick, smallText }) {
  const linkClasses = `text-white ${
    active
      ? "bg-white text-blue-700 px-3 py-1 rounded-full"
      : " text-white" // Change text and background color for inactive links
  } ${smallText ? "text-sm" : "text-base"} font-custom italic`;

  return (
    <li>
      <a href="/" className={linkClasses} onClick={() => onClick(label)}>
        {label}
      </a>
    </li>
  );
}

export default Navbar;
