import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'
const termsSeo = {
  title: 'Terms of Service | The Elephant In The Court Room',
  description:
    'Read the Terms of Service for The Elephant In The Court Room, including rules governing website use, user conduct, intellectual property, donations, third-party services, and legal responsibilities.',
  canonical: '/terms',
  type: 'website' as const,
}
const sections = [
  {
    id: 'acceptance-of-the-terms',
    title: '1. Acceptance of the Terms',
    content: [
      'By accessing or using the Website, you represent and warrant that:',
      '• you have the legal capacity to enter into a binding agreement under applicable law;',
      '• you are at least eighteen (18) years of age or have reached the age of majority in your jurisdiction;',
      '• you will use the Website only for lawful purposes;',
      '• all information you provide through the Website is truthful, accurate, current, and complete;',
      '• your use of the Website complies with these Terms and all applicable federal, state, local, and international laws and regulations.',
      'If you are using the Website on behalf of an organization, business, nonprofit entity, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In such cases, references to "you" include both the individual user and the entity on whose behalf the Website is being used.',
    ],
  },

  {
    id: 'modifications-to-these-terms',
    title: '2. Modifications to These Terms',
    content: [
      'We reserve the right to modify, amend, replace, or update these Terms at any time, in our sole discretion.',
      'When material changes are made, we may revise the "Effective Date" shown at the beginning of these Terms and, where appropriate, provide additional notice through the Website or by electronic communication.',
      'Unless otherwise stated, revised Terms become effective immediately upon publication.',
      'Your continued use of the Website following the publication of updated Terms constitutes your acceptance of the revised Terms.',
      'If you do not agree with any modification, your sole remedy is to discontinue use of the Website.',
    ],
  },

  {
    id: 'privacy-policy',
    title: '3. Privacy Policy',
    content: [
      'Our Privacy Policy explains how we collect, use, disclose, retain, and safeguard your personal information.',
      'By using the Website, you acknowledge that you have read our Privacy Policy and consent to the collection and processing of your information as described therein.',
      'In the event of a conflict between these Terms and the Privacy Policy regarding the use of the Website, these Terms shall govern except where applicable privacy laws require otherwise.',
    ],
  },

  {
    id: 'definitions',
    title: '4. Definitions',
    content: [
      '"Campaign" means any fundraising initiative, donation appeal, legal funding effort, informational project, or other fundraising activity published on the Website.',
      '"Campaign Creator" means the individual or entity responsible for creating, managing, or benefiting from a Campaign.',
      '"Content" means any text, photographs, videos, audio recordings, graphics, logos, documents, comments, campaign descriptions, updates, data, software, or other materials available through the Website.',
      '"Donation" means a voluntary transfer of funds made by a donor in support of a Campaign.',
      '"Donor" means any individual or organization making a Donation through or in connection with the Website.',
      '"User" means any person accessing or using the Website for any purpose.',
      '"User Content" means any information, materials, media, comments, communications, campaign updates, photographs, videos, or other content submitted, uploaded, transmitted, or otherwise provided by a User.',
      '"Third-Party Services" means services, software, payment processors, hosting providers, analytics providers, social media platforms, or other external services that interact with or support the Website.',
    ],
  },
    {
    id: 'scope-of-the-website',
    title: '5. Scope of the Website',
    content: [
      'The Elephant In The Court Room is an online platform intended to provide information regarding a legal matter, share updates relating to that matter, facilitate public awareness, and provide visitors with the opportunity to voluntarily support designated fundraising campaigns through lawful donation mechanisms.',
      'The Website is intended to serve as an informational and fundraising platform. Unless expressly stated otherwise, the Website does not:',
      '• provide legal advice;',
      '• provide financial advice;',
      '• provide tax advice;',
      '• provide investment opportunities;',
      '• provide escrow services;',
      '• provide banking services;',
      '• provide fiduciary services;',
      '• guarantee litigation outcomes;',
      '• guarantee campaign success;',
      '• guarantee any particular use or result arising from donations.',
      'Information published on the Website is intended for informational purposes only and should not be relied upon as professional legal, financial, accounting, or tax advice.',
      'Users should consult qualified professionals regarding their individual circumstances.',
    ],
  },

  {
    id: 'eligibility-to-use',
    title: '6. Eligibility to Use the Website',
    content: [
      'You may use the Website only if:',
      '• you are legally capable of entering into a binding contract;',
      '• your use is not prohibited under applicable law;',
      '• you have not previously been suspended or prohibited from using the Website;',
      '• your access does not violate any court order, sanction, regulation, or legal restriction applicable to you.',
      'We reserve the right to deny access to any person or entity at any time, with or without notice, where permitted by law.',
    ],
  },

  {
    id: 'electronic-communications',
    title: '7. Electronic Communications',
    content: [
      'By accessing the Website or communicating with us electronically, including by email, contact forms, newsletters, or other digital means, you consent to receive communications from us electronically.',
      'You agree that electronic communications, notices, disclosures, agreements, and records satisfy any legal requirement that such communications be in writing, to the extent permitted by applicable law.',
    ],
  },

  {
    id: 'reservation-of-rights',
    title: '8. Reservation of Rights',
    content: [
      'Except for the limited rights expressly granted under these Terms, all rights, title, and interests in and to the Website remain the exclusive property of The Elephant In The Court Room or its licensors.',
      'Nothing contained in these Terms shall be construed as granting any ownership interest, license, or intellectual property rights except as expressly stated.',
    ],
  },
    {
    id: 'user-accounts',
    title: '9. User Accounts',
    content: [
      'Certain features of the Website may require you to create an account. You agree to provide accurate, current, and complete information during registration and to maintain and promptly update your information as necessary.',
      'You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account, whether or not authorized by you.',
      'You agree to notify us immediately if you become aware of:',
      '• unauthorized access to your account;',
      '• unauthorized use of your password;',
      '• suspected security breaches;',
      '• loss or theft of login credentials; or',
      '• any other compromise affecting your account.',
      'We reserve the right to suspend, restrict, or terminate accounts that contain false information, violate these Terms, or present security, legal, or operational risks.',
    ],
  },

  {
    id: 'account-security',
    title: '10. Account Security',
    content: [
      'You are responsible for implementing reasonable security measures to protect your account, including selecting a strong password and preventing unauthorized access to your devices.',
      'We are not responsible for losses resulting from your failure to maintain adequate account security.',
      'We may require additional authentication measures or verification procedures where reasonably necessary to protect the integrity of the Website or comply with applicable law.',
    ],
  },

  {
    id: 'identity-verification',
    title: '11. Identity Verification',
    content: [
      'To help maintain the integrity of the Website and reduce fraud, we reserve the right, where permitted by law, to request documentation or information reasonably necessary to verify the identity of users, campaign organizers, or donation recipients.',
      'Verification requests may include:',
      '• government-issued identification;',
      '• proof of address;',
      '• organizational documentation;',
      '• supporting campaign documentation;',
      '• documentation relating to the intended use of funds; or',
      '• other information reasonably necessary to verify authenticity.',
      'Failure to provide requested information may result in delayed processing, suspension, removal of campaign content, or termination of access to the Website.',
      'Verification does not constitute an endorsement, certification, or guarantee regarding any campaign or user.',
    ],
  },

  {
    id: 'campaign-eligibility',
    title: '12. Campaign Eligibility',
    content: [
      'Campaigns published on the Website must comply with these Terms and all applicable laws.',
      'Campaigns must:',
      '• accurately describe the fundraising purpose;',
      '• identify the intended beneficiary where appropriate;',
      '• provide truthful and non-misleading information;',
      '• avoid deceptive or fraudulent representations;',
      '• comply with applicable fundraising and charitable solicitation laws;',
      '• respect intellectual property rights; and',
      '• avoid unlawful activities.',
      'We reserve the right to determine, in our sole discretion, whether a campaign satisfies these standards.',
      'Publication of a campaign does not constitute our approval, endorsement, certification, verification, or recommendation.',
    ],
  },

  {
    id: 'campaign-creator-responsibilities',
    title: '13. Campaign Creator Responsibilities',
    content: [
      'Campaign Creators are solely responsible for all aspects of their campaigns, including:',
      '• the accuracy of campaign descriptions;',
      '• statements regarding legal matters or factual events;',
      '• supporting documentation;',
      '• campaign updates;',
      '• use of donated funds;',
      '• compliance with applicable laws; and',
      '• fulfillment of any promises voluntarily made to donors.',
      'Campaign Creators represent and warrant that:',
      '• all campaign information is truthful and accurate to the best of their knowledge;',
      '• no material information has been intentionally omitted;',
      '• donated funds will be used substantially as represented;',
      '• campaign materials do not infringe the rights of any third party; and',
      '• campaign activities comply with applicable law.',
      'Campaign Creators remain solely responsible for their own legal obligations arising from fundraising activities.',
    ],
  },
    {
    id: 'donations',
    title: '14. Donations',
    content: [
      'Donations made through or in connection with the Website are voluntary contributions made at the sole discretion of each donor.',
      'Unless expressly stated otherwise:',
      '• Donations are not investments.',
      '• Donations do not create ownership interests.',
      '• Donations do not create creditor rights.',
      '• Donations do not create shareholder rights.',
      '• Donations do not constitute loans.',
      '• Donations do not purchase legal claims.',
      '• Donations do not entitle donors to litigation proceeds.',
      '• Donations do not create attorney-client relationships.',
      '• Donations do not create contractual rights against the Campaign Creator beyond those expressly provided by law.',
      'Donors should carefully review campaign information before making a contribution.',
    ],
  },

  {
    id: 'no-guarantee-of-campaign-success',
    title: '15. No Guarantee of Campaign Success',
    content: [
      'We do not guarantee that:',
      '• fundraising goals will be achieved;',
      '• campaigns will remain active;',
      '• legal proceedings will produce favorable outcomes;',
      '• donated funds will achieve any specific result;',
      '• litigation strategies will succeed;',
      '• media attention will occur;',
      '• public support will increase; or',
      '• campaign objectives will ultimately be realized.',
      'Fundraising involves inherent uncertainty.',
      'Donors acknowledge these risks before making contributions.',
    ],
  },

  {
    id: 'use-of-donated-funds',
    title: '16. Use of Donated Funds',
    content: [
      'Campaign Creators are responsible for using donated funds substantially consistent with the purposes described in their campaigns.',
      'Although we may review reported misuse where appropriate, we do not supervise or control the day-to-day expenditure of donated funds.',
      'Campaign Creators remain solely responsible for complying with applicable legal, accounting, tax, and reporting obligations.',
    ],
  },

  {
    id: 'payment-processing',
    title: '17. Payment Processing',
    content: [
      'Payments may be processed by independent third-party payment processors.',
      'By making a donation, you acknowledge that:',
      '• payment processing is performed by third-party providers;',
      '• your payment information is handled in accordance with the applicable payment processor’s policies;',
      '• we do not store complete payment card information unless expressly stated;',
      '• processing times may vary; and',
      '• transactions may be delayed for fraud prevention or legal compliance.',
      'Your use of third-party payment services is governed by the applicable agreements between you and those providers.',
    ],
  },

  {
    id: 'payment-authorization',
    title: '18. Payment Authorization',
    content: [
      'By submitting payment information, you represent and warrant that:',
      '• you are authorized to use the selected payment method;',
      '• all payment information provided is accurate;',
      '• sufficient funds or credit are available; and',
      '• the transaction is lawful.',
      'Unauthorized use of payment methods is strictly prohibited.',
    ],
  },
    {
    id: 'refund-policy',
    title: '19. Refund Policy',
    content: [
      'Unless expressly required by applicable law, by the policies of the applicable payment processor, or by our published refund procedures, donations are generally considered final.',
      'Because donated funds may be transferred, allocated, or used promptly for campaign purposes, refunds may not be available after a donation has been completed.',
      'We reserve the right, but assume no obligation, to review refund requests on a case-by-case basis where exceptional circumstances exist, including but not limited to:',
      '• duplicate transactions;',
      '• demonstrable payment processing errors;',
      '• unauthorized payment activity;',
      '• fraudulent transactions; and',
      '• legal requirements.',
      'Approval or denial of any refund request remains within our reasonable discretion, subject to applicable law and payment processor requirements.',
    ],
  },

  {
    id: 'purpose-of-the-website',
    title: '21. Purpose of the Website',
    content: [
      'The Elephant In The Court Room is a privately operated informational website established to present information regarding a specific legal matter, provide updates concerning that matter, and facilitate voluntary financial support for a designated fundraising campaign.',
      'The Website is not a public crowdfunding marketplace and does not permit members of the public to create, publish, manage, or solicit fundraising campaigns.',
      'Unless expressly stated otherwise, all fundraising activities presented through the Website relate solely to the campaign identified on the Website.',
      'Nothing contained on the Website should be interpreted as offering fundraising services to third parties.',
    ],
  },

  {
    id: 'user-conduct',
    title: '22. User Conduct',
    content: [
      'By accessing or using the Website, you agree to use it lawfully, responsibly, and in a manner consistent with these Terms.',
      'You agree that you will not:',
      '• violate any applicable federal, state, local, or international law or regulation;',
      '• interfere with the operation, security, or integrity of the Website;',
      '• attempt to gain unauthorized access to any portion of the Website, its servers, or related systems;',
      '• introduce viruses, malware, ransomware, spyware, or other malicious code;',
      '• interfere with another user’s access or use of the Website;',
      '• impersonate any person or entity or misrepresent your affiliation with another person or organization;',
      '• submit false, misleading, or fraudulent information;',
      '• use automated systems, bots, crawlers, scrapers, or similar technologies to access the Website without prior written authorization;',
      '• circumvent or attempt to circumvent security measures or access controls;',
      '• engage in activities that may damage, disable, overburden, or impair the Website or its infrastructure;',
      '• use the Website for unlawful, defamatory, abusive, harassing, threatening, discriminatory, or otherwise objectionable purposes; or',
      '• use the Website in any manner that infringes the rights of another person or entity.',
    ],
  },

  {
    id: 'fraud-prevention',
    title: '23. Fraud Prevention',
    content: [
      'We are committed to protecting the integrity of the Website and its fundraising activities.',
      'If we reasonably believe that fraudulent, deceptive, unlawful, or unauthorized activity has occurred or may occur, we reserve the right, to the extent permitted by applicable law, to:',
      '• suspend or restrict access to the Website;',
      '• refuse or cancel transactions where appropriate;',
      '• investigate suspected misconduct;',
      '• request additional information from users;',
      '• cooperate with payment processors, financial institutions, and law enforcement agencies; and',
      '• take any other action reasonably necessary to protect the Website, donors, or applicable legal rights.',
      'Nothing in this section obligates us to monitor every activity or investigate every allegation.',
    ],
  },

  {
    id: 'accuracy-of-website-information',
    title: '24. Accuracy of Website Information',
    content: [
      'We strive to ensure that the information published on the Website is accurate and current.',
      'However, legal proceedings, court filings, litigation strategies, and factual developments may change over time.',
      'Accordingly:',
      '• information may be updated, corrected, supplemented, or removed without prior notice;',
      '• historical information may no longer reflect current circumstances; and',
      '• timelines and legal developments may evolve after publication.',
      'While reasonable efforts are made to maintain accuracy, we do not warrant that all information will remain complete, current, or error-free at all times.',
    ],
  },

  {
    id: 'intellectual-property-rights',
    title: '25. Intellectual Property Rights',
    content: [
      'Unless otherwise indicated, the Website and all content made available through it—including text, graphics, logos, page layouts, photographs, videos, audio recordings, illustrations, designs, icons, software, compilations, and other materials—are owned by or licensed to The Elephant In The Court Room and are protected by applicable United States and international intellectual property laws.',
      'These Terms do not transfer any ownership rights to users.',
      'All rights not expressly granted remain reserved.',
    ],
  },

  {
    id: 'limited-license',
    title: '26. Limited License',
    content: [
      'Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Website solely for personal, informational, and lawful purposes.',
      'This license does not permit you to:',
      '• copy substantial portions of the Website;',
      '• commercially exploit Website content;',
      '• reproduce or republish Website materials for commercial purposes;',
      '• create derivative works from protected content without authorization;',
      '• remove copyright or proprietary notices; or',
      '• use Website materials in a misleading manner.',
      'Any rights not expressly granted remain reserved.',
    ],
  },

  {
    id: 'user-submissions',
    title: '27. User Submissions',
    content: [
      'If you voluntarily submit communications through contact forms, email, comments (if enabled), or other available features, you represent that:',
      '• you own or have the necessary rights to submit the content;',
      '• your submission does not violate applicable law; and',
      '• your submission does not infringe another person’s intellectual property or privacy rights.',
      'You retain ownership of your submissions.',
      'However, by voluntarily submitting content to us, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, display, store, and process that content solely as reasonably necessary to operate, administer, maintain, improve, or respond through the Website, unless otherwise agreed.',
    ],
  },
    {
    id: 'copyright-policy-dmca',
    title: '28. Copyright Policy (DMCA)',
    content: [
      'We respect the intellectual property rights of others and expect users to do the same.',
      'If you believe that material available on the Website infringes your copyright, you may submit a written notification containing substantially the information required under the U.S. Digital Millennium Copyright Act ("DMCA"), including:',
      '• identification of the copyrighted work claimed to have been infringed;',
      '• identification of the allegedly infringing material and its location on the Website;',
      '• your contact information;',
      '• a statement that you have a good-faith belief that the disputed use is not authorized;',
      '• a statement, under penalty of perjury, that the information in your notice is accurate and that you are authorized to act on behalf of the copyright owner; and',
      '• your physical or electronic signature.',
      'Upon receipt of a legally sufficient notice, we may investigate and take appropriate action, including removing or disabling access to the challenged material where appropriate.',
    ],
  },

  {
    id: 'third-party-services',
    title: '29. Third-Party Services',
    content: [
      'The Website may integrate with or provide access to third-party services, including payment processors, video hosting platforms, mapping services, analytics providers, or social media platforms.',
      'These services operate independently from the Website.',
      'We do not control and are not responsible for:',
      '• the availability of third-party services;',
      '• their privacy practices;',
      '• their security measures;',
      '• their terms of use; or',
      '• the accuracy of third-party information.',
      'Your interactions with third-party services are governed by the terms and policies of those providers.',
    ],
  },

  {
    id: 'external-links',
    title: '30. External Links',
    content: [
      'The Website may contain links to third-party websites for informational convenience.',
      'The inclusion of any external link does not constitute:',
      '• endorsement;',
      '• sponsorship;',
      '• approval;',
      '• recommendation; or',
      '• affiliation, unless expressly stated.',
      'We are not responsible for the content, security, availability, or practices of external websites.',
      'Users access third-party websites at their own risk.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <SEO data={termsSeo} />

      <StructuredData
        data={webPageSchema({
          title: termsSeo.title,
          description: termsSeo.description,
          path: termsSeo.canonical,
        })}
      />

      <Hero
        subtitle="Please read these Terms of Service carefully before accessing or using this Website, its content, fundraising campaign, or related services."
      />

      <LegalPage
        title="Terms of Service"
        lastUpdated="August 3, 2026"
        sections={sections}
      />
    </>
  )
}