import React from "react";
import Header from "@/components/header";
import ServiceMotel from "@/components/serviceMotel"
import Footer from "@/components/footer";
import Link from "next/link";

export default function Motel() {
  const services = [
    { title:"Chambre ventilée",
      description:"Chambre confortable avec ventilation pour un séjour agréable à un prix abordable",
      prixHeure:"1500",
      prixNuit:"7000",
      image:"motelrevelationexterieur.jpg",} ,
    { title:"Chambre climatisée",
      description:"Chambre climatsée offrant confort et fraicheur pour un séjour reposant à un tarif attratif",
      prixHeure:"2000",
      prixNuit:"10000",
      image:"motelrevelationexterieur.jpg",} ,
    { title:"Suite",
      description:"Suite élégante et spacieuse, alliant luxe et confort pour une expérience inoubliable",
      prixHeure:"4000",
      prixNuit:"15000-20000",
      image:"motelrevelationexterieur.jpg",}
  ]
  return (
    <main className="w-screen bg-white">
      <Header/>
      <div className=" relative w-screen h-[640px] bg-no-repeat bg-cover bg-center flex" style={{backgroundImage: "url('/motelrevelationexterieur.jpg')"}} >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex z-30">
        </div>
        <span className="relative ml-[164px] mt-[300px] text-white ">
          <strong className="text-7xl ">MOTEL</strong> 
          <br />
          <br />
          <br />
          <span className="text-2xl">Retrouvez nostalgie et confort dans notre paisible retraite, nichée au cœur d'une zone calme.</span>
          <br />
          <br />
          <Link href={{pathname:'/reservation',hash: 'reservationMotel' , query: {type:'MotelRoom'}}}>
            <button className="w-[219px] h-[52px] text-xl rounded-md bg-[#636AE8] absolute z-40" >Réserver maintenant</button>
          </Link>
        </span>
      </div>
      <div className="flex  flex-col justify-center pt-16">
        <center>
          <strong className="text-4xl justify-center ">Nos Services</strong>
          <br />
          <br />
          <p>Découvrez une gamme de services pensés pour votre confort à La Révélation, le motel qui répond à toutes vos attentes lors de votre séjour.</p>
          <div className="flex justify-center mt-8 space-x-5 mx-auto"> {services.map((service) => <ServiceMotel
          title={service.title}
          description={service.description}
          prixHeure={service.prixHeure}
          prixNuit={service.prixNuit}
          image={service.image} />)}</div>
        </center>
      </div>
      <div className="w-full h-[400px] bg-[#f7f7f8] pt-[140px]">
        <center>
          <strong className="text-[#7272e0] text-5xl ">Réservez dès maintenant 7 jours sur 7</strong>
          <br />
          <br />
          <p>Réservez votre place dès aujourdh'ui et profitez d'un séjour inoubliable avec nous pour une semaine pleine de détente et de plaisir</p>
          <br />
          <button className="w-fit h-fit py-3 px-5 bg-[#7272e0] rounded-lg text-white text-lg ">Réserver maintenant</button>
        </center>
      </div>
      {/* Carte (Google Map intégrée) */}
      <section id="contact" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Nous Trouver</h2>
          <div className="h-[300px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.65139928024!2d2.3297209!3d6.4373295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9e0de710d71%3A0x3213a54d919b171c!2zTGEgUsOpdsOpbGF0aW9u!5e0!3m2!1sfr!2sbj!4v1728049927146!5m2!1sfr!2sbj"
           width="100%" height="100%" allowfullscreen="" loading="lazy" className="rounded-lg border-0 mx-auto my-9" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
