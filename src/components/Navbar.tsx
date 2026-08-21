import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Share2 } from 'lucide-react'
import logoUrl from '@/assets/logo.webp'
import { SITE_NAME } from '@/lib/brand'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Case', href: '/case' },
  { label: 'Updates', href: '/updates' },
  { label: 'Videos', href: '/videos' },
  { label: 'Photos', href: '/photos' },
  { label: 'Documents', href: '/documents' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  /*
   * Optimized scroll handling:
   * requestAnimationFrame prevents React state updates
   * from happening excessively during fast scrolling.
   */
  const handleScroll = useCallback(() => {
    const heroHeight = window.innerHeight
    const shouldBeVisible = window.scrollY > heroHeight * 0.8

    setVisible((current) =>
      current === shouldBeVisible ? current : shouldBeVisible
    )
  }, [])

  useEffect(() => {
    let frameId: number | null = null

    const onScroll = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        handleScroll()
        frameId = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [handleScroll])

  /*
   * Close the mobile menu whenever the route changes.
   */
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /*
   * Prevent background page scrolling while the mobile menu is open.
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /*
   * Share functionality.
   */
  const showToast = useCallback((message: string) => {
    const toast = document.createElement('div')

    toast.className =
      'fixed bottom-6 left-1/2 -translate-x-1/2 bg-lime text-charcoal text-body-small px-5 py-2.5 rounded-md shadow-button z-50'

    toast.textContent = message
    toast.style.opacity = '0'
    toast.style.transform = 'translateX(-50%) translateY(10px)'

    document.body.appendChild(toast)

    requestAnimationFrame(() => {
      toast.style.transition = 'opacity 200ms, transform 200ms'
      toast.style.opacity = '1'
      toast.style.transform = 'translateX(-50%) translateY(0)'
    })

    setTimeout(() => {
      toast.style.opacity = '0'
      toast.style.transform = 'translateX(-50%) translateY(10px)'

      setTimeout(() => {
        toast.remove()
      }, 200)
    }, 2000)
  }, [])

  const handleShare = useCallback(async () => {
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
      // Silently fail if the user closes the share dialog
      // or sharing is unavailable.
    }
  }, [showToast])

  const gofundmeUrl = 'https://www.gofundme.com'

  return (
    <>
      {/* =========================================================
          DESKTOP / TABLET NAVBAR
          ========================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-charcoal/5 transition-all duration-300 ${
          visible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{ height: '72px' }}
      >
        <div className="h-full w-full px-6 lg:px-10 flex items-center justify-between">

          {/* =====================================================
              LOGO
              ===================================================== */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 mr-6"
            aria-label="The Elephant In The Court Room - Home"
          >
            <img
              src={logoUrl}
              alt="The Elephant In The Court Room"
              width={58}
              height={58}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-10 h-10 md:w-12 md:h-12 2xl:w-[58px] 2xl:h-[58px]"
            />

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[15px] xl:text-[16px] 2xl:text-[17px] font-extrabold font-bold text-purple-800">
                The Elephant
              </span>

              <span className="text-[15px] xl:text-[16px] 2xl:text-[17px] font-extrabold text-purple-800 leading-none">
                In The Court{' '}
                <span className="relative inline-block">
                  Room
                  <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold">
                    TM
                  </span>
                </span>
              </span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
              ===================================================== */}
          <nav
            aria-label="Primary navigation"
            className="hidden 2xl:flex flex-1 items-center justify-center gap-5 px-2 min-w-0"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                aria-current={
                  pathname === link.href ? 'page' : undefined
                }
                className={`text-label transition-colors duration-150 hover:text-purple ${
                  pathname === link.href
                    ? 'text-purple'
                    : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
              ===================================================== */}
          <div className="hidden xl:flex items-center gap-2 ml-3 shrink-0">

            {/* GoFundMe */}
            <a
              href={gofundmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pale-lime text-charcoal rounded-md border border-forest px-3 xl:px-4 py-3 hover:bg-[#E0F0B0] hover:shadow-button-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-center leading-tight">
                <div className="text-button text-[0.8rem] font-black tracking-wider">
                  SWITCH TO GOFUNDME
                </div>

                <div
                  className="text-[0.68rem] font-black tracking-wide mt-0.5"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  TO DONATE
                </div>
              </div>
            </a>

            {/* Share */}
            <button
              type="button"
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-forest flex items-center justify-center hover:bg-[#2A4F3B] transition-colors duration-150"
              aria-label="Share"
            >
              <Share2
                className="w-4 h-4 text-lime"
                aria-hidden="true"
                focusable="false"
              />
            </button>
          </div>

          {/* =====================================================
              MOBILE HAMBURGER
              ===================================================== */}
          <button
            type="button"
            className="2xl:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <Menu
              className="w-6 h-6 text-charcoal"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY
          ========================================================= */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 2xl:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full flex flex-col items-center justify-center px-8">

          {/* Close button */}
          <button
            type="button"
            className="absolute top-5 right-5 p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X
              className="w-6 h-6 text-charcoal"
              aria-hidden="true"
              focusable="false"
            />
          </button>

          {/* Mobile navigation */}
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={
                  pathname === link.href
                    ? 'page'
                    : undefined
                }
                className={`font-display text-3xl uppercase tracking-tight transition-colors duration-150 hover:text-purple ${
                  pathname === link.href
                    ? 'text-purple'
                    : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile actions */}
          <div className="flex flex-col items-center gap-3 mt-10">

            {/* GoFundMe */}
            <a
              href={gofundmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pale-lime text-charcoal rounded-md border border-forest px-7 py-4 hover:bg-[#E0F0B0] transition-colors duration-200"
            >
              <div className="text-center leading-tight">

                <div
                  className="text-[1rem] font-black tracking-wider uppercase"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  SWITCH TO GOFUNDME
                </div>

                <div
                  className="text-[0.85rem] font-black tracking-wide mt-0.5"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  TO DONATE
                </div>

              </div>
            </a>

            {/* Share */}
            <button
              type="button"
              onClick={() => {
                handleShare()
                setMobileOpen(false)
              }}
              className="flex items-center gap-2 bg-forest text-lime rounded-md px-7 py-4 hover:bg-[#2A4F3B] transition-colors duration-150"
            >
              <Share2
                className="w-5 h-5"
                aria-hidden="true"
                focusable="false"
              />

              <span
                className="text-sm font-black tracking-wide uppercase"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                SHARE
              </span>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}