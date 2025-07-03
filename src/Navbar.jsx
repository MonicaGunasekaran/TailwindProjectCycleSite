import saddle from './assets/saddle.png';
import person from './assets/person.jpg';

export default function Navbar() {
  return (
    <nav className="h-20 bg-transparent w-full grid grid-cols-3 items-center px-6">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={saddle} className="w-12 h-12 rounded-3xl p-1 bg-white" alt="Logo" />
      </div>

      {/* Center: Navigation */}
      <div className="flex justify-center items-center max-h-50 max-w-300 gap-4 bg-[#b2f2bb] px-4 py-1 rounded-xl">
        <a href="#" className="text-white font-bold pl-10 text-xl">Home</a>
        
        <select className="bg-transparent text-white font-bold text-xl">
          <option>Bicycle</option>
          <option>Two wheeler</option>
        </select>
        
        <input
          type="text"
          placeholder="Search"
          className="pr-5 bg-transparent h-8 px-2 text-white text-lg font-bold  border-white size-50 focus:outline-white focus:outline-1 rounded"
        />
      </div>

      {/* Right: Profile image */}
      <div className="flex justify-end items-center">
        <img src={person} alt="User" className="w-10 h-10 rounded-full object-cover" />
      </div>
    </nav>
  );
}
