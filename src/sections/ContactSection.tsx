import { useSectionReveal } from '@/hooks/useSectionReveal'
import SectionBadge from '@/components/SectionBadge'
import ContactForm from '@/components/ContactForm'
import { Link } from 'react-router-dom'

export default function ContactSection() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
      className="section-padding bg-white"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Form */}
          <div>
            <SectionBadge
              text="CONTACT"
              to="/contact"
            />

            <h2
              id="contact-heading"
              className="reveal-child text-section-title text-purple mb-4"
            >
              Get In Touch
            </h2>

            <p
              id="contact-description"
              className="reveal-child text-body text-charcoal/80 mb-8"
            >
              Have questions about the case or the crowdfunding campaign?
              Want to support Leo and Olga, support Eclectic Eats, or
              contribute ideas? We&apos;d like to hear from you.
            </p>

            <ContactForm />

            <div className="reveal-child mt-6 pt-5 border-t border-lime/20">
              <p className="text-body-small text-charcoal/70">
                Prefer email? Reach us at{' '}
                <a
                  href="mailto:contact@theelephantinthecourtroom.com"
                  className="
                    text-purple
                    link-underline
                    font-medium
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-purple
                    focus-visible:ring-offset-2
                    rounded-sm
                  "
                  aria-label="Send an email to The Elephant In The Court Room campaign"
                >
                  contact@theelephantinthecourtroom.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Campaign Photograph */}
          <div className="reveal-child">
            <Link
              to="/photos"
              aria-label="View the campaign photographs in the Photos gallery"
              className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                src="/photos/after/after-0006.webp"
                alt="Photograph of the restored commercial property and outdoor grounds in Delray Beach, Florida"
                className="w-full h-full object-cover"
                loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}