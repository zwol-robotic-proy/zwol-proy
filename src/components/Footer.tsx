import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <!--Grid--> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    <div className="flex items-center lg:block col-span-full mb-10 lg:col-span-1 lg:mb-0">
                        <img src="/favicon.ico" alt="logo" className="flex max-w-32 justify-center lg:justify-start " />
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                            Confiable en más de 100 países y con 5 millones de clientes satisfechos. ¿Tienes alguna pregunta? Somos expertos en robótica.</p>
                        <Link href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-[#00a4fe] rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-[#00a4feaa] lg:mx-0">
                            Contactanos
                        </Link>
                    </div>
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Zwol</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Inicio</Link></li>
                            <li className="mb-6"><Link href="javascript:;" className=" text-gray-600 hover:text-gray-900">Sobre nosotros</Link></li>
                            <li><Link href="javascript:;" className=" text-gray-600 hover:text-gray-900">Cotizaciones</Link></li>
                        </ul>
                    </div>
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Productos</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Robot 1</Link></li>
                            <li className="mb-6"><Link href="javascript:;" className=" text-gray-600 hover:text-gray-900">Robot 2</Link></li>
                            <li><Link href="javascript:;" className=" text-gray-600 hover:text-gray-900">Robot 3</Link></li>
                        </ul>
                    </div>
                    {/* <!--End Col--> */}
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Soporte</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Atención técnica</Link></li>
                            <li className="mb-6"><Link href="javascript:;" className=" text-gray-600 hover:text-gray-900">Centro de descarga</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!--Grid--> */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
                        <span className="text-sm text-gray-500 ">
                            &copy; {new Date().getFullYear()} All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;