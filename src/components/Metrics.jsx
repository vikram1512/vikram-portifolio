// src/components/Metrics.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStopwatch, FaChartBar, FaSmileBeam } from 'react-icons/fa';
import './Metrics.css';

const Metrics = () => {
    const metrics = [
        {
            icon: <FaStopwatch />,
            value: '16s → 3s',
            label: 'Latency Reduction',
            detail: 'Alexa Plus AI real-time response optimization',
        },
        {
            icon: <FaChartBar />,
            value: '~40%',
            label: 'Case Handling Time ↓',
            detail: 'Bedrock + Claude Issue Summary Widget',
        },
        {
            icon: <FaSmileBeam />,
            value: '~50%',
            label: 'Reply Time ↓',
            detail: 'LLM-based auto-reply drafting in Paragon CMS',
        },
        {
            icon: <FaRocket />,
            value: '~80%',
            label: 'Efficiency Gain',
            detail: 'Real-time Notification Service productivity boost',
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="metrics">
            <div className="container">
                <motion.div
                    className="metrics-content"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="metrics-title">Impact Metrics</h3>

                    <div className="metrics-grid">
                        {metrics.map((m, i) => (
                            <motion.div key={i} className="metric-card" variants={item}>
                                <div className="metric-icon">{m.icon}</div>
                                <div className="metric-value">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                                <div className="metric-detail">{m.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Metrics;