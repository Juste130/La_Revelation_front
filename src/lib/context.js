import { create } from "zustand";

// Hook pour gérer la navigation des différentes sections du site
export const useNavigationLink = create((set) => ({
  // État initial de la sélection
  isHomeSelected: true,
  isMotelSelected: false,
  isBarSelected: false,
  isNightClubSelected: false,
  isContactSelected: false,
  isReservationSelected: false,
  isConnexionSelected: false,
  isInscriptionSelected: false,

  // Fonction pour sélectionner un lien de navigation
  selectLink: (link) =>
    set({
      isHomeSelected: link === "home",
      isMotelSelected: link === "motel",
      isBarSelected: link === "bar",
      isNightClubSelected: link === "nightclub",
      isContactSelected: link === "contact",
      isReservationSelected: link === "reservation",
      isConnexionSelected: link === "connexion",
      isInscriptionSelected: link === "inscription",
    }),
}));

export const useLogin = create((set) => ({
  isLogged: false,
  logOut: () => set({ isLogged: false }),
  logIn: () => set({ isLogged: true }),
}));
