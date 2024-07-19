"use client";

import React, { useState } from 'react';
import { Button, Spacer, Card, CardBody, DatePicker, CardFooter } from '@nextui-org/react';
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from '@nextui-org/react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
    const [error, setError] = useState(false);

    // Function to handle date changes
    const handleDateChange = (date, field) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: date
        }));
    };

    const handleGuestsChange = (keys) => {
        const key = Array.from(keys)[0];
        const guests = parseInt(key, 10);
        if (!isNaN(guests) && guests !== formData.guests) {
            setFormData((prev) => ({
                ...prev,
                guests,
            }));
        }
    };

    // Function to check if both dates are selected
    const isNextDisabled = () => {
        return !(formData.departureDate && formData.returnDate);
    };

    // Function to handle next step
    const handleNextClick = () => {
        if (formData.departureDate && formData.returnDate) {
            setError(false); // Clear any previous error
            nextStep();
        } else {
            setError(true); // Show error message
        }
    };

    return (
        <Card className='h-[400px]'>
            <CardBody>
                <div className='p-3'>
                    <h3 className=''>Select Departure and Return Dates</h3>
                    <Spacer y={1} />
                    <div className='flex flex-col justify-between'>
                        <div className="">
                            <DatePicker
                                name='departure'
                                label="Departure Date"
                                value={formData.departureDate}
                                onChange={(date) => handleDateChange(date, 'departureDate')}
                                fullWidth
                                locale="en-US"
                            />
                            <Spacer y={1.5} />
                            <DatePicker
                                name="return"
                                label="Return Date"
                                value={formData.returnDate}
                                onChange={(date) => handleDateChange(date, 'returnDate')}
                                fullWidth
                                locale="en-US"
                            />
                        </div>
                        {error && (
                            <p className=" mt-2 text-red-500">Please select both departure and return dates.</p>
                        )}
                    </div>
                    <Spacer y={1} />
                    <div className='mt-2'>
                        <h1 className='mb-2'>Select the amount of guests: </h1>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className='bg-default-200' endContent={<MdKeyboardArrowDown className='w-5 h-5' />}>
                                    {formData.guests === 1 ? '1 Guest' : '2 Guests'}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Number of guests"
                                selectionMode="single"
                                selectedKeys={[`${formData.guests}`]}
                                onSelectionChange={(keys) => handleGuestsChange(keys)}
                            >
                                <DropdownItem key="1">1 Guest</DropdownItem>
                                <DropdownItem key="2">2 Guests</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </CardBody>
            <CardFooter className='flex justify-end'>
                <div className='flex justify-end gap-2'>
                    <Button flat onPress={prevStep} className='mr-[10px]'>
                        Back
                    </Button>
                    <Button
                        className='bg-blue-300'
                        disabled={isNextDisabled()}
                        onPress={handleNextClick}
                    >
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Step3;
