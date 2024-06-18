import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { metadata } from "../layout";
metadata.title = 'Atención Técnica';

const Nosotros = () => {
    return (
        <>
            <Navbar />
            <main className="h-screen w-full flex items-center justify-center">
                <p className="font-semibold text-6xl">Esto es... Atención Técnica</p>
            </main>
            <Footer />
        </>
    )
};

export default Nosotros;