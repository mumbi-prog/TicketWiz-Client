import React, { useState } from "react";
import logo from './../../images/logo.png';
import { Link as Scrolllink } from "react-scroll";
import Modal from "../Login/loginModal";
import { Link as RouterLink} from "react-router-dom";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <NavItem label="Featured events" to="featured-events"active={activeLink === "Featured events"} onClick={handleLinkClick} />
          <NavItem label="Create event" to="create-events" active={activeLink === "Create event"} onClick={handleLinkClick} />
          <NavItem label="Our clients"to="our-clients" active={activeLink === "Our clients"} onClick={handleLinkClick} />
          <NavItem label="Contact" to="contacts" active={activeLink === "Contact"} onClick={handleLinkClick} />
          <NavItem label="Login" active={activeLink === "Login"} onClick={openModal} smallText={true}/>
        </ul>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="text-center mt-5">
            <div className="mb-2">
              <RouterLink to="/customerlogin" className="text-blue-500 hover:text-blue-700">
                <button className="focus:outline-none text-left w-full">
                  Login as User
                </button>
              </RouterLink>
            </div>
            <div className="mb-2">
              <RouterLink to="/login" className="text-blue-500 hover:text-blue-700">
                <button className="focus:outline-none text-left w-full">
                  Login as Organizer
                </button>
              </RouterLink>
            </div>
            <div>
              <RouterLink to="/signup" className="text-blue-500 hover:text-blue-700">
                <button className="focus:outline-none text-left w-full">
                  Sign Up as User
                </button>
              </RouterLink>
            </div>
            
            <div>
              <RouterLink to="/signup" className="text-blue-500 hover:text-blue-700">
                <button className="focus:outline-none text-left w-full">
                  Sign Up as Organizer
                </button>
              </RouterLink>
            </div>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

function NavItem({ label, to, active, onClick }) {
  const linkClasses = `text-white ${
    active
      ? "bg-text-color-opacity text-main-blue px-2 py-1 rounded-full cursor-pointer"
      : "hover:bg-text-color-opacity hover:text-main-blue px-1 py-1 rounded-full cursor-pointer"
  } text-base font-dm-sans text-sm`;

  return (
    <li>
      <Scrolllink 
        to={to}
        className={linkClasses}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => onClick(label)}
      >
        {label}
      </Scrolllink >
    </li>
  );
}

export default Navbar;
