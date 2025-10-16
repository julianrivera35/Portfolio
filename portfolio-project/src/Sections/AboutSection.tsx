import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <div className='bg-blue-100 w-full min-h-screen h-auto flex flex-col lg:flex-row items-start justify-evenly pt-10 pb-10'>
            <div className='flex-1'></div>
            <div className='flex flex-col justify-center flex-1 gap-2 mr-10 ml-10'>
                <h1 className='text-center mb-10 underline underline-offset-auto'>About Me</h1>
                <h2 className='pb-8 underline underline-offset-auto'>Creative Developer and AI passionate</h2>
                <p className='text-balance pb-2'>
                    I am a passionate software engineer with 1 year of proffesional experience and a growing expertise
                    in FullStack development, Big Data, Machine Lerning and generative AI. I love creating innovative solutions
                    that leverage the power of technology to solve real-world problems. My journey in the tech world has been driven
                    by a relentless curiosity and a desire to push the boundaries of what is possible with code and to create value for
                    businesses.
                </p>
                <p className='text-balance pb-2'>
                    Currently I am searching for new opportunities to apply my skills and contribute to exciting projects in the fields of software development,
                    Big Data and AI. I am eager to collaborate with like-minded professionals and organizations that share my passion for innovation and technology.
                    Let's connect and explore how we can create impactful solutions together!
                </p>
            </div>
        </div>
    )
}

export default AboutSection;