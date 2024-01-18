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
      <div className="min-h-[60px] shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-20 top-0 start-0">
        <div className="container-fluid sm:py-0 px-5 mt-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <RxHamburgerMenu className="text-xl w-12 cursor-pointer mt-2 visible lg:invisible" onClick={() =>
                setMenu((data) => (data === "false" ? "true" : "false"))
              }/>
              <a href="/" className="font-bold text-2xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Foodie
              </a>
            </div>
            <ul className="hidden lg:flex">
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
            <div className="flex items-center justify-between gap-5">
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <ul className="hidden lg:flex">
                <li>
                  <a href="" className="inline-block py-4 px-2 hover:text-yellow-500">Cadastra</a>
                </li>
                <li>
                  <a href="" className="inline-block py-4 px-2 hover:text-yellow-500">Logar</a>
                </li>
              </ul>
              <div>
                <DarkMode/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;