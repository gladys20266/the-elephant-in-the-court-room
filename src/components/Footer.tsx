import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, ExternalLink } from "lucide-react";
import logoUrl from "@/assets/logo.webp";
import { SITE_NAME } from "@/lib/brand";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

type FooterQueryResult = Awaited<
  ReturnType<typeof client.queries.footer>
>;

interface FooterProps {
  response: FooterQueryResult;
}

export default function Footer({ response }: FooterProps) {
  const { data } = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
  });

  const footer = data.footer;

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
                <span className="relative text-[18px] font-bold text-white group-hover:text-lime transition-colors duration-200">
                  In The Court Room
                  <sup className="absolute -right-1 -top-0 text-[14px] font-bold">
                    ™
                  </sup>
                </span>
              </div>
            </Link>

            <p
              className="mt-4 text-sm leading-7 text-white/90 max-w-[280px]"
              data-tina-field={tinaField(footer, "brandDescription")}
            >
              {footer.brandDescription}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-label text-white mb-4">Navigate</h4>

            <ul className="space-y-2.5">
              {(footer.navigate ?? []).map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.route ?? "#"}
                    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                    data-tina-field={link ? tinaField(link, "label") : undefined}
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Take Action */}
          <div>
            <h4 className="text-label text-white mb-4">Take Action</h4>

            <ul className="space-y-2.5 mb-5">
              {(footer.takeAction ?? []).map((link) => (
                <li key={link?.label}>
                  {link?.external ? (
                    <a
                      href={link?.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                      data-tina-field={
                        link ? tinaField(link, "label") : undefined
                      }
                    >
                      {link?.label}
                      <ExternalLink className="w-3.5 h-3.5 text-white/90" />
                    </a>
                  ) : (
                    <Link
                      to={link?.url ?? "#"}
                      className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                      data-tina-field={
                        link ? tinaField(link, "label") : undefined
                      }
                    >
                      {link?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <a
              href={footer.petitionButtonUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-lime text-charcoal text-button text-sm rounded-md py-3.5 hover:bg-pale-lime transition-colors duration-150"
              data-tina-field={tinaField(footer, "petitionButtonText")}
            >
              {footer.petitionButtonText}
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label text-white mb-4">Legal</h4>

            <ul className="space-y-2.5">
              {(footer.legal ?? []).map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.route ?? "#"}
                    className="text-sm font-medium text-white/90 hover:text-lime transition-colors duration-200"
                    data-tina-field={link ? tinaField(link, "label") : undefined}
                  >
                    {link?.label}
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
            <span data-tina-field={tinaField(footer, "copyrightText")}>
              {footer.copyrightText}
            </span>{" "}
            {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            {(footer.socialLinks ?? []).map((social) => {
              if (social?.platform === "Facebook") {
                return (
                  <a
                    key={social.platform}
                    href={social.url ?? "#"}
                    className="text-white/85 hover:text-lime transition-colors duration-200"
                    aria-label="Facebook"
                    data-tina-field={tinaField(social, "url")}
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                );
              }

              if (social?.platform === "Twitter") {
                return (
                  <a
                    key={social.platform}
                    href={social.url ?? "#"}
                    className="text-white/85 hover:text-lime transition-colors duration-200"
                    aria-label="Twitter"
                    data-tina-field={tinaField(social, "url")}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                );
              }

              if (social?.platform === "Instagram") {
                return (
                  <a
                    key={social.platform}
                    href={social.url ?? "#"}
                    className="text-white/85 hover:text-lime transition-colors duration-200"
                    aria-label="Instagram"
                    data-tina-field={tinaField(social, "url")}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                );
              }

              return null;
            })}
          </div>

          <p
            className="text-sm text-white/85 text-center sm:text-right"
            data-tina-field={tinaField(footer, "legalDisclaimer")}
          >
            {footer.legalDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}