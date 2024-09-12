import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-600 p-4 text-white'>
            <ul className='flex space-x-4'>
                <li>
                    <Link href={'/'} className='hover:text-gray-200'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
