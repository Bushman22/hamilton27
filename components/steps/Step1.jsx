import React, { useState } from 'react';
import { Input, Button, Card, CardBody, Spacer, CardFooter } from '@nextui-org/react';

const Step1 = ({ nextStep, handleChange, formData }) => {
    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (field) => (e) => {
        handleChange(field)(e); // Propagate change to parent component
        // Clear error message for the field when user starts typing
        setErrors({ ...errors, [field]: '' });
    };
    const validateForm = () => {
        const { name, surname, email, phone } = formData;
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!surname) {
            newErrors.surname = 'Surname is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!phone) {
            newErrors.phone = 'Phone Number is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextClick = () => {
        if (validateForm()) {
            nextStep();
        }
    };

    return (
        <Card className='h-[400px]'>
            <CardBody className=''>
                <div className='p-3'>
                    <h3 className=''>Personal Details</h3>
                    <Spacer y={2} />
                    <Input
                        name='name'
                        label="Name"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        fullWidth
                        isInvalid={errors.name !== ''}
                        errorMessage={errors.name}
                        autoComplete='given-name'
                    />
                    <Spacer y={2} />
                    <Input
                        name='surname'
                        label="Surname"
                        value={formData.surname}
                        onChange={handleInputChange('surname')}
                        fullWidth
                        isInvalid={errors.surname !== ''}
                        errorMessage={errors.surname}
                        autoComplete='family-name'
                    />
                    <Spacer y={2} />
                    <Input
                        name='email'
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        fullWidth
                        isInvalid={errors.email !== ''}
                        errorMessage={errors.email}
                        autoComplete='email'
                    />
                    <Spacer y={2} />
                    <Input
                        name='phone'
                        type="tel"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        fullWidth
                        isInvalid={errors.phone !== ''}
                        errorMessage={errors.phone}
                        autoComplete='tel'
                    />
                </div>
            </CardBody>
            <CardFooter className='flex justify-end'>
                <div className="flex justify-end">
                    <Button className="text-white bg-blue-300" onPress={handleNextClick}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Step1;
