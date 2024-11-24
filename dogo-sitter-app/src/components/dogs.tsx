// filepath: /c:/Users/Fia/source/repos/DogoSitter/DogoSitter.Client/src/components/Dogs.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Dog {
    id: number;
    name: string;
    breed: string;
    size: string;
    dogOwner?: {
        name: string;
    };
}

const Dogs = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);

    useEffect(() => {
        axios.get('/api/Dogs')
            .then(response => setDogs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Dogs</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.id}>
                        {dog.name} ({dog.breed}, {dog.size})
                        - Owner: {dog.dogOwner?.name || 'Unknown'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dogs;