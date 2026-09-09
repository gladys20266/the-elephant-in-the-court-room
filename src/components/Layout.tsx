import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { client } from '../../tina/__generated__/client'

type FooterQueryResult = Awaited<
  ReturnType<typeof client.queries.footer>
>

export default function Layout() {
  const { pathname } = useLocation()
  const [footerResponse, setFooterResponse] =
    useState<FooterQueryResult | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    let mounted = true

    client.queries
      .footer({
        relativePath: 'footer.json',
      })
      .then((response) => {
        if (mounted) {
          setFooterResponse(response)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      {footerResponse && (
        <Footer response={footerResponse} />
      )}
    </div>
  )
}