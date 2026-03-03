import { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';

export default function Home() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        async function fetchDestinations() {
            const res = await axios.get('http://localhost:5000/api/destinations');
            setDestinations(res.data.slice(0, 3));
        }
        fetchDestinations();
    }, []);

    return (
        <div>
            <section className="text-center mb-8">
                <h1 className="text-3xl font-bold">Voyagez dans le temps</h1>
                <p className="mt-2">Explorez nos destinations historiques et réservez un voyage inoubliable.</p>
            </section>
            <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {destinations.map(dest => (
                    <DestinationCard key={dest._id} destination={dest} />
                ))}
            </section>
        </div>
    );
}