import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-gray-800 p-4 text-center text-white'>
            <p>&copy; {new Date().getFullYear()} ReCinemas. All rights reserved.</p>
        </footer>
    )
}
