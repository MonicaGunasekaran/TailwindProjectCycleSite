import saddle from './assets/saddle.png'
export default function Navbar(){
    return(
      <>

  <nav class="navbar h-16 bg-transparent w-full relative justify-between flex">
  <div class="absolute mx-auto h-full my- px-4 flex-items-center justify-between">
    <img src={saddle}class=" flex w-13 h-13 mx-0 mt-1.5 bg p-1 rounded"/>
  </div>
  <div class="absolute flex mt-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center  w-100 h-15 bg-[#b2f2bb] rounded-xl">
    <a href='#' class="text-white font-bold text-xl opacity-100 px-2 py-1 items-center justify-center align-middle  ml-5 mr-7 md: md:mr-5 ">Home</a>
  <select class="text-white font-bold font-xl px-2 py-1 mr-7 md:mr-5 items-center text-xl my-2 justify-center align-middle w-30  bg-transparent rounded"><option>Bicycle</option><option value="">Two wheeler</option></select> 
    <input type="text" placeholder='search' class="bg-transparent h-6 text-center  text-white text-xl font-bold w-18 "/>
    
    </div>
    <div class="ml-auto mr-10 my-auto  items-center align-middle "><p>profile</p></div>
    
</nav>
<div><h1 class="flex   mt-20 ml-20 font-bold text-amber-50 text-8xl max-w-1.5">Unleash your adventure</h1>
<p class="ml-20 mt-3 font-semibold text-amber-50 text-3xl max-w-180">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis praesentium velit sequi? Accusantium, iusto magnam.</p>
<button class="text-[#93EA99] ml-20 size-12 w-25 mt-5 font-extrabold text-xl bg-amber-50 rounded hover:bg-transparent hover:outline-1 hover:outline-gray hover:text-white">Explore</button></div></>)
}