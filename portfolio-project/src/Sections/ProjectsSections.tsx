import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { useTranslation } from 'react-i18next';
import type { ProjectCardInterface } from '../types';

const ProjectsSections: React.FC = () => {
    const t = useTranslation("global")[0];
    const projects = t("projects.projects", { returnObjects: true }) as ProjectCardInterface[]
    return (
        <div className="section-container secondary flex-col items-center">
            <h1>My Projects</h1>
            <div className='bg-white border-2 border-gray-300/70 rounded-4xl flex-1 md:max-h-[900px] max-h-auto w-[90vw] flex flex-col md:flex-row items-center justify-start overflow-x-auto gap-6 mt-6 mb-6 pl-6 pr-6'>
                {projects.map((element, index)=>(
                    <ProjectCard
                    key={`${element.name}-${index}`}
                    name={element.name}
                    initial_date={element.initial_date}
                    end_date={element.end_date}
                    type={element.type}
                    description={element.description}
                    technologies={element.technologies}
                    github_link={element.github_link}
                />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSections;