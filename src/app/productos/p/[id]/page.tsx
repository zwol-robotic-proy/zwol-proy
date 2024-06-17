'use client';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import { CARDS } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function ProductPage({
    params: { id },
}: {
    params: { id: string };
}) {

    const card = CARSINFO.find((card: CARDS) => card.id === id);
    const router = useRouter();

    function onDismiss() {
        router.back();
      }
      
    if (!card) return null;
    
    return (
        <main className='h-screen w-screen flex items-center justify-center flex-col'>
            <div className='justify-center items-center flex flex-col w-screen border-solid border-4 border-t-zwol-1 border-b-zwol-1 pt-10'>
                <p className='mb-10 text-2xl'>{card.title}</p>
                <img src={card.IMG} alt={card.title} className='mb-20 w-4/12' />
                <p className='mb-10 w-4/12 text-start bg-zwol-1/50 p-3 rounded-b-md'>{card.Ldescription || card.Sdescription}</p>
                <button className='text-black text-xl absolute top-7 left-7 py-1 px-2 border border-solid border-transparent hover:border-zwol-1 rounded-full hover:bg-zwol-1/70  hover:text-white' onClick={onDismiss} >⬅</button>
            </div>
        </main>
    );
};