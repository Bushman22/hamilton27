"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { room } from '@/lib/data.ts';
import StarRating from '@/components/StarRating';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Image, Card, CardBody, Input, Link, DatePicker } from "@nextui-org/react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from '@nextui-org/react';
import ModalSlider from '@/components/ModalSlider';
import { IoBedOutline, IoPersonOutline, IoWifiOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import ShareButton from '@/components/ShareButton';
import { PiBathtubLight } from "react-icons/pi";
import { FaAirbnb } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { IoMdPerson } from 'react-icons/io';
import emailjs from 'emailjs-com';
import { parseDate, getLocalTimeZone } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import { MdKeyboardArrowDown } from "react-icons/md";
import Head from 'next/head';

const getCurrentDate = () => parseDate(new Date().toISOString().split('T')[0]);

function RoomsPage() {
    const params = useParams();
    const { id } = params;
    const [rooms, setRooms] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        selectedRoom: '',
        name: '',
        email: '',
        phone: '',
        departureDate: getCurrentDate(),
        returnDate: getCurrentDate(),
        guests: 1,
    });

    const formatter = useDateFormatter({ dateStyle: 'full' });


    useEffect(() => {
        if (id) {
            const foundRoom = room.find((p) => p.slug === id);
            if (foundRoom) {
                setRooms(foundRoom);
                setFormData((prev) => ({
                    ...prev,
                    selectedRoom: foundRoom.title
                }));
            }
        }
    }, [id]);

    if (!rooms) {
        return <div className='h-screen'>Loading...</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDateChange = (date, field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date,
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

    const handleSubmit = async (e) => {
        setError(false)
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const templateParams = {
                room: formData.selectedRoom,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                departureDate: formData.departureDate ? formatter.format(formData.departureDate.toDate(getLocalTimeZone())) : '',
                returnDate: formData.returnDate ? formatter.format(formData.returnDate.toDate(getLocalTimeZone())) : '',
                guests: formData.guests,
            };

            await emailjs.send('service_l2hwszn', 'template_181vfgq', templateParams, 'UyWLGLBoUFeNL0ipI');

            setIsSubmitted(true);
            setFormData({
                selectedRoom: rooms.title,
                name: '',
                email: '',
                phone: '',
                departureDate: getCurrentDate(),
                returnDate: getCurrentDate(),
                guests: 1,
            });
        } catch (error) {
            setError(true);
            console.error('Failed to send email:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <div>
                <Link href="/accommodation" color='foreground'>
                    <div className='flex gap-2'>
                        <GoArrowLeft className='w-6 h-6' />
                        <h1 className='mb-5'>Return</h1>
                    </div>
                </Link>
                <div className='md:flex justify-between items-end'>
                    <div>
                        <div className='flex items-center gap-1'>
                            <StarRating rating={rooms.rating} />
                            {rooms.rating}
                        </div>
                        <h1 className='font-semibold text-2xl my-2'>27 on Hamilton - {rooms.title}</h1>
                        <div className='flex items-center gap-10'>
                            {rooms.price1 && (
                                <div className="flex justify-start my-1 ">
                                    <p className="py-1 flex items-center">
                                        <IoMdPerson className="w-5 h-5 mr-2" />
                                        <span className='text-semibold text-xl'>{rooms.price1}</span>
                                    </p>
                                </div>
                            )}
                            {rooms.price2 && (
                                <div className="flex justify-start my-1 ">
                                    <p className="py-1 flex items-center">
                                        <IoMdPerson className="w-5 h-5 mr-2" />
                                        <span className='text-semibold text-xl'>{rooms.price2}</span>
                                    </p>
                                </div>
                            )}
                            <h1>/ night</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 max-md:mt-5'>
                        <Button variant='bordered' as={Link} href={rooms.airbnb} className='border-black' isExternal startContent={<FaAirbnb className='w-6 h-6' />}>
                            View on Airbnb
                        </Button>
                        <ShareButton url={typeof window !== 'undefined' ? window.location.href : ''} />

                    </div>
                </div>

                <div className='grid grid-cols-2 md:h-[450px] h-[200px] gap-2 mt-5 relative'>
                    <div className='w-full h-full md:max-h-[450px] max-h-[200px]'>
                        <Image
                            removeWrapper
                            src={rooms.images[0].href}
                            alt=''
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='grid grid-rows-2 h-full gap-2 md:max-h-[450px] max-h-[200px]'>
                        <div className='h-full row-span-1'>
                            <Image
                                removeWrapper
                                src={rooms.images[1].href}
                                alt=''
                                className='w-full object-cover h-full'
                            />
                        </div>
                        <div className='flex gap-2 w-full row-span-1'>
                            <div className='w-full'>
                                <Image
                                    removeWrapper
                                    src={rooms.images[3].href}
                                    alt=''
                                    className='w-full object-cover h-full'
                                />
                            </div>
                            <div className='w-full'>
                                <Image
                                    removeWrapper
                                    src={rooms.images[4].href}
                                    alt=''
                                    className='w-full object-cover h-full'
                                />
                            </div>
                        </div>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' size='3xl' className='max-h-[90%]'>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className='pb-0'>
                                            <h1>{rooms.title}</h1>
                                        </ModalHeader>
                                        <ModalBody className='pb-20 pt-0 px-0 m-0'>
                                            <ModalSlider images={rooms.images} />
                                        </ModalBody>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                    <div className='absolute bottom-0 right-0 m-0'>
                        <Button variant='solid' className='z-10 bg-blue-300 hover:bg-blue-400 m-2  opacity-1 hover:opacity-1' onPress={onOpen}>
                            Show all photos
                        </Button>
                    </div>
                </div>
                <div className='lg:w-1/2 mt-5'>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                        <div className="w-full h-10 border rounded-xl border-black flex items-center justify-center gap-2">
                            <IoBedOutline className="w-6 h-6" />
                            <span>{rooms.beds} {rooms.beds > 1 ? 'beds' : 'bed'}</span>
                        </div>
                        <div className="w-full h-10 border border-black rounded-xl flex items-center justify-center gap-2">
                            <IoPersonOutline className="w-6 h-6" />
                            <span>{rooms.guest} {rooms.guest > 1 ? 'guests' : 'guest'}</span>
                        </div>
                        <div className="w-full h-10 border border-black rounded-xl flex items-center justify-center gap-2">
                            <SlSizeFullscreen className="w-6 h-6" />
                            <span>{rooms.size} sqm</span>
                        </div>
                        <div className="lg:w-[300px] h-10 border border-black rounded-xl flex items-center justify-center gap-2">
                            <IoWifiOutline className="w-6 h-6" />
                            <span>{rooms.wifi}</span>
                        </div>
                        <div className="lg:w-[300px] h-10 border border-black rounded-xl flex items-center justify-center gap-2 max-md:col-span-2">
                            <PiBathtubLight className="w-6 h-6" />
                            <span >{rooms.bathroom}</span>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 w-full gap-5'>
                    <div className='col-span-2'>
                        <div className='mt-10'>
                            <h1 className=' text-2xl'>Overview</h1>
                            <p className='mt-5'>
                                {rooms.description}
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-2xl'>Additional Information</h1>
                            <p className='mt-5'>
                                {rooms.additionalInfo}
                            </p>
                            <div className='mt-5'>
                                <h1 className='mb-2'>Contact Us for more information:</h1>
                                <Button as={Link} showAnchorIcon href='/contact' className='bg-blue-300'>
                                    Contact now!
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 max-md:col-span-2'>
                        <Card className='h-full py-0'>
                            <CardBody className='h-full'>
                                <form className='h-full' onSubmit={handleSubmit}>
                                    {isSubmitted ? (
                                        <div className=' flex flex-col items-center justify-center text-center h-full'>
                                            <h1 className='font-bold'>Thank you for submitting the form</h1>
                                            <p className='text-default-500'>we will get back to you as soon as we can</p>
                                            <Button className='mt-5' onPress={() => setIsSubmitted(false)} >
                                                Redo form
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className='flex flex-col justify-between h-full gap-2'>
                                            <div className='flex justify-center text-center'>
                                                <div>
                                                    <p className='font-bold mt-2'>Check availability</p>
                                                    <p className=' mb-3 text-tiny mb-5 text-default-500'>we will get back to you as soon as possible</p>
                                                </div>
                                            </div>
                                            <Input
                                                className=''
                                                type="text"
                                                name="name"
                                                label="Name & Surname"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Input
                                                className=''
                                                type="email"
                                                name="email"
                                                label="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Input
                                                className=''
                                                type="tel"
                                                name="phone"
                                                label="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                                <DatePicker
                                                    className="w-full"
                                                    label="Departure Date"
                                                    value={formData.departureDate}
                                                    onChange={(date) => handleDateChange(date, 'departureDate')}
                                                />
                                                <DatePicker
                                                    className="w-full"
                                                    label="Return Date"
                                                    value={formData.returnDate}
                                                    onChange={(date) => handleDateChange(date, 'returnDate')}
                                                />
                                            </div>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='flex justify-center max-md:text-sm'>Number of guests: </h1>
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
                                                        {rooms.price2 && (
                                                            <DropdownItem key="2">2 Guests</DropdownItem>
                                                        )}
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                            <Button className='bg-blue-300 w-full py-2' size='lg' type='submit' isLoading={isLoading}>
                                                {isLoading ? (
                                                    <span>Loading</span>
                                                ) : (
                                                    <span>Check availability</span>
                                                )}
                                            </Button>
                                        </div>
                                    )}

                                </form>
                            </CardBody>
                        </Card>
                        {error && (
                            <div className='flex justify-center text-center mt-1'>
                                <h1 className='text-red-500 text-sm'>Error submitting form, please try again or check your connection.</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomsPage;
