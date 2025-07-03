import cycle from './assets/cycle.png';
export default function Body(){
return(
    <div><div class="grid grid-cols-12 gap-1">
        <div class="col-span-4 mt-40 ml-20 font-bold text-amber-50 text-5xl max-w-full"> <h1 >Unleash your adventure</h1>
        <p class=" mt-3 font-semibold text-amber-50 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis praesentium velit sequi? Accusantium, iusto magnam.</p>
        <button class="text-[#93EA99]  size-12 w-25 mt-5 font-extrabold text-xl bg-amber-50 rounded hover:bg-transparent hover:outline-1 hover:outline-gray hover:text-white">Explore</button>
        </div>
        <div class="col-span-5 mt-40 bg-transparent p-4 "><img src={cycle} class="w-120 "></img></div>
        <div class="col-span-2 bg-[#b2f2bb] h-50 p-4 ml-auto font-bold rounded-xl mt-90 "><p class="font-bold text-xl text-amber-50">4.5K+ Users</p> <p class="text-lg text-amber-50 mt-1.5"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button class="text-[rgb(147,234,153)]  size-7 h-10 p-1 w-20 mt-2 font-extrabold text-xl bg-amber-50 rounded hover:bg-transparent hover:outline-1 hover:outline-gray hover:text-white">Join</button>
            </div></div>
            </div>
)
}