import { useEffect, useState } from "react";
import Hero from '@/components/Hero'
import WelcomeVideoModal from '@/components/WelcomeVideoModal'
import StorySnapshot from '@/sections/StorySnapshot'
import CaseDetails from '@/sections/CaseDetails'
import EvidenceGallery from '@/sections/EvidenceGallery'
import ImpactProgress from '@/sections/ImpactProgress'
import Updates from '@/sections/Updates'
import Supporters from '@/sections/Supporters'
import FinalCTA from '@/sections/FinalCTA'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  useEffect(() => {
  const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

  if (!hasSeenWelcome) {
    setShowWelcome(true);
  }
}, []);
useEffect(() => {
  const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

  if (!hasSeenWelcome) {
    setShowWelcome(true);
  }
}, []);

useEffect(() => {
  if (showWelcome) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [showWelcome]);

return (
    <>
     {showWelcome && (
  <WelcomeVideoModal
  onClose={() => {
    localStorage.setItem("hasSeenWelcome", "true");
    setShowWelcome(false);
  }}
/>
)}
      <Hero subtitle="A father. A community member. A friend. Fighting for the right to stay home." />
      <StorySnapshot />
      <CaseDetails />
      <EvidenceGallery />
      <ImpactProgress />
      <Updates />
      <Supporters />
      <FinalCTA />
      <ContactSection />
    </>
  )
}
