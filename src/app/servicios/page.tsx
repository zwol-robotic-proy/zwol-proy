import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { metadata } from "../layout";
import ButtonProy from "@/components/ButtonProy";
metadata.title = 'Servicios';

const Servicios = () => {
    return (
        <>
            <Navbar />
            <main className="my-20">
                <div className="px-2 py-10 w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="flex justify-center  lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <img className="object-cover" src="https://images.stockcake.com/public/d/8/b/d8ba2783-27aa-4fcf-80e1-ec9a253a30eb_large/interactive-contact-interface-stockcake.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg">
                            <h2 className="text-3xl text-center text-gray-800 font-bold">
                                Atención
                                <span className="text-zwol-1"> Técnica</span>
                            </h2>
                            <p className="mt-4 text-gray-600">
                                La sección de atención técnica de zwol-robotic Estamos aquí para ofrecerte asistencia especializada en el uso y mantenimiento de nuestros robots. Nuestro equipo de expertos está disponible para resolver cualquier problema técnico que puedas tener, garantizando el óptimo funcionamiento de tus equipos.
                                ¡Estamos para ayudarte!
                            </p>
                            <div className="mt-8">
                                <ButtonProy styleP="text-gray-100 px-5 py-3 font-semibold rounded" hRef="#">
                                    Contactános
                                </ButtonProy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 py-10 w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <img className="object-cover" src="https://images.stockcake.com/public/0/3/2/03242def-10f2-4f65-b333-890f8703b3ce_large/download-icon-design-stockcake.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg">
                            <h2 className="text-3xl text-center text-gray-800 font-bold">
                                Centro
                                <span className="text-zwol-1"> Descargas</span>
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Aquí encontrarás todos los recursos necesarios para optimizar el rendimiento de tus robots. Descarga manuales, software de actualización, drivers y guías de usuario de forma rápida y sencilla. Mantente siempre al día con las últimas novedades y mejoras de nuestros productos. Si tienes alguna duda, nuestro equipo de soporte está listo para asistirte. ¡Aprovecha todos nuestros recursos!
                            </p>
                            <div className="mt-8">
                                <ButtonProy styleP="text-gray-100 px-5 py-3 font-semibold rounded" hRef="#">
                                    Abrir
                                </ButtonProy>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
};

export default Servicios;