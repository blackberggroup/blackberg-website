import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import {
    FIELDS_OF_INTEREST,
    MAX_FIELDS_OF_INTEREST,
    MAX_RESUME_SIZE_BYTES,
    MAX_RESUME_SIZE_MB,
    RESUME_EXTENSIONS,
} from '@/app/lib/config/careers';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [],
    otherInterest: '',
    linkedin: '',
    resume: null,
    message: '',
    consent: false,
    extraInfo: '',
};

const SUCCESS_MESSAGE = `Thank you for your interest in Blackberg Group! We’ve received your information and will keep it on file. If a position opens that fits your background, we’ll be in touch.`;
const ERROR_MESSAGE = 'Sorry, we ran into issues sending your information. Please try again.';

const GeneralInterestForm = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [showMessage, setShowMessage] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [uploadError, setUploadError] = useState('');

    const otherSelected = formData.interests.includes('Other');
    const interestLimitReached = formData.interests.length >= MAX_FIELDS_OF_INTEREST;

    const handleFileValidation = (file) => {
        if (!file) {
            return false;
        }

        const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

        if (!RESUME_EXTENSIONS.includes(extension)) {
            setUploadError('Invalid file type. Please upload a PDF, DOC, or DOCX file.');
            return false;
        }

        if (file.size > MAX_RESUME_SIZE_BYTES) {
            setUploadError(`Your file is too large. Please upload a file up to ${MAX_RESUME_SIZE_MB} MB.`);
            return false;
        }

        setUploadError('');
        return true;
    };

    const setResume = (file) => {
        if (handleFileValidation(file)) {
            setFormData((current) => ({ ...current, resume: file }));
            setFileName(file.name);
            return true;
        }

        setFormData((current) => ({ ...current, resume: null }));
        setFileName('');
        return false;
    };

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;

        if (name === 'resume') {
            if (!setResume(files[0])) {
                e.target.value = '';
            }
        } else if (type === 'checkbox') {
            setFormData((current) => ({ ...current, [name]: checked }));
        } else {
            setFormData((current) => ({ ...current, [name]: value }));
        }
    };

    const handleInterestChange = (e) => {
        const { value, checked } = e.target;

        setFormData((current) => {
            if (!checked) {
                return {
                    ...current,
                    interests: current.interests.filter((interest) => interest !== value),
                    otherInterest: value === 'Other' ? '' : current.otherInterest,
                };
            }

            if (current.interests.length >= MAX_FIELDS_OF_INTEREST) {
                return current;
            }

            return { ...current, interests: [...current.interests, value] };
        });
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            const inputElement = document.getElementById('resumeInput');

            if (setResume(file)) {
                // Mirror the dropped file onto the file input so the required check passes
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                inputElement.files = dataTransfer.files;
            } else {
                inputElement.value = '';
            }
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.resume) {
            setFormMessage('Please select a valid file before submitting.');
            setShowMessage(true);
            return;
        }

        // Check honeypot field before submitting
        if (formData.extraInfo) {
            setFormMessage('Spam detected. Your submission was not sent.');
            setShowMessage(true);
            return;
        }

        setIsSubmitting(true);
        setFormMessage('We are sending your information. Please wait.');
        setShowMessage(true);

        const formDataToSend = new FormData();
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('interests', JSON.stringify(formData.interests));
        formDataToSend.append('otherInterest', formData.otherInterest);
        formDataToSend.append('linkedin', formData.linkedin);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('consent', formData.consent ? 'true' : 'false');
        formDataToSend.append('extraInfo', formData.extraInfo);
        formDataToSend.append('resume', formData.resume);

        try {
            const res = await fetch('/api/resume', {
                method: 'POST',
                body: formDataToSend,
            });

            if (res.ok) {
                setFormMessage(SUCCESS_MESSAGE);
                setFormData(initialFormData);
                setFileName('');
                setIsSubmitted(true);
            } else {
                const data = await res.json().catch(() => null);
                setFormMessage(data?.error || ERROR_MESSAGE);
            }
        } catch (error) {
            setFormMessage(ERROR_MESSAGE);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const circles = [
            { selector: ".circle-36", translateY: "-100px" },
            { selector: ".circle-76", translateY: "-70px" },
            { selector: ".circle-106", translateY: "-100px" },
        ];

        const tweens = circles.map(({ selector, translateY }) => gsap.to(selector, {
            translateY,
            ease: "none",
            scrollTrigger: {
                trigger: "#careers-form",
                start: 'top bottom',
                end: "+=1000px",
                scrub: true,
            }
        }));

        return () => {
            tweens.forEach((tween) => {
                tween.scrollTrigger?.kill();
                tween.kill();
            });
        };
    }, []);

    return (
        <section id="careers-form" className="careers-form--general bg-electric-green-100">
            <div className="container py-8 py-md-11">
                <div className="row">
                    <div className="col-12 text-figtree mx-auto position-relative">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto text-center mb-5">
                            <h2 className="display-5 mb-4">Join Our Talent Network</h2>
                            <p className="mb-0">{`We’re always interested in meeting talented people who care about mission-driven work. Share your information below and upload your resume to be considered for future roles. We’ll keep it on file and reach out as positions open up that fit your experience.`}</p>
                        </div>
                        {isSubmitted ? (
                            <div className="career-form col-12 col-md-10 col-lg-8 col-xl-6 mx-auto text-center" role="status">
                                <p className="form-message h5 mb-0">{formMessage}</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="career-form col-12 col-md-10 col-lg-8 col-xl-6 mx-auto position-relative" onDragEnter={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                            <div className="circle-detail circle-106 z-1"></div>
                            <div className="circle-detail circle-36 z-1"></div>
                            <div className="circle-detail circle-76 z-1"></div>
                            <div className="d-flex flex-column flex-md-row">
                                <div className="mb-4 me-md-5 flex-fill">
                                    <label htmlFor="firstName" className="form-label">First name<span className="text-danger">* </span></label>
                                    <input type="text" className="form-control rounded-3" id="firstName" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" maxLength="100" required />
                                </div>
                                <div className="mb-4 flex-fill">
                                    <label htmlFor="lastNameInput" className="form-label">Last name<span className="text-danger">* </span></label>
                                    <input type="text" className="form-control rounded-3" id="lastNameInput" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" maxLength="100" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailInput" className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="email" className="form-control rounded-3" id="emailInput" placeholder="you@emailaddress.com" name="email" value={formData.email} onChange={handleChange} autoComplete="email" maxLength="200" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneInput" className="form-label">Phone</label>
                                <input type="tel" className="form-control rounded-3" id="phoneInput" placeholder="+1 (555) 000-0000" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" maxLength="40" />
                            </div>
                            <fieldset className="mb-4 interest-fieldset">
                                <legend className="form-label">Field of interest <span className="interest-hint">(select up to {MAX_FIELDS_OF_INTEREST})</span></legend>
                                <div className="row">
                                    {FIELDS_OF_INTEREST.map((interest, index) => {
                                        const isChecked = formData.interests.includes(interest);
                                        return (
                                            <div className="col-12 col-sm-6" key={interest}>
                                                <div className="form-check mb-2">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={`interest-${index}`}
                                                        name="interests"
                                                        value={interest}
                                                        checked={isChecked}
                                                        disabled={!isChecked && interestLimitReached}
                                                        onChange={handleInterestChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={`interest-${index}`}>{interest}</label>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {otherSelected && (
                                    <div className="mt-2">
                                        <label htmlFor="otherInterestInput" className="form-label">Tell us your field of interest<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control rounded-3" id="otherInterestInput" placeholder="Your field of interest" name="otherInterest" value={formData.otherInterest} onChange={handleChange} maxLength="100" required />
                                    </div>
                                )}
                            </fieldset>
                            <div className="mb-4">
                                <label htmlFor="linkedinInput" className="form-label">LinkedIn URL</label>
                                <input type="url" className="form-control rounded-3" id="linkedinInput" placeholder="https://www.linkedin.com/in/yourname" name="linkedin" value={formData.linkedin} onChange={handleChange} maxLength="300" />
                            </div>
                            <div className={`mb-4 resume-upload bg-white d-flex flex-column align-items-center text-center px-3 py-3 px-4 ${dragActive ? 'drag-active' : ''}`} 
                                 onDragEnter={handleDrag} 
                                 onDragOver={handleDrag} 
                                 onDrop={handleDrop}>
                                  <div className="upload-icon rounded-3 d-flex align-items-center justify-content-center mb-2">
                                    <Image src="/images/upload-icon.svg" 
                                      alt="" 
                                      width="17"
                                      height="15"
                                      className="img-fluid position-relative" />
                                  </div>
                                <label htmlFor="resumeInput" className="d-flex flex-column justify-content-center cursor-pointer">
                                    <span className="d-flex"><span className="text-primary text-figtree click-label">Click to upload resume<span className="text-danger">* </span></span>&nbsp; or drag and drop</span>
                                    <span className="file-type">PDF, DOC, or DOCX, up to {MAX_RESUME_SIZE_MB} MB</span>
                                    <input type="file" className="form-control visually-hidden" id="resumeInput" name="resume" onChange={handleChange} accept={RESUME_EXTENSIONS.join(', ')} required />
                                </label>
                                {fileName && <span className="file-name mt-2" aria-live="polite">{fileName}</span>}
                                {uploadError && (
                                    <span className="upload-error text-danger mt-2" role="alert">{uploadError}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="messageInput" className="form-label">{`Anything you’d like us to know`}</label>
                                <textarea className="form-control rounded-3" id="messageInput" rows="3" name="message" value={formData.message} onChange={handleChange} maxLength="500"></textarea>
                            </div>
                            <div className="form-check mb-0">
                                <input type="checkbox" className="form-check-input" id="consentInput" name="consent" checked={formData.consent} onChange={handleChange} required />
                                <label className="form-check-label" htmlFor="consentInput">I agree that Blackberg Group may keep my information on file and contact me about future opportunities.<span className="text-danger">*</span></label>
                            </div>
                            <div className="visually-hidden d-flex flex-column" aria-hidden="true">
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
                                <button type="submit" className="btn btn-primary mt-5 w-100" disabled={isSubmitting}>
                                        <span className="d-flex justify-content-center align-items-center">
                                            <span>Submit My Information</span>
                                        </span>
                                </button>
                                {showMessage && (
                                  <span className="form-message mt-3 text-center" role="status">
                                    {formMessage}
                                  </span>
                                  )
                                }
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeneralInterestForm;
