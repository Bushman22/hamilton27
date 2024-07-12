import React from 'react'
import { title, subtitle } from '@/components/primitives'
import { Button, Link, Card, CardBody } from '@nextui-org/react'
import HomeSlider from '@/components/HomeSlider'
import { IoIosStar } from "react-icons/io";
import { IoIosPricetag } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import HomeRoomsSlider from '@/components/HomeRoomsSlider'
import Reviews from '@/components/Reviews'

function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div className='flex flex-col gap-3'>
          <h1 className={title()}>
            Sandton&apos;s Best <br /> Guesthouse
          </h1>
          <h2 className={subtitle()}>
            Tranquil Guesthouse in the Heart of Sandton
          </h2>
          <p className="text-default-500">
            Our young family is proud to offer our property in the heart of Sandton to all discerning business travelers. We love meeting new guests and making them feel comfortable and secure in our home. We value family, nature and building new relationships. We have room to cater for all budgets and various lengths of stay.
          </p>
          <div className='mt-5 flex gap-2'>
            <Button as={Link} href='/accommodation' className='bg-blue-300'>
              Accommodation
            </Button>
            <Button as={Link} href='/contact' className='bg-blue-300'>
              Enquire
            </Button>
          </div>
        </div>
        <div>
          <HomeSlider />
        </div>
      </div>

      <div className='flex justify-center mt-20 text-center '>
        <div className='max-w-5xl'>
          <h1 className='text-4xl font-semibold'>Why Choose Us?</h1>
          <p className='mt-5'>
            Our rooms are luxurious with comfortable high quality beds and Egyptian cotton sheets, but at a price that won&apos;t break the bank. We strive to provide a 5 star service but at an affordable price. We are always available to assist with any query or request and our guests can rely on us to make their stay comfortable.
          </p>
        </div>
      </div>

      <div className='flex justify-center md:pb-5'>
        <div className='grid md:grid-cols-3  grid-cols-1 gap-5 mt-5'>
          <Card className='h-20 w-full flex items-center justify-center'>
            <div className='flex items-center gap-5'>
              <IoIosPricetag className='w-10 h-10' />
              <h1>Affordable</h1>
            </div>
          </Card>
          <Card className='h-20 w-full flex px-10'>
            <CardBody>
              <div className='flex justify-center mt-2 gap-2'>
                <IoIosStar className='w-10 h-10 text-yellow-500' />
                <IoIosStar className='w-10 h-10 text-yellow-500' />
                <IoIosStar className='w-10 h-10 text-yellow-500' />
                <IoIosStar className='w-10 h-10 text-yellow-500' />
                <IoIosStar className='w-10 h-10 text-yellow-500' />
              </div>
            </CardBody>
          </Card>
          <Card className='h-20 w-full flex items-center justify-center'>
            <div className='flex items-center gap-5'>
              <IoBed className='w-10 h-10' />
              <h1>Quality</h1>
            </div>
          </Card>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 items-center gap-10 pb-10'>
        <HomeRoomsSlider />
        <div className='flex flex-col gap-5 max-md:pt-20'>
          <h1 className='text-4xl font-semibold'>Our Stunning Rooms</h1>
          <p>
            We have furnished our rooms with the discerning business traveler in mind sourcing and supporting locally manufactured furnishings. The furnishings are minimalist with no fuss and clutter but with everything a business traveler requires for a short stay in Sandton.
          </p>
          <p>
            We offer rooms that suit every budget which are suitable for short or longer stays. All rooms have air-conditioning, extra pillows and blankets and a small kitchenette.
          </p>
          <div>
            <Button as={Link} href='/accommodation' className='bg-blue-300'>
              View Accommodation
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Reviews />
      </div>
    </div>
  )
}

export default Home