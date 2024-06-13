import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="flex-1 absolute">
          <img className="w-screen h-screen object-cover brightness-50 select-none" src="/soldzwol.jpeg" alt="robotic welding" />
        </div>
        <div className="flex flex-col items-center relative justify-between ">
          <img className="max-w-60 select-none pointer-events-none" src="/zwol.png" alt="logo" />
 
          <h1 className="text-4xl my-14 text-white font-bold select-none">Próximamente</h1>

          <div className="grid grid-cols-2 gap-4">
            <Link href={"mailto:info@zwol-robotic.com.ar"} className="border border-gray-300 text-gray-300 bg-transparent rounded-md px-4 py-2 select-none hover:text-black hover:bg-gray-300">Correo</Link>
            <Link href={"https://wa.me/5491132027035"} className="border border-green-500 text-green-500 bg-transparent rounded-md px-4 py-2 select-none hover:bg-green-500 hover:text-white">Whatsapp</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
