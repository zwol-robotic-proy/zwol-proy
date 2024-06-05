import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 border-solid border-gray-200 w-full border-b py-3 hover:bg-white bg-white/80 z-50 ">
            <div className="container mx-auto ">
                <div className="w-full flex  flex-col lg:flex-row">
                    <div className=" flex justify-between  lg:flex-row">
                        <Link href={"/"} className="flex items-center">
                        <img src="/Zwolnab.jpeg" alt="logo" className="max-w-20" />
                        </Link>

                        <button data-collapse-toggle="navbar-default-example" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default-example" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full lg:flex lg:pl-11 " id="navbar-default-example">
                        <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
                            <li>
                                <Link href="javascript:;"
                                    className="flex items-center justify-between text-gray-600 text-sm lg:text-base font-medium hover:text-[#00a4fe]  transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Inicio</Link>
                            </li>
                            <li>
                                <Link href="javascript:;"
                                    className="flex items-center justify-between text-gray-600 text-sm lg:text-base font-medium hover:text-[#00a4fe]  transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Nosotros</Link>
                            </li>
                            <li>
                                <Link href="javascript:;"
                                    className="flex items-center justify-between text-gray-600 text-sm lg:text-base font-medium hover:text-[#00a4fe] transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Productos</Link>
                            </li>
                            <li>
                                <Link href="javascript:;"
                                    className="flex items-center justify-between text-gray-600 text-sm lg:text-base font-medium hover:text-[#00a4fe] transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Servicios</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
};

export default Navbar;