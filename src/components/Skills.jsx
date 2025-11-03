// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaJava,
    FaPython,
    FaJs,
    FaReact,
    FaAws,
    FaDatabase,
    FaNodeJs,
    FaCloud,
    FaDocker,
    FaGitAlt,
} from 'react-icons/fa';
import { SiSpringboot, SiAmazondynamodb, SiSelenium, SiRubyonrails } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Java', icon: <FaJava /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'Ruby', icon: <SiRubyonrails /> },
                { name: 'C++', icon: <FaDatabase /> },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'Spring Boot', icon: <SiSpringboot /> },
                { name: 'React', icon: <FaReact /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Ruby on Rails', icon: <SiRubyonrails /> },
                { name: 'Selenium', icon: <SiSelenium /> },
            ],
        },
        {
            title: 'Cloud & Infrastructure',
            skills: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'DynamoDB', icon: <SiAmazondynamodb /> },
                { name: 'Lambda', icon: <FaCloud /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'CloudWatch', icon: <FaCloud /> },
            ],
        },
        {
            title: 'Databases',
            skills: [
                { name: 'DynamoDB', icon: <SiAmazondynamodb /> },
                { name: 'MySQL', icon: <FaDatabase /> },
                { name: 'Oracle', icon: <FaDatabase /> },
                { name: 'Athena', icon: <FaDatabase /> },
            ],
        },
        {
            title: 'Tools & Practices',
            skills: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'CI/CD', icon: <FaCloud /> },
                { name: 'A/B Testing', icon: <FaCloud /> },
                { name: 'System Design', icon: <FaCloud /> },
            ],
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section className="skills">
            <div className="container">
                <motion.div
                    className="skills-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    <h3 className="skills-title">Technical Skills</h3>

                    <div className="skills-grid">
                        {skillCategories.map((cat, idx) => (
                            <motion.div key={idx} className="skill-category" variants={item}>
                                <h4 className="category-title">{cat.title}</h4>
                                <div className="skills-list">
                                    {cat.skills.map((s, i) => (
                                        <div key={i} className="skill-item">
                                            <div className="skill-icon">{s.icon}</div>
                                            <span className="skill-name">{s.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;