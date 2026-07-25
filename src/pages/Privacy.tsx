import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      'We collect information that you voluntarily provide when using this website, including: your name and email address when submitting the contact form; donation information when you click through to our GoFundMe campaign page (GoFundMe\'s privacy policy governs data collected on their platform); and any messages or content you choose to share with us. We also collect non-personal information automatically, such as your IP address, browser type, and pages visited, through standard web analytics tools.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: [
      "We use the information we collect to: respond to your inquiries and communications; send updates about The Elephant In The Court Room's campaign if you have opted in to receive them; improve the website and user experience; and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    content: [
      'We may share your information with: service providers who assist in operating this website (under confidentiality agreements); legal authorities when required by law or to protect our rights; and the GoFundMe platform when you choose to make a donation (subject to GoFundMe\'s privacy policy). We do not share your information with any other third parties without your explicit consent.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    content: [
      'This website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can configure your browser to refuse cookies, though this may affect the functionality of certain features. We do not use third-party advertising cookies.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    content: [
      'We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: [
      'Depending on your jurisdiction, you may have the right to: access the personal information we hold about you; request correction or deletion of your information; opt out of communications; and lodge a complaint with a data protection authority. To exercise these rights, please contact us using the information provided below.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or our data practices, please contact us at: support@jonathancampaign.org',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Hero subtitle="How we protect your information and respect your privacy." />
      <LegalPage
        title="Privacy Policy"
        lastUpdated="January 1, 2025"
        sections={sections}
      />
    </>
  )
}
