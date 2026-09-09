import { useEffect, useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import SectionBadge from '@/components/SectionBadge'
import ContactForm from '@/components/ContactForm'
import { Link } from 'react-router-dom'

import { client } from '../../tina/__generated__/client'
import { tinaField, useTina } from 'tinacms/dist/react'

import fallbackContact from '@/content/contact.json'

const fallbackContactSection = {
  badgeText: 'CONTACT',
  title: 'Get In Touch',
  description:
    "Have questions about the case or the crowdfunding campaign? Want to support Leo and Olga, support Eclectic Eats, or contribute ideas? We'd like to hear from you.",
  preferEmailText: 'Prefer email?',
  reachUsText: 'Reach us at',
  email: 'ElephantFiles@proton.me',
  image: '/assets/contact-elephant.webp',
  imageAlt:
    'Decorative floral elephant with a message calling for support to Restore Justice',
  donationButtonText: 'Switch to GoFundMe to Donate',
  donationUrl: 'PASTE_YOUR_GOFUNDME_URL_HERE',
}

type ContactSectionData = typeof fallbackContactSection

type ContactSectionQueryResult = Awaited<
  ReturnType<typeof client.queries.contactSection>
>

type ContactQueryResult = Awaited<
  ReturnType<typeof client.queries.contact>
>

type ContactQueryData = NonNullable<
  ContactQueryResult['data']['contact']
>

type ContactFormQueryData = NonNullable<
  ContactQueryData['form']
>

type ContactFormData = typeof fallbackContact.form

function normalizeContactSection(
  data: ContactSectionQueryResult['data']['contactSection'],
): ContactSectionData {
  return {
    badgeText:
      data?.badgeText ?? fallbackContactSection.badgeText,

    title:
      data?.title ?? fallbackContactSection.title,

    description:
      data?.description ?? fallbackContactSection.description,

    preferEmailText:
      data?.preferEmailText ??
      fallbackContactSection.preferEmailText,

    reachUsText:
      data?.reachUsText ??
      fallbackContactSection.reachUsText,

    email:
      data?.email ??
      fallbackContactSection.email,

    image:
      data?.image ??
      fallbackContactSection.image,

    imageAlt:
      data?.imageAlt ??
      fallbackContactSection.imageAlt,

    donationButtonText:
      data?.donationButtonText ??
      fallbackContactSection.donationButtonText,

    donationUrl:
      data?.donationUrl ??
      fallbackContactSection.donationUrl,
  }
}

function normalizeContactForm(
  data: ContactFormQueryData | null | undefined,
): ContactFormData {
  return {
    ...fallbackContact.form,
    ...(data ?? {}),
    inquiryOptions:
      data?.inquiryOptions?.length
        ? data.inquiryOptions.map((option) => ({
            key: option?.key ?? '',
            label: option?.label ?? '',
          }))
        : fallbackContact.form.inquiryOptions,
  } as ContactFormData
}

function ContactSectionVisual({
  contactSectionResponse,
  contactResponse,
}: {
  contactSectionResponse: ContactSectionQueryResult
  contactResponse: ContactQueryResult
}) {
  const contactSectionTinaResult = useTina({
    query: contactSectionResponse.query,
    variables: contactSectionResponse.variables,
    data: contactSectionResponse.data,

    experimental___selectFormByFormId() {
      return `src/content/${contactSectionResponse.variables.relativePath}`
    },
  })

  const contactTinaResult = useTina({
    query: contactResponse.query,
    variables: contactResponse.variables,
    data: contactResponse.data,

    experimental___selectFormByFormId() {
      return `src/content/${contactResponse.variables.relativePath}`
    },
  })

  const rawContactSection =
    contactSectionTinaResult.data.contactSection

  const rawContact =
    contactTinaResult.data.contact

  const contactSection =
    normalizeContactSection(rawContactSection)

  const contactForm =
    normalizeContactForm(rawContact?.form)

  const sectionRef =
    useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: Form */}
          <div>
            <SectionBadge
              text={contactSection.badgeText}
              to="/contact"
              dataTinaField={tinaField(
                rawContactSection,
                'badgeText',
              )}
            />

            <h2
              id="contact-heading"
              className="reveal-child mb-4 text-section-title text-purple"
              data-tina-field={tinaField(
                rawContactSection,
                'title',
              )}
            >
              {contactSection.title}
            </h2>

            <p
              id="contact-description"
              className="reveal-child mb-8 text-body leading-6 text-charcoal/80"
              data-tina-field={tinaField(
                rawContactSection,
                'description',
              )}
            >
              {contactSection.description}
            </p>

            <ContactForm form={contactForm} />

            <div className="reveal-child mt-6 border-t border-lime/20 pt-5">
              <p className="text-base leading-7 text-charcoal/80 sm:text-lg">

                <span
                  className="font-bold text-charcoal"
                  data-tina-field={tinaField(
                    rawContactSection,
                    'preferEmailText',
                  )}
                >
                  {contactSection.preferEmailText}
                </span>{' '}

                <span
                  className="font-bold text-charcoal"
                  data-tina-field={tinaField(
                    rawContactSection,
                    'reachUsText',
                  )}
                >
                  {contactSection.reachUsText}
                </span>{' '}

                <a
                  href={`mailto:${contactSection.email}`}
                  className="
                    rounded-sm
                    font-semibold
                    text-purple
                    link-underline
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-purple
                    focus-visible:ring-offset-2
                  "
                  aria-label="Send an email to The Elephant In The Court Room campaign"
                  data-tina-field={tinaField(
                    rawContactSection,
                    'email',
                  )}
                >
                  {contactSection.email}
                </a>

              </p>
            </div>
          </div>

          {/* Right: Campaign Photograph + GoFundMe */}
          <div className="reveal-child lg:mt-40 lg:w-[168%]">

            <Link
              to="/photos"
              aria-label="View the campaign photographs in the Photos gallery"
              className="
                block
                rounded-xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple
                focus-visible:ring-offset-2
              "
            >
              <div
                className="aspect-square overflow-hidden rounded-xl"
                data-tina-field={tinaField(
                  rawContactSection,
                  'image',
                )}
              >
                <img
                  src={contactSection.image}
                  alt={contactSection.imageAlt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>

            {/* Switch to GoFundMe Button */}
            <div className="mt-5 flex justify-center">
              <a
                href={contactSection.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Switch to GoFundMe to donate"
                className="
                  flex
                  min-h-[58px]
                  w-full
                  max-w-[280px]
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-charcoal
                  bg-lime
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-black
                  uppercase
                  leading-tight
                  tracking-wide
                  text-charcoal
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple
                  focus-visible:ring-offset-2
                "
                data-tina-field={tinaField(
                  rawContactSection,
                  'donationUrl',
                )}
              >
                <span
                  data-tina-field={tinaField(
                    rawContactSection,
                    'donationButtonText',
                  )}
                >
                  {contactSection.donationButtonText}
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactSection() {
  const [contactSectionResponse, setContactSectionResponse] =
    useState<ContactSectionQueryResult | null>(null)

  const [contactResponse, setContactResponse] =
    useState<ContactQueryResult | null>(null)

  useEffect(() => {
    let mounted = true

    Promise.all([
      client.queries.contactSection({
        relativePath: 'contact-section.json',
      }),

      client.queries.contact({
        relativePath: 'contact.json',
      }),
    ])
      .then(([sectionResult, contactResult]) => {
        if (mounted) {
          setContactSectionResponse(sectionResult)
          setContactResponse(contactResult)
        }
      })
      .catch((error) => {
        console.error(
          '[Tina ContactSection]',
          error,
        )
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!contactSectionResponse || !contactResponse) {
    return null
  }

  return (
    <ContactSectionVisual
      contactSectionResponse={contactSectionResponse}
      contactResponse={contactResponse}
    />
  )
}