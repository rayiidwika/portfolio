import { BsTelephone } from "react-icons/bs";
import { SiGithub, SiGmail, SiTiktok } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";

export default function Contact() {
    return (
    <section id="Contact">
        <div className="min-h-screen max-w-screen-lg m-auto flex flex-col justify-center ">

            <h1 className="text-center text-4xl font-bold mb-8" >Contact</h1>
            <div className="flex gap-5 justify-center flex-wrap">
                <a className="flex items-center text-xl gap-1 hover:underline" href="https://www.instagram.com/rayiidwkaa/"><SlSocialInstagram/> Instagram</a>
                <a className="flex items-center text-xl gap-1 hover:underline" href="https://www.tiktok.com/@bbgrayy"><SiTiktok/> Tiktok</a>
                <a className="flex items-center text-xl gap-1 hover:underline" href="https://github.com/rayiidwika"><SiGithub/> Github</a>
                <p className="flex items-center text-xl gap-1 hover:underline cursor-pointer"><SiGmail/> rayinugraha97@gmail.com</p>
                <p className="flex items-center text-xl gap-1 hover:underline cursor-pointer"><BsTelephone/> 087835***6*7</p>
                </div>                  
        </div>
    </section>
    )
}