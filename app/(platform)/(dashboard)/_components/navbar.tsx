import { OrganizationSwitcher } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
        <div className="flex items-center gap-x-4">
            <div className="hidden md:flex lg:flex">
                <Image
                src={'/trello-logo.png'}
                height={120}
                width={120}
                alt='Logo'
                />
            </div>
            <button className='rounded-sm px-3 py-1  text-sm font-medium hidden md:block bg-blue-800 text-white'>
                <Link href="/select-org">
                    Create
                </Link>
            </button>
            <button className='rounded-sm block md:hidden bg-blue-800 text-white'>
                <Plus/>
            </button>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
            <OrganizationSwitcher
                hidePersonal
                afterCreateOrganizationUrl='/organization/:id'
                afterLeaveOrganizationUrl='/select-org'
                afterSelectOrganizationUrl='/organization/:id'
            
            />
            <UserButton
                afterSignOutUrl='/'
            />

        </div>
    </div>
  )
}

export default Navbar