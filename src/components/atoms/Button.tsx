"use client"
import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default Button;