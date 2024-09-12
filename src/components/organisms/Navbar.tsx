import React from 'react'
import Link from 'next/link'
import Logo from '../atoms/Logo'

const Navbar = () => {
    return (
        <nav className='bg-blue-600 py-4 px-8  text-white flex justify-between'>
            <Logo />
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
