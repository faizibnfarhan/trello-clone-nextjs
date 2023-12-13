import Image from 'next/image';
import React from 'react'

const ClerkLayout = ({children} : {
    children: React.ReactNode;
}) => {
  return (
    <div className='block md:flex lg:flex ml-10 space-y-12 md:ml-0 lg:ml-0 md:space-y-0 lg:space-y-0 items-center justify-center mt-24 md:mt-40 mlg:mt-40'>
        <div className="">
            <Image 
                    className='md:mr-20 lg:mr-20 mr-0 ml-0 md:mb-0 lg:mb-0'
                    src={"/trello-logo.png"}
                    height={200}
                    width={200} alt={'Trello Clone Logo '}
            />
            <p className='text-gray-500 text-sm'> This clone app is created just for portfolio <br/> purpose using <strong>Next JS</strong> by <strong>Muhammad Faiz Khan</strong>. <br/>Not for the commercial use. </p>
        </div>
        {children}
    </div>
  )
}

export default ClerkLayout