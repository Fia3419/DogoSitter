import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

interface SitterFormData {
    name: string;
    hourlyRate: number;
}

const AddSitter: React.FC = () => {
    const [formData, setFormData] = useState<SitterFormData>({
        name: '',
        hourlyRate: 0,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/DogSitters', {
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
                    hourlyRate: 0,
                });
            }
        } catch (error) {
            console.error('Error adding sitter:', error);
        }
    };

    return (
        <Container className="add-sitter-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Sitter's Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter sitter's name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </Form.Group>
                <Form.Group controlId="formHourlyRate">
                    <Form.Label>Hourly Rate</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter hourly rate"
                        value={formData.hourlyRate}
                        onChange={(e) => setFormData({...formData, hourlyRate: parseFloat(e.target.value)})}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Sitter
                </Button>
            </Form>
        </Container>
    );
};

export default AddSitter;