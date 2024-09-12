import React from 'react';
import Button from '../atoms/Button';

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Website!</h1>
            <p className="text-lg text-gray-600 mb-6">
                Discover amazing content and join our community.
            </p>
            <Button label="Get Started" onClick={() => alert('Button Clicked!')} />
        </section>
    );
};

export default HeroSection;
