import { Modal } from './modal';
import { CARDS } from '@/lib/utils';
import CARDSINFO from '@/DDBB/CARDS_INFO.json';
import Image from 'next/image';

export default function ProductModal({ params: { id: productId } }: { params: { id: string } }) {

  const cards = CARDSINFO[0].productos.find((card: CARDS) => card.id === productId);
  if (!cards) return null;

  return (
    <Modal>
      <div className="snap-x flex snap-mandatory h-full w-full mx-auto overflow-x-scroll">
        <div className="snap-center snap-always w-full h-full flex-shrink-0 flex items-center justify-center">
          <Image width={1900} height={1900} alt={`${productId}01`} src={`/prod/${productId}/0001-1.jpg`} priority />
        </div>
        <div className="snap-center snap-always w-full h-full flex-shrink-0 flex items-center justify-center">
        <Image width={1900} height={1900} alt={`${productId}02`} src={`/prod/${productId}/0001.jpg`} />
        </div>
      </div>
    </Modal>
  )
};