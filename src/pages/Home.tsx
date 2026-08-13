import { useEffect, useState } from "react";
import Hero from '@/components/Hero'
import WelcomeVideoModal from '@/components/WelcomeVideoModal'
import SEO from "@/components/seo/SEO";
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

import StructuredData from "@/components/seo/StructuredData";
import { websiteSchema } from "../seo/schemas";
import { webPageSchema } from "../seo/pageSchemas";
export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const siteSchema = websiteSchema()
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
    <SEO
      data={{
  title:
    "The Elephant In The Court Room | Official Legal Advocacy & Crowdfunding Campaign",

  description:
    "Official website documenting The Elephant In The Court Room campaign. Learn about the Florida lease-to-own legal dispute, review public court documents, watch videos, browse photographs, follow campaign updates, and support the ongoing legal effort.",

  keywords: [
    "The Elephant In The Court Room",
    "Florida legal case",
    "lease-to-own dispute",
    "specific performance",
    "contract law",
    "civil litigation",
    "court documents",
    "legal advocacy",
    "crowdfunding",
    "justice campaign",
  ],
}}
    />

    <StructuredData
  data={{
    ...siteSchema,
    "@graph": [
      ...siteSchema["@graph"],
      webPageSchema({
        title: "The Elephant In The Court Room",
        description:
          "Official website documenting The Elephant In The Court Room campaign, including the case background, court documents, videos, photographs, updates and crowdfunding information.",
        path: "/",
      }),
    ],
  }}
/>

    {showWelcome && (
      <WelcomeVideoModal
        onClose={() => {
          localStorage.setItem("hasSeenWelcome", "true");
          setShowWelcome(false);
        }}
      />
    )}

    <Hero
  title="The Death of the Contract"
  subtitle="Two siblings. One lease-to-own agreement. More than eleven years seeking to enforce their contractual rights."
/>



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
