import Image from "next/image"


const Footer = () => {
  return (
    <div className="bg-white space-y-3 pb-3 pt-4 flex flex-col items-center md:px-30 lg:px-40 sm:px-10 flex w-full justify-between items-center bottom-0 fixed">
        <div className="">
        <Image
                    src="/trello-logo.png"
                    width={130}
                    height={130}
                    alt="Picture of the author"
        />        
        </div>
        <div className="">
            <p className="text-sm text-gray-500">All Rights Reserved © Trello Clone 2023.</p>
        </div>
    </div>
  )
}

export default Footer