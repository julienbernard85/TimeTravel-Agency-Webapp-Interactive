import { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';

export default function Catalogue() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        async function fetchAll() {
            const res = await axios.get('http://localhost:5000/api/destinations');
            setDestinations(res.data);
        }
        fetchAll();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Catalogue des destinations</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {destinations.map(dest => (
                    <DestinationCard key={dest._id} destination={dest} />
                ))}
            </div>
        </div>
    );
}