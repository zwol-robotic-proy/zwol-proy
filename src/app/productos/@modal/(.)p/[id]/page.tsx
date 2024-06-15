import { Modal } from './modal';
import CARSINFO from '@/DDBB/CARDS_INFO.json';

interface CARDS {
    id?: string
    title?: string
    description?: string
    HREF?: string
    IMG?: string
}

export default function ProductModal({
  params: { id: productId },
}: {
  params: { id: string };
}) {

  const card = CARSINFO.find((card: CARDS) => card.id === productId);

    if (!card) {
        return null;
    }
  return (
    <Modal>
      {
        <img src={card.IMG} alt={card.title} className='w-80 active:transition-transform active:scale-150 select-none' />
      }
    </Modal>
)};