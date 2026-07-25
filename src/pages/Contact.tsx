import { useState } from 'react'
import Hero from '@/components/Hero'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import {
  Check,
  Mail,
  Phone,
  MapPin,
  Send,
  Lock,
  ChevronDown,
  Heart,
  Share2,
  ExternalLink,
} from "lucide-react"
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6"

import { MdEmail } from "react-icons/md"

import { HiOutlineLink } from "react-icons/hi"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Share platforms with brand colors
const SHARE_PLATFORMS = [
  {
    icon: FaFacebook,
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    color: "#000000",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: MdEmail,
    label: "Email",
    color: "#5B3178",
  },
  {
    icon: HiOutlineLink,
    label: "Copy Link",
    color: "#C4D82E",
    isCopy: true,
  },
]

export default function Contact() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  })
  const [copySuccess, setCopySuccess] = useState(false)

  const showToast = (message: string) => {
    const toast = document.createElement('div')
    toast.className =
      'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'
    toast.textContent = message
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
    const WEBSITE_URL = "https://www.theelephantinthecourtroom.com"
const pageUrl = encodeURIComponent(WEBSITE_URL)
const message = encodeURIComponent(
  "Help expose an 11-year legal injustice. Learn more:"
)

switch (platform.label) {
  case "Facebook":
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      "_blank"
    )
    break

  case "TikTok":
    window.open("https://www.tiktok.com", "_blank")
    break

  case "WhatsApp":
    window.open(
      `https://wa.me/?text=${message}%20${pageUrl}`,
      "_blank"
    )
    break

  case "Email":
   window.location.href =
  `mailto:?subject=${encodeURIComponent(
    "The Elephant In The Court Room"
  )}&body=${message}%20${WEBSITE_URL}`
    break

  default:
    break
}
  }

  return (
    <>
      <Hero
        section="CONTACT"
        title="Get in Touch"
        subtitle="Have a question, a media inquiry, or want to support the campaign? We'd love to hear from you."
      />

      <section
    ref={sectionRef}
    className="bg-white pt-8 pb-16 md:pt-10 md:pb-20"
>
      
       <div className="content-container max-w-[1280px] mx-auto">
    <div className="grid grid-cols-1 xl:grid-cols-[54%,46%] gap-4 xl:gap-6 items-start">
            {/* Left: Form Card */}
            <Card className="reveal-child rounded-2xl shadow-card border-0 p-0">
              <CardHeader className="p-8 pb-0">
                <CardTitle className="text-[40px] font-black tracking-[-0.02em] text-purple">
  Send Us a Message
</CardTitle>

<p className="mt-2 text-[17px] leading-7 text-charcoal/75">
  Fill out the form below and we'll get back to you as soon as we can.
</p>
              </CardHeader>
              <CardContent className="p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      
                      <div>
                        <label className="block mb-2.5 text-[15px] font-extrabold text-charcoal">
  <>
  Full Name <span className="text-red-500">*</span>
</>
</label>
                        <input
  type="text"
  required
  placeholder="Enter your full name"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({ ...formData, fullName: e.target.value })
  }
 className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/55 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
/>
                      </div>
                      
                        <label className="block mb-2.5 text-[15px] font-black tracking-[-0.01em] text-charcoal">
  Email Address <span className="text-red-500">*</span>
</label>
                      
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
                          />
                      </div>
                    

                    {/* Row 2: Phone & Inquiry Type */}
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
        setFormData({ ...formData, phone: e.target.value })
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
                              setFormData({ ...formData, inquiryType: e.target.value })
                            }
                            className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
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

                    {/* Row 3: Subject */}
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
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Row 4: Message */}
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
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3.5 border border-charcoal/20 rounded-lg bg-white text-body placeholder:text-charcoal/45 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all duration-200 resize-none"
                        />
                    </div>

                    {/* Button */}

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
                      <p>Your information is secure and will only be used to respond to your inquiry.</p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-body font-medium text-charcoal mb-2">Thank you!</h3>
                    <p className="text-body text-charcoal/70">We'll be in touch soon.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Right Sidebar Cards */}
           <div className="flex flex-col gap-4">
              {/* Card 1: Contact Information */}
