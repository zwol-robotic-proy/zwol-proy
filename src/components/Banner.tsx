import ButtonProy from "./ButtonProy";

const Banner = () => {
    return(
        <section className="relative">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2 [&_div]:justify-center">
                    <div className="max-w-[720px] nth-3:text-center">
                        <h1 className="mb-3 pb-4 text-4xl font-bold text-zwol-1 md:text-6xl">Desarrollando innovación</h1>
                        <p className="mb-6 max-w-[528px] text-xl md:mb-10 text-justify">Sumérgete en el mundo de la Tecnología con nuestros Robot de Fabricación íntegramente Nacional.
                        Descubre la excelencia, la precisión, innovación y adaptabilidad que estamos dispuestos a compartir, soluciones a la medida de las necesidades, estamos aquí para potenciar le tecnificación de tu empresa, no dudes en consultarnos!</p>
                        <ButtonProy hRef="/" styleP="flex text-center">Showroom</ButtonProy>
                    </div>
                    <div>
                        <img src="/zwolsold.jpg"  className="mx-auto inline-block h-full w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Banner;

