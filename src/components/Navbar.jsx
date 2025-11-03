// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="nav-container">
                {/* Logo */}
                <a href="#hero" className="nav-logo">
                    <span className="logo-text">VK</span>
                    <span className="logo-name">Venkata Vikramaditya Varma Kunaparaju</span>
                </a>

                {/* Desktop Nav */}
                <ul className="nav-menu">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active"
                                onClick={() => setMobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Icon */}
                <div className="mobile-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <ul className="mobile-menu">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </motion.nav>
    );
};

export default Navbar;