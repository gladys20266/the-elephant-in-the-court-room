import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useSectionReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const children = element.querySelectorAll('.reveal-child')

    if (children.length === 0) return

    const ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            })

            observer.unobserve(entry.target)
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -10% 0px',
        }
      )

      children.forEach((child) => {
        observer.observe(child)
      })

      return () => {
        observer.disconnect()
      }
    }, element)

    return () => {
      ctx.revert()
    }
  }, [])

  return ref
}