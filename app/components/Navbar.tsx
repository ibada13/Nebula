import { GiSaberToothedCatHead } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { socialmedias } from "./data/socialmediadata";
import Link from "next/link";
export default function Navbar() { 
    return (
        <div className="bg-black/50 z-50 sticky   backdrop-blur-md w-full top-0 left-0 self-start  flex justify-between items-center p-4 ">
            <GiSaberToothedCatHead size={30}/>
            <div className="flex justify-around gap-x-2">
                {socialmedias.map((socialmedia, index) => (
                    <Link key={`socialmedia-${index}`} href={socialmedia.link} > <socialmedia.icon size={20} /></Link>
                ))}
            </div>
            <HiMenu/>
        </div>
    );
}