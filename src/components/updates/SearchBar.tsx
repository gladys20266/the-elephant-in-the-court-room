interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  search,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="mb-10">
      <div className="relative">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search updates..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="
            w-full
            rounded-full
            border
            border-gray-300
            bg-white
            py-4
            pl-14
            pr-6
            text-charcoal
            shadow-sm
            transition-all
            duration-300
            focus:border-purple
            focus:outline-none
            focus:ring-2
            focus:ring-purple/20
          "
        />

      </div>
    </div>
  );
}