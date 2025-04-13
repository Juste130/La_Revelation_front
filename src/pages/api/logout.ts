import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from "cookie";


export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    if (req.method === 'POST') {
        res.setHeader("Set-Cookie", [
            serialize("accessToken", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "strict",
                path: "/",
                maxAge: 0,
            }),
            serialize("refreshToken", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
                maxAge: 0,
            }),

        ]);
        return res.status(200).json({ message: "Déconnexion réussie"});
    };
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);

    
}
