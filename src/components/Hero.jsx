import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 10 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="hero-gradient" />
                <div className="floating-shapes">
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                </div>
            </div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* top badge */}
                <motion.div className="hero-badge" variants={itemVariants}>
                    <FaMapMarkerAlt style={{ marginRight: 8 }} />
                    Seattle, WA | Amazon SDE II
                </motion.div>

                {/* headline */}
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hi, I’m <span className="gradient-text">Venkata Vikramaditya</span>
                </motion.h1>

                {/* animated subtitle */}
                <motion.div className="hero-subtitle" variants={itemVariants}>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Software Engineer',
                            1800,
                            'LLM & AI/ML Integration Specialist',
                            1800,
                            'Performance Optimization @ Highly Scalable Systems',
                            1800
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                    />
                </motion.div>

                {/* about blurb */}
                <motion.p className="hero-description" variants={itemVariants}>
                    I'm a full stack software engineer based out of Seattle, WA. I'm a results-driven engineer with 6+ years building and scaling
                    tier-1 services. Specialized in AI/ML integration—cutting optimizing process workflows and increasing efficiency of existing systems.
                </motion.p>

                {/* quick stats */}
                <motion.div className="hero-stats" variants={itemVariants}>
                    <div className="stat-item">
                        <div className="stat-number">6+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">80%</div>
                        <div className="stat-label">Latency Reduction</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">60%</div>
                        <div className="stat-label">Efficiency Gain</div>
                    </div>
                </motion.div>

                {/* primary CTAs */}
                <motion.div className="hero-cta" variants={itemVariants}>
                    <Link
                        to="contact"
                        smooth
                        spy
                        offset={-70}
                        duration={100}
                        className="btn btn-primary"
                    >
                        Get In Touch
                    </Link>
                    <Link
                        to="projects"
                        smooth
                        spy
                        offset={-70}
                        duration={200}
                        className="btn btn-secondary"
                    >
                        View My Work
                    </Link>
                    {/* Download Resume */}
                    <a
                        href="/vikramaditya_resume.pdf"
                        download
                        className="btn btn-secondary"
                        aria-label="Download Resume"
                    >
                        <FaDownload style={{ marginRight: 8 }} />
                        Download Resume
                    </a>
                </motion.div>

                {/* social/contact row */}
                <motion.div className="hero-social" variants={itemVariants}>
                    <a
                        href="https://www.linkedin.com/in/vikramadityavarma"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="mailto:vikramvarmakunaparaju@gmail.com" className="social-icon" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a href="tel:+13527459348" className="social-icon" aria-label="Phone">
                        <FaPhone />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;