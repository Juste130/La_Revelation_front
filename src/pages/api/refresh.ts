import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { parse, serialize } from "cookie";
import { apiBaseUrl } from "./login";


export default async function handler( req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        try {
            const cookies = parse(req.headers.cookie || '');
            const refreshToken = cookies.refreshToken;
    
            if (!refreshToken) {
                return res.status(401).json({ error: "Aucun refresh token retrouvé"})
            };
    
            const response = await axios.post(`${apiBaseUrl}token/refresh`, refreshToken);
            const { access } = response.data;
    
            res.setHeader("Set-Cookie", serialize("accessToken", access, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: "/",
            }));
            return res.status(200).json({message : "Token rafraichi"});
        } catch (error) {
            return res.status(401).json({ error: "Echec du rafraichissement de token"});
        }
        
    }
    res.setHeader("Allow", ["POST"]),
    res.status(405).end(`Method ${req.method} Not Allowed`);

    
}

