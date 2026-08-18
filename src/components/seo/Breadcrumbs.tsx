import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import StructuredData from './StructuredData'
import { breadcrumbSchema } from '@/seo/pageSchemas'

interface BreadcrumbsProps {
  items?: Array<{
    name: string
    path: string
  }>
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  const location = useLocation()

  const defaultItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name:
        location.pathname === '/'
          ? 'Home'
          : location.pathname
              .split('/')
              .filter(Boolean)
              .map((segment) =>
                segment
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (letter) =>
                    letter.toUpperCase()
                  )
              )
              .join(' / '),
      path: location.pathname,
    },
  ]

  const breadcrumbItems = items ?? defaultItems

  const normalizedItems =
    breadcrumbItems.length > 1
      ? breadcrumbItems
      : [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'Current Page',
            path: location.pathname,
          },
        ]

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema({
              items: normalizedItems,
            }),
          ],
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-charcoal">
          {normalizedItems.map((item, index) => {
            const isLast = index === normalizedItems.length - 1

            return (
              <li
                key={`${item.path}-${item.name}`}
                className="flex items-center"
              >
                {index > 0 && (
                  <ChevronRight
                    className="mx-2 h-4 w-4 flex-shrink-0 text-charcoal/50"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-purple"
                  >
                    {index === 0 && (
                      <Home
                        className="mr-1 inline-block h-4 w-4"
                        aria-hidden="true"
                      />
                    )}

                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="
                      inline-flex
                      items-center
                      rounded
                      px-1
                      py-1
                      font-medium
                      text-charcoal
                      transition-colors
                      hover:text-purple
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-purple
                      focus-visible:ring-offset-2
                    "
                  >
                    {index === 0 && (
                      <Home
                        className="mr-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    )}

                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}