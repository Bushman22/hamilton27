import React from 'react';
import { title, subtitle } from '@/components/primitives';
import ContactForm from '@/components/ContactForm';
import ContactSlider from '@/components/ContactSlider'
import { Card, Link } from '@nextui-org/react';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";


function Contact() {
    return (
        <div>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className={title()}>Contact Us</h1>
                    <h2 className={subtitle()}>
                        Whether you are looking to book at 27 on Hamilton or just looking to find out more information about our guesthouse and facilities, fill out our form with your enquiry and we will get back to you as soon as we can.
                    </h2>
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5  mt-20 md:max-h-[400px]'>
                <ContactForm />
                <div>
                    <ContactSlider />
                </div>
            </div>
            <div className='flex justify-center mt-20 mb-10'>
                <h1 className='text-4xl font-semibold'>Contact Information</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-3 grid-cols-1 lg:w-3/5 md:w-4/5 gap-5'>
                    <Link href='https://maps.app.goo.gl/vKSAgUsMGnP3ffum8' isExternal>
                        <Card className=' w-full flex flex-col items-center justify-center p-5 text-center gap-2 h-full'>
                            <CiLocationOn className='w-8 h-8' />
                            <h1>
                                27 Hamilton Ave, Hurlingham, Sandton, 2196
                            </h1>
                        </Card>
                    </Link>
                    <Link href='tel:+27832985524' isExternal >
                        <Card className=' w-full flex flex-col items-center justify-center p-5 text-center gap-2 h-full'>
                            <CiPhone className='w-8 h-8' />
                            <h1>
                                +27 83 298 5524
                            </h1>
                        </Card>
                    </Link>
                    <Link href='mailto:info@27hamilton.co.za' isExternal>
                        <Card className=' w-full flex flex-col items-center justify-center p-5 text-center gap-2 h-full'>
                            <CiMail className='w-8 h-8' />
                            <h1>
                                info@27hamilton.co.za
                            </h1>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact