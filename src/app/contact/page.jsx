"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Facebook } from "lucide";

export default function Contact() {
  return (
    <main className="w-screen">
      <Header/>
      <div className="bg-gray-50 pb-8" >
        <span className="flex text-center justify-center py-10 text-5xl">Contactez-nous ici</span>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="mail">Addresse e-mail</label>
            <input type="mail" id="mail" name="mail"  className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="phone">Contact</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{8}"  className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Entrez votre message ici..." className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
          </div>
        </form>
        <div>
          <span>Voici nos différentes adresses électroniques</span>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
