/* Authentification */
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('token');
        if (stored) setToken(stored);
    }, []);

    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
    };

    const register = async (name, email, password) => {
        const res = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}