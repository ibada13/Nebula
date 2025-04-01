import { GiSaberToothedCatHead } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import Media from "./subcomponents/Media";
import { navlinks } from "./subcomponents/data/linksdata";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-black/50 z-50 sticky top-0 left-0 w-full font-light backdrop-blur-md flex justify-between items-center p-4">
                <GiSaberToothedCatHead size={30} />
                <Media />
                <HiMenu size={30} className="cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>

            <div className={`fixed top-0 right-0 h-full w-100 bg-gradient-to-r from-black/50 via-black/90 to-black/100 text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-6 flex flex-col z-50`}>                
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-x-2 ">
                        
                <GiSaberToothedCatHead size={40} />

                    <h1 className="text-3xl font-bold uppercase">MonsterCat</h1>
                    </div>
                    <HiX size={30} className="cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-4">
                    {navlinks.map((navlink, index) => (
                        
                        <Link key={`navlink-${index}`} href={navlink.link} className="flex items-center gap-2 text-lg hover:text-gray-400 transition">{ navlink.title}</Link>
                    )) }
                </div>
                
                <div className="mt-6 flex flex-col gap-2 w-2/3 gap-y-8 py-4">
                    <Media />
                    <div className="flex text-sm gap-x-4 text-white items-center font-bold uppercase tracking-wide">
                        <Link href={""} className="  px-6 py-2  text-white hover:text-black hover:bg-red-100 transition-colors duration-300 border-2 uppercase ">Sign In</Link>
                        <p>or</p>
                        <Link href={""}>sing up</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
