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
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt={`${SITE_NAME} Logo`} className="w-12 h-12" />
              <span className="text-label text-white">{SITE_NAME}</span>
            </div>
            <p className="text-body-small text-white/50">
              Supporting The Elephant In The Court Room's fight for justice and due process.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-label text-white mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Story', to: '/about' },
                { label: 'The Case', to: '/case' },
                { label: 'Updates', to: '/updates' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-body-small text-white hover:opacity-70 transition-opacity duration-150"
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
                  className="text-body-small text-white hover:opacity-70 transition-opacity duration-150 inline-flex items-center gap-1"
                >
                  Donate on GoFundMe
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.change.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-small text-white hover:opacity-70 transition-opacity duration-150 inline-flex items-center gap-1"
                >
                  Sign the Petition
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <span className="text-body-small text-white hover:opacity-70 transition-opacity duration-150 cursor-pointer">
                  Share on Social Media
                </span>
              </li>
            </ul>
            <a
              href="https://www.change.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-lime text-charcoal text-button text-sm rounded-md py-3 hover:bg-pale-lime transition-colors duration-150"
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
                    className="text-body-small text-white hover:opacity-70 transition-opacity duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-body-small text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-lime transition-colors duration-150" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-lime transition-colors duration-150" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-lime transition-colors duration-150" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-body-small text-white/50 text-center sm:text-right">
            This website does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
