import type { ProjectCardInterface } from "../types";
import { FaCircle } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import {RenderTechnologies} from "./TechIcons";
const ProjectCard = ({
    initial_date,
    end_date,
    name,
    type,
    description,
    technologies,
    github_link
}: ProjectCardInterface) => {
    return (
        <div className='flex flex-col justify-start min-w-[200px] max-w-[700px] md:min-w-[550px] min-h-[450px] bg-slate-200 pt-1 pb-1 pl-3 pr-2 md:mt-0 mt-6 border-2 border-slate-400 rounded-2xl md:mb-0 mb-6'>
            <h3 className='text-center text-balance mt-5'>{name}</h3>
            <p className="mt-3 font-bold text-slate-600 text-center text-balance">{initial_date}</p>
            <div className="flex flex-row justify-center items-center gap-2">
                <RxBorderDotted className="text-2xl text-slate-600" />
                <FaCircle className="text-slate-600 text-md" />
                <RxBorderDotted className="text-2xl text-slate-600" />
            </div>
            <p className="mb-3 font-bold text-slate-600 text-center text-balance">{end_date}</p>
            <div className="flex flex-row items-center justify-between gap-2 pl-2 pr-2 pb-2">
                <p className="text-sm text-slate-600 font-semibold">{type}</p>
                {github_link ?
                    (<a
                        href={github_link}
                        className="text-2xl text-slate-600 flex flex-row items-center justify-center gap-2">
                        <FaGithub /> <span className="text-sm">Link</span>
                    </a>
                    )
                    : (<></>)}
            </div>
            <p className="pl-2 pr-2 pb-3 text-left text-balance">
                {description}
            </p>
            <RenderTechnologies technologies={technologies}/>

        </div>
    );

}

export default ProjectCard;