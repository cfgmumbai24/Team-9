// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import img2 from '../assets/nn.png'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Learn on your schedule</h1>
                        <p>Anywhere, anytime. Choose from thousands of expert-led courses now.</p>
                        <button className="get-started-button">Get Started</button>
                    </div>
                    <div className="hero-image">
                        <img src={img2} alt="Learning" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
