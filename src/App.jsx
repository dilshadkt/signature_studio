import { GoArrowUpRight } from "react-icons/go";
import Home from "./components/Home";
import logo from "./assets/ARCHICULTURE_LOGO.png";
import { LuMouse } from "react-icons/lu";
function App() {
  return (
    <>
      <main className="w-full h-screen overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full ">
          <Home />
        </div>
        <div className="absolute z-20 font-semibold top-0 left-20 my-auto  h-fit bottom-0">
          <h1 className="text-7xl bebas-neue-bold uppercase leading-24 text-[#293849]">
            Master Architecture <br />
            with{" "}
            <span className="bg-[#293849] text-white px-3">
              the Power of AI
            </span>
          </h1>
          <p className="text-lg poppins-light my-5 text-gray-800">
            From concept to construction, gain hands-on experience <br /> using
            AI to elevate your architectural thinking and execution.
          </p>
          <button
            className="poppins-medium mt-3 flex gap-x-3 border-2 text-xs uppercase border-gray-800/50
           text-gray-800 px-10 rounded-lg py-3"
          >
            Contact Us
            <GoArrowUpRight className="text-lg" />
          </button>
        </div>
        <span
          className="absolute flex items-center gap-x-2 right-0 text-sm poppins-regular mx-auto w-fit  text-[#909294]  left-0 bottom-16
           z-40"
        >
          <LuMouse className="text-xl -translate-y-0.5" /> Scroll down to learn
          more
        </span>
        <p className="absolute bottom-16  poppins-regular leading-7  text-gray-600 max-w-xs w-fit h-fit right-10   z-20">
          This Upskilling program bridges the gap between academic learning and
          real-world architectural practice
        </p>
        <div className="bg-[#f3f3f3] h-20 w-56 absolute bottom-0 right-0"></div>
        <nav
          className="absolute left-0 px-20 right-0 top-0 w-full 
        h-20  flex items-center justify-between"
        >
          <div className="flex items-center gap-x-3">
            <img src={logo} alt="logo" className="w-[200px] object-contain" />
          </div>
          <ul
            className="flex w-full font-medium max-w-sm poppins-regular
           text-[#293849] cursor-pointer  items-center justify-around gap-x-8"
          >
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Fees
              </a>
            </li>
          </ul>
          <button className="border-2 border-dotted poppins-medium  text-sm border-[#293849]/60 rounded-md px-5 py-2">
            Contact Us
          </button>
        </nav>
      </main>
      <main className="h-screen w-full bg-[#ffffff] flex items-center justify-center">
        <video
          className="w-[500px] h-[500px] object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}

export default App;
