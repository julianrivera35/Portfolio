import type { CertificateCardInterface } from "../types";

const CertificateCard = ({
    name,
    description,
    institution,
    link,
    date
}: CertificateCardInterface) => {
    return (
        <div className="flex flex-col bg-slate-200 border-2 border-slate-600 rounded-3xl min-h-[40vh] justify-center items-stretch max-w-[30vw] px-6 gap-2">
            <div className="flex flex-col gap-1">
                <h2>{name}</h2>
                <h3>{institution}</h3>
                <span className="text-slate-600 font-bold">{date}</span>
            </div>
            <a href={link} className="underline">{description}</a>
        </div>

    )
}

export default CertificateCard;