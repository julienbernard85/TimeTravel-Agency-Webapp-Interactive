/* UI */
import Link from 'next/link';

export default function DestinationCard({ destination }) {
    return (
        <div className="border rounded shadow hover:shadow-lg transition">
            <img src={destination.media[0] || '/assets/images/default.jpg'} alt={destination.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="font-bold text-lg">{destination.name}</h2>
                <p className="text-sm">{destination.epoch} – {destination.location}</p>
                <p className="mt-2 text-sm">{destination.description.slice(0, 80)}...</p>
                <Link href={`/destinations/${destination._id}`} className="text-blue-500 mt-2 inline-block">Découvrir</Link>
            </div>
        </div>
    );
}