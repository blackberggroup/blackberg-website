import React, { useState } from 'react';
import Image from 'next/image';

const FormSection = () => {

const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');
  try {
    const res = await fetch('/api/contact2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  } catch (error) {
    setStatus('An error occurred. Please try again.');
  }
};

    return (
        <section id="contact-form">
            <div className="container py-8 py-md-11">
                <div className="row">
                    <div className="col-12 col-md-6 px-md-6 text-figtree">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-column flex-md-row">
                                <div className="mb-4 me-5 flex-fill">
                                    <label for="firstNameInput" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="firstNameInput" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="mb-4 flex-fill">
                                    <label for="lastNameInput" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="lastNameInput" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label for="emailInput" class="form-label">Email</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="you@company.com" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-0">
                                <label for="messageInput" class="form-label">Message</label>
                                <textarea class="form-control" id="messageInput" placeholder="Leave us a message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mt-5">Send Message</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <Image src="/images/contact/contact.webp"
                            className="img-fluid rounded-4 position-relative h-auto" 
                            alt="Person wearing VR headset" 
                            fill={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
