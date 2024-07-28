'use client';
import { CARDS } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const IndiceFooter = ({ content, titleC }: { content: CARDS[], titleC: string }) => {
    const [isClient01, setIsClient01] = useState(false);

    useEffect(() => {
        setIsClient01(true);
    }, []);

    if (!isClient01) {
        return null;
    }
    return (
        <div className={`lg:mx-auto text-left`}>
            {
                ((window.location.pathname.toString() === '/productos/p/001' || window.location.pathname.toString() === '/productos' || window.location.pathname.toString() === '/productos/p/002') && (titleC === 'Productos')) ? (<p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7"><Link href={'/productos'}>{titleC}</Link></p>) : (
                    <>
                        <p className="text-lg text-center lg:text-left text-gray-900 font-medium mt-4 mb-2 lg:mb-7">{titleC}</p>
                        <ul className="text-sm text-center lg:text-left transition-all duration-500">
                            {
                                content.map((card: CARDS, i: number) => {
                                    return (
                                        <li className={`${i === (content.length - 1) ? '' : 'mb-2 lg:mb-6'}`} key={card.id || card.title}>
                                            <Link href={`${card.href || `/${card.title}`}`} className={`text-gray-600 hover:text-gray-900`}>
                                                {card.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </>) 
            }
        </div>
    )
};

export default IndiceFooter;