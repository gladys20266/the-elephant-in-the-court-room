import Hero from '@/components/Hero'
import LegalPage from '@/components/LegalPage'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
const privacySeo = {
  title: 'Privacy Policy | The Elephant In The Court Room',
  description:
    'Read the Privacy Policy for The Elephant In The Court Room, including information about data collection, cookies, analytics, third-party services, security, retention, and privacy rights.',
  canonical: '/privacy',
  type: 'website' as const,
}
const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      'Welcome to The Elephant In The Court Room ("Website," "we," "our," or "us"), an informational legal advocacy website owned and operated by © Eclectic Synergy LLC.',
      'The Website is dedicated to informing the public about an ongoing legal matter by publishing court filings, legal updates, photographs, videos, educational materials, campaign information, and other content intended to promote public awareness and transparency. The Website also provides visitors with links to independent third-party fundraising platforms should they voluntarily choose to support the campaign.',
      'Protecting your privacy is important to us. We recognize that visitors place trust in the websites they use, and we are committed to handling Personal Information responsibly, transparently, and in accordance with applicable law.',
      'This Privacy Policy explains:',
      '• what information we collect;',
      '• how we collect it;',
      '• how we use it;',
      '• when we may disclose it;',
      '• how we protect it;',
      '• the choices available to you regarding your information; and',
      '• your privacy rights under applicable law.',
      'This Privacy Policy is intended to comply with applicable laws of the United States governing the collection, use, disclosure, storage, and protection of Personal Information. Depending upon your state or country of residence, additional rights or obligations may apply.',
      'By accessing or using the Website, you acknowledge that you have read and understood this Privacy Policy.',
      'If you do not agree with this Privacy Policy, you should discontinue use of the Website.',
    ],
  },

  {
    id: 'scope-of-this-privacy-policy',
    title: '2. Scope of this Privacy Policy',
    content: [
      'This Privacy Policy applies solely to information collected through:',
      '• The Elephant In The Court Room website;',
      '• Contact forms available through the Website;',
      '• Email communications initiated through the Website;',
      '• Embedded media and interactive content;',
      '• Analytics technologies implemented on the Website;',
      '• Cookies and similar technologies;',
      '• Social media integrations; and',
      '• Other online services operated by © Eclectic Synergy LLC that expressly reference this Privacy Policy.',
      'This Privacy Policy does not apply to information collected by:',
      '• independent third-party crowdfunding platforms;',
      '• social media platforms;',
      '• payment processors;',
      '• third-party websites linked from this Website;',
      '• government agencies;',
      '• courts;',
      '• public records repositories;',
      '• news organizations; or',
      '• any website, application, platform, or service not owned or controlled by © Eclectic Synergy LLC.',
      'Each third-party organization operates independently and maintains its own privacy practices, terms of service, and data handling procedures.',
      'Your interactions with those organizations are governed exclusively by their own policies, and we encourage you to review those documents before providing Personal Information or engaging with their services.',
      'The inclusion of any third-party website, platform, or service on this Website does not constitute an endorsement of that organization’s privacy practices, policies, products, or services.',
    ],
  },

  {
    id: 'purpose-of-the-website',
    title: '3. Purpose of the Website',
    content: [
      'The Elephant In The Court Room exists for educational, informational, and public awareness purposes.',
      'Among other things, the Website is intended to:',
      '• inform the public regarding an ongoing legal matter;',
      '• publish court filings and publicly available case information;',
      '• provide educational resources relating to the campaign;',
      '• publish photographs, videos, documents, and other supporting materials;',
      '• provide campaign news and updates;',
      '• allow visitors to communicate with us; and',
      '• direct interested supporters to one or more independent third-party fundraising platforms.',
      'The Website is not a crowdfunding platform.',
      'The Website does not:',
      '• process donations;',
      '• receive payment card information;',
      '• collect banking information for donations;',
      '• process financial transactions;',
      '• provide payment processing services; or',
      '• administer donor accounts.',
      'Any decision to financially support the campaign is entirely voluntary.',
      'If you choose to make a contribution, you will be redirected to an independent third-party crowdfunding platform.',
      'All financial transactions are processed exclusively by that third-party platform and are governed by its own Privacy Policy, Terms of Service, and related policies.',
      '© Eclectic Synergy LLC neither controls nor assumes responsibility for the privacy practices or payment processing activities of those third-party fundraising platforms.',
    ],
  },

  {
    id: 'definitions',
    title: '4. Definitions',
    content: [
      '"Personal Information" means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with an identified or identifiable individual.',
      '"Non-Personal Information" means information that cannot reasonably be used to identify a particular individual.',
      '"Processing" means any operation performed on information, including collecting, recording, organizing, storing, using, analyzing, transmitting, disclosing, modifying, retaining, deleting, or otherwise handling such information.',
      '"Visitor," "User," or "You" means any individual who accesses or uses the Website.',
      '"Third Party" means any individual, organization, company, platform, service provider, governmental authority, or other entity other than © Eclectic Synergy LLC.',
      '"Cookies" means small text files and similar technologies stored on your browser or device to support Website functionality, analytics, security, performance, and user preferences.',
      '"Applicable Law" means all federal, state, and local laws, regulations, rules, and legally binding governmental requirements applicable to the operation of the Website.',
    ],
  },
    {
    id: 'information-we-collect',
    title: '5. Information We Collect',
    content: [
      'The categories of information we collect depend upon how you interact with the Website, the features you use, the information you voluntarily provide, and the technologies used to support the operation of the Website.',
      'We strive to collect only the Personal Information and technical information reasonably necessary to operate, secure, maintain, improve, and administer the Website and to fulfill the purposes described in this Privacy Policy.',
      'The categories of information we may collect include the following.',
    ],
  },

  {
    id: 'information-you-voluntarily-provide',
    title: '5.1 Information You Voluntarily Provide',
    content: [
      'You may voluntarily provide Personal Information when you:',
      '• Contact us by email;',
      '• Complete and submit a contact form;',
      '• Request information regarding the Website or the campaign;',
      '• Report technical problems or Website issues;',
      '• Submit comments, feedback, or suggestions;',
      '• Correspond with us regarding legal, media, or business matters; or',
      '• Otherwise communicate with us through the Website.',
      'Depending upon your interaction with the Website, the information you voluntarily provide may include:',
      '• Full name;',
      '• Email address;',
      '• Telephone number (if voluntarily provided);',
      '• Organization or business name (where applicable);',
      '• Mailing address (if voluntarily provided);',
      '• Subject of your communication;',
      '• Message content;',
      '• Files, photographs, or documents voluntarily submitted; and',
      '• Any additional information you choose to include in your communications.',
      'Providing Personal Information through the Website is voluntary. However, if you choose not to provide certain information, we may be unable to respond to your inquiry or provide the assistance or information you requested.',
      'We ask that you provide only information that is reasonably necessary for your communication with us and avoid submitting sensitive Personal Information unless such information is necessary and appropriate under the circumstances.',
    ],
  },

  {
    id: 'information-automatically-collected',
    title: '5.2 Information Automatically Collected',
    content: [
      'When you visit or interact with the Website, certain technical information may be automatically collected through server logs, cookies, analytics technologies, and similar tools.',
      'Automatically collected information helps us:',
      '• Operate the Website;',
      '• Maintain Website security;',
      '• Diagnose technical problems;',
      '• Improve Website functionality;',
      '• Understand how visitors use the Website;',
      '• Monitor Website performance; and',
      '• Detect unauthorized or malicious activity.',
      'Depending upon your interaction with the Website, automatically collected information may include:',
      '• Internet Protocol (IP) address;',
      '• Browser type;',
      '• Browser version;',
      '• Operating system;',
      '• Device type;',
      '• Device identifiers;',
      '• Screen resolution;',
      '• Browser language;',
      '• Time zone;',
      '• Date and time of access;',
      '• Pages visited;',
      '• Navigation paths;',
      '• Referring website or referral source;',
      '• Exit pages;',
      '• Session duration;',
      '• Clickstream data;',
      '• Error reports;',
      '• Performance diagnostics;',
      '• Security logs; and',
      '• Approximate geographic location derived from your IP address.',
      'This information generally does not directly identify you by name but may constitute Personal Information under certain applicable laws.',
    ],
  },

  {
    id: 'device-information',
    title: '5.3 Device Information',
    content: [
      'To improve compatibility, performance, reliability, and security, we may automatically collect limited technical information regarding the device used to access the Website.',
      'This information may include:',
      '• Device model;',
      '• Device operating system;',
      '• Browser configuration;',
      '• Display characteristics;',
      '• Network information;',
      '• Internet connection characteristics;',
      '• Device capabilities;',
      '• Security-related diagnostic information; and',
      '• Technical identifiers necessary for Website functionality.',
      'We do not intentionally collect precise GPS location information through the Website.',
    ],
  },
    {
    id: 'communications',
    title: '5.4 Communications',
    content: [
      'If you communicate with us through email, contact forms, or other communication methods made available through the Website, we may retain records of those communications.',
      'Such records may include:',
      '• Your contact information;',
      '• The date and time of your communication;',
      '• Subject lines;',
      '• Message contents;',
      '• Files or documents voluntarily attached;',
      '• Our responses; and',
      '• Administrative records associated with your inquiry.',
      'These records may be retained to:',
      '• Respond to your inquiry;',
      '• Improve customer service;',
      '• Maintain business records;',
      '• Protect our legal interests;',
      '• Comply with applicable legal obligations;',
      '• Resolve disputes; and',
      '• Improve Website operations.',
    ],
  },

  {
    id: 'publicly-available-information',
    title: '5.5 Publicly Available Information',
    content: [
      'If you voluntarily interact with our official social media pages or publicly reference the Website on third-party platforms, we may access information that you have chosen to make publicly available.',
      'Depending upon your privacy settings, this information may include:',
      '• Public usernames;',
      '• Public profile names;',
      '• Public profile photographs;',
      '• Public comments;',
      '• Public reactions;',
      '• Publicly shared posts; and',
      '• Publicly available content referencing the Website.',
      'We access only information that is publicly available or otherwise made available in accordance with the settings and policies of the applicable third-party platform.',
      'We do not control the privacy practices of social media providers.',
    ],
  },

  {
    id: 'information-not-intentionally-collected',
    title: '5.6 Information We Do Not Intentionally Collect',
    content: [
      'The Website is not designed to collect or process the following categories of information through its normal operation:',
      '• Payment card information;',
      '• Debit card information;',
      '• Credit card information;',
      '• Bank account numbers;',
      '• Financial account credentials;',
      '• Payment authentication information;',
      '• Social Security numbers;',
      '• Passport numbers;',
      '• Driver’s license numbers;',
      '• Government-issued identification numbers;',
      '• Biometric identifiers;',
      '• Genetic information;',
      '• Precise GPS location information;',
      '• Health or medical information;',
      '• Insurance information; and',
      '• Other categories of sensitive Personal Information unless voluntarily provided in connection with a legitimate communication.',
      'The Website does not process donations or payment transactions.',
      'If you voluntarily choose to contribute to the campaign, your payment information is collected directly by the independent third-party crowdfunding platform you choose to use.',
      '© Eclectic Synergy LLC does not receive, process, store, or have access to your payment card information or banking credentials in connection with those transactions.',
    ],
  },

  {
    id: 'information-from-third-parties',
    title: '5.7 Information Received from Third Parties',
    content: [
      'Depending upon your interactions with the Website and third-party technologies, we may receive limited technical or operational information from service providers that support the operation of the Website.',
      'Such providers may include:',
      '• Analytics providers;',
      '• Website hosting providers;',
      '• Security providers;',
      '• Embedded content providers;',
      '• Social media platforms;',
      '• Mapping services; and',
      '• Other technology providers used to support Website functionality.',
      'Any information received from third-party providers will be handled in accordance with this Privacy Policy and applicable law.',
      'The inclusion of third-party services on the Website does not constitute an endorsement of their products, services, privacy practices, or policies.',
    ],
  },

  {
    id: 'sale-or-sharing',
    title: '5.8 Sale or Sharing of Personal Information',
    content: [
      'We do not sell your Personal Information as that term is defined under applicable United States privacy laws.',
      'We also do not knowingly share Personal Information for cross-context behavioral advertising as defined under applicable California privacy laws.',
      'Should our information handling practices materially change in the future, we will update this Privacy Policy before implementing those changes where required by applicable law.',
    ],
  },

  {
    id: 'how-we-use-personal-information',
    title: '6. How We Use Personal Information',
    content: [
      'We use the Personal Information and other information we collect for legitimate business, operational, administrative, security, and legal purposes consistent with the operation of the Website and this Privacy Policy.',
      'Depending upon the circumstances, we may use information to:',
      '• Operate, maintain, administer, and improve the Website;',
      '• Respond to inquiries, requests, comments, and other communications;',
      '• Provide information relating to the campaign and Website content;',
      '• Personalize and improve visitor experience;',
      '• Monitor Website performance and reliability;',
      '• Analyze visitor engagement and Website usage trends;',
      '• Detect, investigate, prevent, and respond to fraud, abuse, unauthorized access, cybersecurity threats, or other unlawful activities;',
      '• Protect the security, integrity, and availability of the Website;',
      '• Enforce our Terms of Service, Disclaimer, and other Website policies;',
      '• Protect our legal rights;',
      '• Comply with applicable legal obligations; and',
      '• Carry out any other purpose permitted by applicable law.',
      'We will not use Personal Information for purposes materially inconsistent with this Privacy Policy without providing any notice or obtaining any consent required by applicable law.',
    ],
  },
    {
    id: 'cookies-and-similar-technologies',
    title: '7. Cookies and Similar Technologies',
    content: [
      'The Website uses cookies and similar technologies to improve functionality, enhance security, understand Website usage, measure performance, and provide a more efficient browsing experience.',
      'Cookies are small text files stored on your browser or device when you visit a website. Similar technologies may include local storage, web beacons, pixels, tags, scripts, session identifiers, and comparable technologies that perform similar functions.',
      'These technologies help us operate the Website efficiently while allowing us to understand how visitors interact with our content.',
      'The categories of cookies and similar technologies used by the Website may include the following.',
    ],
  },

  {
    id: 'essential-cookies',
    title: '7.1 Essential Cookies',
    content: [
      'Essential cookies are necessary for the proper operation of the Website.',
      'These cookies help support:',
      '• Core Website functionality;',
      '• Session management;',
      '• Website security;',
      '• Authentication processes where applicable;',
      '• Load balancing;',
      '• Error prevention;',
      '• Network management;',
      '• System administration; and',
      '• User-selected preferences required for proper Website operation.',
      'Because these cookies are necessary for the operation of the Website, they generally cannot be disabled through the Website itself.',
    ],
  },

  {
    id: 'analytics-cookies',
    title: '7.2 Analytics Cookies',
    content: [
      'Analytics cookies help us better understand how visitors use the Website.',
      'These cookies may collect information relating to:',
      '• Pages visited;',
      '• Navigation paths;',
      '• Time spent on pages;',
      '• Session duration;',
      '• Device type;',
      '• Browser type;',
      '• Operating system;',
      '• Referral sources;',
      '• Website performance;',
      '• Visitor engagement;',
      '• Approximate geographic region; and',
      '• General Website usage trends.',
      'Analytics information helps us evaluate Website performance, identify areas for improvement, and improve the overall visitor experience.',
      'Analytics data is generally aggregated whenever reasonably practicable and is not intended to identify individual visitors directly.',
    ],
  },

  {
    id: 'functional-cookies',
    title: '7.3 Functional Cookies',
    content: [
      'Functional cookies allow the Website to remember certain user preferences and improve usability during future visits.',
      'Depending upon future Website functionality, these cookies may remember:',
      '• Language preferences;',
      '• Accessibility settings;',
      '• Display preferences;',
      '• Interface customization; and',
      '• Other user-selected Website options.',
    ],
  },

  {
    id: 'security-cookies',
    title: '7.4 Security Cookies',
    content: [
      'Security cookies assist in protecting the Website against unauthorized access, malicious activity, abuse, and cybersecurity threats.',
      'These cookies may support:',
      '• Fraud prevention;',
      '• Detection of suspicious activity;',
      '• Protection against automated attacks;',
      '• Network security;',
      '• System integrity; and',
      '• Website stability.',
    ],
  },

  {
    id: 'cookie-retention',
    title: '7.5 Cookie Retention',
    content: [
      'Some cookies remain on your device only during your browsing session and expire when you close your browser.',
      'Other cookies may remain on your device for longer periods depending upon their purpose, your browser settings, and applicable technical requirements.',
      'Cookie retention periods vary depending upon the specific technology used and the purpose for which it is implemented.',
    ],
  },

  {
    id: 'managing-cookies',
    title: '8. Managing Cookies',
    content: [
      'Most Internet browsers allow users to manage cookie preferences.',
      'Depending upon your browser, you may generally choose to:',
      '• Accept all cookies;',
      '• Reject certain categories of cookies;',
      '• Delete previously stored cookies;',
      '• Configure browser settings to notify you before cookies are stored; and',
      '• Block certain third-party cookies.',
      'Please note that disabling cookies may affect:',
      '• Website functionality;',
      '• Performance;',
      '• Security features;',
      '• User preferences; and',
      '• Certain interactive features.',
      'Because browser settings differ, we encourage you to consult your browser’s documentation for information regarding cookie management.',
    ],
  },
    {
    id: 'analytics-services',
    title: '9. Analytics Services',
    content: [
      'The Website uses analytics technologies to better understand visitor behavior, evaluate Website performance, improve usability, and enhance Website functionality.',
      'Analytics services generally collect technical and usage information rather than information intended to identify visitors directly.',
      'Depending upon the analytics services used, information collected may include:',
      '• Pages viewed;',
      '• Navigation patterns;',
      '• Session duration;',
      '• Device characteristics;',
      '• Browser configuration;',
      '• Operating system;',
      '• Referral sources;',
      '• Approximate geographic location derived from IP address;',
      '• Website performance statistics; and',
      '• Error diagnostics.',
      'Analytics information helps us:',
      '• Improve Website design;',
      '• Enhance visitor experience;',
      '• Identify technical issues;',
      '• Monitor Website reliability;',
      '• Evaluate Website performance; and',
      '• Better understand how visitors use the Website.',
      'Where reasonably practicable, analytics information is reviewed in aggregated form.',
    ],
  },

  {
    id: 'google-analytics',
    title: '9.1 Google Analytics',
    content: [
      'The Website uses Google Analytics, a web analytics service provided by Google, to better understand how visitors interact with the Website.',
      'Google Analytics may use cookies and similar technologies to collect information including:',
      '• Pages visited;',
      '• Time spent on pages;',
      '• Navigation paths;',
      '• Device information;',
      '• Browser information;',
      '• Approximate geographic location derived from IP address;',
      '• Referral sources;',
      '• Website performance metrics; and',
      '• Technical diagnostic information.',
      'Information generated through Google Analytics helps us:',
      '• Improve Website functionality;',
      '• Better understand visitor interests;',
      '• Evaluate Website performance;',
      '• Improve Website content;',
      '• Detect technical issues; and',
      '• Improve overall user experience.',
      'Google processes information in accordance with its own Privacy Policy and applicable terms.',
      'For additional information regarding Google’s privacy practices, visitors should review Google’s applicable privacy documentation.',
    ],
  },

  {
    id: 'embedded-content',
    title: '10. Embedded Content and Third-Party Technologies',
    content: [
      'The Website incorporates certain third-party technologies and embedded content to enhance functionality, improve visitor experience, provide educational resources, and support the operation of the Website.',
      'Embedded content and third-party technologies may include:',
      '• Video players;',
      '• Interactive maps;',
      '• Social media content;',
      '• Website analytics tools;',
      '• Font delivery services;',
      '• Content delivery technologies; and',
      '• Other technologies reasonably necessary for the operation and functionality of the Website.',
      'When you interact with embedded content or third-party technologies, those providers may automatically collect certain technical information directly from your browser or device in accordance with their own privacy policies, terms of service, and applicable legal requirements.',
      'We do not control how independent third-party providers collect, use, disclose, retain, or otherwise process information obtained through their technologies.',
      'The inclusion of third-party technologies on the Website does not constitute an endorsement of their privacy practices, products, or services.',
      'Visitors are encouraged to review the privacy policies of all third-party providers before interacting with their services.',
    ],
  },

  {
    id: 'youtube-videos',
    title: '10.1 YouTube Videos',
    content: [
      'The Website includes videos hosted by YouTube to provide educational and informational content relating to the campaign.',
      'When you view or interact with embedded YouTube videos, YouTube and its affiliated companies may automatically collect technical and usage information in accordance with their own privacy practices.',
      'We do not control YouTube’s data collection practices.',
      'Your use of YouTube content is governed by YouTube’s Terms of Service and Google’s Privacy Policy.',
    ],
  },

  {
    id: 'google-maps',
    title: '10.2 Google Maps',
    content: [
      'The Website may include Google Maps to provide geographic information or assist visitors in locating relevant places.',
      'When you interact with Google Maps, Google may automatically collect technical and usage information necessary to provide mapping services.',
      'Such collection is governed exclusively by Google’s own privacy practices and applicable terms.',
      'We encourage visitors to review Google’s Privacy Policy for additional information regarding Google’s processing of Personal Information.',
    ],
  },

  {
    id: 'google-fonts',
    title: '10.3 Google Fonts',
    content: [
      'The Website uses Google Fonts to provide a consistent and accessible visual presentation across different browsers and devices.',
      'Depending upon your browser configuration and Google’s implementation, your browser may communicate directly with Google’s servers to retrieve font resources.',
      'Any information processed by Google in connection with those requests is governed by Google’s own Privacy Policy.',
    ],
  },

  {
    id: 'social-media-platforms',
    title: '11. Social Media Platforms',
    content: [
      'The Website maintains an online presence through independent social media platforms to provide updates, educational information, and campaign-related content.',
      'These platforms may include:',
      '• Facebook;',
      '• Instagram;',
      '• TikTok;',
      '• YouTube; and',
      '• Additional social media platforms that may be used in the future.',
      'If you choose to interact with our social media content, your activities are governed by the privacy policies, terms of service, and community guidelines of the applicable platform.',
      'We do not control the privacy practices, security measures, or data handling procedures of social media platforms.',
    ],
  },

  {
    id: 'external-crowdfunding-platforms',
    title: '12. External Crowdfunding Platforms',
    content: [
      'The Website provides links to one or more independent third-party crowdfunding platforms through which visitors may voluntarily choose to support the campaign.',
      'Participation in any fundraising activity is entirely voluntary.',
      'The Website does not:',
      '• operate a crowdfunding platform;',
      '• process donations;',
      '• collect payment card information;',
      '• receive banking credentials;',
      '• process payment transactions;',
      '• manage donor payment records; or',
      '• determine how third-party fundraising platforms collect or process Personal Information.',
      'When you choose to make a contribution, you leave our Website and are redirected to the selected third-party crowdfunding platform.',
      'All Personal Information and payment information submitted through that platform are collected and processed exclusively by the third-party provider in accordance with its own policies.',
      'Visitors should carefully review the applicable policies of any third-party crowdfunding platform before submitting Personal Information or completing a financial transaction.',
    ],
  },
    {
  id: 'communications-13',
  title: '13. Communications',
  content: [
      'If you contact us through the Website or by email, we may use your information to:',
      '• Respond to your inquiry;',
      '• Provide requested information;',
      '• Address technical issues;',
      '• Respond to media or business inquiries;',
      '• Improve our communications;',
      '• Maintain appropriate business records;',
      '• Protect our legal rights; and',
      '• Comply with applicable legal obligations.',
      'We use communications only for purposes reasonably related to the reason they were provided unless otherwise permitted or required by applicable law.',
      'Email Communications',
      'While we take reasonable measures to protect communications under our control, email is not always a secure method of communication.',
      'Accordingly, visitors should avoid transmitting highly sensitive Personal Information, financial information, passwords, or other confidential information through ordinary, unsecured email unless appropriate security measures are used.',
      'If you believe your communication requires enhanced confidentiality or security, you should consider using an alternative method of communication where appropriate.',
    ],
  },

  {
    id: 'information-sharing',
    title: '14. Information Sharing and Disclosure',
    content: [
      '© Eclectic Synergy LLC respects the privacy of Website visitors and is committed to limiting the disclosure of Personal Information to circumstances that are lawful, appropriate, and reasonably necessary for the operation of the Website.',
      'We do not sell your Personal Information and do not disclose Personal Information except as described in this Privacy Policy, as required by applicable law, or as reasonably necessary to operate, secure, maintain, improve, or protect the Website.',
    ],
  },

  {
    id: 'service-providers',
    title: '14.1 Service Providers',
    content: [
      'We may share limited Personal Information and technical information with carefully selected third-party service providers that perform services on our behalf or support the operation of the Website.',
      'These providers may assist with:',
      '• Website hosting;',
      '• Cloud infrastructure;',
      '• Website security;',
      '• Content delivery;',
      '• Analytics;',
      '• Technical support;',
      '• System administration;',
      '• Website maintenance;',
      '• Email communications;',
      '• Performance monitoring;',
      '• Data storage;',
      '• Disaster recovery; and',
      '• Other technology services reasonably necessary to support the Website.',
      'Whenever reasonably practicable, we seek to work with service providers that maintain appropriate safeguards designed to protect Personal Information.',
    ],
  },

  {
    id: 'third-party-technologies',
    title: '14.2 Third-Party Technologies',
    content: [
      'Certain third-party technologies integrated into the Website may receive technical information directly from your browser or device when you interact with their services.',
      'These technologies may include:',
      '• Google Analytics;',
      '• YouTube;',
      '• Google Maps;',
      '• Google Fonts;',
      '• Social media integrations;',
      '• Website security technologies;',
      '• Content delivery technologies; and',
      '• Other technologies reasonably necessary for the operation of the Website.',
      'Information collected by these providers is governed by their respective privacy policies, contractual terms, and applicable legal obligations.',
      'We neither control nor assume responsibility for the independent privacy practices of third-party technology providers.',
    ],
  },

  {
    id: 'legal-compliance',
    title: '14.3 Legal Compliance',
    content: [
      'We may disclose Personal Information where we reasonably believe disclosure is necessary or appropriate to:',
      '• Comply with applicable laws;',
      '• Respond to subpoenas;',
      '• Respond to court orders;',
      '• Respond to lawful governmental requests;',
      '• Cooperate with regulatory authorities;',
      '• Comply with legal process;',
      '• Fulfill legal reporting obligations;',
      '• Protect the safety of individuals;',
      '• Prevent unlawful activity; and',
      '• Investigate suspected violations of law.',
      'Such disclosures will be limited to the extent reasonably necessary under the circumstances.',
    ],
  },

  {
    id: 'protection-of-rights',
    title: '14.4 Protection of Rights and Interests',
    content: [
      'We may disclose information where reasonably necessary to:',
      '• Protect the rights, property, or safety of © Eclectic Synergy LLC;',
      '• Protect the Website and its supporting infrastructure;',
      '• Protect Website visitors;',
      '• Protect service providers;',
      '• Detect or prevent fraud;',
      '• Investigate unauthorized access;',
      '• Respond to cybersecurity incidents;',
      '• Enforce our legal rights;',
      '• Defend legal claims;',
      '• Preserve evidence;',
      '• Exercise contractual rights; and',
      '• Protect the integrity of ongoing or anticipated legal proceedings.',
    ],
  },

  {
    id: 'business-transactions',
    title: '14.5 Business Transactions',
    content: [
      'Personal Information maintained in connection with the Website may be transferred as part of a merger, acquisition, asset purchase, financing transaction, corporate reorganization, business restructuring, sale of assets, or similar business transaction.',
      'Any successor organization will be expected to continue protecting Personal Information in a manner substantially consistent with this Privacy Policy until a revised Privacy Policy is adopted.',
    ],
  },

  {
    id: 'professional-advisors',
    title: '14.6 Professional Advisors',
    content: [
      'We may disclose Personal Information where reasonably necessary to obtain professional advice or services.',
      'Such recipients may include:',
      '• Attorneys;',
      '• Accountants;',
      '• Auditors;',
      '• Consultants;',
      '• Insurance providers; and',
      '• Other professional advisors.',
      'These disclosures will be limited to information reasonably necessary for the services requested and subject to appropriate confidentiality obligations where applicable.',
    ],
  },
    {
    id: 'data-security',
    title: '15. Data Security',
    content: [
      'Protecting Personal Information is an important responsibility.',
      'Accordingly, we implement reasonable administrative, technical, physical, and organizational safeguards designed to protect Personal Information against unauthorized access, disclosure, alteration, destruction, misuse, or other unlawful processing.',
      'Depending upon operational requirements, these safeguards may include:',
      '• Secure hosting infrastructure;',
      '• Firewall protections;',
      '• Network monitoring;',
      '• Access controls;',
      '• Role-based permissions;',
      '• Authentication procedures;',
      '• Encryption where appropriate;',
      '• Malware protection;',
      '• Vulnerability assessments;',
      '• Security monitoring;',
      '• System logging;',
      '• Software updates;',
      '• Patch management;',
      '• Administrative safeguards;',
      '• Personnel access limitations;',
      '• Record management procedures; and',
      '• Business continuity planning.',
      'Despite our efforts, no method of transmitting information over the Internet or storing electronic information can be guaranteed to be completely secure.',
      'Accordingly, while we strive to protect Personal Information using reasonable safeguards, we cannot guarantee absolute security.',
    ],
  },

  {
    id: 'security-incidents',
    title: '15.1 Security Incidents',
    content: [
      'In the event we become aware of a security incident affecting Personal Information, we will investigate the matter and take actions we determine to be appropriate under the circumstances.',
      'Where notification is required by applicable law, affected individuals and appropriate governmental authorities will be notified in accordance with applicable legal requirements.',
    ],
  },

  {
    id: 'user-responsibilities',
    title: '15.2 User Responsibilities',
    content: [
      'Visitors also play an important role in protecting their own information.',
      'You are responsible for:',
      '• Using secure devices;',
      '• Maintaining updated browsers and operating systems;',
      '• Protecting your own passwords and credentials where applicable;',
      '• Exercising caution when sharing Personal Information online; and',
      '• Promptly notifying us of suspected security concerns relating to the Website.',
      'Failure to follow reasonable security practices may increase the risk associated with transmitting information over the Internet.',
    ],
  },

  {
    id: 'data-retention',
    title: '16. Data Retention',
    content: [
      'We retain Personal Information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.',
      'Retention periods depend upon the nature of the information, legal requirements, security needs, operational needs, and the establishment, exercise, or defense of legal claims.',
      'When Personal Information is no longer reasonably necessary, we may securely delete, permanently erase, anonymize, or aggregate the information in accordance with applicable law.',
    ],
  },

  {
    id: 'international-data-transfers',
    title: '17. International Data Transfers',
    content: [
      'The Website is operated from the United States.',
      'Visitors located outside the United States acknowledge that Personal Information may be transferred to, processed in, or stored in jurisdictions whose privacy laws may differ from those in their own country.',
      'Where reasonably practicable, we seek to work with service providers that maintain appropriate safeguards designed to protect Personal Information.',
    ],
  },

  {
    id: 'childrens-privacy',
    title: "18. Children's Privacy",
    content: [
      'The Website is intended for a general audience and is not directed toward children under thirteen (13) years of age.',
      'We do not knowingly collect Personal Information from children under the age of thirteen through the Website.',
      'If we become aware that Personal Information has been collected from a child without the authorization required by applicable law, we will take reasonable steps to delete such information.',
      'Parents or legal guardians who believe a child has provided Personal Information are encouraged to contact us.',
    ],
  },

  {
    id: 'do-not-track',
    title: '19. Do Not Track Signals',
    content: [
      'Certain Internet browsers include a feature known as "Do Not Track" ("DNT").',
      'At present, there is no universally accepted industry standard governing how websites should recognize or respond to DNT signals.',
      'Accordingly, the Website does not currently alter its data collection practices in response to browser-based DNT signals.',
    ],
  },

  {
    id: 'third-party-websites',
    title: '20. Third-Party Websites',
    content: [
      'The Website contains links to third-party websites, applications, services, and online resources for the convenience of visitors.',
      'Once you leave the Website or interact with a third-party service, your information becomes subject to that third party’s own privacy policy, terms of service, and data handling practices.',
      'We neither own nor control third-party websites and are not responsible for their privacy practices, security procedures, content, accuracy, availability, products, services, or compliance with applicable law.',
      'Visitors should carefully review the privacy policies and terms of any third-party websites they choose to visit before providing Personal Information.',
    ],
  },
    {
    id: 'data-integrity',
    title: '21. Data Integrity and Accuracy',
    content: [
      'We strive to maintain Personal Information that is reasonably accurate, complete, and current for the purposes for which it is processed.',
      'Because much of the information we maintain is provided directly by visitors, users are encouraged to notify us if corrections or updates are appropriate.',
      'Where reasonably practicable and permitted by applicable law, we will take reasonable steps to correct inaccurate Personal Information brought to our attention.',
    ],
  },

  {
    id: 'interpretation',
    title: '21.1 Interpretation of this Privacy Policy',
    content: [
      'This Privacy Policy should be interpreted in a manner consistent with applicable law and with the legitimate operation of the Website.',
      'Headings are provided solely for convenience and do not affect interpretation.',
      'If any provision is determined to be invalid or unenforceable, the remaining provisions shall continue in full force and effect to the fullest extent permitted by law.',
    ],
  },

  {
    id: 'reservation-of-rights',
    title: '21.2 Reservation of Rights',
    content: [
      'We reserve all rights not expressly granted in this Privacy Policy.',
      'Nothing contained in this Privacy Policy limits any legal rights, defenses, privileges, or remedies available to © Eclectic Synergy LLC under applicable law.',
    ],
  },

  {
    id: 'force-majeure',
    title: '21.3 Force Majeure',
    content: [
      'We shall not be liable for delays or failures in performance resulting from events beyond our reasonable control, including natural disasters, acts of government, cyber incidents, utility interruptions, labor disputes, war, terrorism, pandemics, or failures affecting Internet infrastructure or third-party service providers.',
    ],
  },

  {
    id: 'privacy-rights',
    title: '22. Your Privacy Rights',
    content: [
      'Depending upon your jurisdiction of residence and applicable law, you may have certain privacy rights relating to your Personal Information.',
      'These rights may include the right to request access to Personal Information, request correction of inaccurate information, request deletion where permitted by law, request information regarding our privacy practices, and exercise other rights available under applicable law.',
      'Requests may be submitted using the contact information provided in this Privacy Policy.',
      'We will respond to verified requests in accordance with applicable legal requirements.',
    ],
  },

  {
    id: 'california-rights',
    title: '23. California Privacy Rights',
    content: [
      'Residents of California may have additional privacy rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), and other applicable California laws.',
      'Where applicable, qualifying California residents may exercise rights provided by those laws, subject to applicable exceptions and verification requirements.',
    ],
  },

  {
    id: 'other-us-rights',
    title: '24. Other United States Privacy Rights',
    content: [
      'Residents of certain U.S. states may have additional privacy rights under applicable state privacy laws.',
      'Where such laws apply, we will honor qualifying requests in accordance with applicable legal requirements.',
    ],
  },

  {
    id: 'changes-to-policy',
    title: '25. Changes to this Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in applicable law, Website functionality, technology, operational practices, or other legitimate business needs.',
      'When material changes are made, we will revise the "Last Updated" date appearing on this page.',
      'Your continued use of the Website after an updated Privacy Policy becomes effective constitutes your acknowledgment of the revised Policy.',
    ],
  },

  {
    id: 'contact-information',
    title: '26. Contact Information',
    content: [
      'If you have questions regarding this Privacy Policy or our privacy practices, you may contact us at:',
      'Email: contact@theelephantinthecourtroom.com',
      'Website: The Elephant In The Court Room',
    ],
  },

  {
    id: 'severability',
    title: '27. Severability',
    content: [
      'If any provision of this Privacy Policy is determined to be unlawful, invalid, or unenforceable, the remaining provisions shall remain in full force and effect to the fullest extent permitted by law.',
    ],
  },

  {
    id: 'no-waiver',
    title: '28. No Waiver',
    content: [
      'Failure by © Eclectic Synergy LLC to enforce any provision of this Privacy Policy shall not constitute a waiver of that provision or of any other provision.',
    ],
  },

  {
    id: 'governing-law',
    title: '29. Governing Law',
    content: [
      'This Privacy Policy shall be governed by and interpreted in accordance with the laws of the State of Florida and applicable laws of the United States, without regard to conflict of law principles.',
    ],
  },

  {
    id: 'entire-policy',
    title: '30. Entire Privacy Policy',
    content: [
      'This Privacy Policy constitutes the entire privacy policy governing the Website and supersedes any prior privacy statements relating to the Website.',
    ],
  },

  {
    id: 'acknowledgment',
    title: '31. Acknowledgment',
    content: [
      'By accessing or using the Website, you acknowledge that you have read, understood, and agreed to this Privacy Policy.',
    ],
  },
]


export default function Privacy() {
  return (
    <>
      <SEO data={privacySeo} />

            <StructuredData
        data={webPageSchema({
          title: privacySeo.title,
          description: privacySeo.description,
          path: privacySeo.canonical,
        })}
      />

      <Breadcrumbs
        items={[
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'Privacy',
            path: '/privacy',
          },
        ]}
      />

      <Hero
        subtitle="Learn how we collect, use, protect, disclose, and safeguard your information when you use The Elephant In The Court Room website and related services."
      />

      <LegalPage
        title="Privacy Policy"
        lastUpdated="August 3, 2026"
        sections={sections}
      />
    </>
  )
}