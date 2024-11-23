import React from "react";
import Header from "@/components/header";
import { url } from "inspector";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <main className="w-screen">
      <Header/>
      <div className=""  >
        <p>Bienvenue au Complexe La Révélation</p>
      </div>
      <Footer/>
    </main>
  );
}
