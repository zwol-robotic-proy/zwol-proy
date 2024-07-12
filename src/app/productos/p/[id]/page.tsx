'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import { CARDS } from '@/lib/utils';
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
            <main className='h-full my-36'>
                <div className='justify-center items-center flex flex-col w-full'>
                    <img src={card.IMG} alt={card.title} className='mb-20 w-4/12' />
                    <p className='mb-5 font-extrabold text-3xl'>{card.title}</p>
                    <p className='mb-10 w-4/12 bg-zwol-1/50 p-3 rounded-b-md flex flex-col text-start [&_span]:mb-2'>
                        <span className='font-medium'>Descripción:</span> 
                        <span>{card.Ldescription || card.Sdescription}</span>
                        <span>Tamaño:</span>
                        <span>{'-'}</span>
                    </p>
                    <button className='text-black text-xl absolute top-28 left-10 py-1 px-2 border border-solid border-transparent hover:border-zwol-1 rounded-full hover:bg-zwol-1/70  hover:text-white' onClick={onDismiss} >⬅</button>
                </div>
            </main>
            <Footer />
        </>
    );
};