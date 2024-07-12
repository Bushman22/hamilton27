// Completion.js
import React from 'react';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';

const Completion = ({ startOver }) => (

    <Card className='h-[350px]'>
        <CardBody className='flex items-center justify-center h-full flex-col text-center'>
            <div className='p-3'>
                <h3 className='text-3xl'>Form completed successfully!</h3>
                <p className='text-default-500'>We will get back to you as soon as we can</p>
            </div>
        </CardBody>
        <CardFooter className='flex justify-center'>
            <div className='flex justify-center'>
                <Button className='bg-blue-300' onPress={startOver}>Start Over</Button>
            </div>
        </CardFooter>

    </Card>

);

export default Completion;
