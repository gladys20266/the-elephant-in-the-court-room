import { useState } from 'react'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Check } from 'lucide-react'

export default function ContactSection() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend - just show success state
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Form */}
          <div>
            <span className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4">
              CONTACT
            </span>
            <h2 className="reveal-child text-section-title text-purple mb-4">
              Get In Touch
            </h2>
            <p className="reveal-child text-body text-charcoal/80 mb-8">
              Have questions, want to volunteer, or know someone who can help? We&apos;d love to hear from you.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="reveal-child">
                  <label className="text-body-small font-medium text-charcoal block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded text-body focus:border-lime focus:ring-2 focus:ring-lime/30 outline-none transition-all duration-150"
                  />
                </div>
                <div className="reveal-child">
                  <label className="text-body-small font-medium text-charcoal block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded text-body focus:border-lime focus:ring-2 focus:ring-lime/30 outline-none transition-all duration-150"
                  />
                </div>
                <div className="reveal-child">
                  <label className="text-body-small font-medium text-charcoal block mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded text-body focus:border-lime focus:ring-2 focus:ring-lime/30 outline-none transition-all duration-150 resize-y"
                  />
                </div>
                <div className="reveal-child">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-purple text-white text-button rounded-lg px-8 py-3.5 hover:bg-[#4A2870] transition-colors duration-150"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            ) : (
              <div className="reveal-child text-center py-8">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <p className="text-body text-charcoal">Thank you! We&apos;ll be in touch soon.</p>
              </div>
            )}

            <div className="reveal-child mt-6 pt-5 border-t border-lime/20">
              <p className="text-body-small text-charcoal/70">
                Prefer email? Reach us at{' '}
                <a
                  href="mailto:support@jonathancampaign.org"
                  className="text-purple link-underline font-medium"
                >
                  support@jonathancampaign.org
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
