"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Image } from '@nextui-org/react';
import { room } from '@/lib/data';

const HomeSlider = () => {
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
            <Slider {...settings} className="gap-2">
                {room.map((items, index) => (
                    <div key={index} className="rounded-xl p-2 focus:outline-none">
                        <Image
                            removeWrapper
                            className='w-full h-full rounded-xl h-[400px] object-cover'
                            src={items.images[0].href}
                            alt='home slider images'
                        />
                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default HomeSlider;
