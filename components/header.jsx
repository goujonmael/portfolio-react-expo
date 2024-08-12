import React from 'react';
import { Link } from 'expo-router';
import './header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link href="/experiences" className='nav-link'>Experiences</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;