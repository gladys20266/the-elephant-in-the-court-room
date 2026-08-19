import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import BackToTop from '@/components/BackToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/OurStory'))
const Case = lazy(() => import('./pages/Case'))
const Updates = lazy(() => import('./pages/Updates'))
const UpdateDetail = lazy(() => import('./pages/UpdateDetail'))
const Videos = lazy(() => import('./pages/Videos'))
const Photos = lazy(() => import('./pages/Photos'))
const Documents = lazy(() => import('./pages/Documents'))
const Downloads = lazy(() => import('./pages/Downloads'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))

function PageLoading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <span className="text-base font-semibold text-charcoal">
        Loading…
      </span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/case" element={<Case />} />

            <Route path="/updates" element={<Updates />} />
            <Route
              path="/updates/:slug"
              element={<UpdateDetail />}
            />

            <Route path="/videos" element={<Videos />} />

            <Route path="/photos" element={<Photos />} />

            <Route path="/documents" element={<Documents />} />

            <Route path="/downloads" element={<Downloads />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy" element={<Privacy />} />

            <Route path="/terms" element={<Terms />} />

            <Route path="/disclaimer" element={<Disclaimer />} />
          </Route>
        </Routes>
      </Suspense>

      <BackToTop />
    </>
  )
}