const ExperienceSection = () => {
    return (
        <div className="section-container primary h-auto flex-col items-center">
            <h1>Experience</h1>
            <ul className='list-disc list-outside md:max-w-3xl max-w-2xs space-y-4 pt-10'>
                <li>
                    <div>
                        <p>2025</p>
                        <h3>Junior Developer</h3>
                        <p>Quality Software SAS, Bogotá</p>
                        <p className='text-balance text-left'>FullStack developer and founding engineer for a new company product. Designed and implemented
                            solutions using React, TypeScript, Django REST, PostgreSQL, and AWS. Gained experience in
                            software architecture, Git flows, and project organization, with ownership of end-to-end development
                            and deployment workflows.
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>2023</p>
                        <h3>Software Engineering Intern</h3>
                        <p>BTG Pactual, Bogotá</p>
                        <p>Developed and deployed a data-driven full-stack web platform integrating AWS Lambdas,
                            serverless microservices, and PostgreSQL. Designed and optimized data pipelines for information
                            retrieval and transformation, ensuring secure, scalable APIs. Strengthened expertise in cloud-
                            native engineering and enterprise data management.</p>
                    </div>
                </li>
             
            </ul>
        </div>
    )
}

export default ExperienceSection;