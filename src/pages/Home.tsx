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
import VideosPreview from '@/sections/VideosPreview'
import PhotosPreview from "@/sections/PhotosPreview";
import DocumentsPreview from "@/sections/DocumentsPreview";
import DownloadsPreview from "@/sections/DownloadsPreview";
import WhySupportMatters from "@/sections/WhySupportMatters";
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
      <Hero subtitle="A promise made • A contract broken • Eleven years fighting for justice." />

<WhySupportMatters />

<StorySnapshot />
      <CaseDetails />
<EvidenceGallery />
<VideosPreview />
<PhotosPreview />
<DocumentsPreview />
<DownloadsPreview />
<ImpactProgress />
      <Updates />
      <Supporters />
      <FinalCTA />
      <ContactSection />
    </>
  )
}
