import { RenderAllTechnologies } from "../Components/TechIcons";
import { useTranslation } from 'react-i18next';
const SkillSection = () => {
    const t = useTranslation("global")[0];
    return (

        <div id="skills" className="section-container primary h-auto flex-col items-center gap-5">
            <h1>{t("skills.title")}</h1>
            <RenderAllTechnologies />
        </div>
    )
}

export default SkillSection;