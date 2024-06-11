import Link from "next/link"

const ButtonProy = ({children, hRef, styleP}:{children: React.ReactNode, hRef: string, styleP?: string})  => {
    return (
        <div className={`${styleP} ?? '`}>
            <Link href={hRef} className="lg:h-9 block lg:w-fit bg-zwol-1 rounded-lg shadow-sm text-xs py-2 px-3 lg:text-sm text-white transition-all duration-500 hover:bg-zwol-1/50 hover:text-black hover:scale-105">
                {children}
            </Link>
        </div>
    )
};

export default ButtonProy;