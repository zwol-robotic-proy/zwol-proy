import { Modal } from './modal';
import { CARDS } from '@/lib/utils';
import CARSINFO from '@/DDBB/CARDS_INFO.json';

export default function ProductModal({ params: { id: productId } }: { params: { id: string } }) {

  const card = CARSINFO.find((card: CARDS) => card.id === productId);
  if (!card) return null;
    
  return (
    <Modal>
        <img src={card.IMG} alt={card.title} />
    </Modal>
)};