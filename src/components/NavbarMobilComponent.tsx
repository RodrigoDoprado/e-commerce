import { MenuInterface } from "../interface/MenuInterface"

function NavbarMobilComponent(){
    return(
        <>
            <div className="mt-16 fixed z-10 h-screen transition-transform -translate-x-full dark:translate-x-0">
               <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:text-white dark:bg-gray-900">
                  <ul className="space-y-2 font-medium mt-10">
                    {MenuInterface.map((menu) => (
                      <li className="px-10" key={menu.id}>
                        <a
                          href={menu.link}
                          className="inline-block py-5 px-4 text-lg hover:text-yellow-500"
                        >
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
        </>
    )
}
export default NavbarMobilComponent