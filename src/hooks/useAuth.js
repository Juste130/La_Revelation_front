import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (!accessToken && !refreshToken) {
          setIsAuthenticated(false);
          setUserData(null);
          return;
        }

        // Vérifier la validité du jeton d'accès via Django
        const res = await fetch("http://127.0.0.1:8000/api/token/verify/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: accessToken }),
        });

        if (res.ok) {
          // Jeton valide, récupérer les données utilisateur
          const userRes = await fetch("http://127.0.0.1:8000/api/user/", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (userRes.ok) {
            const userData = await userRes.json();
            setIsAuthenticated(true);
            setUserData(userData);
          } else {
            throw new Error("Impossible de récupérer les données utilisateur.");
          }
        } else if (res.status === 401 && refreshToken) {
          // Jeton expiré, essayer de le rafraîchir
          const refreshResponse = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: refreshToken }),
          });

          if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            const newAccessToken = refreshData.access;

            // Mettre à jour le jeton d'accès
            localStorage.setItem("accessToken", newAccessToken);

            // Réessayer pour récupérer les données utilisateur
            const retryRes = await fetch("http://127.0.0.1:8000/api/user/", {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            if (retryRes.ok) {
              const userData = await retryRes.json();
              setIsAuthenticated(true);
              setUserData(userData);
            } else {
              throw new Error("Échec lors de la récupération après le rafraîchissement.");
            }
          } else {
            throw new Error("Échec lors du rafraîchissement du token.");
          }
        } else {
          setIsAuthenticated(false);
          setUserData(null);
        }
      } catch (error) {
        console.error("Erreur d'authentification:", error.message);
        setIsAuthenticated(false);
        setUserData(null);
      } 
    }

    checkAuth();
  }, []);

  return { isAuthenticated, userData };
}
