import type { ExperienceCardInterface } from "../types";
import { FaCircle } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import { RenderTechnologies } from './TechIcons';

const ExperienceCard = ({
    initial_date,
    end_date,
    position,
    company,
    description,
    location,
    technologies
}: ExperienceCardInterface) => {



    return (
        <div className="bg-slate-200 border-2 border-slate-600 rounded-3xl flex min-h-[50vh] xl:flex-row flex-col justify-evenly items-stretch xl:gap-5 min-w-[70vw]">
            <div className="flex flex-col justify-center gap-3 items-center w-full py-8">
                <span className="font-bold text-slate-600 text-center text-balance">
                    {initial_date}
                </span>
                <div className="flex xl:flex-col flex-row justify-center items-center gap-1">
                    <RxBorderDotted className="xl:rotate-90 text-2xl text-slate-600" />
                    <FaCircle className="text-slate-600 text-md" />
                    <RxBorderDotted className="xl:rotate-90 text-2xl text-slate-600" />
                    <FaCircle className="text-slate-600 text-md" />
                    <RxBorderDotted className="xl:rotate-90 text-2xl text-slate-600" />
                </div>

                <span className="font-bold text-slate-600 text-center text-balance">
                    {end_date}
                </span>
            </div>
            <div className="flex flex-col justify-center gap-4 px-4">
                <h2 className="underline underline-offset-4 py-4">
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
                {technologies ? (<RenderTechnologies technologies={technologies} />) : null}

            </div>
        </div>

    );
}

export default ExperienceCard;