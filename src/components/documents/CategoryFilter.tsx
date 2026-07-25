interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Contracts",
  "Court Filings",
  "Court Orders",
  "Corporate Records",
];

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 font-semibold transition-all duration-300 ${
            selected === category
              ? "bg-purple text-white shadow-lg"
              : "border border-purple text-purple bg-white hover:bg-purple hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}