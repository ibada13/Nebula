import { IconType } from "react-icons";
import { FaBandcamp, FaSoundcloud, FaApple, FaYoutube, FaSpotify } from "react-icons/fa6";

interface StreamMedia { 
    icon: IconType; 
    link: string; 
}

export const streamMedias: StreamMedia[] = [
    { icon: FaBandcamp, link: "" },
    { icon: FaSoundcloud, link: "" },
    { icon: FaApple, link: "" },
    { icon: FaYoutube, link: "" },
    { icon: FaSpotify, link: "" },
];
