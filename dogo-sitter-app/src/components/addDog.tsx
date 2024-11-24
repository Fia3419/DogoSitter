// filepath: /c:/Users/Fia/source/repos/DogoSitter/DogoSitter.Client/src/components/AddDog.tsx
import React, { useState } from 'react';

interface DogFormData {
    name: string;
    breed: string;
    age: number;
    size: string;
    specialNeeds: string;
    ownerId: number;
}

const AddDog: React.FC = () => {
    const [formData, setFormData] = useState<DogFormData>({
        name: '',
        breed: '',
        age: 0,
        size: '',
        specialNeeds: '',
        ownerId: 1  // This should come from authentication
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/Dogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success
                setFormData({
                    name: '',
                    breed: '',
                    age: 0,
                    size: '',
                    specialNeeds: '',
                    ownerId: 1
                });
            }
        } catch (error) {
            console.error('Error adding dog:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Dog's name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            {/* Add other form fields similarly */}
            <button type="submit">Add Dog</button>
        </form>
    );
};

export default AddDog;