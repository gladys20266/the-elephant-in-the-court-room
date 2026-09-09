import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Heart, Share2 } from 'lucide-react'
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { HiOutlineLink } from 'react-icons/hi'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Hero from '@/components/Hero'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import ContactForm from '@/components/ContactForm'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { webPageSchema } from '@/seo/pageSchemas'
import SectionButton from '@/components/SectionButton'
import { tinaField, useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import fallbackContact from '@/content/contact.json'


interface ContactPlatform {
  [key: string]: unknown
  key: string
  label: string
}

interface ContactResourceCard {
  [key: string]: unknown
  key: string
  eyebrow: string
  title: string
  description: string
  buttonText: string
  route: string
}

interface ContactData {
  [key: string]: unknown
  pageTitle: string
  pageDescription: string
  heroTitle: string
  heroSubtitle: string
  contactContentTitle: string
  contactContentDescription: string
  form: {
    title: string
    description: string
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    inquiryTypeLabel: string
    inquiryPlaceholder: string
    inquiryOptions: Array<{ key: string; label: string }>
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitButtonText: string
    privacyNotice: string
    successTitle: string
    successMessage: string
  }
  contactInformation: {
    title: string
    emailLabel: string
    email: string
    phoneLabel: string
    phone: string
    campaignLabel: string
    campaignName: string
    campaignSubtitle: string
  }
  support: {
    title: string
    description: string
    emphasis: string
    gofundmeText: string
    caseDocumentsButtonText: string
    caseDocumentsRoute: string
  }
  share: {
    title: string
    description: string
    emphasis: string
    platforms: ContactPlatform[]
    copySuccessText: string
    instructionText: string
  }
  resources: {
    eyebrow: string
    title: string
    description: string
    cards: ContactResourceCard[]
  }
}

const SHARE_PLATFORMS = [
  {
    key: 'facebook',
    icon: FaFacebook,
    color: '#1877F2',
  },
  {
    key: 'youtube',
    icon: FaYoutube,
    color: '#FF0000',
  },
  {
    key: 'tiktok',
    icon: FaTiktok,
    color: '#000000',
  },
  {
    key: 'whatsapp',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    key: 'email',
    icon: MdEmail,
    color: '#5B3178',
  },
  {
    key: 'copy-link',
    icon: HiOutlineLink,
    color: '#C4D82E',
    isCopy: true,
  },
] as const

function normalizePhoneForHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, '')
  return digits.startsWith('+') ? digits : `+${digits}`
}

type ContactResponse = Awaited<
  ReturnType<typeof client.queries.contact>
>

interface ContactVisualProps {
  response: ContactResponse
}

