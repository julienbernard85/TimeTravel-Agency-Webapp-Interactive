/* UI */
export default function Timeline({ events }) {
    return (
        <div className="relative">
            {events.map((event, index) => (
                <div key={event._id} className="flex items-start mb-4">
                    <div className="w-8 text-sm text-gray-500">{new Date(event.date).getFullYear()}</div>
                    <div className="flex-1 ml-4 p-2 border-l-2 border-blue-500">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}