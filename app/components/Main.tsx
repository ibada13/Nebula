import Image from "next/image";
import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
export default function Main() { 
    return (
        <div className=" left-0 mt-25  w-full flex gap-x-15  items-center p-6 ">
            <div className="flex  ml-4 h-full w-2/5  gap-x-2 items-center">
            <p 
    className="flex gap-x-2 text-lg font-extralight whitespace-nowrap h-[400px] leading-none items-center "
    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
>
    <span className="inline text-red-600 ">Nebula</span> 
    <span className="inline scale-y-[400%] mx-2">-</span> 
    Released May 22, 2020 
</p>

                            <div className="h-[400px] aspect-square relative ">
                    <Image 
                        src={'/background.jpg'} 
                        alt="album pic" 
                        fill 
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="     p-4 w-1/2  h-full flex flex-col gap-y-16 justify-center">
                <div className="flex flex-col justify-around gap-y-2">
                    <p
                          style={{
                            WebkitTextStroke: "1px white",
                            color: 'black',
                          }}
                        
                        className="text-3xl tracking-widest uppercase">
                        LeveL Stars
                    </p>
                    <p className="text-2xl uppercase font-bold">Astronaut</p>
            </div>
                <div className="flex items-center gap-x-4">
                    <Link href="" className="bg-red-700 text-white py-4 px-8 hover:bg-white hover:text-black text-lg transition-colors duration-300 items-center text-nowrap flex justify-center gap-x-2">
                        <FaCirclePlay />
                        Listen Now
                    </Link>
                    <Link href="" className="bg-black border text-white text-lg hover:bg-white hover:text-black transition-colors duration-300 py-4   px-8  flex items-center gap-x-2 text-center">
                        <FaShareAlt />
                        <p>
                            Share
                        </p>
                    </Link>
            </div>
            </div>
        </div>
    );
}
