"use client";

import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Completion from './steps/Completion';

const ContactForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        room: '',
        departureDate: null,
        returnDate: null,
        message: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (input) => (e) => {
        const value = (e && e.target && e.target.type === 'checkbox')
            ? e.target.checked
            : (e && e.target && e.target.value);

        setFormData(prevData => ({
            ...prevData,
            [input]: value
        }));
    };

    const startOver = () => {
        setStep(1);
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            room: '',
            departureDate: null,
            returnDate: null,
            message: '',
        });
    };

    const sendFormData = (formData) => {
        // Replace with your logic to send form data (e.g., using emailjs)
        console.log('Sending Form Data:', formData);
        // Example: sendFormDataToServer(formData);
        nextStep(); // Proceed to the next step (completion step)
    };

    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} setFormData={setFormData}  />;
        case 3:
            return <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
        case 4:
            return <Step4 prevStep={prevStep} formData={formData} setFormData={setFormData} sendFormData={sendFormData} />;
        case 5:
            return <Completion startOver={startOver} />;
        default:
            return <div>Unknown step</div>;
    }
};

export default ContactForm;
