import { ReactNode } from "react";
import { Medal } from 'lucide-react';
import button from 'react'
import Link from "next/link";


const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col"> 
      <div className="flex items-center justify-center flex-col"> 
          <div className="flex mb-4 items-center font-bold border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
            <Medal className="h-6 w-6 mr-2"/>
            No.1 Task Management Platform
          </div>
          <h1 className="text-3xl md:text-6xl font-bold capitalize text-center text-neutral-800 mb-6">
            Trello Clone helps team progress
          </h1>
          <div className="text-xl font-bold bold md:text-4xl lowercase text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            Progress Further.
          </div>
          <div className="text-sm md:text-lg text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
            Let's collaborate, manage projects and reach new productivity peaks. From high rises to the home office, the  way your team work is unique and efficient accomplish it all with our Trello Clone App made by <strong> Faiz Khan</strong>.
          </div>
        <button className="p-3 pl-6 pr-6 shadow-sm text-sm bg-black text-white rounded-md m-4">
          <Link href={"/sign-up"}>
            Start 7 Days Free Trial
          </Link>
        </button>
      </div>
    </div>
  )
}

export default MarketingPage