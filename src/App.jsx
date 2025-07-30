import { GoArrowUpRight } from "react-icons/go";
import Home from "./components/Home";
import logo from "./assets/ARCHICULTURE_LOGO.png";
import { LuMouse } from "react-icons/lu";
import { ReactLenis, useLenis } from "lenis/react";
import how from "./assets/how.png";
import arrow from "./assets/arrow.png";
import arrow2 from "./assets/arrow2.png";
import paper from "./assets/paper.webp";
function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const features = [
    {
      title: "Corporate Ambience",
      description:
        "Prepares students for real office culture. They start feeling like professionals from day one.",
    },
    {
      title: "Play & Relax Corners",
      description:
        "Keeps mental fatigue away. Helps fuel creativity, social bonding, and a positive emotional memory attached to the space.",
    },
    {
      title: "Engaging Atmosphere",
      description:
        "Turns upskilling into a lifestyle. Students don’t just come to learn. They come to belong.",
    },
  ];

  return (
    <>
      <ReactLenis root />
      {/* landpage section  */}
      <main className="w-full h-screen overflow-hidden relative">
        <img src={arrow} alt="" className="absolute -bottom-20 z-20 -left-40" />
        <div className="absolute top-0 z-10 left-0 w-full h-full ">
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
          <p className="leading-7 poppins-light capitalize  my-5 text-gray-800">
            From concept to construction, gain hands-on experience <br /> using
            AI to elevate your architectural thinking and execution.
          </p>
          <button
            className=" mt-7 flex bebas-neue gap-x-3 border-2 text-lg tracking-[0.1em]  uppercase
             border-gray-800/50
           text-white bg-[#293849] px-10 rounded-lg py-3"
          >
            Get Started
            <GoArrowUpRight className="text-lg translate-y-1" />
          </button>
        </div>
        <span
          className="absolute flex items-center gap-x-2 right-0 text-sm poppins-regular mx-auto w-fit  text-[#909294]  left-0 bottom-16
           z-40"
        >
          <LuMouse className="text-xl -translate-y-0.5 animate-bounce" /> Scroll
          down to learn more
        </span>
        <p
          className="absolute bottom-16  poppins-regular leading-7 
         text-gray-600 max-w-xs w-fit h-fit right-10   z-30"
        >
          This Upskilling program bridges the gap between academic learning and
          real-world architectural practice
        </p>
        <div className="bg-[#f3f3f3] z-20 h-20 w-56 absolute bottom-0 right-0"></div>
        <nav
          className="absolute z-30 left-0 px-20 right-0 top-0 w-full 
        h-20  flex items-center justify-between"
        >
          <div className="flex items-center gap-x-3">
            <img src={logo} alt="logo" className="w-[200px] object-contain" />
          </div>
          <ul
            className="flex w-full font-medium max-w-sm poppins-regular
           text-[#293849] cursor-pointer  items-center justify-around gap-x-8"
          >
            {/* <li>
              <a href="#" className="nav-link uppercase poppins-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link uppercase poppins-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link uppercase poppins-medium">
                Fees
              </a>
            </li> */}
          </ul>
          <button
            className=" mt-5 flex bebas-neue gap-x-3 border-2 text-lg tracking-[0.1em]  uppercase
             border-gray-800/50
           text-white bg-[#293849] px-10 rounded-lg py-2"
          >
            Contact Us
          </button>
        </nav>
        <div className="absolute left-0  right-0 h-32 bg-gray-200 bottom-0"></div>
      </main>
      {/* how we work section  */}
      <main
        className="h-screen relative w-full bg-[#ffffff] flex py-20 flex-col items-center
     "
      >
        <h2 className="text-5xl bebas-neue-bold text-[#293849]">
          How We Works?
        </h2>
        <p className="poppins-regular text-gray-600 my-5 leading-7 max-w-xl text-center">
          {" "}
          First of its kind Creative Campus - not a classroom A place where
          talent is shaped, where confidence is built, and where Architecture is
          celebrated like a culture
        </p>
        <div className="grid max-w-7xl  gap-x-2 my-6  grid-cols-2 relative z-20">
          <div className="flex items-center  justify-center">
            <img src={how} alt="" />
          </div>
          <div className="flex  py-6 flex-col justify-center">
            <span className="bebas-neue-bold relative hover:z-20 text-xl tracking-widest text-[#293849]">
              What We Offer{" "}
            </span>
            <ul className="flex flex-col mt-4 gap-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className=" gap-x-2 border gap-y-2 flex flex-col border-gray-200 p-5 rounded-lg"
                >
                  <span className="bebas-neue-bold text-xl tracking-widest text-[#293849]">
                    {feature.title}
                  </span>
                  <p className="poppins-regular leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={paper}
          alt=""
          className="absolute inset-0 m-auto object-cover opacity-25"
        />
        {/* <video
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
        </video> */}
        <img
          src={arrow2}
          alt=""
          className="absolute top-20 z-20 -left-20 opacity-50"
        />
      </main>
    </>
  );
}

export default App;
