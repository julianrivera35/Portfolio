import type { ExperienceCardInterface } from "../types";
import { FaCircle, FaReact, FaPython } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { DiDjango } from "react-icons/di";
import { SiAwslambda, SiTypescript, SiServerless } from "react-icons/si";

import { FaAws } from "react-icons/fa";
import type { JSX } from "react";
const ExperienceCard = ({
    initial_date,
    end_date,
    position,
    company,
    description,
    location,
    technologies
}: ExperienceCardInterface) => {

    const technologyIcons: { [key: string]: JSX.Element } = {
        aws: <div className="tech-container max-w-fit py-2"> <FaAws className="text-5xl" /> <span className="tech-leyend text-xs">Amazon Web Services</span></div>,
        postgresql: <div className="tech-container max-w-fit py-2"> <BiLogoPostgresql className="text-5xl text-cyan-800"/> <span className="tech-leyend text-xs">PostgreSQL</span></div>,
        node: <div className="tech-container max-w-fit"> <LiaNode className="text-6xl text-lime-600"/> <span className="tech-leyend text-xs">Node.js</span></div>,
        react: <div className="tech-container max-w-fit py-2"> <FaReact className="text-5xl text-cyan-600"/> <span className="tech-leyend text-xs">React</span></div>,
        django: <div className="tech-container max-w-fit"> <DiDjango className="text-6xl" /> <span className="tech-leyend text-xs">Django REST Framework</span></div>,
        awslambda: <div className="tech-container max-w-fit py-2.5"> <SiAwslambda className="text-4xl text-orange-500"/> <span className="tech-leyend text-xs">AWS Lambda</span></div>,
        python: <div className="tech-container max-w-fit py-2"> <FaPython className="text-5xl" /> <span className="tech-leyend text-xs">Python</span></div>,
        typescript: <div className="tech-container max-w-fit py-3"> <SiTypescript className="text-4xl text-sky-700"/> <span className="tech-leyend text-xs">TypeScript</span></div>,
        serverless: <div className="tech-container max-w-fit py-2"> <SiServerless className="text-4xl"/> <span className="tech-leyend text-xs">Serverless Framework</span></div>
    }

    return (
        <div className="bg-slate-300 border-2 border-slate-600 rounded-3xl flex min-h-[50vh] xl:flex-row flex-col justify-evenly items-stretch xl:gap-5 min-w-[70vw]">
            <div className="flex flex-col justify-center gap-3 items-center w-full py-8">
                <span className="font-bold text-slate-600 text-center text-balance">
                    {initial_date}
                </span>
                <div className="flex xl:flex-col flex-row justify-center items-center gap-1">
                    <RxBorderDotted className="xl:rotate-90 text-2xl" />
                    <FaCircle className="text-slate-600 text-md" />
                    <RxBorderDotted className="xl:rotate-90 text-2xl" />
                    <FaCircle className="text-slate-600 text-md" />
                    <RxBorderDotted className="xl:rotate-90 text-2xl" />
                </div>

                <span className="font-bold text-slate-600 text-center text-balance">
                    {end_date}
                </span>
            </div>
            <div className="flex flex-col justify-center gap-4 px-4">
                <h2 className="underline underline-offset-4">
                    {position}
                </h2>
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h3>
                        {company}
                    </h3>
                    <span className="font-semibold text-slate-600">
                        {location}
                    </span>
                </div>
                <span>
                    {description}
                </span>
                <div className="flex flex-row gap-8 items-start justify-center flex-wrap xl:flex-nowrap p-5">
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
            </div>
        </div>

    );
}

export default ExperienceCard;