<Card className="reveal-child rounded-2xl border border-charcoal/5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
  <CardContent className="px-8 py-7">
    <div className="flex items-center gap-4 mb-7">
      <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center flex-shrink-0">
        <Mail className="w-5 h-5 text-white" />
      </div>

      <CardTitle className="text-[26px] font-black tracking-tight text-purple">
        Contact Information
      </CardTitle>
    </div>

    <div className="space-y-6">

      {/* Email */}
      <div className="flex items-start gap-4 pb-5 border-b border-gray-200">
        <Mail className="w-6 h-6 text-lime mt-0.5 flex-shrink-0" />

        <div>
          <p className="text-[11px] uppercase font-bold tracking-[0.12em] text-charcoal/60 mb-1">
            Email
          </p>

          <a
            href="mailto:contact@theelephantinthecourtroom.com"
            className="text-[16px] font-semibold text-charcoal hover:text-purple transition-colors"
          >
            contact@theelephantinthecourtroom.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 pb-5 border-b border-gray-200">
        <Phone className="w-6 h-6 text-lime mt-0.5 flex-shrink-0" />

        <div>
          <p className="text-[11px] uppercase font-bold tracking-[0.12em] text-charcoal/60 mb-1">
            Phone
          </p>

          <a
            href="tel:+15616026602"
            className="text-[16px] font-semibold text-charcoal hover:text-purple transition-colors"
          >
            +1 (561) 602-6602
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-lime mt-0.5 flex-shrink-0" />

        <div>
          <p className="text-[11px] uppercase font-bold tracking-[0.12em] text-charcoal/60 mb-1">
            Address
          </p>

          <p className="text-[15px] text-charcoal/85 whitespace-pre-line leading-7">
            The Elephant In The Court Room{"\n"}
            Online Legal Awareness Campaign
          </p>
        </div>
      </div>

    </div>
  </CardContent>
</Card>
            

              {/* Card 2: Support the Campaign */}
              <Card className="reveal-child rounded-2xl border border-charcoal/5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="px-8 py-7">
                  <div className="flex items-center gap-4 mb-7">
  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center flex-shrink-0">
    <Heart className="w-5 h-5 text-white" />
  </div>

  <CardTitle className="text-card-title">
    Support the Campaign
  </CardTitle>
</div>
                  <p className="text-body text-charcoal/80 leading-relaxed mb-4">
                    This campaign exists to raise awareness of a long-running legal dispute and to seek justice through lawful means.
                    Your support helps cover legal expenses, document production, public awareness efforts, and outreach.
                  </p>
                  <p className="text-body font-bold text-purple mb-6">
  Every contribution and every share helps expand the campaign's reach.
</p>
<div className="mt-6 border-t border-charcoal/10"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                   <a
  href="https://www.gofundme.com/f/xxxxxxxx"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 rounded-lg bg-lime px-6 py-3 text-[15px] font-black tracking-tight text-[#3F1F66] hover:bg-[#b9dd2f] transition-all duration-200"
>
  <Heart className="w-4 h-4" />
  Support the Campaign
</a>

<a
  href="/documents"
  className="flex items-center justify-center gap-2 rounded-lg border border-lime bg-white px-6 py-3 text-[15px] font-black tracking-tight text-[#3F1F66] hover:bg-off-white transition-all duration-200"
>
  <ExternalLink className="w-4 h-4" />
  View Case Documents
</a>
                  </div>
                </CardContent>
              </Card>
              {/* Card 3: Share the Campaign */}
              <Card className="reveal-child rounded-2xl border border-charcoal/5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
               <CardContent className="px-8 py-7">
                  <div className="flex items-center gap-4 mb-7">
  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center flex-shrink-0">
    <Share2 className="w-5 h-5 text-white" />
  </div>

  <CardTitle className="text-card-title">
    Share the Campaign
  </CardTitle>
</div>
                  <p className="text-body text-charcoal/80 mb-2 leading-relaxed">
                    Help others learn about this case by sharing the website with friends, family, and your community.
                  </p>
                  <p className="text-body text-charcoal/80 mb-7 font-medium">
                    Every share increases awareness.
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
                    {SHARE_PLATFORMS.map((platform, i) => (
                     <button
                      key={i}
                      onClick={() => handleShareClick(platform)}
                      className="flex flex-col items-center justify-center gap-2 w-20 h-20 rounded-xl bg-off-white hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-lime"
                      title={platform.label}
                    >
                      <platform.icon
  className="w-11 h-11"
  style={{ color: platform.color }}
/>

                     <span className="text-[11px] font-medium text-charcoal leading-tight text-center">
                       {platform.label}
                     </span>
                 </button>
                    ))}
                  </div>
                  {copySuccess && (
                    <p className="text-center text-body-small text-success">
                      Link copied!
                    </p>
                  )}
                  <p className="text-body-small text-charcoal/50 text-center">
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