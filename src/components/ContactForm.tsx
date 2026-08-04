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
    <Card className="reveal-child rounded-2xl shadow-card border-0 p-0">
      <CardContent className="p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2.5 text-[15px] font-extrabold text-charcoal">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/55 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
                  Phone Number (Optional)
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    required
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inquiryType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
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

                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                required
                placeholder="Enter the subject of your message"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
                className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                required
                rows={7}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-2">
              <button
                type="submit"
                className="group w-full sm:w-auto bg-purple text-white text-button font-bold uppercase tracking-wide rounded-lg px-10 py-4 flex items-center justify-center gap-2 hover:bg-[#4A2870] hover:shadow-lg transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="flex items-start gap-2 text-body-small text-charcoal/50">
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
            </div>

          </form>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-success" />
            </div>

            <h3 className="text-xl font-body font-medium text-charcoal mb-2">
              Thank you!
            </h3>

            <p className="text-body text-charcoal/70">
              We'll be in touch soon.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}