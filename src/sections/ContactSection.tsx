import { useSectionReveal } from '@/hooks/useSectionReveal'
import SectionBadge from '@/components/SectionBadge'
import ContactForm from '@/components/ContactForm'
import { Link } from 'react-router-dom'

const GOFUNDME_URL = 'PASTE_YOUR_GOFUNDME_URL_HERE'

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
              className="reveal-child text-body text-charcoal/80 mb-8 leading-6"
            >
              Have questions about the case or the crowdfunding campaign?
              Want to support Leo and Olga, support Eclectic Eats, or
              contribute ideas?
              <br />
              We&apos;d like to hear from{' '}
              <span className="font-bold">you.</span>
            </p>

            <ContactForm />

            <div className="reveal-child mt-6 pt-5 border-t border-lime/20">
              <p className="text-base sm:text-lg leading-7 text-charcoal/80">
                <span className="font-bold text-charcoal">
                  Prefer email?
                </span>{' '}
                <span className="font-bold text-charcoal">
                  Reach us at
                </span>{' '}
                <a
                  href="mailto:ElephantFiles@proton.me"
                  className="
                    text-purple
                    link-underline
                    font-semibold
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-purple
                    focus-visible:ring-offset-2
                    rounded-sm
                  "
                  aria-label="Send an email to The Elephant In The Court Room campaign"
                >
                  ElephantFiles@proton.me
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
              <div className="rounded-xl overflow-hidden aspect-square">
                <img
                  src="/assets/contact-elephant.webp"
                  alt="Decorative floral elephant with a message calling for support to Restore Justice"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>

            {/* Switch to GoFundMe Button */}
            <div className="mt-5 flex justify-center">
              <a
                href={GOFUNDME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Switch to GoFundMe to donate"
                className="
                  flex
                  w-full
                  max-w-[280px]
                  min-h-[58px]
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
              >
                <span>
                  Switch to GoFundMe
                  <br />
                  to Donate
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}