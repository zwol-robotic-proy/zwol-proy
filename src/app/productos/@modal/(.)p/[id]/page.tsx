import { Modal } from './modal';
import { CARDS } from '@/lib/utils';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import Image from 'next/image';

export default function ProductModal({ params: { id: productId } }: { params: { id: string } }) {

  const cards = CARSINFO[0].productos.find((card: CARDS) => card.id === productId);
  if (!cards) return null;
    
  return (
    <Modal>
        <Image width={1900} height={1900} src={cards.IMG} alt={cards.title} />
    </Modal>
)};