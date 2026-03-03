import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';

export default function Register() {
    const { register } = useAuth();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await register(name, email, password);
            router.push('/');
        } catch (err) {
            alert('Inscription échouée');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Inscription</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Nom" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full" />
                <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">S’inscrire</button>
            </form>
        </div>
    );
}