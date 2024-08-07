import Image from "next/image";
import ButtonProy from "./ButtonProy";

const Banner = () => {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2 [&_div]:justify-center ">
                    <div className=" nth-3:text-center text-center">
                        <div className="text-zwol-1/90 font-bold mb-3 pb-4 text-4xl text-zwol-1 md:text-6xl text-start">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-zwol-1 to-purple-500">Desarrollando{' '}</p>
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-zwol-1 to-purple-500">innovación</p>
                        </div>
                        <p className="mb-6 text-xl md:mb-10 text-justify">Sumérgete en el mundo de la Tecnología con nuestros Robot de Fabricación íntegramente Nacional.
                            Descubre la excelencia, la precisión, innovación y adaptabilidad que estamos dispuestos a compartir, soluciones a la medida de las necesidades, estamos aquí para potenciar le tecnificación de tu empresa, no dudes en consultarnos!</p>
                        <ButtonProy hRef="/productos" styleP="flex text-center">Showroom</ButtonProy>
                    </div>
                    <div>
                        <Image alt="foto-robot01" width={739} height={944} src="/zwolsold.jpg" className="flex justify-center mx-auto h-full w-full md:max-w-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Banner;