interface CategoryFilterProps {
  category: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "All",
  "Court",
  "Campaign",
  "Website",
  "Media",
  "Fundraising",
];

export default function CategoryFilter({
  category,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap gap-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onCategoryChange(item)}
          className={`
            rounded-full
            border
            px-6
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              category === item
                ? "bg-[#6b3a8f] border-[#6b3a8f] text-white shadow-lg"
                : "bg-white border-gray-300 text-charcoal hover:border-[#6b3a8f] hover:text-[#6b3a8f]"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}