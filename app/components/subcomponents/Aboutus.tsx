import Link from "next/link";
import { links , policylinks } from "./data/linksdata";
export default function AboutUs() { 
    return (
        <div className="flex gap-x-18 items-start text-lg font-semibold text-gray-200 uppercase tracking-widest border-t-2 border-t-gray-300 border-b-2 border-b-gray-300 py-15 " >
            <div className="flex flex-col ">
                {links.map((link , index)=>(
                    <Link key={`link-${index}`} href={link.link}>{link.title}</Link>
                ))}
            </div>
            <div className="flex flex-col  items-start   ">
                {policylinks.map((link , index)=>(
                    <Link key={`policylink-${index}`} href={link.link}>{link.title}</Link>
                ))}
            </div>
            <div></div>
        </div>
    );
}