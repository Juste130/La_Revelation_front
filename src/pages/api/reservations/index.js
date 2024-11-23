
import {NextApiRequest, NextApiResponse} from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let reservations = [];

export default async function handler (req, res) {
    const {id}= req.query;
    if (req.method === 'POST'){
        const {name, email, date, heure,} = req.body;
        if (!name || !email || !date || !heure){
            return res.status(400).json({message: "Champs requis manquants"});
        }
        const newReservation = await createReservationInDB({name, email, date, heure})
        return res.status(201).json({
            message: "Réservation créée avec succés",
            data: {name, email, date, heure}
        })
    }
    else if (req.method === 'GET'){
        if(id){
            const reservations = await getReservationByIdFromDB(id);
            return res.status(200).json({
                messsage: "Réservation récupérée avec succès",
                data: {id, name, email, date, heure}
        })}
        return res.status(200).json({
            message:"Toutes les réservations récupérées avec succès",
            data: []
        })
    }
    else if(req.method === 'PUT'){
        const {name, email, date, heure} = req.body;
        if(!name || !email || !date || !heure){
            return res.status(400).json({message: "Champs requis manquants pour la mise à jour"});
        }
        await updateReservationInDB(id, {name, email, date, heure});
        return res.status(200).json({
            message: "Réservation modifiée avec succèsRéservation mise à jour avec succès",
            data: {id, name, email, date, heure}
        })
    }
    else if( req.method ==='DELECT'){
        await delectReservationFromDB(id);
        return res.status(200).json({
            message: "Réservation annulée avec succès",
            data: {id} 
        })
    }
    else{
        res.setHeader('Allow', [GET, POST, PUT, DELECT]);
        return res.status(405).json({message: `Méthode ${req.method} non autorisée`});
    }


}