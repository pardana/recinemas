"use client"
import React from 'react';
import Button from '../components/atoms/Button';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Next.js with Tailwind CSS!</h1>

      <Button label="Click Me" onClick={() => {
        alert("Hello, World!")
      }} />
    </div>
  );
}

export default Home