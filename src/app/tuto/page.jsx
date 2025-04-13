"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // ⚠️ Mauvaise pratique
    router.push('/tuto2');
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      router.push('/tuto2');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Connexion</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        className="border p-2 mb-2"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>
        Se connecter
      </button>
    </div>
  );
}
