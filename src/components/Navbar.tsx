import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Share2 } from 'lucide-react'
import logoUrl from '@/assets/logo.png'
import { SITE_NAME } from '@/lib/brand'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Case', href: '/case' },
  { label: 'Updates', href: '/updates' },
  { label: 'Videos', href: '/videos' },
  { label: 'Photos', href: '/photos' },
  { label: 'Documents', href: '/documents' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const handleScroll = useCallback(() => {
    const heroHeight = window.innerHeight
    setVisible(window.scrollY > heroHeight * 0.8)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleShare = async () => {
    const shareData = {
      title: SITE_NAME,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)
        showToast('Link copied!')
      }
    } catch {
      // Silently fail
    }
  }

  const showToast = (message: string) => {
    const toast = document.createElement('div')
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'
    toast.textContent = message
    document.body.appendChild(toast)
    requestAnimationFrame(() => {
      toast.style.transition = 'opacity 200ms, transform 200ms'
      toast.style.opacity = '1'
      toast.style.transform = 'translateX(-50%) translateY(0)'
    })
    setTimeout(() => {
      toast.style.opacity = '0'
      toast.style.transform = 'translateX(-50%) translateY(10px)'
      setTimeout(() => toast.remove(), 200)
    }, 2000)
  }

  const gofundmeUrl = 'https://www.gofundme.com'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-charcoal/5 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ height: '72px' }}
      >
        <div className="h-full max-w-content mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt={`${SITE_NAME} Logo`} className="w-10 h-10" />
            <span className="text-label text-purple hidden sm:inline">{SITE_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-label transition-colors duration-150 hover:text-purple ${
                  pathname === link.href ? 'text-purple' : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={gofundmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pale-lime text-charcoal rounded-md px-5 py-2.5 hover:bg-[#E0F0B0] hover:shadow-button-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-center leading-tight">
                <div className="text-button text-[0.8rem]">Switch To GoFundMe</div>
                <div className="text-label text-[0.65rem] opacity-80 mt-0.5">To Donate</div>
              </div>
            </a>
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-forest flex items-center justify-center hover:bg-[#2A4F3B] transition-colors duration-150"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-lime" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-charcoal" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center px-8">
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-charcoal" />
          </button>

          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-3xl uppercase tracking-tight transition-colors duration-150 hover:text-purple ${
                  pathname === link.href ? 'text-purple' : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 mt-10">
            <a
              href={gofundmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pale-lime text-charcoal rounded-md px-6 py-3 hover:bg-[#E0F0B0] transition-colors duration-200"
            >
              <div className="text-center leading-tight">
                <div className="text-button text-sm">Switch To GoFundMe</div>
                <div className="text-label text-xs opacity-80 mt-0.5">To Donate</div>
              </div>
            </a>
            <button
              onClick={() => { handleShare(); setMobileOpen(false); }}
              className="flex items-center gap-2 bg-forest text-lime rounded-md px-6 py-3 hover:bg-[#2A4F3B] transition-colors duration-150"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-button text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
