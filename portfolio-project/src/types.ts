export interface ExperienceCardInterface {
    initial_date: string,
    end_date: string,
    position: string,
    company: string,
    description: string,
    location: string,
    technologies: string[] | null
}

export interface ProjectCardInterface {
    initial_date: string,
    end_date: string,
    name: string,
    type: string,
    description:string,
    technologies: string[],
    github_link: string | null
}