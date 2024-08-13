import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const FormSection = ({page}) => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', resume: null, message: '' });
    const [showMessage, setShowMessage] = useState(false);
    const [formMessage, setFormMessage] = useState("We are sending your resume. Please wait.");
    const [fileName, setFileName] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const allowedFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            const file = files[0];
            if (handleFileValidation(file)) {
                setFormData({ ...formData, [name]: file });
                setFileName(file.name);
            } else {
                setFormData({ ...formData, [name]: null });
                setFileName('');
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (handleFileValidation(file)) {
                setFormData({ ...formData, resume: file });
                setFileName(file.name);

                // Manually trigger the change event on the file input to ensure it's registered
                const inputElement = document.getElementById('resumeInput');
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                inputElement.files = dataTransfer.files;

            } else {
                setFormData({ ...formData, resume: null });
                setFileName('');
            }
        }
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        if (!formData.resume) {
            setFormMessage('Please select a valid file before submitting.');
            return;
        }

        setIsSubmitting(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        // Manually add job position
        formDataToSend.append('position', page.title);

        setShowMessage(true);

        try {
            const res = await fetch('/api/resume', {
                method: 'POST',
                body: formDataToSend,
            });

            if (res.ok) {

                setTimeout(()=> {
                  setFormMessage('Your resume was submitted successfully.');
                  setFormData({ firstName: '', lastName: '', email: '', phone: '', resume: null, message: '' });
                  setFileName('');
                  setIsSubmitting(false);
                }, 500)

            } else {
                setFormMessage('Sorry, we ran into issues sending your resume. Please try again.');
            }
        } catch (error) {
            setFormMessage('Sorry, we ran into issues sending your resume. Please try again.');
        } 
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

    const handleFileValidation = (file) => {
        if (file && !allowedFileTypes.includes(file.type)) {
            setUploadError('Invalid file type. Please upload a .doc, .docx, or .pdf file.');
            return false;
        }
        setUploadError('');
        return true;
    };    

    useEffect(() => {
        gsap.to(".circle-36", {
            translateY: "-100px",
            ease: "none",
            scrollTrigger: {
                trigger: "#careers-form",
                start: 'top bottom',
                end: "+=1000px",
                scrub: true,
            }
        });

        gsap.to(".circle-76", {
            translateY: "-70px",
            ease: "none",
            scrollTrigger: {
                trigger: "#careers-form",
                start: 'top bottom',
                end: "+=1000px",
                scrub: true,
            }
        });

        gsap.to(".circle-106", {
            translateY: "-100px",
            ease: "none",
            scrollTrigger: {
                trigger: "#careers-form",
                start: 'top bottom',
                end: "+=1000px",
                scrub: true,
            }
        });

    }, []);    

    return (
        <section id="careers-form" className="bg-electric-green-100">
            <div className="container py-8 py-md-11">
                <div className="row">
                    <div className="col-12 text-figtree mx-auto position-relative">
                        <h3 className="display-5 mb-5 text-center">Send resume for this position</h3>
                        <form onSubmit={handleSubmit} className="career-form col-12 col-md-10 col-lg-8 col-xl-6 mx-auto position-relative" onDragEnter={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                            <div className="circle-detail circle-106 z-1"></div>
                            <div className="circle-detail circle-36 z-1"></div>
                            <div className="circle-detail circle-76 z-1"></div>
                            <div className="d-flex flex-column flex-md-row">
                                <div className="mb-4 me-md-5 flex-fill">
                                    <label htmlFor="firstName" className="form-label">First name<span className="text-danger">* </span></label>
                                    <input type="text" className="form-control rounded-3" id="firstName" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="mb-4 flex-fill">
                                    <label htmlFor="lastNameInput" className="form-label">Last name<span className="text-danger">* </span></label>
                                    <input type="text" className="form-control rounded-3" id="lastNameInput" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailInput" className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="email" className="form-control rounded-3" id="emailInput" placeholder="you@emailaddress.com" name="email" value={formData.email} onChange={handleChange} autocomplete="email" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneInput" className="form-label">Phone<span className="text-danger">*</span></label>
                                <input type="tel" className="form-control rounded-3" id="phoneInput" placeholder="+1 (555) 000-0000" name="phone" value={formData.phone} onChange={handleChange} autocomplete="phone" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="messageInput" className="form-label">Message</label>
                                <textarea className="form-control rounded-3" id="messageInput" placeholder="Leave us a message..." rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <div className={`mb-4 resume-upload bg-white d-flex flex-column align-items-center text-center px-3 py-3 px-4 ${dragActive ? 'drag-active' : ''}`} 
                                 onDragEnter={handleDrag} 
                                 onDragOver={handleDrag} 
                                 onDrop={handleDrop}>
                                  <div className="upload-icon rounded-3 d-flex align-items-center justify-content-center mb-2">
                                    <Image src="/images/upload-icon.svg" 
                                      alt="resume upload icon" 
                                      width="17"
                                      height="15"
                                      className="img-fluid position-relative" />
                                  </div>
                                <label htmlFor="resumeInput" className="form-label visually-hidden-focusable">Resume</label>
                                <label htmlFor="resumeInput" className="d-flex flex-column justify-content-center cursor-pointer">
                                    <span className="d-flex"><span className="text-primary text-figtree click-label">Click to upload resume<span className="text-danger">* </span></span>&nbsp; or drag and drop</span>
                                    <span className="file-type">.doc, .docx, .pdf</span>
                                    <input type="file" className="form-control visually-hidden" id="resumeInput" name="resume" onChange={handleChange} accept=".doc, .docx, .pdf" required />
                                </label>
                                {fileName && <span className="file-name mt-2" aria-live="polite">{fileName}</span>}
                                {uploadError && (
                                    <span className="upload-error text-danger mt-2">{uploadError}</span>
                                )}
                            </div>
                            <div className="d-flex flex-column">
                                <button type="submit" className="btn btn-primary mt-5 w-100" disabled={isSubmitting}>
                                        <span className="d-flex justify-content-center align-items-center">
                                            <span>Send Resume</span>
                                        </span>
                                </button>
                                {showMessage && (
                                  <span className="form-message mt-3 text-center">
                                    {formMessage}
                                  </span>
                                  )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;