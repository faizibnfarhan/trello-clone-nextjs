import Navbar from "./_components/navbar"

const Dashlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full">
        <Navbar/>
        {children}

    </div>
  )
}

export default Dashlayout