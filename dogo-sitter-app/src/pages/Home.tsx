// filepath: /c:/Users/Fia/source/repos/DogoSitter/DogoSitter.Client/src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to DogoSitter</h1>
            <nav>
                <ul>
                    <li><Link to="/sitters">Dog Sitters</Link></li>
                    <li><Link to="/dogs">Dogs</Link></li>
                    <li><Link to="/add-dog">Add Dog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;