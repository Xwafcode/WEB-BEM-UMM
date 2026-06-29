import HeroSection from '../components/home/HeroSection'
import AnnouncementTicker from '../components/home/AnnouncementTicker'
import WelcomeSection from '../components/home/WelcomeSection'
import VisionMission from '../components/home/VisionMission'
import NewsHighlight from '../components/home/NewsHighlight'
import LeadershipPreview from '../components/home/LeadershipPreview'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AnnouncementTicker />
      <WelcomeSection />
      <VisionMission />
      <NewsHighlight />
      <LeadershipPreview />
      <ContactCTA />
    </main>
  )
}
