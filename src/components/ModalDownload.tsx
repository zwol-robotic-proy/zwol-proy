import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ButtonProy from "./ButtonProy";
import Image from "next/image";

const ModalDownload = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="px-2 py-10 w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg cursor-pointer border border-transparent hover:border-zwol-1 hover:bg-zwol-1/10">
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <Image width={509} height={370} className="object-cover" src="/download.webp" alt="img03" />
                            </div>
                        </div>
                        <div className="py-12 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none lg:rounded-lg">
                            <h2 className="text-3xl text-center text-gray-800 font-bold">
                                Centro
                                <span className="text-zwol-1"> Descargas</span>
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Aquí encontrarás todos los recursos necesarios para optimizar el rendimiento de tus robots. Descarga manuales, software de actualización, drivers y guías de usuario de forma rápida y sencilla. Mantente siempre al día con las últimas novedades y mejoras de nuestros productos. Si tienes alguna duda, nuestro equipo de soporte está listo para asistirte. ¡Aprovecha todos nuestros recursos!
                            </p>
                            <div className="mt-8 w-min" />
                        </div>
                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <div>
                    <div className="w-full flex justify-end mb-3">
                        <AlertDialogCancel className="w-5 h-5 text-red-600 p-2 m-0 border-transparent">X</AlertDialogCancel>
                    </div>
                    <div className="overflow-y-scroll h-60 mt-10">
                        <div className="mb-16">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-sm lg:text-base">{'Robot Cartesiano ZCWUR2M'}</AlertDialogTitle>
                                <AlertDialogDescription className="whitespace-pre-line text-justify">
                                    <span className="text-xs lg:text-base">{'Descarga nuestro catálogo para más información.\nRobot Cartesiano ZCWUR2M.'}</span>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-transparent hover:bg-transparent">
                                    <ButtonProy styleP="text-gray-100 font-semibold rounded mt-8" hRef="mailto:info@zwol-robotic.com.ar">
                                        Descargar
                                    </ButtonProy>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </div>
                        <hr className="bg-black/50 h-1" />
                        <div className="mt-5 mb-16">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-sm lg:text-base">{'Robot Cartesiano ZCIT00M'}</AlertDialogTitle>
                                <AlertDialogDescription className="whitespace-pre-line text-justify">
                                    <span className="text-xs lg:text-base">{'Descarga nuestro catálogo para más información.\nRobot Cartesiano ZCIT00M.'}</span>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-transparent hover:bg-transparent">
                                    <ButtonProy styleP="text-gray-100 font-semibold rounded mt-8" hRef="mailto:info@zwol-robotic.com.ar">
                                        Descargar
                                    </ButtonProy>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </div>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
};

export default ModalDownload;