import ButtonProy from "./ButtonProy";
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import IndiceFooter from "./IndiceFooter";

const Footer = () => {
    return (
        <footer className="w-full border-solid border-zwol-1/20 border-t bg-gradient-to-t from-zwol-1 to-zwol-1/10 to-25%">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <!--Grid--> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    <div className="flex flex-col items-center lg:block col-span-full mb-10 lg:col-span-1 lg:mb-0 nth-3:mx-0 [&_*]:mx-5">
                        <img src="/favicon.ico" alt="logo" className="flex max-w-20 lg:max-w-32 justify-center lg:justify-start select-none" />
                        <p className="py-8 text-xs text-justify lg:text-sm text-gray-500 lg:max-w-xs lg:text-left">
                             ¿Tienes alguna pregunta? Somos expertos en robótica.</p>
                        <ButtonProy hRef="/">Contactanos</ButtonProy>
                        
                    </div>
                    <hr className="bg-gradient-to-r from-zwol-1 to-zwol-1/10 h-1 lg:hidden col-span-full lg:col-span-1" />
                    <IndiceFooter content={CARSINFO[0].zwol} titleC={'Zwol'} />
                    <IndiceFooter content={CARSINFO[0].productos} titleC={'Productos'} />
                    <IndiceFooter content={CARSINFO[0].soporte} titleC={'Soporte'} />
                </div>
                <hr className="bg-gradient-to-r from-zwol-1 to-zwol-1/10 h-1 lg:hidden" />
                {/* <!--Grid--> */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
                        <span className="text-sm text-gray-100 ">
                            &copy; ZWOL {new Date().getFullYear()} || All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;