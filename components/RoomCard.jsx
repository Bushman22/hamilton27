import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import { IoIosStar } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";


export default function RoomCard({ title, price1, price2, image, rating, size, beds, guest, slug }) {
    return (
        <Link href={`/accommodation/${slug}`}>
            <Card className="w-full" shadow="sm" isPressable >
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={title}
                        className="w-full object-cover h-[200px]"
                        src={image}
                    />
                </CardBody>
                <CardFooter className="text-small">
                    <div className="w-full">
                        <div className="flex justify-between">
                            <b>{title}</b>
                            <h1 className="flex items-center gap-1"><IoIosStar className="text-yellow-500 w-5 h-5" />{rating}</h1>
                        </div>
                        <div className="flex justify-start gap-5">
                            {price1 && (
                                <div className="flex justify-start my-1 ">
                                    <p className="text-default-500 py-1 flex">
                                        <IoMdPerson className="w-5 h-5 mr-2" />
                                        {price1}
                                    </p>
                                </div>
                            )}
                            {price2 && (
                                <div className="flex justify-start my-1">
                                    <p className="text-default-500 py-1 flex">
                                        <IoMdPerson className="w-5 h-5" />
                                        <IoMdPerson className="w-5 h-5 mr-2" />
                                        {price2}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-full h-10 bg-default-200 rounded-xl flex items-center justify-center gap-2">
                                <IoBedOutline className="w-6 h-6" />
                                <span className="text-tiny">1 {beds > 1 ? 'beds' : 'bed'}</span>
                            </div>
                            <div className="w-full h-10 bg-default-200 rounded-xl flex items-center justify-center gap-2">
                                <IoPersonOutline className="w-6 h-6" />
                                <span className="text-tiny">{guest} {guest > 1 ? 'Guests' : 'Guest'}</span>
                            </div>
                            <div className="w-full h-10 bg-default-200 rounded-xl flex items-center justify-center gap-2">
                                <SlSizeFullscreen className="w-6 h-6" />
                                <span className="text-tiny">{size} sqm</span>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
