import ButtonProy from "@/components/ButtonProy";
import dynamic from 'next/dynamic';
const NoSSRComponent = dynamic(() => import('@/app/(log)/layout'), { ssr: false });

const LogIn = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col">
            <p className="font-semibold text-6xl">Esto es... Log In</p>
            <ButtonProy hRef="/" styleP="mt-10">Volver</ButtonProy>
        </div>
    )
};

export default LogIn;