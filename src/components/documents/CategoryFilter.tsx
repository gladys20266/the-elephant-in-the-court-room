interface CategoryFilterProps {
  selected: string
  onChange: (category: string) => void
}

const categories = [
  'All',
  'Contracts',
  'Court Filings',
  'Court Orders',
  'Corporate Records',
]

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <fieldset className="mb-10 border-0 p-0">
      <legend className="sr-only">
        Filter documents by category
      </legend>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isSelected = selected === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              aria-pressed={isSelected}
              className={`
                rounded-full
                px-5
                py-2
                font-semibold
                transition-all
                duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple
                focus-visible:ring-offset-2
                ${
                  isSelected
                    ? 'bg-purple text-white shadow-lg'
                    : 'border border-purple text-purple bg-white hover:bg-purple hover:text-white'
                }
              `}
            >
              {category}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}