import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Service from "@/components/service";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "Chambres Confortables",
      description:
        "Des chambres modernes et accueillantes pour un séjour parfait.",
      image: "/chambre.jpg",
      link: "/motel",
    },
    {
      title: "Espace Bar",
      description:
        "Un cadre élégant pour siroter vos cocktails favoris et vous détendre.",
      image: "/bar.jpg",
      link: "/bar",
    },
    {
      title: "Nightclub",
      description:
        "Vivez des nuits inoubliables dans une ambiance festive et vibrante.",
      image: "/nightclub.jpg",
      link: "/nightclub",
    },
  ];

  return (
    <main className="bg-gray-100 w-screen">
      <Header />

      {/* Section d'introduction */}
      <div
        className="relative w-full h-[720px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/hotel-revelation.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>
        <div className="z-20 text-white px-6">
          <h1 className="text-6xl font-bold mb-6">
            Bienvenue à <span className="text-[#ffba08]">La Révélation</span>
          </h1>
          <p className="text-xl mb-10">
            Découvrez le luxe, le confort et l'élégance dans un cadre
            exceptionnel. Votre refuge parfait pour des souvenirs inoubliables.
          </p>
        </div>
      </div>

      {/* Section des annonces d'événements */}
      <section className="py-16 bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Événement Spécial : Soirée Glamour</h2>
          <p className="text-xl mb-8">
            Rejoignez-nous ce samedi pour une soirée inoubliable avec musique live, cocktails exclusifs et une ambiance festive. 
            <br />Entrée gratuite pour les 50 premiers invités !
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/event.jpg"
              alt="Événement spécial"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <Link href="/evenement">
            <button className="mt-8 px-8 py-4 bg-white text-[#ff4500] font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
              En savoir plus
            </button>
          </Link>
        </div>
      </section>

      {/* Section des services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Nos Services Exclusifs</h2>
          <p className="text-lg mb-12">
            Découvrez nos services pour rendre votre séjour inoubliable, que ce
            soit pour le repos, la détente ou la fête.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {services.map((service, index) => (
              <Service
                key={index}
                index={index}
                link={service.link}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section de réservation */}
      <section className="py-16 bg-gradient-to-r from-[#ffba08] to-[#e6a607] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Réservez dès aujourd'hui !
          </h2>
          <p className="text-lg mb-8">
            Ne manquez pas l'opportunité de vivre une expérience unique à La
            Révélation.
          </p>
          <Link href="/reservation">
            <button className="px-8 py-4 bg-white text-[#ffba08] font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
              Réserver maintenant
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
