import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const children = ref.current.querySelectorAll('.reveal-child')
    if (children.length === 0) return

    const ctx = gsap.context(() => {
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
