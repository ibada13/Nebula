import Link from "next/link";
import { socialmedias } from "../data/socialmediadata";


export default function Media() {
    return (
        <div className="sm:flex hidden justify-around gap-x-4">
            {socialmedias.map((socialmedia, index) => (
                <Link key={`socialmedia-${index}`} href={socialmedia.link} > <socialmedia.icon size={20} /></Link>
            ))}
        </div>
    )
 }