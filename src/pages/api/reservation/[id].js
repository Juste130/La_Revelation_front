import axios from "axios";
import { serialize } from "cookie";
import { apiBaseUrl } from "./functions";

const apiBaseUrl = "http://123.0.0.1:8000/api/";
const api = axios.create({
    baseURL : apiBaseUrl,
    headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
    } 
})

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const id = req.query;
            const response = await api("reservation/", id);

            return res.status(200).json({ message: "" });
        } catch (error) {
            res.status(401).json({ error: ""});
        }
    }
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}