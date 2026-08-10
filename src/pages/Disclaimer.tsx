import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'
const disclaimerSeo = {
  title: 'Disclaimer | The Elephant In The Court Room',
  description:
    'Read the Disclaimer for The Elephant In The Court Room, including important information about legal information, fundraising, donations, third-party services, payment processing, and campaign outcomes.',
  canonical: '/disclaimer',
  type: 'website' as const,
}
const sections = [
  {
    id: 'informational-purposes',
    title: '1. Informational Purposes Only',
    content: [
      'The information available on this Website is provided solely for general informational, educational, advocacy, and fundraising purposes.',
      'Although we strive to present information that is accurate, complete, and current, we make no representation or warranty that any information published on the Platform is accurate, reliable, complete, current, or suitable for any particular purpose.',
      'Information appearing on this Website should not be relied upon as the sole basis for making legal, financial, investment, tax, business, medical, or other important decisions.',
      'Users are solely responsible for independently verifying any information before relying upon it.',
    ],
  },

  {
    id: 'no-legal-advice',
    title: '2. No Legal Advice',
    content: [
      'Nothing contained on this Website constitutes legal advice or creates an attorney-client relationship.',
      'The Website may describe legal proceedings, court filings, litigation history, legal strategies, judicial actions, or other legal matters solely to provide information regarding fundraising campaigns or public advocacy efforts.',
      'Such information should not be interpreted as legal advice applicable to your particular circumstances.',
      'If you require legal advice regarding your rights or obligations, you should consult a qualified attorney licensed in the appropriate jurisdiction.',
    ],
  },
  {
    id: 'no-financial-advice',
    title: '3. No Financial, Tax, or Investment Advice',
    content: [
      'The Website does not provide financial, accounting, tax, investment, securities, or other professional advice.',
      'Nothing published on the Platform should be interpreted as:',
      '• investment advice;',
      '• tax advice;',
      '• financial planning advice;',
      '• accounting advice;',
      '• business consulting; or',
      '• recommendations regarding any financial decision.',
      'Any donations made through the Platform are voluntary.',
      'Donors are solely responsible for determining whether a donation is appropriate for their own financial circumstances and whether any donation may qualify for tax treatment under applicable law.',
      'We make no representation that donations made through the Platform are tax deductible.',
      'Users should consult qualified financial, tax, or legal professionals regarding their individual circumstances.',
    ],
  },

  {
    id: 'campaign-website',
    title: '4. Campaign Website Disclaimer',
    content: [
      'This Website has been created to present information regarding a specific fundraising campaign and to provide visitors with an opportunity to voluntarily support that campaign through donations.',
      'The Website is not a crowdfunding marketplace, fundraising exchange, charitable solicitation platform for unrelated campaigns, financial institution, investment platform, escrow service, or payment processor.',
      'The Website is intended solely to communicate information relating to the Campaign and to facilitate voluntary financial support through authorized third-party payment services.',
      'Nothing on this Website should be interpreted as an endorsement of any person, organization, product, service, or activity other than the Campaign presented on this Website.',
    ],
  },
    {
    id: 'purpose-of-campaign',
    title: '5. Purpose of the Campaign',
    content: [
      'The Campaign seeks voluntary financial contributions to support the legal expenses and related costs associated with the legal matter described throughout this Website.',
      'Descriptions of events, legal proceedings, court filings, photographs, videos, timelines, and other supporting materials are provided to explain the Campaign\'s purpose and to help potential donors understand why financial assistance is being requested.',
      'Nothing contained on this Website constitutes a guarantee regarding the outcome of any legal proceeding, settlement, appeal, negotiation, or other matter.',
      'Past events, court filings, judicial decisions, or legal developments should not be interpreted as predicting or guaranteeing future results.',
    ],
  },

  {
    id: 'donor-responsibility',
    title: '6. Donor Responsibility',
    content: [
      'All donations made through or in connection with this Website are voluntary.',
      'Before making a donation, you are responsible for reviewing the information presented on the Website and determining whether you wish to support the Campaign.',
      'By making a donation, you acknowledge that:',
      '• your decision is made voluntarily;',
      '• you have independently evaluated the information available to you;',
      '• you understand that litigation outcomes, fundraising efforts, and legal proceedings involve uncertainty;',
      '• you are not relying upon any guarantee, promise, or representation regarding the outcome of the Campaign or any related legal matter; and',
      '• you assume responsibility for your decision to contribute.',
      'Except where required by applicable law or expressly stated in our Terms of Service, donations are generally considered final.',
    ],
  },
    {
    id: 'no-guarantee',
    title: '7. No Guarantee Regarding Donations or Outcomes',
    content: [
      'We make no representation or warranty that:',
      '• fundraising goals will be achieved;',
      '• sufficient funds will be raised;',
      '• donations will produce any particular legal, financial, or personal outcome;',
      '• any legal proceeding will be resolved in a particular manner;',
      '• any settlement, judgment, or recovery will occur;',
      '• media attention or public awareness will result from the Campaign; or',
      '• the Campaign will remain active for any specific period.',
      'Every legal matter involves uncertainties that are beyond our control.',
      'Accordingly, no promise or guarantee of any result is made.',
    ],
  },

  {
    id: 'accuracy-of-information',
    title: '8. Accuracy of Information',
    content: [
      'We strive to present information that is accurate and based upon records, documents, photographs, court filings, or other materials available to us at the time of publication.',
      'However, legal proceedings, factual circumstances, and other events may change over time.',
      'Accordingly, we do not warrant that all information on the Website will remain complete, current, or free from error.',
      'Users should independently verify any information before relying upon it.',
      'The Website may be updated periodically without prior notice.',
    ],
  },
    {
    id: 'third-party-websites',
    title: '9. Third-Party Websites and Services',
    content: [
      'The Website may contain links to third-party websites, including crowdfunding services, payment processors, social media platforms, video hosting services, news publications, governmental agencies, or other external resources.',
      'These third-party services operate independently of this Website.',
      'We do not own, control, monitor, or guarantee the content, availability, privacy practices, products, services, or policies of any third-party website.',
      'Your use of any third-party service is governed solely by the terms and privacy policies of that third party.',
      'We are not responsible for any loss or damage arising from your use of external websites or services.',
    ],
  },

  {
    id: 'payment-processing',
    title: '10. Payment Processing Disclaimer',
    content: [
      'Donations made through this Website may be processed by independent third-party payment service providers.',
      'We do not collect, store, or process payment card information unless expressly stated.',
      'Payment transactions are governed by the terms, conditions, and privacy policies of the applicable payment processor.',
      'We are not responsible for payment processing errors, delays, declined transactions, banking issues, chargebacks, fraud committed by third parties, or technical failures occurring within third-party payment systems.',
    ],
  },
]
export default function Disclaimer() {
  return (
    <>
      <SEO data={disclaimerSeo} />

      <StructuredData
        data={webPageSchema({
          title: disclaimerSeo.title,
          description: disclaimerSeo.description,
          path: disclaimerSeo.canonical,
        })}
      />

      <Hero subtitle="Important information regarding the use of this Website, the Campaign, fundraising activities, and your responsibilities as a visitor or donor." />

      <LegalPage
        title="Disclaimer"
        lastUpdated="August 3, 2026"
        sections={sections}
      />
    </>
  )
}