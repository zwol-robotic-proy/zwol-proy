'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CARDS } from "@/lib/utils";

const IndiceNavbar = ({ title, content }: { title: string, content: CARDS[] }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <li>
            {
            window.location.pathname.toString() === '/productos/p/001' || window.location.pathname.toString() === '/productos' || window.location.pathname.toString() === '/productos/p/002' ? <Link href={`/productos`}>{title}</Link> : (
                <DropdownMenu key={title}>
                    <DropdownMenuTrigger className="text-gray-600 text-sm lg:text-base font-medium hover:text-zwol-1 transition-all duration-500">
                        {title}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`bg-white border border-gray-200 shadow-lg rounded-md'}`}>
                        {
                            title === 'Productos' ? <><DropdownMenuLabel><Link href={'/productos'}>{title}</Link></DropdownMenuLabel><DropdownMenuSeparator /></> : <div className="hidden" />
                        }
                        {
                            content.map(
                                (card: CARDS) => {
                                    return (
                                        <DropdownMenuItem key={card.id}>
                                            <Link href={`${card.href}`} key={card.id} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                {card.title}
                                            </Link>
                                        </DropdownMenuItem>
                                    )
                                }
                            )
                        }
                    </DropdownMenuContent>
                </DropdownMenu>)
            }
        </li>
    )
};

export default IndiceNavbar;