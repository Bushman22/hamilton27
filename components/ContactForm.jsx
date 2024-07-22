"use client";

import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Completion from './steps/Completion';
import { parseDate, getLocalTimeZone } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const getCurrentDate = () => parseDate(new Date().toISOString().split('T')[0]);

const ContactForm = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        room: '',
        guests: 1,
        departureDate: getCurrentDate(),
        returnDate: getCurrentDate(),
        message: '',
    });

    const formatter = useDateFormatter({ dateStyle: 'full' });

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
        setFormData({
            room: '',
            name: '',
            surname: '',
            email: '',
            phone: '',
            guests: 1,
            departureDate: getCurrentDate(),
            returnDate: getCurrentDate(),
            message: '',
        })
        setStep(1);
    };


    const handleSubmit = async (e) => {
        setError(false)
        setIsLoading(true);
        try {
            const templateParams = {
                room: formData.room,
                name: formData.name,
                surname: formData.surname,
                email: formData.email,
                phone: formData.phone,
                guests: formData.guests,
                departureDate: formData.departureDate ? formatter.format(formData.departureDate.toDate(getLocalTimeZone())) : '',
                returnDate: formData.returnDate ? formatter.format(formData.returnDate.toDate(getLocalTimeZone())) : '',
                message: formData.message,
            };

            await emailjs.send('service_l2hwszn', 'template_zp3bhri', templateParams, 'UyWLGLBoUFeNL0ipI');
            toast.success('Sent Successfully');
            nextStep(1);

        } catch (error) {
            setError(true);
            toast.error('Failed to Send');
            console.error('Failed to send email:', error);
        } finally {
            setIsLoading(false)
        }
    }

    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} setFormData={setFormData} />;
        case 3:
            return <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
        case 4:
            return <Step4 prevStep={prevStep} formData={formData} setFormData={setFormData} isLoading={isLoading} handleSubmit={handleSubmit} error={error} />;
        case 5:
            return <Completion startOver={startOver} />;
        default:
            return <div>Unknown step</div>;
    }
};

export default ContactForm;
