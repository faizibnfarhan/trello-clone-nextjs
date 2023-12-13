import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react';



const Navbar = () => {

    return (
        
    <div className="fixed top-0 w-full justify-center bg-white h-14 px-4 border-b shadow-sm flex items-center">
        <div className="md:max-w-screen-2xl flex items-center w-full  md:px-30 lg:px-40 sm:px-10">
            {/** Logo */}
            <div className="flex cursor-pointer">
                <Image
                    src="/trello-logo.png"
                    width={130}
                    height={130}
                    alt="Picture of the author"
                />
            </div>
            {/** Menu */}
            <div className="ml-8">
                <ul className="md:flex lg:flex md:space-x-12 lg:space-x-12 hidden space-x-4">
                    <li className="hover:text-blue-500">
                        <Link href={""}>Features</Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link href={""}>Solutions</Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link href={""}>Plans</Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link href={""}>Pricing</Link>
                    </li>
                </ul>
            </div>
             {/** Button */}

            <div className="ml-auto space-x-8 hidden md:flex lg:flex items-center">
                <Link href={'/sign-in'} className="hover:text-blue-500 font-medium">
                    <p>
                        Log In
                    </p>
                </Link>
                <Link href={"/sign-up"} className="p-4 text-white bg-gradient-to-r cursor-pointer from-blue-500 to-blue-700">
                    <button className="font-medium "> Start Your Free Trial</button>
                </Link>
            
            </div>

            {/** Hamburger Menu */}
            <div className="mx-4 ml-auto block md:hidden lg:hidden sm:flex sm:block">
                <Link href={''}>
                    <Menu size={30}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar