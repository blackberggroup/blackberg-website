import React, { useState } from 'react';
import Image from 'next/image';

const FormSection = () => {

const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '', extraInfo: '' });
const [showMessage, setShowMessage] = useState(false);
const [formMessage, setFormMessage] = useState("We are sending your message. Please wait.")

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setShowMessage(true);

  // Check honeypot field before submitting
  if (formData.extraInfo) {
      setFormMessage('Spam detected. Your submission was not sent.');
      return;
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormMessage('Your message sent successfully.');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } else {
      setFormMessage('Sorry, we ran into issues sending your message. Please try again.');
    }
  } catch (error) {
      setFormMessage('Sorry, we ran into issues sending your message. Please try again.');
  }
};

    return (
        <section id="contact-form">
            <div className="container py-8 py-md-11">
                <div className="row">
                    <div className="col-12 col-md-6 px-md-6 text-figtree">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-column flex-md-row">
                                <div className="mb-4 me-md-5 flex-fill">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="mb-4 flex-fill">
                                    <label htmlFor="lastNameInput" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastNameInput" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailInput" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInput" placeholder="you@company.com" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="messageInput" className="form-label">Message</label>
                                <textarea className="form-control" id="messageInput" placeholder="Leave us a message" rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <div className="visually-hidden" aria-hidden="true">
                                <label htmlFor="extraInfo" className="form-label">Extra Info</label>
                                <input
                                    type="text"
                                    name="extraInfo"
                                    id="extraInfo"
                                    value={formData.extraInfo}
                                    onChange={handleChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="d-flex flex-column">
                              <button type="submit" className="btn btn-primary mt-5 align-self-start">Send Message</button>
                              {showMessage && (
                                <span className="form-message mt-3">
                                  {formMessage}
                                </span>
                                )
                              }
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <Image src="/images/contact/contact-form.webp"
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
