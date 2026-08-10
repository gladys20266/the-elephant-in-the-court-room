import { useState } from 'react'
import { Check, Send, Lock, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Card className="reveal-child rounded-2xl border-0 p-0 shadow-card">
      <CardContent className="p-8">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form-description"
            className="space-y-7"
          >
            <div>
              <h2
                id="contact-form-title"
                className="text-2xl font-black text-charcoal"
              >
                Send Us a Message
              </h2>

              <p
                id="contact-form-description"
                className="mt-2 text-body text-charcoal/70"
              >
                Complete the form below and we'll be in touch.
              </p>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-full-name"
                  className="mb-2.5 block text-[15px] font-extrabold text-charcoal"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="contact-full-name"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-body outline-none transition-all duration-200 placeholder:text-charcoal/55 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2.5 block text-[15px] font-black tracking-[-0.01em] text-charcoal"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-body outline-none transition-all duration-200 placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2.5 block text-[15px] font-black tracking-[-0.01em] text-charcoal"
                >
                  Phone Number (Optional)
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-body outline-none transition-all duration-200 placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-inquiry-type"
                  className="mb-2.5 block text-[15px] font-black tracking-[-0.01em] text-charcoal"
                >
                  Inquiry Type <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    id="contact-inquiry-type"
                    name="inquiryType"
                    required
                    aria-required="true"
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inquiryType: e.target.value,
                      })
                    }
                    className="w-full appearance-none rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 pr-10 text-body outline-none transition-all duration-200 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
                  >
                    <option value="">Select an option</option>
                    <option>General Question</option>
                    <option>Media Inquiry</option>
                    <option>Legal Support</option>
                    <option>Donation</option>
                    <option>Partnership</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>

                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2.5 block text-[15px] font-black tracking-[-0.01em] text-charcoal"
              >
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                aria-required="true"
                autoComplete="off"
                placeholder="Enter the subject of your message"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-body outline-none transition-all duration-200 placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2.5 block text-[15px] font-black tracking-[-0.01em] text-charcoal"
              >
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                aria-required="true"
                rows={7}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full resize-none rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-body outline-none transition-all duration-200 placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-2">
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-purple px-10 py-4 text-button font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#4A2870] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 sm:w-auto"
              >
                <Send
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Send Message
              </button>
            </div>

            {/* Privacy Notice */}
            <div
              className="flex items-start gap-2 text-body-small text-charcoal/50"
              role="note"
            >
              <Lock
                className="mt-0.5 h-4 w-4 flex-shrink-0"
                aria-hidden="true"
              />

              <p>
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
            </div>
          </form>
        ) : (
          <div
            className="py-12 text-center"
            role="status"
            aria-live="polite"
            aria-labelledby="contact-success-title"
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"
              aria-hidden="true"
            >
              <Check className="h-8 w-8 text-success" />
            </div>

            <h2
              id="contact-success-title"
              className="mb-2 font-body text-xl font-medium text-charcoal"
            >
              Thank you!
            </h2>

            <p className="text-body text-charcoal/70">
              We'll be in touch soon.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}