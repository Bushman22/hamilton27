import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Spacer, Card, CardBody, Image, CardFooter, DropdownMenu, DropdownItem, DropdownTrigger } from '@nextui-org/react';
import { room } from '@/lib/data';
import { IoMdPerson } from 'react-icons/io';

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Update formData when selectedRoomId changes
  useEffect(() => {
    if (selectedRoomId === null) {
      setSelectedRoom(null);
      setIsValid(false);
      setError(false);
      setFormData(prev => ({ ...prev, room: '' })); // Clear room in formData
      return;
    }

    const roomFound = room.find(room => room.id === parseInt(selectedRoomId));
    if (roomFound) {
      setSelectedRoom(roomFound);
      setIsValid(true);
      setError(false);
      setFormData(prev => ({ ...prev, room: roomFound.title })); // Update room in formData
    } else {
      setSelectedRoom(null);
      setIsValid(false);
      setError(true);
      setFormData(prev => ({ ...prev, room: '' }));
    }
  }, [selectedRoomId, setFormData]);

  // Handle room selection change
  const handleRoomChange = (value) => {
    setSelectedRoomId(value);
  };

  // Handle click on Next button
  const handleNextClick = () => {
    if (isValid) {
      nextStep();
    } else {
      setError(true);
    }
  };

  return (
    <Card className='h-[400px]'>
      <CardBody>
        <div className='p-3'>
          <h3 className="">Room Selection</h3>
          <Spacer y={1} />
          <Dropdown>
            <DropdownTrigger>
              <Button flat>Select a Room</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Select a Room"
              selectionMode="single"
              onAction={(value) => handleRoomChange(value)}
              selectedKeys={[selectedRoomId]}
            >
              {room.map(room => (
                <DropdownItem key={room.id} value={room.id.toString()}>
                  {room.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {error && (
            <h1 className='text-red-500 mt-5'>
              Please select a Room.
            </h1>
          )}
          {selectedRoom && (
            <div className='mt-5 grid grid-cols-2 gap-5'>
              <div>
                <Image className='h-[200px] max-h-[200px] w-full object-cover' removeWrapper src={selectedRoom.images[0]?.href} alt="Selected Room" />
              </div>
              <div className=''>
                <h1 className='font-semibold'>You have selected: </h1>
                <h2>{selectedRoom.title}</h2>
                <div className='flex items-center gap-5 mt-5'>
                  {selectedRoom.price1 && (
                    <div className="flex justify-start my-1 ">
                      <p className="text-default-500 py-1 flex">
                        <IoMdPerson className="w-5 h-5 mr-2" />
                        {selectedRoom.price1}
                      </p>
                    </div>
                  )}
                  {selectedRoom.price2 && (
                    <div className="flex justify-start my-1">
                      <p className="text-default-500 py-1 flex">
                        <IoMdPerson className="w-5 h-5" />
                        <IoMdPerson className="w-5 h-5 mr-2" />
                        {selectedRoom.price2}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </CardBody>
      <CardFooter className='flex justify-end'>
        <div className="flex justify-end gap-2">
          <Button flat onPress={prevStep} className='mr-[10px]'>
            Back
          </Button>
          <Button className="text-white bg-blue-300" onPress={handleNextClick}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Step2;
