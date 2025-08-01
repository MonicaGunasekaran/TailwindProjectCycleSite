import cycle from './assets/cycle.png';

export default function Body() {
  return (
    <div className="px-4 py-8 bg-[#93EA99]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-4 mt-10 lg:mt-40 lg:ml-20 text-center lg:text-left">
          <h1 className="font-bold text-amber-50 text-4xl sm:text-5xl max-w-full">Unleash your adventure</h1>
          <p className="mt-3 font-semibold text-amber-50 text-base sm:text-xl px-2 lg:px-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis praesentium velit sequi? Accusantium, iusto magnam.
          </p>
          <button className="text-[#93EA99] px-5 py-2 mt-5 font-extrabold text-lg bg-amber-50 rounded hover:bg-transparent hover:outline hover:outline-1 hover:outline-gray-200 hover:text-white transition">
            Explore
          </button>
        </div>
        <div className="lg:col-span-5 flex justify-center mt-10 lg:mt-40">
          <img src={cycle} alt="Cycle" className="w-full max-w-xs sm:max-w-md lg:w-120" />
        </div>
        <div className="lg:col-span-3 bg-[#b2f2bb] p-4 rounded-xl text-center lg:text-left mt-10 lg:mt-40 mx-auto lg:mx-0">
          <p className="font-bold text-xl text-amber-50">4.5K+ Users</p>
          <p className="text-lg text-amber-50 mt-1.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button className="text-[rgb(147,234,153)] px-4 py-2 mt-4 font-extrabold text-lg bg-amber-50 rounded hover:bg-transparent hover:outline hover:outline-1 hover:outline-gray-200 hover:text-white transition">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
