import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; 
import ButtonProy from "@/components/ButtonProy";
import ModalDownload from "@/components/ModalDownload";

const Servicios = () => {
    return (
        <>
            <Navbar />
            <main className="p-4">
                <div className="w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <img className="object-cover" src="https://images.stockcake.com/public/d/8/b/d8ba2783-27aa-4fcf-80e1-ec9a253a30eb_large/interactive-contact-interface-stockcake.jpg" alt="img02" />
                            </div>
                        </div>
                        <div className="py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg" id="#atencionTecnica">
                            <p className="text-3xl text-center text-gray-800 font-bold">
                                Atención
                                <span className="text-zwol-1"> Técnica</span>
                            </p>
                            <p className="mt-4 text-gray-600">
                                La sección de atención técnica de zwol-robotic Estamos aquí para ofrecerte asistencia especializada en el uso y mantenimiento de nuestros robots. Nuestro equipo de expertos está disponible para resolver cualquier problema técnico que puedas tener, garantizando el óptimo funcionamiento de tus equipos.
                                ¡Estamos para ayudarte!
                            </p>
                            <div className="mt-8 w-min">
                                <ButtonProy styleP="text-gray-100 pr-5 py-3 font-semibold rounded" hRef="mailto:info@zwol-robotic.com.ar" >
                                    Contactános
                                </ButtonProy>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalDownload">
                    <ModalDownload/>
                </div>
            </main >
            <Footer />
        </>
    )
};

export default Servicios;