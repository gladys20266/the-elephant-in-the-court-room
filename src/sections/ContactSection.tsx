import { useSectionReveal } from '@/hooks/useSectionReveal'
import SectionBadge from "@/components/SectionBadge";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Form */}
          <div>
            <SectionBadge
              text="CONTACT"
              to="/contact"
            />

            <h2 className="reveal-child text-section-title text-purple mb-4">
              Get In Touch
            </h2>

            <p className="reveal-child text-body text-charcoal/80 mb-8">
              Have questions, want to volunteer, or know someone who can help?
              We'd love to hear from you.
            </p>

            <ContactForm />

            <div className="reveal-child mt-6 pt-5 border-t border-lime/20">
              <p className="text-body-small text-charcoal/70">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:contact@theelephantinthecourtroom.com"
                  className="text-purple link-underline font-medium"
                >
                  contact@theelephantinthecourtroom.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="reveal-child">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Community meeting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}