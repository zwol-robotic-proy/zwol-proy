
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center p-auto">
      <div className="flex-1 absolute">
        <img className="w-screen h-screen object-cover" src="/construccionzwol.jpeg"/>
      </div>

      <div className="w-full relative max-w-5xl items-center justify-between text-sm lg:flex bg-transparent -bottom-10">
        <p className="font-extrabold text-center text-xl text-zinc-[#343338] ">En Construcción!</p>
      </div>
    </main>
  );
}
