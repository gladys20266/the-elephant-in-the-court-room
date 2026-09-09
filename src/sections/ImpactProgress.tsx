import { useEffect, useRef, useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DonateButton from "@/components/DonateButton";
import { Briefcase, FileText, Shield } from "lucide-react";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

gsap.registerPlugin(ScrollTrigger);

const fallbackImpactProgress = {
  badgeText: "IMPACT",
  title: "Where Your Support Goes",
  description:
    "Every dollar raised goes directly toward The Elephant In The Court Room's legal defense. Here's how funds are allocated and how close we are to the goal.",
  raisedAmount: 31000,
  goalAmount: 50000,
  totalGoalLabel: "TOTAL GOAL",
  amountRaisedLabel: "AMOUNT RAISED",
  expenses: [
    {
      title: "Legal Representation",
      amount: "$30,000",
      description:
        "Attorney fees for immigration court proceedings, case preparation, and hearings.",
    },
    {
      title: "Documentation & Evidence",
      amount: "$12,000",
      description:
        "Obtaining records, expert testimony, translations, and supporting documentation.",
    },
    {
      title: "Emergency Reserve",
      amount: "$8,000",
      description:
        "Unexpected legal costs, filing fees, and additional representation if needed.",
    },
  ],
};

type ImpactProgressData = typeof fallbackImpactProgress;

type ImpactProgressQueryResult = Awaited<
  ReturnType<typeof client.queries.impactProgress>
>;

function normalizeImpactProgress(
  data: ImpactProgressQueryResult["data"]["impactProgress"]
): ImpactProgressData {
  return {
    badgeText:
      data?.badgeText ??
      fallbackImpactProgress.badgeText,

    title:
      data?.title ??
      fallbackImpactProgress.title,

    description:
      data?.description ??
      fallbackImpactProgress.description,

    raisedAmount:
      data?.raisedAmount ??
      fallbackImpactProgress.raisedAmount,

    goalAmount:
      data?.goalAmount ??
      fallbackImpactProgress.goalAmount,

    totalGoalLabel:
      data?.totalGoalLabel ??
      fallbackImpactProgress.totalGoalLabel,

    amountRaisedLabel:
      data?.amountRaisedLabel ??
      fallbackImpactProgress.amountRaisedLabel,

    expenses:
      data?.expenses?.map((expense, index) => ({
        title:
          expense?.title ??
          fallbackImpactProgress.expenses[index]?.title ??
          "",
        amount:
          expense?.amount ??
          fallbackImpactProgress.expenses[index]?.amount ??
          "",
        description:
          expense?.description ??
          fallbackImpactProgress.expenses[index]?.description ??
          "",
      })) ?? fallbackImpactProgress.expenses,
  };
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function ImpactProgressVisual({
  response,
}: {
  response: ImpactProgressQueryResult;
}) {
  const tinaResult = useTina({
    query: response.query,
    variables: response.variables,
    data: response.data,
    experimental___selectFormByFormId() {
      return `src/content/${response.variables.relativePath}`;
    },
  });

  const rawImpactProgress =
    tinaResult.data.impactProgress;

  const impactProgress =
    normalizeImpactProgress(rawImpactProgress);

  const sectionRef = useSectionReveal<HTMLElement>();
  const progressRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const progressPercentage =
    impactProgress.goalAmount > 0
      ? Math.min(
          100,
          Math.max(
            0,
            (impactProgress.raisedAmount /
              impactProgress.goalAmount) *
              100
          )
        )
      : 0;

  useEffect(() => {
    if (!progressRef.current || !progressFillRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressFillRef.current,
        {
          width: "0%",
        },
        {
          width: `${progressPercentage}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: progressRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, progressRef);

    return () => ctx.revert();
  }, [progressPercentage]);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards =
      cardsRef.current.querySelectorAll(".expense-card");

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      aria-labelledby="impact-heading"
      aria-describedby="impact-description"
      className="section-padding bg-off-white"
    >
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="reveal-child inline-block bg-magenta text-white text-label px-2.5 py-1 rounded-sm mb-4"
            data-tina-field={tinaField(
              rawImpactProgress,
              "badgeText"
            )}
          >
            {impactProgress.badgeText}
          </span>

          <h2
            id="impact-heading"
            className="reveal-child text-section-title text-purple mb-4"
            data-tina-field={tinaField(
              rawImpactProgress,
              "title"
            )}
          >
            {impactProgress.title}
          </h2>

          <p
            id="impact-description"
            className="reveal-child text-body text-charcoal/80 max-w-xl mx-auto"
            data-tina-field={tinaField(
              rawImpactProgress,
              "description"
            )}
          >
            {impactProgress.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div
          ref={progressRef}
          className="max-w-3xl mx-auto mb-12 reveal-child"
          aria-labelledby="impact-progress-label"
        >
          <div
            id="impact-progress-label"
            className="sr-only"
          >
            Campaign fundraising progress:{" "}
            {formatCurrency(
              impactProgress.raisedAmount
            )}{" "}
            raised toward a{" "}
            {formatCurrency(
              impactProgress.goalAmount
            )}{" "}
            goal, which is{" "}
            {Math.round(progressPercentage)} percent
            of the goal.
          </div>

          <div
            className="h-3 bg-off-white rounded-full overflow-hidden relative"
            style={{ background: "#E8E8E4" }}
          >
            <div
              ref={progressFillRef}
              className="progress-fill"
              style={{ width: "0%" }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={impactProgress.goalAmount}
              aria-valuenow={impactProgress.raisedAmount}
              aria-valuetext={`${formatCurrency(
                impactProgress.raisedAmount
              )} raised of ${formatCurrency(
                impactProgress.goalAmount
              )}, ${Math.round(
                progressPercentage
              )}% funded`}
              aria-label="Campaign fundraising progress"
            />

            {/* Milestone markers */}
            {[25, 50, 75].map((pct) => (
              <div
                key={pct}
                aria-hidden="true"
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"
                style={{
                  left: `${pct}%`,
                  transform:
                    "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          <div
            className="flex justify-between mt-3"
            aria-label="Fundraising totals"
          >
            <span className="text-body-small text-charcoal">
              Raised:{" "}
              {formatCurrency(
                impactProgress.raisedAmount
              )}
            </span>

            <span className="text-body-small text-charcoal">
              Goal:{" "}
              {formatCurrency(
                impactProgress.goalAmount
              )}
            </span>
          </div>
        </div>

        {/* Expense Cards */}
        <div
          ref={cardsRef}
          role="list"
          aria-label="Campaign expense allocation"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {impactProgress.expenses.map(
            (card, index) => {
              const icons = [
                Briefcase,
                FileText,
                Shield,
              ];

              const Icon = icons[index] ?? FileText;

              const rawExpense =
                rawImpactProgress.expenses?.[
                  index
                ];

              return (
                <div
                  key={index}
                  role="listitem"
                  className="expense-card bg-white rounded-xl p-6 shadow-card opacity-0 translate-y-8"
                >
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full bg-lime/20 flex items-center justify-center mb-4"
                  >
                    <Icon
                      aria-hidden="true"
                      focusable="false"
                      className="w-5 h-5 text-purple"
                    />
                  </div>

                  <h3
                    className="text-body font-medium text-charcoal"
                    data-tina-field={
                      rawExpense
                        ? tinaField(
                            rawExpense,
                            "title"
                          )
                        : undefined
                    }
                  >
                    {card.title}
                  </h3>

                  <p
                    className="font-display text-2xl text-purple mt-2"
                    data-tina-field={
                      rawExpense
                        ? tinaField(
                            rawExpense,
                            "amount"
                          )
                        : undefined
                    }
                  >
                    {card.amount}
                  </p>

                  <p
                    className="text-body-small text-charcoal/70 mt-2"
                    data-tina-field={
                      rawExpense
                        ? tinaField(
                            rawExpense,
                            "description"
                          )
                        : undefined
                    }
                  >
                    {card.description}
                  </p>
                </div>
              );
            }
          )}
        </div>

        {/* Total Summary */}
        <div
          className="
            reveal-child
            max-w-xl
            mx-auto
            bg-white
            rounded-xl
            p-5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-6
            sm:gap-0
            mb-10
          "
          aria-label="Campaign fundraising summary"
        >
          <div
            className="text-center sm:pr-8 sm:border-r border-lime/20"
            aria-label={`Total fundraising goal: ${formatCurrency(
              impactProgress.goalAmount
            )}`}
          >
            <p
              className="text-label text-charcoal/50"
              data-tina-field={tinaField(
                rawImpactProgress,
                "totalGoalLabel"
              )}
            >
              {impactProgress.totalGoalLabel}
            </p>

            <p
              className="font-display text-2xl text-purple mt-1"
              data-tina-field={tinaField(
                rawImpactProgress,
                "goalAmount"
              )}
            >
              {formatCurrency(
                impactProgress.goalAmount
              )}
            </p>
          </div>

          <div
            className="text-center sm:pl-8"
            aria-label={`Amount raised: ${formatCurrency(
              impactProgress.raisedAmount
            )}`}
          >
            <p
              className="text-label text-charcoal/50"
              data-tina-field={tinaField(
                rawImpactProgress,
                "amountRaisedLabel"
              )}
            >
              {impactProgress.amountRaisedLabel}
            </p>

            <p
              className="font-display text-2xl text-success mt-1"
              data-tina-field={tinaField(
                rawImpactProgress,
                "raisedAmount"
              )}
            >
              {formatCurrency(
                impactProgress.raisedAmount
              )}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-child text-center">
          <DonateButton size="large" />
        </div>
      </div>
    </section>
  );
}

export default function ImpactProgress() {
  const [response, setResponse] =
    useState<ImpactProgressQueryResult | null>(null);

  useEffect(() => {
    let mounted = true;

    client.queries
      .impactProgress({
        relativePath: "impact-progress.json",
      })
      .then((result) => {
        if (mounted) {
          setResponse(result);
        }
      })
      .catch((error) => {
        console.error(
          "[Tina ImpactProgress]",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!response) {
    return null;
  }

  return (
    <ImpactProgressVisual response={response} />
  );
}