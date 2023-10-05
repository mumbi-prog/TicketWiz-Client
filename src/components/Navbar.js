import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Login"); 

  const handleLinkClick = (label) => {
    setActiveLink(label);
  };

  return (
    <div className="bg-sky-400/50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/*  */}
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1635756837851-d3b6edbaa11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2814&q=80"
            alt="logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-white font-semibold text-lg px-6">
            TicketWiz
          </span>
        </div>

    
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
            label="Services"
            active={activeLink === "Services"}
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
      : " text-white" 
  } ${smallText ? "text-sm" : "text-base"} font-custom italic`;

  return (
    <li>
      <a href="#" className={linkClasses} onClick={() => onClick(label)}>
        {label}
      </a>
    </li>
  );
}

export default Navbar;
