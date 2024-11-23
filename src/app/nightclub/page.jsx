"use client";

import React, {useState, useEffect} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Evenement from "@/components/evenement"
import Link from "next/link";

  const events = [
    { title: "Soirée DJ Party", date: "Samedi 30 Septembre", description: "Une nuit pleine de musique avec les meilleurs DJ du moment." },
    { title: "Nuit Tropicale", date: "Vendredi 6 Octobre", description: "Ambiance tropicale avec cocktails exotiques et danse toute la nuit." },
    { title: "Full Moon Party", date: "Samedi 14 Octobre", description: "Une fête inoubliable sous la pleine lune avec des animations lumineuses." },
  ];
  
  const promotions = [
    { title: "Open Bar", date: "Tous les jeudis", description: "Profitez de l'open bar jusqu'à minuit." },
    { title: "Ladies Night", date: "Tous les mercredis", description: "Entrée gratuite pour les dames avant 23h." },
    { title: "Happy Hour", date: "Tous les vendredis", description: "Boissons à moitié prix entre 20h et 22h." },
  ];
  
  export default function NightClub() {
    const [eventsList, setEventsList] = useState([]);
    const [promotionsList, setPromotionsList] = useState([]);
  
    useEffect(() => {
      // You could fetch real events and promotions from an API
      setEventsList(events);
      setPromotionsList(promotions);
    }, []);
  return (
    <main className="w-screen">
      <Header/>
      <div className=" relative w-screen h-[640px] bg-no-repeat bg-cover bg-center flex" style={{backgroundImage: "url('/VIPLaRevelation DJ.jpg')"}} >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex z-30">
        </div>
        <span className="relative ml-[164px] mt-[300px] text-white ">
          <strong className="text-7xl ">NIGHT-CLUB</strong> 
          <br />
          <br />
          <br />
          <span className="text-2xl">Dansez, célébrez et vivez une expérience nocturne inoubliable.</span>
          <br />
          <br />
          <Link href={{pathname:'/reservation',hash:'reservationVip' , query: {type:'NightSpace'}}}>
            <button className="w-[219px] h-[52px] text-xl rounded-md bg-[#636AE8] absolute z-40" >Réserver maintenant</button>
          </Link>
        </span>
      </div> 
      {/* Welcome Section */}
      <section className="py-12 px-6 bg-white ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bienvenue au Night Club La Révélation</h2>
          <p className="text-lg mb-4">
            Entrez dans un monde de fête, de lumière et de musique. La Révélation vous propose des soirées mémorables avec des DJ de renommée, des boissons exclusives
            et une ambiance qui ne s’arrête jamais. Que ce soit pour danser jusqu’au bout de la nuit ou simplement pour profiter de notre espace lounge, nous avons tout ce qu'il vous faut pour passer une nuit inoubliable.
          </p>
        </div>
      </section>
      {/* Upcoming Events Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Événements à venir</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {eventsList.map((event, index) => (
            <Evenement
            key={index}
            title = {event.title}
            date = {event.date}
            description = {event.description}
            />
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Promotions Exclusives</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {promotionsList.map((promo, index) => (
            <Evenement
            key={index}
            title = {promo.title}
            date = {promo.date}
            description = {promo.description}
            />
          ))}
        </div>
      </section>
      {/* VIP Section */}
      <section className="py-12 px-6 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Réservez Votre Espace VIP</h2>
          <p className="text-lg mb-6">
            Vivez l'expérience ultime en réservant notre espace VIP. Profitez d'un service exclusif, de boissons premium et d'une ambiance privée pour vous et vos invités. Parfait pour les célébrations spéciales, anniversaires, ou simplement pour passer une nuit exceptionnelle.
          </p>
          <button className="bg-[#7272e0] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-600 transition duration-300">
            Réserver Maintenant
          </button>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Notre Localisation</h2>
        <div className="container mx-auto h-[300px]">
          {/* Google Maps iframe */}
          <iframe
            className="rounded-lg border-0 mx-auto my-9"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5766059416565!2d-122.0842496847189!3d37.42206567982588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba7496dba5c7%3A0xc7f9a2d6f2e6a0e5!2sGoogleplex!5e0!3m2!1sen!2sfr!4v1631117031048!5m2!1sen!2sfr"
            allowFullScreen=""
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

