import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, ExternalLink } from 'lucide-react'
import logoUrl from '@/assets/logo.png'
import { SITE_NAME } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
<div>
  <Link
    to="/"
    className="flex items-center gap-4 mb-5 w-fit group"
  >
    <img
      src={logoUrl}
      alt={`${SITE_NAME} Logo`}
      className="w-14 h-14 shrink-0 transition-transform duration-200 group-hover:scale-105"
    />

    <div className="flex flex-col leading-tight">
      <span className="text-[18px] font-bold text-white group-hover:text-lime transition-colors duration-200">
        The Elephant
      </span>

      <span className="text-[18px] font-bold text-white group-hover:text-lime transition-colors duration-200">
        In The Court Room
        <sup className="ml-0.5 text-[10px] align-super">™</sup>
      </span>
    </div>
  </Link>

  <p className="mt-4 text-sm leading-7 text-white/90 max-w-[280px]">
    In Support of The Elephant In The Court Room, Fighting for Justice And All
    Substantive Rights, Constitutional Rights, Civil, Due Process of Law, etc.
  </p>
</div>

          {/* Navigate */}
          <div>
            <h4 className="text-label text-white mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Case', to: '/case' },
  { label: 'Updates', to: '/updates' },
  { label: 'Videos', to: '/videos' },
  { label: 'Photos', to: '/photos' },
  { label: 'Documents', to: '/documents' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Take Action */}
          <div>
            <h4 className="text-label text-white mb-4">Take Action</h4>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a
                  href="https://www.gofundme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                >
                  Donate on GoFundMe
                  <ExternalLink className="w-3.5 h-3.5 text-white/90" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.change.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                >
                  Sign the Petition
                  <ExternalLink className="w-3.5 h-3.5 text-white/90" />
                </a>
              </li>
              <li>
  <Link
    to="/contact"
    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
  >
    Share on Social Media
  </Link>
</li>

<li>
  <Link
    to="/contact"
    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
  >
    Contact the Campaign
  </Link>
</li>
            </ul>
            <a
              href="https://www.change.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-lime text-charcoal text-button text-sm rounded-md py-3.5 hover:bg-pale-lime transition-colors duration-150"
            >
              Sign the Petition
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Disclaimer', to: '/disclaimer' },
].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
<div className="border-t border-white/10 my-10" />

{/* Bottom Bar */}
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">

  <p className="text-sm text-white/85 text-center sm:text-left">
  &copy; Eclectic Synergy LLC. {new Date().getFullYear()}
</p>

  <div className="flex items-center gap-4">
    <a
      href="#"
      className="text-white/85 hover:text-lime transition-colors duration-200"
      aria-label="Facebook"
    >
      <Facebook className="w-6 h-6" />
    </a>

    <a
      href="#"
      className="text-white/85 hover:text-lime transition-colors duration-200"
      aria-label="Twitter"
    >
      <Twitter className="w-6 h-6" />
    </a>

    <a
      href="#"
      className="text-white/85 hover:text-lime transition-colors duration-200"
      aria-label="Instagram"
    >
      <Instagram className="w-6 h-6" />
    </a>
  </div>

  <p className="text-sm text-white/85 text-center sm:text-right">
    This website does not constitute legal advice.
  </p>

</div>
</div>
</footer>
)
}
