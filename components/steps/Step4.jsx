// Step4.js
"use client";

import React, { useState } from 'react';
import { Button, Spacer, Card, CardBody, Textarea, CardFooter } from '@nextui-org/react';

const Step4 = ({ prevStep, formData, setFormData, sendFormData }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setIsLoading(true);

        // Simulate sending data for 2 seconds
        setTimeout(() => {
            sendFormData(formData);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <Card className='h-[400px]'>
            <CardBody>
                <div className='p-3'>
                    <h3 className=''>Additional Message (optional)</h3>
                    <Spacer y={1} />
                    <Textarea
                        id="message"
                        name="message"
                        label="Message"
                        value={formData.message}
                        onChange={handleChange}
                        minRows={8}
                        fullWidth
                    />
                </div>
            </CardBody>
            <CardFooter className='flex justify-end'>
                <div className='flex justify-end gap-2'>
                    <Button flat onPress={prevStep} className='mr-[10px]'>
                        Back
                    </Button>
                    <Button color='success' onPress={handleSubmit} isLoading={isLoading}>
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <span>Submit</span>
                        )}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Step4;
