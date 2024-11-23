"use client";

export default function Evenement({
    title,
    date,
    description

  }
) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{date}</p>
        <p className="mt-2 text-gray-800">{description}</p>
      </div>
    );
  }
