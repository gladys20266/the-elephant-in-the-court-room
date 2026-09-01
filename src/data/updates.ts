export interface CaseUpdate {
  id: string
  slug: string
  title: string
  summary: string
  content: string[]
  category:
    | 'Court'
    | 'Website'
    | 'Campaign'
    | 'Media'
    | 'Documents'
    | 'Fundraising'
  status:
    | 'Active'
    | 'New'
    | 'Completed'
    | 'Upcoming'
  date: string

  featured: boolean
  image?: string
}

const updateFiles = import.meta.glob(
  '@/content/updates/*.json',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, Omit<CaseUpdate, 'image'> & { image?: string }>

export const updates: CaseUpdate[] = Object.values(updateFiles)
  .map((update) => ({
    ...update,
    content: Array.isArray(update.content)
      ? update.content
      : [],
  }))
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    return a.id.localeCompare(b.id, undefined, {
      numeric: true,
    })
  })