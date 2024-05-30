
export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="flex-1 absolute">
          <img className="w-screen h-screen object-cover brightness-50" src="/soldzwol.jpeg" alt="robotic welding" />
        </div>

        <div className="flex flex-col items-center relative  justify-between ">
          <img className="max-w-32" src="/zwol.png" alt="logo" />
          <h1 className="text-4xl text-white font-bold">Próximamente</h1>
        </div>
      </div>
    </main>
  );
}
