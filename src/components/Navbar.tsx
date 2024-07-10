'use client';
import Link from "next/link";
import CARDSINFO from '@/DDBB/CARDS_INFO.json';
import IndiceNavbar from "./IndiceNavbar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Navbar = () => {

    return (
        <nav className="fixed top-0 w-screen border-solid border-zwol-1/20 border-b py-3 hover:bg-white bg-white/80 z-20">
            <div className="container mx-auto">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex justify-between lg:flex-row">
                        <Link href={"/"} className="flex items-center">
                            <img src="/zwol-nav.png" alt="logo" className="max-w-20" />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="inline-flex z-20 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-60 lg:hidden block mr-7">
                                <DropdownMenuItem>
                                    <Link className="w-full" href={'/nosotros'}>Nosotros</Link> 
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <Link href={'/productos'}>Productos</Link>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuContent className="w-60 lg:hidden block ">
                                            <DropdownMenuItem className="pt-2">
                                                <Link className="w-full" href={'/productos/p/001'}>Robot Cartesiano ZCWUR2M</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="pt-2">
                                                <Link className="w-full" href={'/productos/p/001'}>Robot Cartesiano ZCIT00M</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link className="w-full" href={'/servicios'}>Servicios</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="hidden lg:flex lg:pl-11" id="navbar-default-example">
                        <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-10">
                            <li>
                                <Link href="/" key={"00000001"}
                                    className="text-gray-600 text-sm lg:text-base font-medium hover:text-zwol-1 transition-all duration-500">Inicio</Link>
                            </li>
                            <li className="text-gray-600 text-sm lg:text-base font-medium hover:text-zwol-1 transition-all duration-500">
                                <Link href={'/nosotros'}>
                                    Nosotros
                                </Link>
                            </li>
                            <IndiceNavbar title={'Productos'} content={CARDSINFO[0].productos} />
                            <li className="text-gray-600 text-sm lg:text-base font-medium hover:text-zwol-1 transition-all duration-500">
                                <Link href={'/servicios'}>
                                    Servicios
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;