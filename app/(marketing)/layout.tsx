import { ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
  return (
    <div className="h-screen bg-slate-100">
    {/* Navbar */}
    <Navbar/>
    <main className="pt-40 pb-20 bg-slate-100">
      {children}
    </main>
    {/* Footer */}
    <Footer/>
    </div>
  )
}

export default MarketingLayout