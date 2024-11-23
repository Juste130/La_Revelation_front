"use client";
import React from "react";

export default function BoissonCard({image, name, description}){
    return(
        <div className="bg-white p-6 shadow-md rounded-lg">
          <img src={image} alt={name} className=" w-full h-[200px] rounded-lg" />
          <h3 className="text-xl font-bold mt-4">{name}</h3>
          <p>{description}</p>
        </div>
    )
}