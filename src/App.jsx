import { GoArrowUpRight } from "react-icons/go";
import Home from "./components/Home";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <main className="w-full h-screen overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full ">
          <Home />
        </div>
        <div className="absolute z-20 font-semibold top-0 left-20 my-auto  h-fit bottom-0">
          <h1 className="text-7xl londrina-outline-regular leading-24 text-gray-800">
            Master Architecture with <br />
            <span className="bg-black text-white px-3">the Power of AI</span>
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
        <div className="bg-[#f3f3f3] h-20 w-56 absolute bottom-0 right-0"></div>
        <nav
          className="absolute left-0 px-20 right-0 top-0 w-full 
        h-16  flex items-center justify-between"
        >
          <div className="flex items-center gap-x-3">
            <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
            <h1 className="text-2xl font-bold font-mono">AECHICULTURE</h1>
          </div>
          <ul className="flex font-medium items-center gap-x-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Fees</a>
            </li>
          </ul>
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
