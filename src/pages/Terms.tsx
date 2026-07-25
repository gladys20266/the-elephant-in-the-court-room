import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.',
    ],
  },
  {
    id: 'use',
    title: 'Use of the Website',
    content: [
      'You agree to use this website only for lawful purposes. You may not: use the website in any way that violates applicable laws; attempt to gain unauthorized access to any portion of the website; interfere with the proper working of the website; or use the website to transmit harmful code or content.',
    ],
  },
  {
    id: 'donations',
    title: 'Donations',
    content: [
      'This website provides links to third-party fundraising platforms (GoFundMe) for the purpose of collecting donations. All donations are processed through these third-party platforms and are subject to their respective terms of service. We are not responsible for the processing, handling, or refund of any donations. For questions about a specific donation, please contact the fundraising platform directly.',
    ],
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property',
    content: [
      "All content on this website, including text, images, videos, and graphics, is the property of The Elephant In The Court Room Campaign or its content creators and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without prior written permission. The Elephant In The Court Room mosaic elephant logo is a trademark of this campaign.",
    ],
  },
  {
    id: 'warranties',
    title: 'Disclaimer of Warranties',
    content: [
      "This website is provided 'as is' without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: [
      "To the fullest extent permitted by law, The Elephant In The Court Room Campaign and its volunteers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website.",
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: [
      "We may update these Terms of Service from time to time. The most current version will always be posted on this page with the 'Last updated' date.",
    ],
  },
  {
    id: 'governing',
    title: 'Governing Law',
    content: [
      'These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Hero subtitle="The terms and conditions governing use of this website." />
      <LegalPage
        title="Terms of Service"
        lastUpdated="January 1, 2025"
        sections={sections}
      />
    </>
  )
}
