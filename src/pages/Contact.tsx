import { useState } from 'react'
import Hero from '@/components/Hero'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import ContactForm from '@/components/ContactForm'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import StructuredData from '@/components/seo/StructuredData'
import { webPageSchema } from '@/seo/pageSchemas'
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Share2,
  ExternalLink,
} from 'lucide-react'
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { HiOutlineLink } from 'react-icons/hi'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

// Share platforms with brand colors
const SHARE_PLATFORMS = [
  {
    icon: FaFacebook,
    label: 'Facebook',
    color: '#1877F2',
  },
  {
    icon: FaYoutube,
    label: 'YouTube',
    color: '#FF0000',
  },
  {
    icon: FaTiktok,
    label: 'TikTok',
    color: '#000000',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    color: '#25D366',
  },
  {
    icon: MdEmail,
    label: 'Email',
    color: '#5B3178',
  },
  {
    icon: HiOutlineLink,
    label: 'Copy Link',
    color: '#C4D82E',
    isCopy: true,
  },
]

const contactSeo = {
  title: 'Contact | The Elephant In The Court Room',
  description:
    'Contact The Elephant In The Court Room campaign, ask questions, make media inquiries, learn how to support the campaign, or share the case.',
  canonical: '/contact',
  type: 'website' as const,
}

export default function Contact() {
  const sectionRef = useSectionReveal<HTMLElement>()

  const [copySuccess, setCopySuccess] = useState(false)

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
      showToast('Link copied!')
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShareClick = (platform: typeof SHARE_PLATFORMS[0]) => {
    if (platform.isCopy) {
      handleCopyLink()
      return
    }

    const WEBSITE_URL = 'https://www.theelephantinthecourtroom.com'
    const pageUrl = encodeURIComponent(WEBSITE_URL)
    const message = encodeURIComponent(
      'Help expose an 11-year legal injustice. Learn more:'
    )

    switch (platform.label) {
      case 'Facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
          '_blank'
        )
        break

      case 'TikTok':
        window.open('https://www.tiktok.com', '_blank')
        break

      case 'WhatsApp':
        window.open(
          `https://wa.me/?text=${message}%20${pageUrl}`,
          '_blank'
        )
        break

      case 'Email':
        window.location.href =
          `mailto:?subject=${encodeURIComponent(
            'The Elephant In The Court Room'
          )}&body=${message}%20${WEBSITE_URL}`
        break

      default:
        break
    }
  }

  return (
    <>
      <SEO data={contactSeo} />

      <StructuredData
        data={webPageSchema({
          title: contactSeo.title,
          description: contactSeo.description,
          path: contactSeo.canonical,
        })}
      />

      <Hero
        section="Contact"
        title="Get in Touch"
        subtitle="Have a question, a media inquiry, or want to support the campaign? We'd love to hear from you."
      />

      <section
        id="contact-content"
        ref={sectionRef}
        aria-labelledby="contact-content-title"
        aria-describedby="contact-content-description"
        className="bg-white pb-16 pt-8 md:pb-20 md:pt-10"
      >
        <div className="content-container mx-auto max-w-[1280px]">
          <h1
            id="contact-content-title"
            className="sr-only"
          >
            Contact The Elephant In The Court Room
          </h1>

          <p
            id="contact-content-description"
            className="sr-only"
          >
            Contact information, campaign support options, case documents,
            and ways to share this campaign.
          </p>

          <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[54%,46%] xl:gap-6">
            {/* Left: Form Card */}
            <ContactForm />

            {/* Right Sidebar Cards */}
            <div className="flex flex-col gap-4">
              {/* Card 1: Contact Information */}
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
                      <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>

                    <CardTitle
                      id="contact-information-title"
                      className="text-[26px] font-black tracking-tight text-purple"
                    >
                      Contact Information
                    </CardTitle>
                  </div>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
                      <Mail
                        className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60">
                          Email
                        </p>

                        <a
                          href="mailto:contact@theelephantinthecourtroom.com"
                          aria-label="Email contact@theelephantinthecourtroom.com"
                          className="text-[16px] font-semibold text-charcoal transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                        >
                          contact@theelephantinthecourtroom.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
                      <Phone
                        className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60">
                          Phone
                        </p>

                        <a
                          href="tel:+15616026602"
                          aria-label="Call +1 (561) 602-6602"
                          className="text-[16px] font-semibold text-charcoal transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                        >
                          +1 (561) 602-6602
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin
                        className="mt-0.5 h-6 w-6 flex-shrink-0 text-lime"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal/60">
                          Address
                        </p>

                        <p className="whitespace-pre-line text-[15px] leading-7 text-charcoal/85">
                          The Elephant In The Court Room{'\n'}
                          Online Legal Awareness Campaign
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Support the Campaign */}
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
                      <Heart className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>

                    <CardTitle
                      id="support-campaign-title"
                      className="text-card-title"
                    >
                      Support the Campaign
                    </CardTitle>
                  </div>

                  <p className="mb-4 text-body leading-relaxed text-charcoal/80">
                    This campaign exists to raise awareness of a long-running
                    legal dispute and to seek justice through lawful means.
                    Your support helps cover legal expenses, document
                    production, public awareness efforts, and outreach.
                  </p>

                  <p className="mb-6 text-body font-bold text-purple">
                    Every contribution and every share helps expand the
                    campaign's reach.
                  </p>

                  <div
                    className="mt-6 border-t border-charcoal/10"
                    aria-hidden="true"
                  />

                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                      href="https://www.gofundme.com/f/xxxxxxxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Support the campaign on GoFundMe"
                      className="flex items-center justify-center gap-2 rounded-lg bg-lime px-6 py-3 text-[15px] font-black tracking-tight text-[#3F1F66] transition-all duration-200 hover:bg-[#b9dd2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                    >
                      <Heart className="h-4 w-4" aria-hidden="true" />
                      Support the Campaign
                    </a>

                    <Link
                      to="/documents"
                      aria-label="View case documents"
                      className="flex items-center justify-center gap-2 rounded-lg border border-lime px-5 py-3 font-extrabold text-charcoal transition-colors hover:bg-lime/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                    >
                      <ExternalLink
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      View Case Documents
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Share the Campaign */}
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
                    >
                      Share the Campaign
                    </CardTitle>
                  </div>

                  <p className="mb-2 text-body leading-relaxed text-charcoal/80">
                    Help others learn about this case by sharing the website
                    with friends, family, and your community.
                  </p>

                  <p className="mb-7 text-body font-medium text-charcoal/80">
                    Every share increases awareness.
                  </p>

                  <div
                    className="grid grid-cols-3 gap-5 sm:grid-cols-6"
                    aria-label="Campaign sharing options"
                  >
                    {SHARE_PLATFORMS.map((platform) => (
                      <button
                        key={platform.label}
                        type="button"
                        onClick={() => handleShareClick(platform)}
                        aria-label={
                          platform.isCopy
                            ? 'Copy campaign website link'
                            : `Share campaign on ${platform.label}`
                        }
                        className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-off-white transition-all duration-200 hover:-translate-y-1 hover:border-lime hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
                      >
                        <platform.icon
                          className="h-11 w-11"
                          style={{ color: platform.color }}
                          aria-hidden="true"
                        />

                        <span className="text-center text-[11px] font-medium leading-tight text-charcoal">
                          {platform.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {copySuccess && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="text-center text-body-small text-success"
                    >
                      Link copied!
                    </p>
                  )}

                  <p className="text-center text-body-small text-charcoal/50">
                    Click any icon above to share this website.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}