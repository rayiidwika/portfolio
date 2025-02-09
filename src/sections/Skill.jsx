import { DiCss3, DiHtml5, DiJavascript, DiLaravel, DiMysql, DiPhp } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiLaravel, SiMysql, SiTailwindcss } from "react-icons/si";

export default function Skill() {
    return (
        <section id="Skill">
            <div className="min-h-screen max-w-screen-lg m-auto flex flex-col justify-center">

                <h1 className="text-center text-4xl font-bold mb-8" >Skill</h1>
                <div className="flex flex-wrap gap-2 justify-center">
                    
                    <div className="bg-gray-600 p-2 border border-gray-400"> <DiHtml5 className="text-5xl m-auto mb-2 " />
                        <p className="text-center">Html</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <DiCss3 className="text-5xl m-auto mb-2" />
                        <p className="text-center">Css</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400">
                        <SiJavascript className="text-5xl m-auto mb-2" />
                        <p className="text-center">Javascript</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <DiPhp className="text-5xl m-auto mb-2" />
                        <p className="text-center">Php</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <SiMysql className="text-5xl m-auto mb-2" />
                        <p className="text-center">Mysql</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <SiLaravel className="text-5xl m-auto mb-2" />
                        <p className="text-center">Laravel</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <SiBootstrap className="text-5xl m-auto mb-2" />
                        <p className="text-center">Bootstrap</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <SiTailwindcss className="text-5xl m-auto mb-2" />
                        <p className="text-center">Tailwind</p>
                    </div>
                    <div className="bg-gray-600 p-2 border border-gray-400"> <FaReact className="text-5xl m-auto mb-2" />
                        <p className="text-center">React</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}