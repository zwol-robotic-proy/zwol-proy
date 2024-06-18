import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CARDS } from "@/lib/utils";

const IndiceNavbar = ({title, content}:{title:string, content:any}) => {
    return (
        <li>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 text-sm lg:text-base font-medium hover:text-zwol-1 transition-all duration-500">{title}</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                    <DropdownMenuLabel>
                        <Link className="text-center p-1" href={`/${title.toLowerCase()}`} >{title}</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {
                        content.map(
                            (card: CARDS) => {
                                return (
                                    <DropdownMenuItem key={card.id}>
                                        <Link href={`${card.href}${card.id}`} key={card.id} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            {card.title}
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            }
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </li>
    )
};

export default IndiceNavbar;