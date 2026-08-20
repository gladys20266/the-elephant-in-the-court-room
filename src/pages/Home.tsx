import { lazy, Suspense, useEffect, useState } from "react";

import Hero from "@/components/Hero";
import WelcomeVideoModal from "@/components/WelcomeVideoModal";
import SEO from "@/components/seo/SEO";
import StorySnapshot from "@/sections/StorySnapshot";

import StructuredData from "@/components/seo/StructuredData";
import { websiteSchema } from "../seo/schemas";
import { webPageSchema } from "../seo/pageSchemas";

// Load below-the-fold sections only when needed
const CaseDetails = lazy(() => import("@/sections/CaseDetails"));
const EvidenceGallery = lazy(() => import("@/sections/EvidenceGallery"));
const VideosPreview = lazy(() => import("@/sections/VideosPreview"));
const PhotosPreview = lazy(() => import("@/sections/PhotosPreview"));
const DocumentsPreview = lazy(() => import("@/sections/DocumentsPreview"));
const DownloadsPreview = lazy(() => import("@/sections/DownloadsPreview"));
const ImpactProgress = lazy(() => import("@/sections/ImpactProgress"));
const Updates = lazy(() => import("@/sections/Updates"));
const Supporters = lazy(() => import("@/sections/Supporters"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));
const ContactSection = lazy(() => import("@/sections/ContactSection"));

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  const siteSchema = websiteSchema();

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

      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}