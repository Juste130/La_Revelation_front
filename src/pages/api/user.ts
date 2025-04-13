import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { apiBaseUrl } from "./login";
import { parse, serialize} from "cookie"

export default async function handler(res:NextApiResponse, req:NextApiRequest) {
    if (req.method === 'GET') {
        
        const cookies = parse(req.headers.cookie || '');
        const accesstoken = cookies.accessToken;

        if (!accesstoken) {
            return res.status(401).json({ error: "Utilisateur non connecté"});
        };
        try{
            const response = await axios.get(`${apiBaseUrl}user/`, {
                headers: {
                    Authorization: ` Bearer ${accesstoken}`
                }
            });
            const user = response.data;

            res.setHeader("Set-Cookie", serialize("userInfo", JSON.stringify(user), {
                httpOnly: false,
                path: "/",
                secure: true,
                maxAge: 86400,
            }));
            return res.status(200).json({ user })
        } catch (error) {
            return res.status(401).json({ error: "Impossible de récupérer les infos utilisateur"});
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`)
}