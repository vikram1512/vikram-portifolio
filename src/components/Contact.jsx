import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle  } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
            formRef.current.reset();
            setStatus({ type: 'success', message: 'Message sent! I’ll get back to you shortly.' });
        } catch (err) {
            console.error(err);
            setStatus({ type: 'error', message: 'Could not send right now. Please try again in a moment.' });
        } finally {
            setLoading(false);
            // auto-clear after a few seconds (optional)
            setTimeout(() => setStatus({ type: '', message: '' }), 4000);
        }
    };


    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="contact">
            <div className="container">
                <motion.div
                    className="contact-content"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="contact-title">Get In Touch</h3>

                    <div className="contact-grid">
                        {/* Left side: info */}
                        <motion.div className="contact-info" variants={item}>
                            <p className="contact-intro">
                                Feel free to reach out for collaborations, opportunities, or questions about my work.
                                I typically respond within 24 hours.
                            </p>

                            <ul className="contact-list">
                                <li><FaEnvelope /> vikramvarmakunaparaju@gmail.com</li>
                                <li><FaPhone /> (352) 745-9348</li>
                                <li><FaMapMarkerAlt /> Seattle, WA</li>
                            </ul>

                            <div className="contact-social">
                                <a href="mailto:vikramvarmakunaparaju@gmail.com" className="social-icon">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/vikramadityavarma" target="_blank" rel="noreferrer" className="social-icon">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </motion.div>

                        {/* Right side: form */}
                        <motion.form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                            variants={item}
                        >
                            <div className="form-group">
                                <label htmlFor="from_name">Name</label>
                                <input id="from_name" name="from_name" type="text" placeholder="Your name" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="reply_to">Email</label>
                                <input id="reply_to" name="reply_to" type="email" placeholder="you@example.com"
                                       required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write your message here..."
                                          required/>
                            </div>

                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? 'Sending…' : <>Send Message <FaPaperPlane/></>}
                            </button>
                            {status.message && (
                                <div className={`status-banner ${status.type}`}>
                                    {status.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                                    <span>{status.message}</span>
                                </div>
                            )}
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;