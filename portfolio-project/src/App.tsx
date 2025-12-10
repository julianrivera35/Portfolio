import UpperBar from './Components/UpperBar'
import HeroSection from './Sections/HeroSection'
import AboutSection from './Sections/AboutSection';
import ExperienceSection from './Sections/ExperienceSection';
import ProjectsSections from './Sections/ProjectsSections';
import SkillSection from './Sections/SkillSection';
import EducationSenction from './Sections/EducationSection';

function App() {
  return (
    <>
      <UpperBar/>
      {/* Hero Section */}
      <HeroSection/>
      {/* About Section */}
      <AboutSection/>
      {/* Experience Section */}
      <ExperienceSection/>
      {/* Projects Section */}
      <ProjectsSections/>
      {/* Skills Section */}
      <SkillSection/>
      {/** Education Section */}
      <EducationSenction/>
    </>
  )
}

export default App
