import { useTranslation } from "react-i18next";
import ExperienceCard from '../Components/ExperienceCard';
import type { CertificateCardInterface } from "../types";
import CertificateCard from '../Components/CertificateCard';

const EducationSenction = () => {
    const t = useTranslation("global")[0];
    const certificatesList = t("education.certificates.info", {returnObjects:true}) as CertificateCardInterface[];
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
            <h2 className="py-6 mt-2">{t("education.certificates.title")}</h2>
            <div className="flex flex-row flex-wrap gap-5 items-start justify-center">
            {
                certificatesList.map((item, index) => (
                    <CertificateCard
                        key={index}
                        name={item.name}
                        description={item.description}
                        institution={item.institution}
                        link={item.link}
                        date={item.date}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default EducationSenction;