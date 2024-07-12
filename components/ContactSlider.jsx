"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Image } from '@nextui-org/react';
import { room } from '@/lib/data';

const ContactSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        pauseOnHover: true,
        swipeToSlide: true
    };



    return (
        <div className="carouselContainer max-h-[400px]">
            <Slider {...settings} className="gap-2 max-h-[400px] ">
                {room.map((items) => (
                    <div key={items.id} className="rounded-xl p-2 focus:outline-none max-h-[400px]">
                        <Image
                            removeWrapper
                            className='w-full rounded-xl object-cover h-[380px]'
                            src={items.images[2].href}
                            alt='home slider images'
                        />
                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default ContactSlider;
