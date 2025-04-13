import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import { serialize } from "cookie";

export const apiBaseUrl = process.env.API_BASE_URL || "http://127.0.0.1:8000/api/";

const api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

interface LoginRequestBody {
    email: string;
    password: string;
}
export default async function handler( req:NextApiRequest , res: NextApiResponse ) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body as LoginRequestBody;
            const response = await api.post(`${apiBaseUrl}token/`, { email, password });
            const { access, refresh } = response.data;

            res.setHeader("Set-Cookie", [
                serialize("accessToken", access, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                }),
                serialize("refreshToken", refresh, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                })
            ]);

            return res.status(200).json({ message: "Connexion réussie"});
        } catch (error) {
            return res.status(401).json({ error: "Echec de l'authentification", details: error.response?.data || error.message });
        }
    }


    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);


    
}