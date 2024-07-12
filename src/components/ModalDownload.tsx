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

const ModalDownload = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="px-2 py-10 w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg cursor-pointer border border-transparent hover:border-zwol-1 hover:bg-zwol-1/10">
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex justify-center bg-cover rounded-b-none border lg:rounded-lg">
                                <img className="object-cover" src="https://images.stockcake.com/public/0/3/2/03242def-10f2-4f65-b333-890f8703b3ce_large/download-icon-design-stockcake.jpg" alt="img" />
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
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Desea Descargar el archivo?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Recuerde que el archivo pesa 1GB de almacenamiento Interno!.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="text-red-600">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-transparent hover:bg-transparent">
                        <ButtonProy styleP="text-gray-100 font-semibold rounded" hRef="mailto:info@zwol-robotic.com.ar">
                            Continuar
                        </ButtonProy>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};

export default ModalDownload;