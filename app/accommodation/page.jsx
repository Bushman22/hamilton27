import React from 'react'
import RoomCard from '@/components/RoomCard'
import { title, subtitle } from '@/components/primitives'
import { room } from '@/lib/data'


function Accommodation() {
    return (
        <div>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className={title()}>See what we have to offer</h1>
                    <h2 className={subtitle()}>View our available rooms</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-5 mt-14'>
                {room.map((item) => (
                    <RoomCard
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        price={item.price}
                        price1={item.price1}
                        price2={item.price2}
                        image={item.images[0].href}
                        rating={item.rating}
                        beds={item.beds}
                        guest={item.guest}
                        size={item.size}
                    />
                ))}

            </div>
        </div>
    )
}

export default Accommodation