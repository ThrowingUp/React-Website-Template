// packages
import { useState } from "react";
import { NavLink } from "react-router-dom";

// data
import { navLinks, navLinksDiensten } from "../constants";

// imports
import styles from "../styles";
import { close, logo, menu } from "../assets/img";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [dienstenDropdown, setDienstenDropdown] = useState(false);
  function handleMouseEnter() {
    setDienstenDropdown(true)
    console.log('hoi')
    
  }

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <NavLink to="/" exact>
            <img src={logo} alt="hoobank" className="w-[54px] h-[33px]" />
          </NavLink>
          <div className="navbar">
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-Inter font-normal cursor-pointer text-[16px] ${
                    navbarActive === nav.title ? "text-gray-700" : "text-gray-900"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setNavbarActive(nav.title)}
                >
                  {nav.title === "Diensten" ? (
                    <div
                      // Attach the events to this parent div
                      onMouseEnter={() => handleMouseEnter() }
                      onMouseLeave={() => setDienstenDropdown(false)}
                      className="relative cursor"
                    >
                      {nav.title}
                      <div
                        className={`${
                          dienstenDropdown ? "block" : "hidden"
                        } absolute left-[-180%] p-6 w-[326px] bg-white rounded-lg shadow-md outline-1 outline-gray-300`}
                      >
                        <ul>
                          {navLinksDiensten.map((diensten, indexDiensten) => (
                            <li
                              className={`${
                                indexDiensten === navLinksDiensten.length - 1
                                  ? "mb-0"
                                  : "mb-6"
                              }`}
                              key={diensten.id}
                            >
                              <NavLink
                                to={`${diensten.slug}`}
                                exact
                                className="flex flex-row"
                              >
                                <img src={diensten.icon} alt={diensten.id} />
                                <div className="pl-6">
                                  <h4 className="text-gray-700 text-base font-medium leading-tight">
                                    {diensten.title}
                                  </h4>
                                  <p className="text-gray-400 text-sm font-normal  ">
                                    {diensten.subTitle}
                                  </p>
                                </div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <NavLink to={`${nav.link}`} exact>
                      {nav.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <li
                className={`font-Inter font-normal cursor-pointer text-[16px]  mr-10`}
                onClick={() => setNavbarActive(nav.title)}
              >
                <NavLink to="/blog" exact>
                  Blog
                </NavLink>
              </li>
              <li
                className={`font-Inter font-normal ${styles.flexCenter} cursor-pointer text-[16px] bg-blue-gray-900 text-gray-50 w-[150px] h-[40px] rounded-md`}
                onClick={() => setNavbarActive(nav.title)}
              >
                <NavLink to="/contact" exact>
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* <p>test</p> */}
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black absolute top-[72px] right-0  my-2 w-full  sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-Inter font-medium cursor-pointer text-[16px] ${
                      navbarActive === nav.title ? " text-white " : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setNavbarActive(nav.title)}
                  >
                    <NavLink to={`${nav.link}`} exact>
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
