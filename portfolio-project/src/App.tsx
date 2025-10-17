import UpperBar from './Components/UpperBar'
import HeroSection from './Sections/HeroSection'
import AboutSection from './Sections/AboutSection';
import ExperienceSection from './Sections/ExperienceSection';
import ProjectsSections from './Sections/ProjectsSections';

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
    </>
  )
}

export default App
