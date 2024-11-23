"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { reserverChambre, reserverEvenement } from "@/lib/api/functions";
import { useRouter } from "next/navigation";

export default function Reservation() {
  const [typeReservation, setTypeReservation] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = (value) => {
    setTypeReservation((prev) => (prev !== value ? value : null));
  };

  const typeRef = useRef(null);
  const dateHeureDebutRef = useRef(null);
  const dateHeureFinRef = useRef(null);
  const nombreInvitesRef = useRef(null);
  const plusDetailsRef = useRef(null);
  const placeRef = useRef(null);
  const dateRef = useRef(null);
  const heureDebutRef = useRef(null);
  const dureeRef = useRef(null);

  const [reservation, setReservation] = useState({
    place_designation: '',
    date: '',
    heure_debut: '',
    duree: '',
    nombre_invites: '',
    plus_details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };
  const handleSubmitbar = async (e) => {
    e.preventDefault();
    setLoading(true);
    const barReservation = {
      place_designation: placeRef.current.value,
      date: dateRef.current.value,
      heure_debut: heureDebutRef.current.value,
      duree: dureeRef.current.value,
      nombre_invites: nombreInvitesRef.current.value,
      plus_details: plusDetailsRef.current.value,
    };
    try {
      const data = await reserverEvenement(barReservation);
      alert('Réservation Bar réussie!');
    } catch (error) {
      console.error('Erreur de réservation:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitVip = async (e) => {
    e.preventDefault();
    setLoading(true);
    const vipReservation = {
      place_designation: 'vip',
      date: dateRef.current.value,
      heure_debut: heureDebutRef.current.value,
      duree: dureeRef.current.value,
      nombre_invites: nombreInvitesRef.current.value,
      plus_details: plusDetailsRef.current.value,
    };
    try {
      const data = await reserverEvenement(vipReservation);
      alert('Réservation VIP réussie!');
    } catch (error) {
      console.error('Erreur de réservation:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitRoom = async (e) => {
    e.preventDefault();
    setLoading(true);
    const roomReservation = {
      room_type: typeRef.current.value,
      date_debut: dateHeureDebutRef.current.value,
      date_fin: dateHeureFinRef.current.value,
      plus_details: plusDetailsRef.current.value,
    };
    try {
      const data = await reserverChambre(roomReservation);
      alert("La soumission de votre nouvelle réservation a été un succès");
    } catch (error) {
      console.error("Erreur de soumission:", error);
      alert("Erreur lors de la création de la réservation");
    }
  };
  useEffect(() => {
    // Vérification de la requête dans l'URL
    if (router.query && router.query.type) {
      if (["MotelRoom", "NightSpace", "BarSpace"].includes(router.query.type)) {
        setTypeReservation(router.query.type);
      }
    }
  }, [router.query]);
  return (
    <main className="">
      <Header />
      <div className="bg-gray-50 flex flex-col text-center ">
        <span className="text-5xl font-bold mt-16">
          Espace des Réservations
        </span>
        <span className="text-3xl mt-6">Faites vos réservations ici</span>
        <span className="mt-10 text-2xl flex text-center justify-center font-semibold space-x-8 mb-3">
          <span
            onClick={() => handleClick("NightSpace")}
            className={`w-auto ${
              typeReservation === "NightSpace" ? "bg-yellow-300" : "bg-none"
            } px-5 py-4 shadow-lg rounded-lg cursor-pointer`}
          >
            Espace Night-Club
          </span>
          <span
            onClick={() => handleClick("MotelRoom")}
            className={`w-auto ${
              typeReservation === "MotelRoom" ? "bg-yellow-300" : "bg-none"
            } px-5 py-4 shadow-lg rounded-lg cursor-pointer`}
          >
            Chambre du Motel
          </span>
          <span
            onClick={() => handleClick("BarSpace")}
            className={`w-auto ${
              typeReservation === "BarSpace" ? "bg-yellow-300" : "bg-none"
            } px-5 py-4 shadow-lg rounded-lg cursor-pointer`}
          >
            Place des fetes dans le bar
          </span>
        </span>
        <div>
          {/* Section Réservation pour null */}
          {typeReservation === null && (
            <div className="flex text-center justify-center text-xl  w-full h-[500px]">
              <span className="m-auto">
                Cliquez sur l'une des sections ci-dessus pour faire votre
                réservation.
              </span>
            </div>
          )}
          {/* Section Réservation pour vip */}
          {typeReservation === "NightSpace" && (
            <section id="reservationVip" className="py-12 bg-gray-100">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Réserver l'espace VIP
                </h2>
                <form
                  onSubmit={handleSubmitVip}
                  className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      ref={dateRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="heure_debut"
                    >
                      Heure de début
                    </label>
                    <input
                      type="time"
                      id="heure_debut"
                      name="heure_debut"
                      ref={heureDebutRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="duree"
                    >
                      Durée prévue (par heure)
                    </label>
                    <input
                      type="number"
                      id="duree"
                      name="duree"
                      onChange={handleChange}
                      ref={dureeRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="nombre_invites"
                    >
                      Nombre approximatif d'invités
                    </label>
                    <select
                      name="nombre_invites"
                      id="nombre_invites"
                      ref={nombreInvitesRef}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="petit">01 à 10</option>
                      <option value="cinquantaine">11 à 50</option>
                      <option value="centaine">51 à 100</option>*
                      <option value="cent-cinquantaine">101 à 150</option>
                      <option value="deux-centaine">151 à 200</option>
                      <option value="trois-centaine">200 à 300</option>
                      <option value="maximum">Plus de 300</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="plus_details"
                    >
                      Plus de détails
                    </label>
                    <textarea
                      id="plus_details"
                      name="plus_details"
                      ref={plusDetailsRef}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input type="checkbox" name="terms" id="terms" required />
                    <label htmlFor="terms" className="ml-2">
                      J'accepte les conditions de réservation du Night-Club La
                      Révélation.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Soumettre
                  </button>
                </form>
              </div>
            </section>
          )}
          {/* Section Réservation pour Motel */}
          {typeReservation === "MotelRoom" && (
            <section id="reservationMotel" className="py-12 bg-gray-100">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Réserver une chambre
                </h2>
                <form
                  onSubmit={handleSubmitRoom}
                  className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="room.type"
                    >
                      Type de chambre
                    </label>
                    <select
                      name="room.type"
                      id="room.type"
                      ref={typeRef}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="ventile">Chambre ventilée</option>
                      <option value="climatisee">Chambre climatisée</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="date_heure_arrive"
                    >
                      Date et Heure d'arrivée
                    </label>
                    <input
                      type="datetime-local"
                      id="date_heure_arrive"
                      ref={dateHeureDebutRef}
                      name="date_heure_arrive"
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="date_heure_depart"
                    >
                      Date et Heure de départ
                    </label>
                    <input
                      type="datetime-local"
                      id="date_heure_depart"
                      ref={dateHeureFinRef}
                      name="date_heure_depart"
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="plus_details"
                    >
                      Plus de détails
                    </label>
                    <textarea
                      id="plus_details"
                      name="plus_details"
                      ref={plusDetailsRef}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input type="checkbox" name="terms" id="terms" required />
                    <label htmlFor="terms" className="ml-2">
                      J'accepte les conditions de réservation du motel La
                      Révélation.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-black mt-4 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Soumettre
                  </button>
                </form>
              </div>
            </section>
          )}
          {/* Section Réservation pour Bar */}
          {typeReservation === "BarSpace" && (
            <section id="reservationBar" className="py-12 bg-gray-100">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Réserver une place de fetes
                </h2>
                <form
                  onSubmit={handleSubmitbar}
                  className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        className="block text-left text-gray-700 mb-2"
                        htmlFor="place.designation"
                      >
                        Espace voulue
                      </label>
                      <select
                        name="place.designation"
                        id="place.designation"
                        ref={placeRef}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                      >
                        <option value="hall0">Hall à l'entré</option>
                        <option value="hall1">Hall au premier étage</option>
                        <option value="salle_conference">Espace de conférence</option>
                        <option value="calme">Espace calme</option>
                      </select>
                    </div>
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      ref={dateRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="heure_debut"
                    >
                      Heure de début
                    </label>
                    <input
                      type="time"
                      id="heure_debut"
                      name="heure_debut"
                      ref={heureDebutRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="duree"
                    >
                      Durée prévue (par heure)
                    </label>
                    <input
                      type="number"
                      id="duree"
                      name="duree"
                      min={1}
                      
                      onChange={handleChange}
                      ref={dureeRef}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="nombre_invites"
                    >
                      Nombre approximatif d'invités
                    </label>
                    <select
                      name="nombre_invites"
                      id="nombre_invites"
                      ref={nombreInvitesRef}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="petit">01 à 10</option>
                      <option value="cinquantaine">11 à 50</option>
                      <option value="centaine">51 à 100</option>*
                      <option value="cent_cinquantaine">101 à 150</option>
                      <option value="deux_centaine">151 à 200</option>
                      <option value="trois_centaine">200 à 300</option>
                      <option value="maximum">Plus de 300</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-left text-gray-700 mb-2"
                      htmlFor="plus_details"
                    >
                      Plus de détails
                    </label>
                    <textarea
                      id="plus_details"
                      name="plus_details"
                      ref={plusDetailsRef}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input type="checkbox" name="terms" id="terms" required />
                    <label htmlFor="terms" className="ml-2">
                      J'accepte les conditions de réservation du Night-Club La
                      Révélation.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className=" mt-4 bg-black w-full text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Soumettre
                  </button>
                </form>
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
