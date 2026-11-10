import { useEffect } from 'react'
import { HV } from '../config'

// Sets page title / meta / Open Graph for a HomeVista page and restores the
// original Accurratte Hommes values when the visitor leaves the section, so the
// rest of the site is never affected.
export default function Seo({ title, description, path, image }) {
  useEffect(() => {
    const origin = HV.siteUrl || window.location.origin
    const url = origin + path
    const previousTitle = document.title
    document.title = title

    const created = []
    const restored = []

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (el) {
        restored.push([el, el.getAttribute('content')])
      } else {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
        created.push(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', 'HomeVista by Accurratte Hommes')
    setMeta('property', 'og:locale', 'en_NG')
    if (image) setMeta('property', 'og:image', image.startsWith('http') ? image : origin + image)
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    let canonicalCreated = false
    let canonicalPrev = null
    if (canonical) {
      canonicalPrev = canonical.getAttribute('href')
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      canonicalCreated = true
    }
    canonical.setAttribute('href', url)

    return () => {
      document.title = previousTitle
      created.forEach((el) => el.remove())
      restored.forEach(([el, content]) => {
        if (content === null) el.removeAttribute('content')
        else el.setAttribute('content', content)
      })
      if (canonicalCreated) canonical.remove()
      else if (canonicalPrev !== null) canonical.setAttribute('href', canonicalPrev)
    }
  }, [title, description, path, image])

  return null
}