function ContactVisual({ response }: ContactVisualProps) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId: () =>
      'src/content/contact.json',
  })

  const content = {
  ...fallbackContact,
  ...data.contact,
  form: {
    ...fallbackContact.form,
    ...(data.contact?.form ?? {}),
  },
  contactInformation: {
    ...fallbackContact.contactInformation,
    ...(data.contact?.contactInformation ?? {}),
  },
  support: {
    ...fallbackContact.support,
    ...(data.contact?.support ?? {}),
  },
  share: {
    ...fallbackContact.share,
    ...(data.contact?.share ?? {}),
  },
  resources: {
    ...fallbackContact.resources,
    ...(data.contact?.resources ?? {}),
  },
} as unknown as ContactData

  const [copySuccess, setCopySuccess] = useState(false)
  const sectionRef = useSectionReveal<HTMLElement>()

  const showToast = (message: string) => {
    const toast = document.createElement('div')

    toast.className =
      'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'

    toast.textContent = message
    toast.setAttribute('role', 'status')
    toast.setAttribute('aria-live', 'polite')

    document.body.appendChild(toast)

    requestAnimationFrame(() => {
      toast.style.transition = 'opacity 200ms, transform 200ms'
      toast.style.opacity = '1'
    })

    setTimeout(() => {
      toast.style.opacity = '0'
      setTimeout(() => toast.remove(), 200)
    }, 2000)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopySuccess(true)
      showToast(content.share.copySuccessText)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShareClick = (platformKey: string) => {
    if (platformKey === 'copy-link') {
      handleCopyLink()
      return
    }

    const WEBSITE_URL =
      'https://www.theelephantinthecourtroom.com'

    const pageUrl = encodeURIComponent(WEBSITE_URL)

    const message = encodeURIComponent(
      'Help expose an 11-year legal injustice. Learn more:',
    )

    switch (platformKey) {
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
          '_blank',
          'noopener,noreferrer',
        )
        break

      case 'tiktok':
        window.open(
          'https://www.tiktok.com',
          '_blank',
          'noopener,noreferrer',
        )
        break

      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${message}%20${pageUrl}`,
          '_blank',
          'noopener,noreferrer',
        )
        break

      case 'email':
        window.location.href =
          `mailto:?subject=${encodeURIComponent(
            'The Elephant In The Court Room',
          )}&body=${message}%20${WEBSITE_URL}`
        break

      default:
        break
    }
  }

  const shareLabelByKey = new Map(
    content.share.platforms.map((platform) => [
      platform.key,
      platform.label,
    ]),
  )

  return (
    <>
      <SEO
        data={{
          title: content.pageTitle,
          description: content.pageDescription,
          canonical: '/contact',
          type: 'website',
        }}
      />

      <StructuredData
        data={webPageSchema({
          title: content.pageTitle,
          description: content.pageDescription,
          path: '/contact',
        })}
      />

      <main
        id="contact-page"
        aria-label="Contact page"
      >
        <Breadcrumbs
          items={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Contact',
              path: '/contact',
            },
          ]}
        />

        <Hero
          section="Contact"
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          titleTinaSource={{
            object: content,
            field: 'heroTitle',
          }}
          subtitleTinaSource={{
            object: content,
            field: 'heroSubtitle',
          }}
        />

        <section
          id="contact-content"
          ref={sectionRef}
          aria-labelledby="contact-content-title"
          aria-describedby="contact-content-description"
          className="bg-white pb-16 pt-8 md:pb-20 md:pt-10"
        >
          <div className="content-container mx-auto max-w-[1280px]">
            <h2
              id="contact-content-title"
              className="sr-only"
              data-tina-field={tinaField(
                content,
                'contactContentTitle',
              )}
            >
              {content.contactContentTitle}
            </h2>

            <p
              id="contact-content-description"
              className="sr-only"
              data-tina-field={tinaField(
                content,
                'contactContentDescription',
              )}
            >
              {content.contactContentDescription}
            </p>

            <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[54%,46%] xl:gap-6">
              <ContactForm form={content.form} />

              <div className="flex flex-col gap-4">
                <Card
                  aria-labelledby="contact-information-title"
                  className="reveal-child overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <CardContent className="px-8 py-7">
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple"
                        aria-hidden="true"
                      >
                        <Mail
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </div>

                      <CardTitle
                        id="contact-information-title"
                        className="text-[26px] font-black tracking-tight text-purple"
                        data-tina-field={tinaField(
                          content.contactInformation,
                          'title',
                        )}
                      >
                        {content.contactInformation.title}
                      </CardTitle>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
                        <Mail
                          className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                          aria-hidden="true"
                        />

                        <div>
                          <p
                            className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60"
                            data-tina-field={tinaField(
                              content.contactInformation,
                              'emailLabel',
                            )}
                          >
                            {content.contactInformation.emailLabel}
                          </p>

                          <a
                            href={`mailto:${content.contactInformation.email}`}
                            aria-label={`Email ${content.contactInformation.email}`}
                            className="text-[16px] font-semibold text-charcoal transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                            data-tina-field={tinaField(
                              content.contactInformation,
                              'email',
                            )}
                          >
                            {content.contactInformation.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
                        <Phone
                          className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                          aria-hidden="true"
                        />

                        <div>
                          <p
                            className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60"
                            data-tina-field={tinaField(
                              content.contactInformation,
                              'phoneLabel',
                            )}
                          >
                            {content.contactInformation.phoneLabel}
                          </p>

                          <a
                            href={`tel:${normalizePhoneForHref(
                              content.contactInformation.phone,
                            )}`}
                            aria-label={`Call ${content.contactInformation.phone}`}
                            className="text-[16px] font-semibold text-charcoal transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                            data-tina-field={tinaField(
                              content.contactInformation,
                              'phone',
                            )}
                          >
                            {content.contactInformation.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin
                          className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                          aria-hidden="true"
                        />

                        <div>
                          <p
                            className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60"
                            data-tina-field={tinaField(
                              content.contactInformation,
                              'campaignLabel',
                            )}
                          >
                            {content.contactInformation.campaignLabel}
                          </p>

                          <p className="whitespace-pre-line text-[15px] leading-7 text-charcoal/85">
                            <span
                              data-tina-field={tinaField(
                                content.contactInformation,
                                'campaignName',
                              )}
                            >
                              {content.contactInformation.campaignName}
                            </span>
                            {'\n'}
                            <span
                              data-tina-field={tinaField(
                                content.contactInformation,
                                'campaignSubtitle',
                              )}
                            >
                              {content.contactInformation.campaignSubtitle}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  aria-labelledby="support-campaign-title"
                  className="reveal-child overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <CardContent className="px-8 py-7">
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple"
                        aria-hidden="true"
                      >
                        <Heart
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </div>

                      <CardTitle
                        id="support-campaign-title"
                        className="text-card-title"
                        data-tina-field={tinaField(
                          content.support,
                          'title',
                        )}
                      >
                        {content.support.title}
                      </CardTitle>
                    </div>

                    <p
                      className="mb-4 text-body leading-relaxed text-charcoal/80"
                      data-tina-field={tinaField(
                        content.support,
                        'description',
                      )}
                    >
                      {content.support.description}
                    </p>

                    <p
                      className="mb-6 text-body font-bold text-purple"
                      data-tina-field={tinaField(
                        content.support,
                        'emphasis',
                      )}
                    >
                      {content.support.emphasis}
                    </p>

                    <div
                      className="mt-6 border-t border-charcoal/10"
                      aria-hidden="true"
                    />

                    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div
                        aria-label="GoFundMe campaign coming soon"
                        className="flex min-h-[50px] items-center justify-center gap-3 rounded-lg border border-charcoal bg-lime px-6 py-3 text-center text-[15px] font-black uppercase tracking-[0.08em] text-charcoal"
                      >
                        <Heart
                          className="h-6 w-6 shrink-0"
                          style={{
                            color: '#6B3A8F',
                            fill: '#6B3A8F',
                          }}
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />

                        <span
                          data-tina-field={tinaField(
                            content.support,
                            'gofundmeText',
                          )}
                        >
                          {content.support.gofundmeText}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <SectionButton
                          text={content.support.caseDocumentsButtonText}
                          to={content.support.caseDocumentsRoute}
                          dataTinaField={tinaField(
                            content.support,
                            'caseDocumentsButtonText',
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  aria-labelledby="share-campaign-title"
                  className="reveal-child overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <CardContent className="px-8 py-7">
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple"
                        aria-hidden="true"
                      >
                        <Share2
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </div>

                      <CardTitle
                        id="share-campaign-title"
                        className="text-card-title"
                        data-tina-field={tinaField(
                          content.share,
                          'title',
                        )}
                      >
                        {content.share.title}
                      </CardTitle>
                    </div>

                    <p
                      className="mb-2 text-body leading-relaxed text-charcoal/80"
                      data-tina-field={tinaField(
                        content.share,
                        'description',
                      )}
                    >
                      {content.share.description}
                    </p>

                    <p
                      className="mb-7 text-body font-medium text-charcoal/80"
                      data-tina-field={tinaField(
                        content.share,
                        'emphasis',
                      )}
                    >
                      {content.share.emphasis}
                    </p>

                    <div
                      className="grid grid-cols-3 gap-5 sm:grid-cols-6"
                      aria-label="Campaign sharing options"
                    >
                      {SHARE_PLATFORMS.map((platform) => {
                        const label =
                          shareLabelByKey.get(platform.key) ||
                          platform.key

                        const source = content.share.platforms.find(
                          (item) => item.key === platform.key,
                        )

                        return (
                          <button
                            key={platform.key}
                            type="button"
                            onClick={() =>
                              handleShareClick(platform.key)
                            }
                            aria-label={
                              platform.key === 'copy-link'
                                ? 'Copy campaign website link'
                                : `Share campaign on ${label}`
                            }
                            className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-off-white transition-all duration-200 hover:-translate-y-1 hover:border-lime hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                          >
                            <platform.icon
                              className="h-11 w-11"
                              style={{ color: platform.color }}
                              aria-hidden="true"
                            />

                            <span
                              className="text-center text-[11px] font-medium leading-tight text-charcoal"
                              data-tina-field={
                                source
                                  ? tinaField(source, 'label')
                                  : undefined
                              }
                            >
                              {label}
                            </span>
                          </button>
                        )
                      })}
                    </div>

                    {copySuccess && (
                      <p
                        role="status"
                        aria-live="polite"
                        className="text-center text-body-small text-success"
                      >
                        {content.share.copySuccessText}
                      </p>
                    )}

                    <p
                      className="text-center text-body-small text-charcoal/50"
                      data-tina-field={tinaField(
                        content.share,
                        'instructionText',
                      )}
                    >
                      {content.share.instructionText}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-resources-heading"
          className="bg-off-white py-16 md:py-20"
        >
          <div className="content-container mx-auto max-w-[1280px] px-5">
            <div className="mb-10 text-center">
              <p
                className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#D94B8A]"
                data-tina-field={tinaField(
                  content.resources,
                  'eyebrow',
                )}
              >
                {content.resources.eyebrow}
              </p>

              <h2
                id="contact-resources-heading"
                className="text-3xl font-bold text-purple md:text-4xl"
                data-tina-field={tinaField(
                  content.resources,
                  'title',
                )}
              >
                {content.resources.title}
              </h2>

              <p
                className="mx-auto mt-4 max-w-3xl text-body leading-8 text-charcoal/80"
                data-tina-field={tinaField(
                  content.resources,
                  'description',
                )}
              >
                {content.resources.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {content.resources.cards.map((card) => (
                <div
                  key={card.key}
                  className="group flex flex-col rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p
                    className="mb-2 text-xs font-black uppercase tracking-[0.15em] text-[#D94B8A]"
                    data-tina-field={tinaField(card, 'eyebrow')}
                  >
                    {card.eyebrow}
                  </p>

                  <h3
                    className="text-2xl font-bold text-purple"
                    data-tina-field={tinaField(card, 'title')}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="mt-3 flex-1 text-body-small leading-7 text-charcoal/70"
                    data-tina-field={tinaField(
                      card,
                      'description',
                    )}
                  >
                    {card.description}
                  </p>

                  <div className="mt-5">
                    <SectionButton
                      text={card.buttonText}
                      to={card.route}
                      dataTinaField={tinaField(
                        card,
                        'buttonText',
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default function Contact() {
  const [response, setResponse] =
    useState<ContactResponse | null>(null)

  useEffect(() => {
    let cancelled = false

    client.queries
      .contact({
        relativePath: 'contact.json',
      })
      .then((result) => {
        if (!cancelled) {
          setResponse(result)
        }
      })
      .catch((error) => {
        console.error('Failed to load Contact content:', error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (!response) {
    return null
  }

  return <ContactVisual response={response} />
}
