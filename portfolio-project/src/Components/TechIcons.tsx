import { BiLogoPostgresql } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { DiDjango } from "react-icons/di";
import { SiAwslambda, SiTypescript, SiServerless, SiGoland, 
    SiPytorch, SiStreamlit, SiPandas, SiNumpy, SiHuggingface, SiKotlin, SiSwift, 
    SiFirebase, SiScikitlearn, SiGooglecloud, SiGooglecolab } from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa6";
import { FaAws, FaCss3Alt  } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import type { JSX } from "react";
import { TbTransformPointTopLeft } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

const technologyIcons: { [key: string]: JSX.Element } = {
    aws: <div className="tech-container max-w-fit py-2"> <FaAws className="text-5xl" /> <span className="tech-leyend text-xs">Amazon Web Services</span></div>,
    postgresql: <div className="tech-container max-w-fit py-2"> <BiLogoPostgresql className="text-5xl text-cyan-800" /> <span className="tech-leyend text-xs">PostgreSQL</span></div>,
    node: <div className="tech-container max-w-fit"> <LiaNode className="text-6xl text-lime-600" /> <span className="tech-leyend text-xs">Node.js</span></div>,
    react: <div className="tech-container max-w-fit py-2"> <FaReact className="text-5xl text-cyan-600" /> <span className="tech-leyend text-xs">React</span></div>,
    django: <div className="tech-container max-w-fit"> <DiDjango className="text-6xl" /> <span className="tech-leyend text-xs">Django REST Framework</span></div>,
    awslambda: <div className="tech-container max-w-fit py-2.5"> <SiAwslambda className="text-4xl text-orange-500" /> <span className="tech-leyend text-xs">AWS Lambda</span></div>,
    python: <div className="tech-container max-w-fit py-2"> <FaPython className="text-5xl" /> <span className="tech-leyend text-xs">Python</span></div>,
    typescript: <div className="tech-container max-w-fit py-3"> <SiTypescript className="text-4xl text-sky-700" /> <span className="tech-leyend text-xs">TypeScript</span></div>,
    serverless: <div className="tech-container max-w-fit py-2"> <SiServerless className="text-4xl" /> <span className="tech-leyend text-xs">Serverless Framework</span></div>,
    vue: <div className="tech-container max-w-fit py-3"> <IoLogoVue className="text-4xl text-green-400" /> <span className="tech-leyend text-xs">Vue.js</span></div>,
    go: <div className="tech-container max-w-fit py-3"> <SiGoland  className="text-4xl text-sky-500" /> <span className="tech-leyend text-xs">Go</span></div>,
    css: <div className="tech-container max-w-fit py-2"> <FaCss3Alt  className="text-5xl text-blue-500" /> <span className="tech-leyend text-xs">CSS</span></div>,
    transformers: <div className="tech-container max-w-fit py-2"> <TbTransformPointTopLeft className="text-5xl text-slate-800" /> <span className="tech-leyend text-xs">Python Transformers</span></div>,
    torch: <div className="tech-container max-w-fit py-2"> <SiPytorch className="text-4xl text-orange-600" /> <span className="tech-leyend text-xs">PyTorch</span></div>,
    streamlit: <div className="tech-container max-w-fit py-2"> <SiStreamlit className="text-4xl text-red-600" /> <span className="tech-leyend text-xs">Streamlit</span></div>,
    pandas: <div className="tech-container max-w-fit py-2"> <SiPandas className="text-4xl text-red-600" /> <span className="tech-leyend text-xs">Pandas</span></div>,
    numpy: <div className="tech-container max-w-fit py-2"> <SiNumpy className="text-4xl text-blue-500" /> <span className="tech-leyend text-xs">Numpy</span></div>,
    huggingface: <div className="tech-container max-w-fit py-2"> <SiHuggingface className="text-4xl text-yellow-500" /> <span className="tech-leyend text-xs">Hugging Face</span></div>,
    kotlinmultiplatform: <div className="tech-container max-w-fit py-2"> <SiKotlin className="text-4xl text-purple-500" /> <span className="tech-leyend text-xs">Kotlin Multiplatform</span></div>,
    swift: <div className="tech-container max-w-fit py-2"> <SiSwift className="text-4xl text-orange-500" /> <span className="tech-leyend text-xs">Swift</span></div>,
    firebase: <div className="tech-container max-w-fit py-2"> <SiFirebase className="text-4xl text-orange-400" /> <span className="tech-leyend text-xs">Firebase</span></div>,
    scikitlearn: <div className="tech-container max-w-fit py-2"> <SiScikitlearn className="text-5xl text-sky-500" /> <span className="tech-leyend text-xs">Scikit-learn</span></div>,
    gcppipelines: <div className="tech-container max-w-fit py-2"> <SiGooglecloud className="text-4xl text-gray-500" /> <span className="tech-leyend text-xs">Google Cloud Platform Pipelines</span></div>,
    googlecolab: <div className="tech-container max-w-fit py-2"> <SiGooglecolab className="text-4xl text-orange-500" /> <span className="tech-leyend text-xs">Google Colaboratory</span></div>,
    powerbi: <div className="tech-container max-w-fit py-2"> <BsBarChartFill className="text-4xl text-yellow-500" /> <span className="tech-leyend text-xs">Power BI</span></div>,
}

const RenderTechnologies = ({ technologies } :{technologies:string[]}) => {
    return(
        <div className="flex flex-row gap-8 items-start justify-center flex-wrap p-5">
            {
                technologies.map((tech, index) => (
                    <div key={`${tech}-${index}`}>
                        {
                            technologyIcons[tech.toLowerCase()]
                            ||
                            <div className="py-3"><span className="font-bold text-2xl">{tech}</span></div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default RenderTechnologies;