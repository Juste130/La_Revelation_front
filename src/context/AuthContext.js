import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
})

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async() => {
        try {
            const res = api.get('/user');
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Aucun utilisateur connecté")
            setIsAuthenticated(false);
            setUser(null);
        }
    };
    const login = async(email , password) => {
        try {
            await api.post("/login", { email, password });
            await fetchUser();
        } catch (error) {
            throw new Error(error.response?.data?.message || "Echec de connexion")
        }
    };
    const logout = async() => {
        try {
            await api.post("/logout");
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error("Une erreur est survenue lors de la déconnection", error.response?.message || error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext) ;
