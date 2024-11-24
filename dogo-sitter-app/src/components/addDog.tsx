import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

interface DogFormData {
    name: string;
    breed: string;
    age: number;
    size: string;
    specialNeeds: string;
    ownerId: number;
    color: string;
    vaccinated: boolean;
}

const AddDog: React.FC = () => {
    const [formData, setFormData] = useState<DogFormData>({
        name: '',
        breed: '',
        age: 0,
        size: '',
        specialNeeds: '',
        ownerId: 1,  // This should come from authentication
        color: '',
        vaccinated: false
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
                    ownerId: 1,
                    color: '',
                    vaccinated: false
                });
            }
        } catch (error) {
            console.error('Error adding dog:', error);
        }
    };

    return (
        <Container className="add-dog-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Dog's Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dog's name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formColor">
                    <Form.Label>Dog's Color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dog's color"
                        value={formData.color}
                        onChange={(e) => setFormData({...formData, color: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formBreed">
                    <Form.Label>Dog's Breed</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dog's breed"
                        value={formData.breed}
                        onChange={(e) => setFormData({...formData, breed: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formAge">
                    <Form.Label>Dog's Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter dog's age"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                    />
                </Form.Group>
                <Form.Group controlId="formSize">
                    <Form.Label>Dog's Size</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dog's size"
                        value={formData.size}
                        onChange={(e) => setFormData({...formData, size: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formSpecialNeeds">
                    <Form.Label>Special Needs</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter any special needs"
                        value={formData.specialNeeds}
                        onChange={(e) => setFormData({...formData, specialNeeds: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formOwnerId">
                    <Form.Label>Owner ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter owner ID"
                        value={formData.ownerId}
                        onChange={(e) => setFormData({...formData, ownerId: parseInt(e.target.value)})}
                    />
                </Form.Group>
                
                <Form.Group controlId="formVaccinated">
                    <Form.Check
                        type="checkbox"
                        label="Vaccinated"
                        checked={formData.vaccinated}
                        onChange={(e) => setFormData({...formData, vaccinated: e.target.checked})}
                    />
                </Form.Group>
                {/* Add other form fields similarly */}
                <Button variant="primary" type="submit">
                    Add Dog
                </Button>
            </Form>
        </Container>
    );
};

export default AddDog;