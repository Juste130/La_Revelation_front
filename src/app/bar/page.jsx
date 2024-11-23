import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BoissonCard from "@/components/boissonCard";
import Image from "next/image";
import Link from "next/link";

export default function Bar() {
  const boissonCards = [
    {
      image: "/sobebra.png",
      name: "Boissons de la SOBEBRA",
      description: "Savourez les boissons locales de la SOBEBRA, des bières délicieuses et des eaux minérales rafraîchissantes.",
    },
    {
      image: "/vins.jpeg",
      name: "Vins",
      description: "Explorez notre sélection de vins rouges, blancs, et rosés.",
    },
    {
      image: "/champagnes.jpeg",
      name: "Champagnes",
      description:
        "Découvrez les meilleurs champagnes pour célébrer vos moments spéciaux.",
    },
    {
      image: "/spiritueux2.jpeg",
      name: "Spiritueux",
      description: "Une variété de spiritueux pour éveiller vos sens.",
    },
  ];

  return (
    <main className="w-screen bg-white">
      <Header />
      <div
        className=" relative w-screen h-[640px] bg-no-repeat bg-cover bg-center flex"
        style={{ backgroundImage: "url('/hallbarrevelation.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex z-30"></div>
        <span className="relative ml-[164px] mt-[300px] text-white ">
          <strong className="text-7xl ">Lounge Bar</strong>
          <br />
          <br />
          <br />
          <span className="text-2xl">
            Découvrez notre sélection raffinée de boissons, vins, champagnes et
            spiritueux de qualités .
          </span>
          <br />
          <br />
          <Link href={{pathname:'/reservation', hash:'reservationBar', query: {type:'BarSpace'}}}>
            <button className="w-[219px] h-[52px] text-xl rounded-md bg-[#636AE8] absolute z-40" >Réserver maintenant</button>
          </Link>
        </span>
      </div>
      {/*Section Présentation*/}
      <div className="flex flex-col justify-center pt-16">
        <center>
          <strong className="text-4xl mb-6">Bienvenue dans notre bar</strong>
          <div className="flex w-[90%] md:w-[600px] mt-5 space-x-4 mb-10">
            <Image src="/tofbar2.jpg" alt="Intérieur du bar" className="w-[45%] rounded-lg shadow-md" width={300} height={200} />
            <p className="w-[45%] my-auto text-lg">
              Découvrez un espace alliant élégance et confort. Détendez-vous avec notre sélection raffinée de vins, champagnes et boissons fortes.
            </p>
          </div>
        </center>
      </div>

      {/* Section Boissons */}
      <section id="boissons" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nos Boissons</h2>
          <p className="text-lg mb-8">
            Nous proposons une large gamme de boissons de qualité : boissons de la SOBEBRA, vins,
            champagnes, spiritueux, et plus encore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {boissonCards.map((boissonCard) => (
              <BoissonCard
                image={boissonCard.image}
                name={boissonCard.name}
                description={boissonCard.description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Section Célébrations */}
      <section id="celebrations" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Espaces pour Célébrations</h2>
          <p className="text-lg mb-8">
            Réservez nos espaces privés pour vos événements et célébrations.
          </p>
          <img
            src="/tofbar1.jpg"
            alt="Espaces de Célébration"
            className="w-full h-[800px] rounded-lg mx-auto"
          />
        </div>
      </section>
      <div className="w-full h-[400px] bg-[#f7f7f8] pt-[140px]">
        <center>
          <strong className="text-[#7272e0] text-5xl ">
          Réservez votre espace de fête 7 jours sur 7
          </strong>
          <br />
          <br />
          <p>
             Organisez votre événement dans un cadre exceptionnel. Que ce soit pour une célébration
             privée ou une fête mémorable, notre espace est disponible pour rendre chaque moment inoubliable.
          </p>
          <br />
          <button className="w-fit h-fit py-3 px-5 bg-[#7272e0] rounded-lg text-white text-lg ">
            Réserver maintenant
          </button>
        </center>
      </div>
      {/* Carte (Google Map intégrée) */}
      <section id="contact" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Nous Trouver</h2>
          <div className="h-[300px]">
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.651386788597!2d2.3297245!3d6.4373299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a98bf6f6c33d%3A0x4f87b972d9e3e3e8!2zQmFyIFLDqXbDqWxhdGlvbg!5e0!3m2!1sfr!2sbj!4v1728049329922!5m2!1sfr!2sbj"
              width="100%" height="100%" allowfullscreen="" loading="lazy" className="rounded-lg border-0 mx-auto my-9" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
