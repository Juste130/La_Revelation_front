"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Connexions() {
  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen">
      <header className="w-full mb-8">
        <Header />
      </header>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-auto mt-20 mb-8 max-w-lg w-full">
        <div className="bg-white bg-opacity-80 p-8 shadow-md rounded-lg w-full md:max-w-4xl">
          <h3 className="text-2xl font-semibold text-center mb-4">Bienvenue !</h3>
          <form action="">
          <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Entrez votre nom:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            type="text"
            id="nom"
            name="nom"
            required
          />
          <label htmlFor="prenom" className="block text-gray-700 font-bold mb-2">Entrez votre prénom:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            type="text"
            id="prenom"
            name="prenom"
            required
          />
          <label htmlFor="pass" className="block text-gray-700 font-bold mb-2">Entrez votre contact:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            type="phone"
            id="phone"
            pattern="+[0-9]"
            name="phone"
            required
          />
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Entrez votre adresse e-mail:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            type="email"
            id="email"
            pattern=".+@example.com"
            required
          />

          <label htmlFor="pass" className="block text-gray-700 font-bold mb-2">Entrez un mot de passe:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            type="password"
            id="pass"
            pattern="[0-9a-zA-FZ]{4,8}"
            name="password"
            minLength="8"
            required
          />
          <label htmlFor="pass2" className="block text-gray-700 font-bold mb-2">Confirmez le mot de passe:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            type="password"
            id="pass2"
            pattern="[0-9a-zA-Z]{4,8}"
            name="pass2"
            minLength="8"
            required
          />
          <div>
              <input type="checkbox" name="terms" id="terms" required />
              <label htmlFor="terms" className="ml-2">J'accepte les conditions d'inscription du complexe La Révélation.</label>
          </div>

          <input
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer w-full"
            type="submit"
            value="Inscription"
          />
          </form>
          
        </div>
      </div>

      <footer className="w-full mt-8">
        <Footer />
      </footer>
    </main>
  );
}
