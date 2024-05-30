
export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="flex-1 absolute">
          <img className="w-screen h-screen object-cover brightness-50" src="/soldzwol.jpeg" alt="robotic welding" />
        </div>

        <div className="flex flex-col items-center relative  justify-between ">
          <img className="max-w-60" src="/zwol.png" alt="logo" />

          <h1 className="text-4xl my-14 text-white font-bold">Próximamente</h1>

          <div className="flex">
            <button type="button" className="border border-gray-300 text-white rounded-md px-4 py-2 m-2">
              Correo
            </button>
            <button type="button" className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
