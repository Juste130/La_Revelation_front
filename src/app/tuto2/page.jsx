"use client";
import React, {useState} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function tuto2() {
  const [isNightSpace, setIsNightSpace] = useState(false);
  const [isMotelRoom, setIsMotelRoom] = useState(false);
  const [isBarSpace, setIsBarSpace] = useState(false);
  
  const handleClickForNightSpace = () =>{
    if (isNightSpace === false) {
      setIsNightSpace(true);
      setIsBarSpace(false);
      setIsMotelRoom(false);
    }
    else{
        setIsNightSpace(false);
    }
  }
  const handleClickForMotelRoom = () =>{
    if (isMotelRoom === false) {
      setIsMotelRoom(true);
      setIsBarSpace(false);
      setIsNightSpace(false);
    }
    else{
        setIsMotelRoom(false);
    }
  }
  const handleClickForBarSpace = () =>{
    if (isBarSpace === false) {
      setIsBarSpace(true);
      setIsMotelRoom(false);
      setIsNightSpace(false);
    }
    else{
      setIsBarSpace(false);
    }
  }
  const [reservation, setReservation] = useState({ name: '', email: '', phone:'', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission de réservation
    console.log('Reservation data: ', reservation);
  };
  return (
    <main className="">
      <Header/>
      <div className="bg-gray-50 flex flex-col text-center ">
        <span className="text-5xl font-bold mt-16">Espace des Réservations</span>
        <span className="text-3xl mt-6">Faites vos réservations ici</span>
        <span className="mt-10 text-2xl flex text-center justify-center font-semibold space-x-8 mb-3">
          <span onClick={handleClickForNightSpace} className={`w-auto ${isNightSpace? "bg-yellow-300":'bg-none'} px-5 py-4 shadow-lg rounded-lg cursor-pointer`}>
            Espace Night-Club
          </span>
          <span onClick={handleClickForMotelRoom} className={`w-auto ${isMotelRoom? "bg-yellow-300":'bg-none'} px-5 py-4 shadow-lg rounded-lg cursor-pointer`}>
            Chambre du Motel
          </span>
          <span onClick={handleClickForBarSpace} className={`w-auto ${isBarSpace? "bg-yellow-300":'bg-none'} px-5 py-4 shadow-lg rounded-lg cursor-pointer`}>
            Place de fetes dans le bar
          </span>
        </span>
        <div>
            {/* Section Réservation */}
            {isBarSpace === false && isMotelRoom === false && isNightSpace === false && <div className="flex text-center justify-center text-xl  w-full h-[500px]">
                <span className="m-auto">Cliquez sur l'une des sections ci-dessus pour faire votre réservation.</span>
            </div> }
            {/* Section Réservation */}
          {isNightSpace === true && 
      <section id="reservation" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Réserver l'espace VIP</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={reservation.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={reservation.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="phone">Contact</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{8}" value={reservation.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={reservation.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">Envoyer</button>
          </form>
        </div>
      </section> }
      {/* Section Réservation */}
          {isMotelRoom === true && <section id="reservation" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Réserver une chambre</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={reservation.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={reservation.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="phone">Contact</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{8}" value={reservation.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="check-in">Date d'arrivée</label>
              <div className="flex">
              <input type="date" id="check-in" name="check-in"  value={reservation.phone} onChange={handleChange} className="w-[47%] mr-auto px-4 py-2 border rounded-lg" required />
              <input type="time" id="check-in" name="check-in"  value={reservation.phone} onChange={handleChange} className="w-[47%] px-4 py-2 border rounded-lg" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="check-out">Date de départ</label>
              <div className="flex ">
              <input type="date" id="check-out" name="check-out"  value={reservation.phone} onChange={handleChange} className="w-[47%] mr-auto px-4 py-2 border rounded-lg" required />
              <input type="time" id="check-out" name="check-out"  value={reservation.phone} onChange={handleChange} className="w-[47%] px-4 py-2 border rounded-lg" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="room-type">Type de chambre</label>
              <select name="room-type" id="room-type" required className="w-full px-4 py-2 border rounded-lg">
                <option value="ventilée">Chambre Ventilée</option>
                <option value="climatisée">Chambre Climatisée</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={reservation.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
            </div>
            <div>
                <input type="checkbox" name="terms" id="terms" required />
                <label htmlFor="terms">J'accepte les conditions de réservation du motel La Révélation.</label>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">Envoyer</button>
          </form>
        </div>
      </section> }
          {/* Section Réservation */}
          {isBarSpace === true && <section id="reservation" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Réserver une place de fetes</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={reservation.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={reservation.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="phone">Contact</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{8}" value={reservation.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={reservation.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">Envoyer</button>
          </form>
        </div>
      </section> }
        </div>

      </div>
      <Footer/>
    </main>
  );
}
