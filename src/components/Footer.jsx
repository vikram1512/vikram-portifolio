// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const socials = [
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/vikramadityavarma',
            label: 'LinkedIn',
        },
        {
            icon: <FaGithub />,
            url: 'https://github.com/vikramvarma',
            label: 'GitHub',
        },
        {
            icon: <FaEnvelope />,
            url: 'mailto:vikramvarmakunaparaju@gmail.com',
            label: 'Email',
        },
    ];

    return (
        <footer className="footer">
            <motion.div
                className="footer-container"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="footer-socials">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="footer-icon"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

                <p className="footer-text">
                    © {new Date().getFullYear()} Vikramaditya Varma Kunaparaju. Built with React & Next.js.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;