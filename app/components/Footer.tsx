import AboutUs from "./subcomponents/Aboutus";
import { medias } from "./data/socialmediadata";
import Link from "next/link";
export default function Footer() { 
    
    return (
        <div className="flex flex-col gap-y-12   w-[95%] p-6 mt-8 shadow-2xl">
                <AboutUs />
            <div className="flex justify-between text-sm text-gray-200 font-light items-center">
                    <p className="tracking-widest">1945 - 2025 © Monstercat, All Rights Reserved</p>
                <div className="flex gap-x-4">
                    {medias.map((media, index) => (
                        <Link key={`media-${index}`} href={ media.link}>
                            <media.icon />
                        </Link>
                    ))}
                    </div>
            </div>
            <div className="flex flex-col gap-y-4 text-xs font-light text-center mb-20">
                <p className="text-center">We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse. Placeat, cum!</p>
                <p>We acknowledge the unceded and ancestral territories Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, inventore! .</p>
                </div>
        </div>
    );
}