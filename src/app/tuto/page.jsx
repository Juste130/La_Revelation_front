"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Bar() {
  const [reservation, setReservation] = useState({ name: '', email: '', message: '' });

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
    <div>
      {/* Header */}
      <header className="bg-black text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">La Révélation</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#boissons" className="hover:text-gray-400">Boissons</a></li>
              <li><a href="#celebrations" className="hover:text-gray-400">Célébrations</a></li>
              <li><a href="#reservation" className="hover:text-gray-400">Réservation</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section Héros */}
      <section className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Bienvenue à La Révélation</h2>
          <p className="text-lg text-gray-300">Découvrez une expérience unique, où boissons raffinées et ambiance festive se rencontrent.</p>
        </div>
      </section>

      {/* Section Boissons */}
      <section id="boissons" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nos Boissons</h2>
          <p className="text-lg mb-8">Nous proposons une large gamme de boissons de qualité : vins, champagnes, spiritueux, et plus encore.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image src="/wine.jpg" alt="Vin" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Vins</h3>
              <p>Explorez notre sélection de vins rouges, blancs, et rosés.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image src="/champagne.jpg" alt="Champagne" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Champagnes</h3>
              <p>Découvrez les meilleurs champagnes pour célébrer vos moments spéciaux.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image src="/spiritueux.jpg" alt="Spiritueux" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Spiritueux</h3>
              <p>Une variété de spiritueux pour éveiller vos sens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Célébrations */}
      <section id="celebrations" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Espaces pour Célébrations</h2>
          <p className="text-lg mb-8">Réservez nos espaces privés pour vos événements et célébrations.</p>
          <Image src="/celebration.jpg" alt="Espaces de Célébration" width={800} height={500} className="rounded-lg mx-auto" />
        </div>
      </section>

      {/* Section Réservation */}
      <section id="reservation" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Réserver une Table</h2>
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
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={reservation.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">Envoyer</button>
          </form>
        </div>
      </section>

      {/* Carte (Google Map intégrée) */}
      <section id="contact" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Nous Trouver</h2>
          <div className="h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508159!2d144.9556513153167!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1639049426946!5m2!1sen!2sus"
              width="100%" height="100%" allowFullScreen="" loading="lazy" className="rounded-lg"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} La Révélation. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
