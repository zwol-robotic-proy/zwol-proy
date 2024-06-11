import Link from "next/link";
import ButtonProy from "./ButtonProy";

const Footer = () => {
    return (
        <footer className="w-full border-solid border-zwol-1/20 border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <!--Grid--> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    <div className="flex items-center lg:block col-span-full mb-10 lg:col-span-1 lg:mb-0 nth-2:mx-5">
                        <img src="/favicon.ico" alt="logo" className="flex max-w-20 lg:max-w-32 justify-center lg:justify-start select-none" />
                        <p className="py-8 text-xs text-justify lg:text-sm text-gray-500 lg:max-w-xs lg:text-left">
                            Confiable en más de 100 países y con 5 millones de clientes satisfechos. ¿Tienes alguna pregunta? Somos expertos en robótica.</p>
                        <ButtonProy hRef="/">Contactanos</ButtonProy>
                        
                    </div>
                    <hr className="bg-gradient-to-r from-zwol-1 to-zwol-1/10 h-1 lg:hidden" />
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left ">
                        <p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7">Zwol</p>
                        <ul className="text-sm text-center lg:text-left transition-all duration-500">
                            <li className="mb-2 lg:mb-6"><Link href="/" className="text-gray-600 hover:text-gray-900">Inicio</Link></li>
                            <li className="mb-2 lg:mb-6"><Link href="/" className=" text-gray-600 hover:text-gray-900">Sobre nosotros</Link></li>
                            <li><Link href="/" className=" text-gray-600 hover:text-gray-900">Cotizaciones</Link></li>
                        </ul>
                    </div>
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left">
                        <p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7">Productos</p>
                        <ul className="text-sm text-center lg:text-left transition-all duration-500">
                            <li className="mb-2 lg:mb-6"><Link href="/" className="text-gray-600 hover:text-gray-900">Robot 1</Link></li>
                            <li className="mb-2 lg:mb-6"><Link href="/" className=" text-gray-600 hover:text-gray-900">Robot 2</Link></li>
                            <li><Link href="/" className=" text-gray-600 hover:text-gray-900">Robot 3</Link></li>
                        </ul>
                    </div>
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left">
                        <p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7">Soporte</p>
                        <ul className="text-sm text-center lg:text-left transition-all duration-500">
                            <li className="mb-2 lg:mb-6"><Link href="/" className="text-gray-600 hover:text-gray-900">Atención técnica</Link></li>
                            <li className="mb-2 lg:mb-6"><Link href="/" className=" text-gray-600 hover:text-gray-900">Centro de descarga</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-gradient-to-r from-zwol-1 to-zwol-1/10 h-1 lg:hidden" />
                {/* <!--Grid--> */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
                        <span className="text-sm text-gray-500 ">
                            &copy; {new Date().getFullYear()} || All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;