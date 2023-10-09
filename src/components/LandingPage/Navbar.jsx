// import React, { useState } from "react";
// import logo from './../../images/logo.png';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("Login"); 

//   const handleLinkClick = (label) => {
//     setActiveLink(label);
//   };

//   return (
//     <div className="bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px] items-center">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left side with the logo */}
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-auto w-[120px] mr-2" />
//           <span className="font-sans text-white font-semibold text-2xl mr-0">
//             TicketWiz
//           </span>
//         </div>

//         {/* Right side with tabs */}
//         <ul className="flex space-x-4">
//           <NavItem
//             label="Home"
//             active={activeLink === "Home"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//           <NavItem
//             label="Featured events"
//             active={activeLink === "Featured events"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//           <NavItem
//             label="Create event"
//             active={activeLink === "Create event"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//           <NavItem
//             label="Our clients"
//             active={activeLink === "Our clients"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//           <NavItem
//             label="Contact"
//             active={activeLink === "Contact"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//           <NavItem
//             label="Login"
//             active={activeLink === "Login"}
//             onClick={handleLinkClick}
//             smallText={true}
//           />
//         </ul>
//       </div>
//     </div>
//   );
// };

// function NavItem({ label, active, onClick, smallText }) {
//   const linkClasses = `text-white ${
//     active
//       ? "bg-white text-blue-700 px-3 py-1 rounded-full"
//       : " text-white" // 
//   } ${smallText ? "text-sm" : "text-base"} font-custom italic`;

//   return (
//     <li>
//       <a href="/" className={linkClasses} onClick={() => onClick(label)}>
//         {label}
//       </a>
//     </li>
//   );
// }

// export default Navbar;

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
        {/* Left side with the logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto w-[120px] mr-2" />
          <span className="font-sans text-white font-semibold text-2xl mr-0">
            TicketWiz
          </span>
        </div>

        
        <ul className="flex space-x-4">
          <NavItem label="Home" to="home" active={activeLink === "Home"} onClick={handleLinkClick} />
          <NavItem label="Featured events" to="featured-events" active={activeLink === "Featured events"} onClick={handleLinkClick} />
          <NavItem label="Create event" to="create-event" active={activeLink === "Create event"} onClick={handleLinkClick} />
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
      ? "bg-white text-blue-700 px-3 py-1 rounded-full"
      : "text-white"
  } text-base font-custom italic`;

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
