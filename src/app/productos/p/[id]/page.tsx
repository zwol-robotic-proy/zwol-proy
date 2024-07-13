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
            <main className='h-full lg:my-36'>
                {/* <div className='justify-center items-center flex flex-col w-full'>
                    <img src={card.IMG} alt={card.title} className='mb-20 mt-[4.5rem] lg:mt-0 lg:w-4/12' />
                    <p className='mb-8 font-extrabold lg:text-3xl'>{card.title}</p>
                    <p className='mb-10 lg:w-4/12 bg-zwol-1/50 p-3 rounded-b-md flex flex-col text-start [&_span]:mb-2'>
                        <span className='font-medium'>Descripción:</span> 
                        <span className='text-sm lg:text-normal'>{card.Ldescription || card.Sdescription}</span>
                        <span>Tamaño:</span>
                        <span>{'-'}</span>
                    </p>
                    <button className='text-black text-xl absolute top-20 left-3 lg:top-28 lg:left-10 py-1 px-2 border border-solid border-transparent hover:border-zwol-1 rounded-full hover:bg-zwol-1/70  hover:text-white' onClick={onDismiss} >⬅</button>
                </div> */}
                <button className=' sticky text-black text-xl absolute top-20 left-3 lg:top-28 lg:left-10 py-1 px-2 border border-solid border-transparent hover:border-zwol-1 rounded-full hover:bg-zwol-1/70  hover:text-white' onClick={onDismiss} >⬅</button>

                <div className=" w-full flex justify-center w-full">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="flex justify-center  lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <img className="object-cover" src={card.IMG} alt={card.title} />
                            </div>
                        </div>
                        <div className="py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg">
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