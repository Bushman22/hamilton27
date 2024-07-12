import React from 'react'
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { TbBrandAirbnb } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { siteConfig } from '@/config/site';

function Footer() {
    return (
        <div>
            <div className='border-t border-default-300 py-5 md:flex justify-between mt-20'>
                <div>
                    <Link href='/'>
                        <Image
                            removeWrapper
                            className="h-20"
                            alt=""
                            src="/hamilton_logo.png"
                        />
                    </Link>
                </div>
                <div className='md:flex lg:gap-20 md:gap-10 gap-20'>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Explore</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <Link href='/'>Home</Link>
                            <Link href='/accommodation'>Accommodation</Link>
                            <Link href='/gallery'>Gallery</Link>
                            <Link href='/contact'>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Contact Us</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <Link href='/'>Phone: +27 83 298 5524</Link>
                            <Link href='/'>Email: info@27hamilton.co.za</Link>
                            <Link className='max-lg:hidden' href='/gallery'>
                                Address: 27 Hamilton Ave,
                                Hurlingham, Sandton, 2196
                            </Link>
                            <Link className='lg:hidden' href='/gallery'>
                                Address: 27 Hamilton Ave, <br />
                                Hurlingham, Sandton, 2196
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Social Media</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <div className='flex gap-2 items-center'>
                                <Link target='_blank' aria-label="Twitter" href=''>
                                    <TbBrandAirbnb className="text-default-500 w-6 h-6" />
                                </Link>
                                <Link target='_blank' aria-label="Discord" href=''>
                                    <FaInstagram className="text-default-500 w-6 h-6" />
                                </Link>
                                <Link target='_blank' aria-label="Github" href=''>
                                    <TiSocialFacebookCircular className="text-default-500 w-7 h-7" />
                                </Link>
                            </div>
                            <div className='mt-5'>
                                <h1>Powered by</h1>
                                <Link href="https://go4itafrica.com" target='_blank'>
                                    <Image
                                        className="h-10"
                                        alt=""
                                        radius='0'
                                        src="/go4it-logo.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <h1 className='text-sm text-default-500'>2023 &copy; 27onHamilton - All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer