import { IconType } from "react-icons";
import { FaTwitch, FaTiktok, FaX, FaInstagram, FaFacebook, FaDiscord, FaQuestion } from "react-icons/fa6";

interface SocialMedia {
    icon: IconType;
    link: string;
}

export const socialmedias: SocialMedia[] = [
    { icon: FaTwitch, link: "" },
    { icon: FaTiktok, link: "" },
    { icon: FaX, link: "" },
    { icon: FaInstagram, link: "" },
    { icon: FaFacebook, link: "" },
    { icon: FaDiscord, link: "" },
    { icon: FaQuestion, link: "" } 
];
