export default function CaseProgress() {
  return (
    <section className="mb-20">

      <div className="text-center mb-12">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#d94b8a]">
          Case Progress
        </p>

        <h2 className="text-4xl font-bold text-purple">
          Eleven Years Pursuing Justice
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-charcoal leading-8">
          From the signing of the Lease-to-Own Agreement in 2010 to the
          ongoing legal proceedings today, the case has spanned more than
          a decade.
        </p>

      </div>

      {/* Progress Line */}

      <div className="relative mx-auto max-w-6xl">

        <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-gray-200" />

        <div
          className="absolute left-0 top-8 h-1 rounded-full bg-[#6b3a8f]"
          style={{ width: "100%" }}
        />

        <div className="relative flex justify-between">

          <ProgressPoint
            number="2010"
            title="Contract Signed"
          />

          <ProgressPoint
            number="2014"
            title="Purchase Refused"
          />

          <ProgressPoint
            number="2014"
            title="Court Case Filed"
          />

          <ProgressPoint
            number="2026"
            title="Campaign Active"
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-20 grid gap-8 md:grid-cols-4">

        <StatCard
          value="11+"
          label="Years"
        />

        <StatCard
          value="4,000+"
          label="Days"
        />

        <StatCard
          value="1"
          label="Broken Contract"
        />

        <StatCard
          value="Active"
          label="Campaign"
        />

      </div>

    </section>
  );
}

interface ProgressPointProps {
  number: string;
  title: string;
}

function ProgressPoint({
  number,
  title,
}: ProgressPointProps) {
  return (
    <div className="relative text-center">

      <div className="mx-auto mb-4 h-6 w-6 rounded-full border-4 border-white bg-[#d94b8a] shadow-lg" />

      <div className="text-lg font-bold text-purple">
        {number}
      </div>

      <div className="mt-2 max-w-[130px] text-sm text-charcoal">
        {title}
      </div>

    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg">

      <div className="text-5xl font-bold text-[#6b3a8f]">
        {value}
      </div>

      <div className="mt-3 uppercase tracking-[0.15em] text-gray-500">
        {label}
      </div>

    </div>
  );
}