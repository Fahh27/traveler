import React, { useState } from 'react';
import { MapPin } from "lucide-react";

function TravelComponent () {
     const [formData, setFormData] = useState<{
        destination: string;
        hotel: string;
        compagnie: string;
        room: string;
    }>({
        destination: '',
        hotel: '',
        compagnie: '',
        room: 'standard',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Destination *
                </label>
                    <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination choisie"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />

            </div>

            <div>
                <label htmlFor="hotel" className="block text-sm font-semibold text-gray-700 mb-2">
                    Hôtel *
                </label>
                    <input
                type="text"
                id="hotel"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                placeholder="Hôtel choisi"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label htmlFor="compagnie" className="block text-sm font-semibold text-gray-700 mb-2">
                Compagnie aérienne *
                </label>
                <input
                type="text"
                id="compagnie"
                name="compagnie"
                value={formData.compagnie}
                onChange={handleChange}
                placeholder="Compagnie choisie"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label htmlFor="room" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type de chambre *
                </label>
                <select
                    name="room"
                    id="room"
                    value={formData.room}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                    <option value="standard">Standard</option>
                    <option value="superieur">Supérieur</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                    <option value="presidentielle">Présidentielle</option>
                    <option value="simple">Simple</option>
                    <option value="double">Double</option>
                    <option value="triple">Triple</option>
                    <option value="familial">Familiale</option>
                </select>
            </div>

        </div>
    );
}

export default TravelComponent;