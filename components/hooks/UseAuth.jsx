import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAuth = () => {
  const [statusAuth, setStatusAuth] = useState('desconectado');
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
        setAuthenticated('conectado');
    } else {
        setAuthenticated('desconectado'); 
        router.push('/');
    }
  }, [router]);

  return statusAuth;
};

export default useAuth;
