// import Link from "next/link";

import ButtonProy from "./ButtonProy";

const Banner = () => {
    return(
        <section className="relative bg-gradient-to-r from-violet-50 to-orange-50">

            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                {/* <!-- Component --> */}
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2 [&_div]:justify-center">
                    {/* <!-- Heading Content --> */}
                    <div className="max-w-[720px] nth-3:text-center">
                        <h1 className="mb-3 pb-4 text-4xl font-bold text-[#00a4fe] md:text-6xl">Desarrollando innovación</h1>
                        <p className="mb-6 max-w-[528px] text-xl md:mb-10 text-justify">Sumérgete en el mundo de la tecnología con nuestro fabricante argentino de robots líder en Latinoamérica. Descubre la excelencia, la precisión y la innovación que solo nosotros ofrecemos. Con soluciones a la medida de tus necesidades, estamos aquí para potenciar el futuro de tu empresa. ¡Conviértete en pionero de la automatización con nosotros!</p>
                        <ButtonProy hRef="/" styleP="flex text-center">Showroom</ButtonProy>
                            
                            {/* <Link href="#"
                                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold">
                                <p className="">Showroom</p>
                            </Link> 
                            INTENTEMOS UTILIZAR EL MISMO TIPO DE BOTÓN*/}
                    </div>
                    {/* <!-- Image Div --> */}
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1682144827510-bbe3cd636253?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  className="mx-auto inline-block h-full w-full />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;

