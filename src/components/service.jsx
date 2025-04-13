"use client";
import React from "react";
import Link from "next/link";


export default function Service ({
    link,
    image,
    title,
    description,
    index,
}){
    return (
        <Link key={index} href={link}>
                <div className="cursor-pointer p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-t-lg h-48 w-full object-cover mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </Link>
    );
}
