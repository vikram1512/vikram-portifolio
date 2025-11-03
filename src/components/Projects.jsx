// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaRobot, FaChartLine, FaBox, FaBell, FaCog } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Alexa AI Orchestration Service',
            description:
                'Tier-1 distributed system powering Alexa Plus AI with real-time LLM routing to specialized domain experts.',
            icon: <FaRobot />,
            tags: ['Java', 'AWS Lambda', 'DynamoDB', 'LLM', 'A/B Testing'],
            metrics: ['16s → 3s latency reduction', 'Millions of users impacted', 'Real-time inference routing'],
            color: '#667eea',
        },
        {
            title: 'LLM-Powered Case Management',
            description:
                'AI widgets using Amazon Bedrock + Claude for automated case summarization and response drafting.',
            icon: <FaAws />,
            tags: ['Python', 'Amazon Bedrock', 'Claude', 'Vue.js', 'Spring Boot'],
            metrics: ['40% faster case handling', '50% reduced reply time', 'Improved CSAT'],
            color: '#f5576c',
        },
        {
            title: 'Dynamic Notification Service',
            description:
                'Real-time notification platform targeting FC associates to boost productivity during peak seasons.',
            icon: <FaBell />,
            tags: ['Java', 'AWS SNS', 'DynamoDB', 'Lambda', 'Real-time'],
            metrics: ['80% reduction in non-productive time', 'Peak season optimization', 'Real-time targeting'],
            color: '#00f2fe',
        },
        {
            title: 'Amazon Pack App Services',
            description:
                'Core microservices for FC packing: box selection, label generation, and automation flows.',
            icon: <FaBox />,
            tags: ['Java', 'AWS ECS', 'Lambda', 'DynamoDB', 'Spring Boot'],
            metrics: ['Multi-million package operations', 'High-throughput processing', 'Low-latency decisions'],
            color: '#764ba2',
        },
        {
            title: 'SmartTTBot (LLM-Powered)',
            description:
                'Troubleshooting bot that analyzes logs and metrics during SEVs and posts actionable insights.',
            icon: <FaChartLine />,
            tags: ['Python', 'LLM', 'AWS Bedrock', 'CloudWatch', 'Lambda'],
            metrics: ['Minutes → seconds RCA time', 'Automated log analysis', 'Actionable insights'],
            color: '#ff9900',
        },
        {
            title: 'A/B Testing Framework',
            description:
                'Experimentation platform for LLM prompts and model configurations with safe rollouts.',
            icon: <FaCog />,
            tags: ['Java', 'DynamoDB', 'CloudWatch', 'Statistics', 'Monitoring'],
            metrics: ['Accelerated experimentation', 'Guardrailed deployments', 'Data-driven decisions'],
            color: '#146eb4',
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const item = {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section className="projects">
            <div className="container">
                <motion.div
                    className="projects-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    <h3 className="projects-title">Featured Projects</h3>

                    <div className="projects-grid">
                        {projects.map((p, i) => (
                            <motion.article
                                key={i}
                                className="project-card"
                                style={{ borderTopColor: p.color }}
                                variants={item}
                                whileHover={{ y: -4 }}
                            >
                                <div className="project-icon" style={{ color: p.color }}>
                                    {p.icon}
                                </div>
                                <h4 className="project-name">{p.title}</h4>
                                <p className="project-description">{p.description}</p>

                                <ul className="project-metrics">
                                    {p.metrics.map((m, k) => (
                                        <li key={k}>{m}</li>
                                    ))}
                                </ul>

                                <div className="project-tags">
                                    {p.tags.map((t) => (
                                        <span key={t} className="tag">
                      {t}
                    </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;