import Chooseuse from "./ChooseuseSection/Chooseuse"
import Features from "./FeaturesSection/Features"
import Hero from "./HeroSection/Hero"
import Parents from "./ParentsSection/Parents"
import Process from "./ProcessSection/Process"
import Topic from "./TopicSection/Topic"

const LandingPage = () => {
  return (
    <main>
        <Hero />
        <Features />
        <Chooseuse />
        <Parents />
        <Process />
        <Topic />
    </main>
  )
}

export default LandingPage