"use client";
import React from "react";
{/*import {Mail} from "lucide-react";*/}

export default function Footer() {
    return (
      <footer className="w-full h-[400px] bg-[#a19cac] pt-[120px] ">
        <div className=" relative flex flex-col justify-center text-center">
          <div>
             <div className="flex ml-[43%] mb-9" >
                <img src="logohouezesperance.png" alt="" className="w-14 h-12 "/>
                <strong className=" ml-3 text-3xl ">La Révélation</strong>
             </div>
          </div>
          <p className="font-bold text-lg text-[#35333a]">Inscrivez-vous à  notre newsletter</p>
          <span className="flex justify-center rounded-lg mt-3">
            <span className="flex w-[280px] bg-white h-[40px] rounded-l-lg">
              {/*<Mail />*/}
              <input type="email" name="" id="" placeholder="Entrez votre addresse e-mail" required className="w-[90%] h-full text-sm" />
            </span>
            <input type="submit" value="Soumettre" className="bg-[#7f7fee] text-white text-sm w-fit px-5 h-[40px] rounded-r-lg" />
          </span>
          <span className="mt-20">
          © 2024 La Révélation. Tous droits réservés.
          </span>
          <img src="iconeFacebook.png" alt="" className="w-8 h-8 absolute bottom-1 right-28"/>
          
        </div>

      </footer>
    );
  }
  