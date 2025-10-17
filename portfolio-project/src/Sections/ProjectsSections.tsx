import React from 'react';

const ProjectsSections: React.FC = () => {
    return (
        <div className="bg-gray-400 w-full min-h-screen h-auto flex flex-col items-center justify-evenly pt-20 pb-20">
            <h1>My Projects</h1>
            <div className='bg-red-200 flex-1 md:max-h-[500px] max-h-[800px] w-[90vw] flex flex-col md:flex-row items-center justify-start overflow-x-auto gap-6 mt-6'>
                <div className='min-w-[200px] max-w-[550px] md:min-w-[400px] min-h-[450px] bg-amber-50 pt-1 pb-1 pl-3'>
                    <h3>Stock Investment wep page</h3>
                    <p>Sep 2025 - Oct 2025</p>
                    <p>Personal Project</p>
                    <p>
                        A full-stack application that aggregates analyst recommendations and provides AI-powered investment
                        insights. Built with Go backend and Vue.js frontend.
                    </p>
                    <a href="https://github.com/julianrivera35/stock-investment/blob/main/README.md">Github Repository</a>
                </div>
                <div className='min-w-[200px] max-w-[550px] md:min-w-[400px] min-h-[450px] bg-amber-50 pt-1 pb-1 pl-3'>
                    <h3>RAG Product Recommender</h3>
                    <p>Aug 2025 - Aug 2025</p>
                    <p>Personal Project</p>
                    <p>
                        A production-ready RAG (Retrieval-Augmented Generation) system for product recommendations,
                        demonstrating SOLID principles and clean architecture in ML systems. Build entirely using python:
                        huggingface, numpy, pandas, torch, tansformers and streamlit
                    </p>
                    <a href="https://github.com/julianrivera35/RAG-ProductRecommender">Github Repository</a>
                </div>
                <div className='min-w-[200px] max-w-[550px] md:min-w-[400px] min-h-[450px] bg-amber-50 pt-1 pb-1 pl-3'>
                    <h3>SmartCampus</h3>
                    <p>Aug 2024 - Dec 2024</p>
                    <p>Universidad de los Andes</p>
                    <p>
                        Degree final project: mobile application that, through authentication and role discriminations, enables
                        the visualization of demographic distribution across campus. Built with Kotlin Multiplatform, Swift,
                        Firebase, Android Studio, and Xcode. Focused on data processing, distributed systems, and
                        real-time insights.
                    </p>
                </div>
                <div className='min-w-[200px] max-w-[550px] md:min-w-[400px] min-h-[450px] bg-amber-50 pt-1 pb-1 pl-3'>
                    <h3>Predictive Lung Cancer Model</h3>
                    <p>Jan 2024 - June 2024</p>
                    <p>Universidad de los Andes & Hospital Santafé</p>
                    <p>
                        Team project to predict lung cancer probabilities using machine learning models trained on
                        demographic, behavioral, and living condition data. Used Python, Scikit-learn, GCP Pipelines, and
                        Google Colab. Built dashboards in Power BI to communicate insights.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSections;