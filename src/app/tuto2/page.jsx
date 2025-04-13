"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Admin() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsAuthorized(true);
    } else {
      alert("Accès refusé !");
      router.push('/login');
    }
  }, []);

  if (!isAuthorized) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Page Admin</h1>
      <form className="flex justify-center rounded-lg mt-3">
            <span className="flex w-[280px] bg-white h-[40px] rounded-l-lg">
              {/*<Mail />*/}
              <input type="text" name="" id="" placeholder="Entrez votre text" required className="w-[90%] h-full text-sm" />
            </span>
            <input type="submit" value="Soumettre" className="bg-[#7f7fee] text-white text-sm w-fit px-5 h-[40px] rounded-r-lg" />
          </form>
      <p className="text-gray-500">Bienvenue sur la page protégée.</p>
    </div>
  );
}
