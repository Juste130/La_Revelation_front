"use client";

export default function Baniere({
    image,
  }
) {
    return (
      <main className="w-full h-[400px]">
        <img src={image} alt="" className="w-full h-full" />
      </main>
    );
  }
