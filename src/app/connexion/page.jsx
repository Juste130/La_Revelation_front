"use client";

import { useState, useRef } from "react";
import axios from "axios";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Connexion() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mailRef = useRef(null);
  const passwordRef = useRef(null);

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      email: mailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await login( user.email, user.password )
      router.back(); // Redirige après connexion
    } catch (err) {
      setError("Échec de la connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen">
      <header className="w-full mb-8">
        <Header />
      </header>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-auto mt-20 mb-8 max-w-lg w-full">
        <div className="bg-white bg-opacity-80 p-8 shadow-md rounded-lg w-full md:max-w-4xl">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Bienvenue !
          </h3>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Entrez votre adresse e-mail:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              type="email"
              id="email"
              ref={mailRef}
              required
            />

            <label
              htmlFor="pass"
              className="block text-gray-700 font-bold mb-2"
            >
              Entrez votre mot de passe:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
              type="password"
              id="pass"
              name="password"
              ref={passwordRef}
              minLength="8"
              required
            />
            <a href="">
              <p className="text-blue-400 mb-5 hover:text-blue-600">
                Mot de passe oublié ?
              </p>
            </a>

            <input
              className="bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
              value={loading ? "Connexion..." : "Login"}
              disabled={loading}
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
