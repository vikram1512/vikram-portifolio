// src/components/Experience.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAmazon, FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const [selectedJob, setSelectedJob] = useState(0);

    const experiences = [
        {
            company: 'Amazon',
            role: 'Software Development Engineer II',
            period: 'Oct 2023 – Present',
            location: 'Seattle, WA',
            icon: <FaAmazon />,
            projects: [
                {
                    name: 'Alexa AI Orchestration',
                    achievements: [
                        'Designed and implemented Tier-1 orchestration powering Alexa Plus AI with real-time LLM routing to domain experts (Weather, Sports, Music, etc.).', //  [oai_citation:0‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Optimized inference flow architecture, reducing end-to-end latency from 16s to 3s for millions of users.', //  [oai_citation:1‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Built an A/B testing framework for prompts and model configs to accelerate safe experimentation and rollouts.', //  [oai_citation:2‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                    ],
                },
                {
                    name: 'MSP — Amazon Pack App',
                    achievements: [
                        'Developed core services for box selection, label generation, and automation flows in fulfillment centers.', //  [oai_citation:3‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Improved cycle time and packaging accuracy across thousands of daily shipments.', //  [oai_citation:4‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Leveraged Lambda, DynamoDB, and ECS for high-throughput, low-latency packing decisions in multi-million package operations.', //  [oai_citation:5‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Built an LLM-powered SmartTTBot to analyze logs/metrics during SEVs; cut RCA from minutes to seconds.', //  [oai_citation:6‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                    ],
                },
            ],
        },
        {
            company: 'Amazon',
            role: 'Software Development Engineer I',
            period: 'Aug 2021 – Sep 2023',
            location: 'Seattle, WA',
            icon: <FaAmazon />,
            projects: [
                {
                    name: 'Selling Partner Services — Paragon CMS',
                    achievements: [
                        'Issue Summary Widget using Amazon Bedrock + Claude; reduced average case handling time by ~40%.', //  [oai_citation:7‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'LLM Response Generation Widget; reduced reply time by ~50% and improved CSAT.', //  [oai_citation:8‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Dynamic Notification Service that cut non-productive time by ~80% during peaks.', //  [oai_citation:9‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                    ],
                },
            ],
        },
        {
            company: 'Infosys Limited',
            role: 'Systems Engineer',
            period: 'Jun 2017 – Feb 2019',
            location: 'Hyderabad, India',
            icon: <FaBriefcase />,
            projects: [
                {
                    name: 'Data Platforms & ETL',
                    achievements: [
                        'Automated ETL validation with Java + Spring; reduced manual QA effort by ~40%.', //  [oai_citation:10‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Integrated Kafka to streamline Informatica → Oracle ingestion for throughput & reliability.', //  [oai_citation:11‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                        'Optimized SQL & batch scheduling for large loads; ~40% faster processing and reliability improvements.', //  [oai_citation:12‡LatestResume (2).pdf](file-service://file_0000000054a071f7b94a876b69a471bc)
                    ],
                },
            ],
        },
    ];

    const active = experiences[selectedJob];

    return (
        <section className="experience">
            <div className="container">
                <motion.div
                    className="experience-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
                    }}
                >
                    {/* Sidebar tabs */}
                    <motion.aside className="experience-sidebar" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                        {experiences.map((job, i) => (
                            <button
                                key={i}
                                className={`experience-tab ${i === selectedJob ? 'active' : ''}`}
                                onClick={() => setSelectedJob(i)}
                                aria-pressed={i === selectedJob}
                            >
                                <span className="tab-icon">{job.icon}</span>
                                <span className="tab-company">{job.company}</span>
                                <span className="tab-role">{job.role}</span>
                            </button>
                        ))}
                    </motion.aside>

                    {/* Main panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedJob}
                            className="experience-panel"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                        >
                            <header className="experience-header">
                                <div className="header-left">
                                    <h3 className="job-title">{active.role} <span className="at">@ {active.company}</span></h3>
                                </div>
                                <div className="experience-meta">
                                    <div className="meta-item"><FaCalendar /> {active.period}</div>
                                    <div className="meta-item"><FaMapMarkerAlt /> {active.location}</div>
                                </div>
                            </header>

                            {/* Projects & achievements */}
                            {active.projects.map((p, idx) => (
                                <section key={idx} className="project-section">
                                    <h4 className="project-name">{p.name}</h4>
                                    <ul className="achievements-list">
                                        {p.achievements.map((a, k) => (
                                            <li key={k}>{a}</li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;