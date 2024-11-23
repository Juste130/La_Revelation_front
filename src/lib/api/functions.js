import axios from "axios";

export const apiBaseUrl = "http://127.0.0.1:8000/api/";

// Crée une instance Axios configurée
const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Ajouter le token JWT à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Gérer les erreurs globalement
api.interceptors.response.use(
  (response) => response, // Retourner directement la réponse en cas de succès
  async (error) => {
    const originalRequest = error.config;

    // Si la requête a échoué avec un statut 401 (non autorisé)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Indiquer que cette requête a déjà été relancée

      try {
        const newToken = await refreshToken(); // Essayer de rafraîchir le token
        if (newToken) {
          // Si un nouveau token a été obtenu, mettre à jour l'en-tête Authorization
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest); // Relancer la requête initiale
        }
      } catch (refreshError) {
        console.error("Échec du rafraîchissement du token :", refreshError);
        logOut(); // Déconnexion
        window.location.href = "/connexion"; // Rediriger vers la page de connexion
        return Promise.reject(refreshError);
      }
    }

    // Si le statut n'est pas 401 ou que le rafraîchissement échoue
    if (error.response?.status === 401) {
      logOut();
      window.location.href = "/connexion";
    }

    return Promise.reject(error); // Rejeter l'erreur pour d'autres traitements éventuels
  }
);


// Vérifier si un utilisateur est connecté
export const isLoggedIn = () => !!localStorage.getItem("accessToken");

// Déconnecter un utilisateur
export const logOut = () => {
  localStorage.clear();
};

// Connexion utilisateur
export const login = async (user) => {
  try {
    const response = await api.post("token/", user); // Utilise Axios configuré
    const { access, refresh } = response.data;

    // Enregistrer les tokens et les informations utilisateur
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    console.log("Connexion réussie :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error.response?.data || error.message);
    throw error;
  }
};

// Rafraîchir le token JWT
export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refreshToken");
    if (!refresh) throw new Error("Refresh token manquant.");

    const response = await api.post("utilisateur/token/refresh/", { refresh });
    const { access } = response.data;
    localStorage.setItem("accessToken", access);

    return access;
  } catch (error) {
    console.error("Erreur lors du rafraîchissement du token :", error);
    logOut();
    window.location.href = "/login";
  }
};

// Réservations de chambres
export const reserverChambre = async (reservation) => {
  try {
    const response = await api.post("reservationRoom/reserver_chambre/", reservation);
    console.log("Chambre réservée avec succès :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la réservation de la chambre :", error.response?.data);
    throw error;
  }
};

// Réservations d'événements
export const reserverEvenement = async (reservation) => {
  try {
    const response = await api.post("reservationEvent/reserver_event/", reservation);
    
    console.log("Événement réservé avec succès :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la réservation de l'événement :", error.response?.data);
    throw error;
  }
};

// Gestion des chambres
export const fetchChambres = async () => {
  try {
    const response = await api.get("chambres/");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des chambres :", error.response?.data);
    throw error;
  }
};

// Gestion des places de fête
export const fetchPlacesDeFete = async () => {
  try {
    const response = await api.get("places-de-fete/");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des places de fête :", error.response?.data);
    throw error;
  }
};
