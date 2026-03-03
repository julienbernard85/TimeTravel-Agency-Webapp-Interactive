import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from '../../components/Timeline';

export default function DestinationDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        if (id) {
            async function fetchDestination() {
                const res = await axios.get(`http://localhost:5000/api/destinations/${id}`);
                setDestination(res.data);
            }
            fetchDestination();
        }
    }, [id]);

    if (!destination) return <div>Chargement...</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{destination.name}</h1>
            <p className="mb-4">{destination.description}</p>
            {destination.media.length > 0 && (
                <img src={destination.media[0]} alt={destination.name} className="w-full h-64 object-cover mb-4" />
            )}
            <h2 className="text-xl font-semibold mb-2">Événements</h2>
            <Timeline events={destination.events} />
        </div>
    );
}