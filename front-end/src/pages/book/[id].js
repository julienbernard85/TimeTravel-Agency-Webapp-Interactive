import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

export default function BookPage() {
    const router = useRouter();
    const { id } = router.query;
    const { token } = useAuth();
    const [date, setDate] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/bookings', { packageId: id }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Réservation créée !');
            router.push('/');
        } catch (err) {
            alert('Erreur lors de la réservation');
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Réserver</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Date de départ (optionnel)</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Valider</button>
            </form>
        </div>
    );
}