import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'

const sections = [
  {
    id: 'not-legal-advice',
    title: 'Not Legal Advice',
    content: [
      'The information provided on this website is for general informational purposes only. Nothing on this website constitutes legal advice. The legal information shared on this site is based on publicly available court records and general explanations of immigration law. Immigration law is complex and constantly changing. If you need legal advice about your own situation, you should consult with a qualified immigration attorney.',
    ],
  },
  {
    id: 'accuracy',
    title: 'Information Accuracy',
    content: [
      'We make every effort to ensure that the information on this website is accurate and up to date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information presented. Any reliance you place on such information is strictly at your own risk.',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    content: [
      'This website contains links to third-party websites (including GoFundMe and Change.org). These links are provided for your convenience. We have no control over the content of these websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
    ],
  },
  {
    id: 'no-attorney',
    title: 'No Attorney-Client Relationship',
    content: [
      'Contacting us through this website, including through the contact form or email, does not create an attorney-client relationship. We are not a law firm, and our volunteers are not your attorneys. All communications are for the purpose of campaign coordination and community support only.',
    ],
  },
  {
    id: 'contact-legal',
    title: 'Contact for Legal Questions',
    content: [
      "If you have questions about The Elephant In The Court Room's specific legal case, please direct them to their legal representation. For general inquiries about the campaign, contact us at support@jonathancampaign.org.",
    ],
  },
]

export default function Disclaimer() {
  return (
    <>
      <Hero subtitle="Important legal notices about the content of this website." />
      <LegalPage
        title="Disclaimer"
        lastUpdated="January 1, 2025"
        sections={sections}
      />
    </>
  )
}
