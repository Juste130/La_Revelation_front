import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import { parse } from "cookie";
import { apiBaseUrl } from "./login";
import { error } from 'console';


const api = axios.create({
    baseURL : apiBaseUrl,
    headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
    } 
})

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    if (req.method === 'POST') {
        try {
            const cookies = parse(req.headers.cookie || '');
            const token = cookies.accessToken;

            if (!token) {
                return res.status(401).json({ error: "Non autorisé, token manquant"});
            }

            const body = req.body;
            const response = await api.post(`${apiBaseUrl}reservationEvent/reserver_event/`, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            return res.status(200).json({ message: "Votre réservations est un succès", data: response.data });
        } catch (error: any) {
            res.status(error.response.status || 500).json({ error: error.response.data || "Erreur interne du serveur"});
        }
    }
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}