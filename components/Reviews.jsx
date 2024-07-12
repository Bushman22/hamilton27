"use client";

import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image, Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const data = [
    {
        id: 1,
        name: "Neil",
        image: "/placeholder.jpg",
        date: "November 2023",
        review: "I had a delightful stay at Michael and Melissa's place, and I can confidently say that it was a great value for money. The hosts excelled in communication, ensuring a seamless check-in, check-out process, and were readily available to answer any queries, making the stay an absolute breeze. The accommodation itself was immaculate, with every corner sparkling clean. I found everything I needed readily available, which added to the ease and comfort of my stay.",
        nights: "2",
    },
    {
        id: 2,
        name: "Alison",
        image: "/placeholder.jpg",
        date: "October 2023",
        review: "Another great stay at this Airbnb, It's my repeat choice for a reason! The hosts consistently go above and beyond to make me feel welcome and ensure my stay is comfortable. The facilities are always in great condition, adding to the overall positive experience. Looking forward to my next visit!",
        nights: "1",
    },
    {
        id: 3,
        name: "Nokuthula",
        image: "/placeholder.jpg",
        date: "October 2023",
        review: "A great stay, especially for someone as fussy as I am. The apartment is gorgeous, very spacious and clean. The internet speed is great for those in the tech field and if you want to stream your favorite shows. Melissa was very kind and even helped me with some tasks I needed to complete for my business. Highly recommend!",
        nights: "2",
    },
]

function Reviews() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedReview, setSelectedReview] = useState(null);

    const handleReviewClick = (review) => {
        setSelectedReview(review);
        onOpen();
    };

    return (
        <div className='md:mt-20 mt-10'>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className='text-4xl font-semibold'>Our Reviews</h1>
                    <p className='text-xl text-default-500'>
                        We have had over 1300 reviews with an average 4.9 star rating on Airbnb!
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-auto gap-5 mt-10'>
                {data.map((items) => (
                    <Card key={items.id} className="w-full">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Button className='m-0 px-0 w-auto h-auto rounded-full' size="sm" isIconOnly onPress={() => handleReviewClick(items)} >
                                    <Image
                                        className='w-[50px] h-[50px] rounded-full m-1'
                                        removeWrapper
                                        src={items.image}
                                        alt=''
                                    />


                                </Button>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{items.name}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">{items.date}</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400 mt-2">
                            <p>{items.review}</p>
                        </CardBody>
                        <CardFooter className="gap-3 mt-2">
                            <div className="flex gap-1">
                                <p className="text-default-400 text-small">Stayed <span className='font-semibold'>{items.nights}</span> {items.nights > 1 ? 'nights' : 'night'}</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className='flex justify-center my-10'>
                <Button className='bg-blue-300' as={Link} href='https://www.airbnb.co.uk/rooms/36326572/reviews?source_impression_id=p3_1720520506_P30Ic3_pSaoJ7hec' isExternal showAnchorIcon>
                    See more reviews
                </Button>
            </div>
            {selectedReview && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur" className="max-h-screen w-[400px] h-[400px] m-0 p-0 ">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody className="m-0 p-6">
                                    <Image
                                        removeWrapper
                                        alt=""
                                        className="w-[350px] h-[350px] object-cover rounded-full "
                                        src={selectedReview.image}
                                    />
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default Reviews