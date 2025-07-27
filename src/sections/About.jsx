import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space pt-8 pb-24" id="about" >
      <h2 className="text-heading">About Me</h2>

      {/* Grid Layout: 6 columns on md+, 1 column on mobile */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-12">

        {/* Grid 1: Intro */}
        <div className="relative overflow-hidden flex items-end grid-default-color md:col-span-3 h-[18rem]">
          <img
            src="/assets/Arbaz_1.png"
            alt="coding mobile view"
            className="block md:hidden absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
          />
          <img
            src="/assets/coding-pov.png"
            alt="coding desktop view"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 md:scale-[1.75] lg:scale-[2.5]"
          />
          <div className="z-10 p-6">
            <p className="headtext">Hi, I'm Arbaz Haider</p>
            <p className="subtext">
              Just a passionate teacher and a full-stack developer who turns his coffee into code.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 3: Time Zone */}
        <div className="relative grid-black-color md:col-span-3 h-[18rem] overflow-hidden">
          <div className="z-10 p-6 w-[60%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-10 top-2 w-[40%] h-auto max-h-[70%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Project Invite — 35% width = 2 columns */}
        <div className="grid-special-color md:col-span-2 h-[18rem]">
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5  CODE IS CRAFT — 65% width = 4 columns */}
        <div className="grid-default-color md:col-span-4 h-[18rem] relative">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-yellow-100">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "60%", left: "35%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-25deg", top: "17%", left: "82%" }}
              image="/assets/logos/tailwind_logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "60%", left: "65%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "7deg", top: "6%", left: "12%" }}
              text="Robust"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "50%", left: "2%" }}
              text="Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "20%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "10%", left: "57%" }}
              text="Scalable"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "68%", left: "87%" }}
              image="/assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "70%", left: "25%" }}
              image="/assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "5%" }}
              image="/assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
