import { CARDS } from '@/lib/utils';
import Link from 'next/link';

const IndiceFooter = ({ content, titleC }: { content: CARDS[], titleC: string }) => {
    return (
        <div className="lg:mx-auto text-left">
            <p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7">{titleC}</p>
            <ul className="text-sm text-center lg:text-left transition-all duration-500 ">
                {
                    content.map((card: CARDS, i: number) => {
                        return (
                            <li className={`${i === (content.length - 1) ? '' : 'mb-2 lg:mb-6'}`} key={card.id || card.title}>
                                <Link href={`${card.href}${card.id ? card.id : ''}`} className={`text-gray-600 hover:text-gray-900`}>
                                    {card.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default IndiceFooter;