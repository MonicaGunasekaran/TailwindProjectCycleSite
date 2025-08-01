import saddle from './assets/saddle.png';
import person from './assets/person.jpg';

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-transparent px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={saddle} className="w-10 h-10 rounded-3xl p-1 bg-white" alt="Logo" />
        <span className="text-white font-bold text-xl sm:hidden">Ride</span>
      </div>

      <div className="hidden sm:flex justify-center items-center gap-4 bg-[#b2f2bb] px-4 py-1 rounded-xl">
        <a href="#" className="text-white font-bold text-base sm:text-lg">Home</a>
        <select className="bg-transparent text-white font-bold text-base sm:text-lg">
          <option>Bicycle</option>
          <option>Two wheeler</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent h-8 px-2 text-white text-sm sm:text-base font-bold border border-white rounded focus:outline-white"
        />
      </div>

      <div className="flex items-center gap-2">
        <img src={person} alt="User" className="w-9 h-9 rounded-full object-cover" />
      </div>
    </nav>
  );
}
