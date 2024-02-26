import React from "react";

function Navbar() {
  return (
    <div className="relative h-[50vh] flex justify-center items-center">
      <img className="absolute z-0 object-cover w-full h-full  " src="/cover.jpg" alt="" />

      <div className="absolute z-10 m-auto w-1/2 flex justify-center">
        <input className="min-w-[50%] text-black outline-none px-[1rem] py-[0.5rem] rounded-3xl	" type="text" name="search" />
        <button
          type="button"
          className="ml-[0.5rem] min-w-[20%] px-[1rem] py-[0.5rem] rounded-sm  bg-cyan-900 hover:bg-cyan-700 transition-all duration-[0.5s] ease-in-out outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Navbar;
