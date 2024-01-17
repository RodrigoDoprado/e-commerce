import Logo from "../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#home",
  },
  {
    id: 2,
    name: "Produtos",
    link: "/#services",
  },
  {
    id: 3,
    name: "Sobre nós",
    link: "/#about",
  },
  {
    id: 4,
    name: "App",
    link: "/#appStore",
  },
];
function NavbarComponent(){
  const [menu, setMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "true"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (menu === "false") {
      element.classList.add("false");
      localStorage.setItem("menu", "false");
    } else {
      element.classList.remove("false");
      localStorage.setItem("menu", "true");
    }
  }, [menu]);
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-20 top-0 start-0">
        <div className="container-fluid py-3 sm:py-0 px-5">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Foodie
              </a>
              </div>
            <div className="flex justify-between items-center gap-5">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <div>
              <DarkMode/>
              </div>
              {/* <div className="inline-block px-0"> */}
                  <RxHamburgerMenu className="text-xl w-12 cursor-pointer" onClick={() =>
            setMenu((data) => (data === "false" ? "true" : "false"))
          }/>
                {/* </div>   */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;