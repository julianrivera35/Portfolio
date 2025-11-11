import { useTranslation } from "react-i18next";
import ExperienceCard from "../Components/ExperienceCard";
import type { ExperienceCardInterface } from "../types";
const ExperienceSection = () => {
    const t = useTranslation("global")[0];
    const experincesList = t("experience.experiences", {returnObjects:true}) as ExperienceCardInterface[];
    return (
        <div id="experience" className="section-container primary h-auto flex-col items-center gap-5">
            <h1 className="pb-10">{t("experience.title")}</h1>
            {experincesList.map((item, index) => (
                <ExperienceCard 
                key={index}
                initial_date={item.initial_date}
                end_date={item.end_date}
                position={item.position}
                company={item.company}
                description={item.description}
                location={item.location}
                technologies={item.technologies}
            />
            ))}
        </div>
    )
}

export default ExperienceSection;