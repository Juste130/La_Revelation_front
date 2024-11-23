"use client";
import React from "react";

export default function ServiceMotel ({
    title,
    description,
    prixHeure,
    prixNuit,
    image,
}){
    return (
        <main>
            <div className="w-[400px] h-[250px] flex rounded-md border-[3px] mb-28">
                <div className="relative flex flex-col w-[55%] pl-3 pt-3">
                    <strong className="absolute left-auto text-xl font-bold">{title}</strong>
                    <p className=" w-full flex mt-8 text-[#a19b9b] justify-start">{description}</p>
                    <span className="absolute left-auto text-[#a19b9b] bottom-12">Prix: <span>{prixHeure}FCFA/heure {prixNuit}FCFA/nuit</span></span>
                    <button className="absolute flex bottom-3 w-fit text-base font-bold text-sky-600 border-[3px] px-2 py-1 border-sky-600 rounded-lg">Voir Plus</button>
                </div>
                <div className=" flex w-[42%] right-0">
                    <img src={image} alt="" className="h-[220px] my-auto rounded-md "/>
                </div>
            </div>
        </main>
    );
}