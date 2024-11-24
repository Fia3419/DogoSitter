import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Link } from 'react-router-dom';

interface Sitter {
    id: number;
    name: string;
    hourlyRate: number;
}

const DogSitters: React.FC = () => {
    const [sitters, setSitters] = useState<Sitter[]>([]);

    useEffect(() => {
        axios.get<Sitter[]>('http://localhost:5000/api/DogSitters')
            .then((response: AxiosResponse<Sitter[]>) => {
                return setSitters(response.data);
            })
            .catch((error: AxiosError) => console.error(error));
    }, []);

    return (
        <div className="dog-sitters-container">
            <h1 className="dog-sitters-header">Dog Sitters</h1>
            <Link to="/add-sitter">
                <button className="add-sitter-button">Add Sitter</button>
            </Link>
            <ul className="dog-sitters-list">
                {sitters.map(sitter => (
                    <li key={sitter.id} className="dog-sitter-item">{sitter.name} - ${sitter.hourlyRate}/hr</li>
                ))}
            </ul>
        </div>
    );
};

export default DogSitters;