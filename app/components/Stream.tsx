import Link from "next/link";
import { FaHeadphones } from "react-icons/fa";
import { streamMedias } from "./data/steamdata";
export default function Stream() { 
    return (
        <div className="  w-[95%] mt-15 p-6 h-1/3 flex flex-col gap-y-8">
            <h1 className="text-4xl tracking-widest uppercase font-bold">
                Stream it your way.
            </h1>
            <div className="w-1/2 flex">
                <Link className="px-6 py-4 flex items-center gap-x-2 text-lg border" href={""}>
                <FaHeadphones />
                    <p className="uppercase font-semibold text-sm  ">Player</p>
                </Link>
                {streamMedias.map((streammedia, index) => (
                    <Link key={`streamedia-${index}`} href={streammedia.link} className="border p-6">
                        <streammedia.icon size={25}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}