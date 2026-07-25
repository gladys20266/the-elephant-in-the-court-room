interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-8">
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
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          />
        </svg>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search documents..."
          className="
            w-full
            rounded-full
            border
            border-gray-300
            bg-white
            py-4
            pl-14
            pr-5
            text-charcoal
            shadow-sm
            outline-none
            transition-all
            duration-300
            focus:border-purple
            focus:ring-2
            focus:ring-purple/20
          "
        />

      </div>
    </div>
  );
}