// Step4.js
"use client";

import React, { useState } from 'react';
import { Button, Spacer, Card, CardBody, Textarea, CardFooter } from '@nextui-org/react';

const Step4 = ({ prevStep, formData, setFormData, isLoading, handleSubmit, error }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
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
            {error && (
                    <div className='flex justify-center'>
                        <h1 className='text-red-500'>Error submitting form, please try again or check your connection.</h1>
                    </div>
                )}
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
