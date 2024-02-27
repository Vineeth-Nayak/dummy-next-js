"use client";
import axios from "axios";
import React, { useState } from "react";

interface dataFormProps {
  getPhotos: (data: []) => void;
}

function Navbar({ getPhotos }: dataFormProps) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e: React.MouseEvent) => {
    // console.log(e, search);
    const response = await axios.post("http://localhost:3000/api/search", { searchTerm: search });
    const data = await response?.data?.data;
    getPhotos(data?.photos);
    console.log(data);
  };

  return (
    <div className="relative h-[50vh] flex justify-center items-center">
      <img className="absolute z-0 object-cover w-full h-full  " src="/cover.jpg" alt="" />

      <div className="absolute z-10 m-auto w-1/2 flex justify-center">
        <input
          className="min-w-[50%] text-black outline-none px-[1rem] py-[0.5rem] rounded-3xl	"
          type="text"
          name="search"
          value={search}
          autoComplete="off"
          autoFocus={true}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="ml-[0.5rem] min-w-[20%] px-[1rem] py-[0.5rem] rounded-sm  bg-cyan-900 hover:bg-cyan-700 transition-all duration-[0.5s] ease-in-out outline-none"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Navbar;
