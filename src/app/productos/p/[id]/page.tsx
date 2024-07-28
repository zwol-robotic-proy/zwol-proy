'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import { CARDS } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProductPage({ params: { id } }: { params: { id: string } }) {

    const card = CARSINFO[0].productos.find((card: CARDS) => card.id === id);
    const router = useRouter();

    function onDismiss() {
        router.back();
    };

    if (!card) return null;

    return (
        <>
            <Navbar />
            <main className='lg:h-screen h-full p-4'>
                <button className='sticky text-black text-xl top-20 left-3 lg:top-28 lg:left-10 py-1 px-2 border border-solid border-transparent hover:border-zwol-1 rounded-full hover:bg-zwol-1/70  hover:text-white' onClick={onDismiss} >⬅</button>
                <div className=" w-full flex justify-center ">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <Image width={1900} height={1900} className="object-cover" src={card.IMG} alt={card.title} />
                            </div>
                        </div>
                        <div className="flow-root sm:contents md:contents lg:flow-root py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg">
                            <p className="text-3xl text-center text-gray-800 font-bold">
                            {card.title}
                            </p>
                            <p className="mt-4 text-gray-600">
                            {card.Ldescription || card.Sdescription}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};