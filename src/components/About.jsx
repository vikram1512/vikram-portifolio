// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaTachometerAlt, FaAws } from 'react-icons/fa';
import './About.css';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const highlights = [
        {
            icon: <FaAws />,
            title: 'AWS Expert',
            description:
                'Extensive experience with ECS, EC2, Lambda, S3, DynamoDB, Bedrock, SageMaker, CloudWatch, and more',
        },
        {
            icon: <FaBrain />,
            title: 'AI/ML Integration',
            description:
                'Built LLM-powered features using Amazon Bedrock and Claude for production systems improving existing workflows and enhancing customer experience',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Distributed Systems',
            description:
                'Designed and built tier-1 orchestration services powering Alexa AI for millions of users',
        },
        {
            icon: <FaTachometerAlt />,
            title: 'Performance Optimization',
            description:
                'Achieved ~80% latency reduction for Alexa Responses and ~60% efficiency improvements at scale which improved the support case handling time.',
        },
    ];

    return (
        <section className="about">
            <div className="container">
                <motion.div
                    className="about-content"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Left: Narrative */}
                    <motion.div className="about-text" variants={item}>
                        <h3>About Me</h3>

                        <p>
                            Building Scalable Solutions at Amazon — I’m a Software Development Engineer II with
                            6+ years designing and implementing distributed systems for demanding applications.
                        </p>

                        <p>
                            Currently on Alexa AI Orchestration: I’ve helped design a tier-1 service that routes
                            real-time LLM inference to domain experts and reduced response latency from 16s → 3s
                            for millions of users.
                        </p>

                        <p>
                            I’m passionate about AI/ML integration—shipping LLM features (case summaries, response
                            drafting) that cut handling time by ~40% and improve CSAT. Tech stack: Java, Python,
                            AWS (serverless), Spring Boot, React, Vue.
                        </p>

                        <div className="education-info" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                            <img
                                src="https://1000logos.net/wp-content/uploads/2022/07/University-of-Florida-Symbol.png"
                                alt="University of Florida Logo"
                                loading="lazy"
                                style={{width: '45px', height: 'auto', objectFit: 'contain'}}
                            />
                            <div>
                                <h4 style={{margin: 0, fontSize: '1rem'}}>🎓 Education</h4>
                                <p style={{margin: '4px 0 0 0', fontSize: '0.9rem', lineHeight: 1.4}}>
                                    <strong>University of Florida</strong> — M.S. in Computer Science (GPA: 3.86), May
                                    2021
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Highlight cards */}
                    <motion.div className="about-highlights" variants={container}>
                        <div className="highlights-grid">
                            {highlights.map((h, i) => (
                                <motion.div className="highlight-card" key={i} variants={item}>
                                    <div className="highlight-icon">{h.icon}</div>
                                    <div className="highlight-title">{h.title}</div>
                                    <div className="highlight-desc">{h.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;