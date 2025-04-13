"use client";
import React from "react";

export default function ReservationCard({ date, type, status }) {
    const handleClick = () => {
        // Logique pour afficher plus de détails sur la réservation
        console.log("Afficher plus de détails pour la réservation");
    };

    // Définition des couleurs en fonction du type de réservation
    const getBackgroundColor = (type) => {
        switch (type) {
            case 'chambre':
                return 'bg-blue-200'; // Exemple pour 'chambre'
            case 'événement':
                return 'bg-green-200'; // Exemple pour 'événement'
            case 'location':
                return 'bg-yellow-200'; // Exemple pour 'location'
            default:
                return 'bg-gray-200'; // Par défaut, fond gris
        }
    };

    return (
        <div 
            onClick={handleClick} 
            className={`w-full flex h-[120px] p-4 rounded-xl shadow-lg mx-5 my-4 
                ${getBackgroundColor(type)} 
                text-black hover:scale-105 hover:shadow-xl hover:cursor-pointer transition-all duration-300`}
        >
            {/* Colonne de gauche : Date */}
            <div className="flex flex-col justify-center mr-5">
                <span className="text-lg font-semibold">{date}</span>
                <span className="text-sm text-gray-500">Date</span>
            </div>
            
            {/* Colonne centrale : Type de réservation */}
            <div className="flex flex-col justify-center mx-auto">
                <span className="text-xl font-bold text-center">{type}</span>
                <span className="text-sm text-gray-500 text-center">Type</span>
            </div>

            {/* Colonne de droite : Statut */}
            <div className="flex flex-col justify-center ml-5">
                <span className={`text-lg font-semibold ${status === 'confirmé' ? 'text-green-600' : 'text-red-600'}`}>{status}</span>
                <span className="text-sm text-gray-500">Statut</span>
            </div>
        </div>
    );
}
