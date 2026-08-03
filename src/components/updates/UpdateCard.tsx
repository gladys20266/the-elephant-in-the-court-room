interface UpdateCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
}

export default function UpdateCard({
  title,
  summary,
  category,
  date,
}: UpdateCardProps) {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        p-8
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      {/* Content */}
      <div className="flex-1">

        {/* Category */}
        <span
          className="
            inline-block
            rounded-sm
            bg-[#d94b8a]
            px-5
            py-2
            mb-5
            text-[11px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-white
          "
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-purple mb-3">
          {title}
        </h3>

        {/* Date */}
        <p className="text-sm text-charcoal mb-5">
          {date}
        </p>

        {/* Summary */}
        <p className="text-charcoal leading-8">
          {summary}
        </p>

      </div>

      {/* Button */}
      <div className="mt-10">
        <button
          className="
            inline-flex
            items-center
            justify-center
            bg-[#6b3a8f]
            px-8
            py-3.5
            rounded-sm
            text-white
            text-sm
            font-bold
            uppercase
            tracking-[0.08em]
            transition-all
            duration-300
            hover:opacity-90
            hover:-translate-y-0.5
            hover:shadow-lg
          "
        >
          Read Update
        </button>
      </div>
    </div>
  );
}