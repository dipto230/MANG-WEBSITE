import React from "react";

const Services = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Main container */}
      <div className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center">

        {/* SER */}
        <h1 className="absolute left-[18%] top-[18%] text-[110px] font-extrabold">
          SER
        </h1>

        {/* ICE */}
        <h1 className="absolute right-[18%] top-[18%] text-[110px] font-extrabold">
          ICE
        </h1>

        {/* BIG V */}
        <h1 className="text-[320px] font-black leading-none">
          V
        </h1>

        {/* Top left micro text */}
        <div className="absolute left-[35%] top-[20%] text-sm font-bold leading-tight">
          Ctrl + YOUR <br />
          MIND
        </div>

        {/* Top right micro text */}
        <div className="absolute right-[33%] top-[22%] text-sm font-bold leading-tight text-left">
          Create <br />
          <span className="text-xs font-normal">
            Something Ctrl + N
          </span>
        </div>

        {/* Bottom text under V */}
        <div className="absolute bottom-[18%] text-center">
          <p className="text-3xl font-bold">design</p>
          <p className="text-xs tracking-widest">
            With&nbsp;&nbsp;&nbsp;Us
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
