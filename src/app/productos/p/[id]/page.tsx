'use client';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import { useRouter } from 'next/navigation';

interface CARDS {
    id?: string
    title?: string
    description?: string
    HREF?: string
    IMG?: string
}

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

    if (!card) {
        return null;
    }

    return (
        <main className='h-screen w-screen flex items-center justify-center flex-col'>
            <p className='font-extrabold text-6xl mb-16'>Producto</p>
            <div className='text-center'>
                <p>{card.title}</p>
                <img src={card.IMG} alt={card.title} className='w-40' />
                <p className='mb-10'>{card.description}</p>
                <button onClick={onDismiss} >Atrás</button>
            </div>
        </main>
    );
};