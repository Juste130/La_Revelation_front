"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";
import { Bell } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [hasAccessToken, setHasAccessToken] = useState(false);

  const { isAuthenticated, user, logout } = useAuth();

  const router = useRouter();
  const {
    selectLink,
    isMotelSelected,
    isBarSelected,
    isNightClubSelected,
    isContactSelected,
    isReservationSelected,
    isHomeSelected,
    isConnexionSelected,
    isInscriptionSelected,
  } = useNavigationLink();

  // Fonction pour gérer la déconnexion

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    setHasAccessToken(!!accessToken || !!refreshToken);
  }, []);

  const handleLogout = () => {
    setShowLogoutPopup(false); // Ferme le pop-up
    logout();
    router.push("/");
  };


  return (
    <nav className="bg-white w-screen h-[56px] flex px-4 z-50">
      <img
        src="logohouezesperance.png"
        alt=""
        className="w-10 h-9 ml-3 my-auto"
      />
      <strong className=" flex ml-3 my-auto text-3xl mr-10">
        La Révélation
      </strong>
      <ul className="hidden xl:flex space-x-6 items-center ml-14 text-[#565e6c] ">
        <li
          className={`${
            isHomeSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("home");
            router.push("/");
          }}
        >
          Accueil
        </li>
        <li
          className={`${
            isMotelSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("motel");
            router.push("/motel");
          }}
        >
          Motel
        </li>

        <li
          className={`${
            isBarSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("bar");
            router.push("/bar");
          }}
        >
          Bar
        </li>
        <li
          className={`${
            isNightClubSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("nightclub");
            router.push("/nightclub");
          }}
        >
          Night-club
        </li>
        <li
          className={`${
            isReservationSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("reservation");
            router.push("/reservation");
          }}
        >
          Réservation
        </li>

        <li
          className={`${
            isContactSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer px-1`}
          onClick={() => {
            selectLink("contact");
            router.push("/contact");
          }}
        >
          Contact
        </li>
      </ul>
      <div className="xl:block flex items-center space-x-4 my-auto ml-[30%]">
        {isAuthenticated ? (
          <div className="flex justify-between items-center space-x-3 ml-3">
            <span>{user ? `${user.nom} ${user.prenom}` : ""}</span>
            <Bell size={54} color="#A5B4CB" strokeWidth={2} />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowLogoutPopup(true);
              }}
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="hidden xl:flex justify-between items-center space-x-3 ml-3">
            <button
              className="bg-[#636AE8] text-white px-4 py-2 rounded"
              onClick={() => {
                selectLink("connexion");
                router.push("/connexion");
              }}
            >
              Se connecter
            </button>
            <button
              className="bg-[#636AE8] text-white px-4 py-2 rounded"
              onClick={() => {
                selectLink("inscription");
                router.push("/inscription");
              }}
            >
              S'inscrire
            </button>
          </div>
        )}
      </div>

      {/* Bouton hamburger pour les petits écrans */}
      <button
        className="xl:hidden p-2 focus:outline-none z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu pour les petits écrans */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col xl:hidden h-screen mb-0 w-[60%] rounded-md absolute top-0 left-0 bg-white bg-opacity-65 z-10 p-4 space-y-4`}
      >
        <li
          className={`${
            isHomeSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } cursor-pointer pt-11 px-1`}
          onClick={() => {
            selectLink("home");
            router.push("/");
            setIsMenuOpen(false);
          }}
        >
          Accueil
        </li>
        <li
          className={`cursor-pointer ${
            isMotelSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } px-1`}
          onClick={() => {
            selectLink("motel");
            router.push("/motel");
            setIsMenuOpen(false);
          }}
        >
          Motel
        </li>
        <li
          className={`cursor-pointer ${
            isBarSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } px-1`}
          onClick={() => {
            selectLink("bar");
            router.push("/bar");
            setIsMenuOpen(false);
          }}
        >
          Bar
        </li>
        <li
          className={`cursor-pointer ${
            isNightClubSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } px-1`}
          onClick={() => {
            selectLink("nightclub");
            router.push("/nightclub");
            setIsMenuOpen(false);
          }}
        >
          Night-club
        </li>
        <li
          className={`cursor-pointer ${
            isReservationSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } px-1`}
          onClick={() => {
            selectLink("reservation");
            router.push("/reservation");
            setIsMenuOpen(false);
          }}
        >
          Réservation
        </li>
        <li
          className={`cursor-pointer ${
            isContactSelected &&
            "text-[#636AE8] font-semibold border-b-[5px] border-[#636AE8]"
          } px-1`}
          onClick={() => {
            selectLink("contact");
            router.push("/contact");
            setIsMenuOpen(false);
          }}
        >
          Contact
        </li>
        {hasAccessToken ? (
          <li className="mt-4 flex items-center">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowLogoutPopup(true);
              }}
            >
              Déconnexion
            </button>
          </li>
        ) : (
          <li className="mt-4 flex flex-col items-center space-y-4 z-50">
            <button className="bg-[#636AE8] text-white px-4 py-2 rounded">
              Se connecter
            </button>
            <button className="bg-[#636AE8] text-white px-4 py-2 rounded">
              S'inscrire
            </button>
          </li>
        )}
      </ul>
      {/* Pop-up de confirmation de déconnexion */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Êtes-vous sûr de vouloir vous déconnecter ?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Oui
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowLogoutPopup(false)}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
