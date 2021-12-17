import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <i className="fas fa-store fa-2x text-white opacity-90"></i>
            <a
              className="text-sm italic font-bold leading-relaxed inline-block ml-4 mr-4 py-2 whitespace-nowrap uppercase text-white text-2xl"
              href="#pablo"
            >
              <span className="text-blue-400">Unique</span> <span>mall</span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink to="/home">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fas fa-columns text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Dashboard</span>
                </a>
              </li>

              <li className="nav-item">
                <NavLink to="/login">
                <button
                  className="px-3 bg-white rounded-md py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <i className="fas fa-sign-in-alt text-lg leading-lg text-gray opacity-75"></i><span className="ml-2">Sign In</span>
                </button>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
    );
};

export default Header;