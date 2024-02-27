"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

// Define the type of your photo object
type Photo = {
  src: {
    portrait: string;
  };
  // Add other properties as needed
};

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const getPhotos = (photos: Photo[]) => {
    console.log("GET", photos);
    setPhotos(photos);
  };

  return (
    <main>
      <Navbar getPhotos={getPhotos} />
      <div className="flex flex-wrap p-[0.5rem] items-center justify-center">
        {photos.map((photo) => (
          <div className="rounded-full w-[300] h-[300] m-[0.5rem]">
            <Image src={photo?.src?.portrait} width={300} height={300} alt="Picture of the author" className=" rounded" />
          </div>
        ))}
      </div>
    </main>
  );
}
