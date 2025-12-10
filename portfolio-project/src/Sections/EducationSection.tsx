import { useTranslation } from "react-i18next";
import ExperienceCard from '../Components/ExperienceCard';

const EducationSenction = () => {
    const t = useTranslation("global")[0];
    return (
        <div className="section-container secondary h-auto flex-col items-center gap-5">
            <h1>{t("education.title")}</h1>
            <ExperienceCard 
                initial_date={t("education.college.init_date")}
                end_date={t("education.college.end_date")}
                position={t("education.college.degree")}
                company={t("education.college.institution")}
                description={t("education.college.description")}
                location={t("education.college.location")}
                technologies={null}
            />
        </div>
    )
}

export default EducationSenction;