import { useState } from 'react'

type FAQEntry = {
  id: string
  question: string
  answer: string
}

type FAQGroup = {
  id: string
  eyebrow: string
  title: string
  description: string
  items: FAQEntry[]
}

const faqGroups: FAQGroup[] = [
  {
    id: 'event-basics',
    eyebrow: 'Planning the weekend',
    title: 'Event Basics',
    description:
      'This first cluster covers the details attendees usually look for before registration, including format, eligibility, and what to expect from the flow.',
    items: [
      {
        id: 'what-is-innolympics',
        question: 'What is InnOlympics 2026?',
        answer:
          'InnOlympics 2026 is a student-focused innovation event built around collaborative problem-solving, guided sessions, and a hackathon-style sprint that ends with project presentations.',
      },
      {
        id: 'who-can-join',
        question: 'Who can join the event?',
        answer:
          'The current structure is ready for student participants, campus organizations, mentors, and invited guests. Once eligibility rules are finalized, this entry can be updated without changing the component logic.',
      },
      {
        id: 'team-format',
        question: 'Will participants join individually or as teams?',
        answer:
          'This section is set up to support either format. You can update this answer later with the final team size, matching rules, and whether solo attendees will be grouped on-site.',
      },
    ],
  },
  {
    id: 'logistics-and-prep',
    eyebrow: 'Getting ready to attend',
    title: 'Logistics and Preparation',
    description:
      'Use this block for venue, materials, foods, and check-in guidance once those pieces are locked in by the organizing team.',
    items: [
      {
        id: 'what-to-bring',
        question: 'What should participants bring?',
        answer:
          'A working laptop, charger, school ID, and any materials needed for pitching are a safe baseline. You can later expand this answer with dress code notes, extension cords, and other event-specific reminders.',
      },
      {
        id: 'meals-and-support',
        question: 'Will meals or participant support be provided?',
        answer:
          'The layout already supports operational FAQs like meals, internet access, wellness breaks, and on-site assistance. Replace this placeholder with confirmed support inclusions once available.',
      },
      {
        id: 'venue-details',
        question: 'When will the venue and exact schedule be announced?',
        answer:
          'You can use this answer to point visitors to the confirmed venue release date, transportation notes, and any last-mile instructions once the final logistics package is ready.',
      },
    ],
  },
]

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
      fill="currentColor"
    >
      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
    </svg>
  )
}

export default function FAQ() {
  const [openItemId, setOpenItemId] = useState<string>(faqGroups[0]?.items[0]?.id ?? '')

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-cream py-24 md:py-28"
    >
      {/* subtle circle designs in the FAQ section */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(126,180,172,0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(218,91,60,0.1), transparent 32%)',
        }}
      />

      {/* FAQ proper */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-12">
        {/* Section header */}
        <div className="relative overflow-hidden rounded-4xl border border-[#1a0f00]/10 bg-white/55 px-6 py-8 shadow-[0_25px_70px_rgba(26,15,0,0.08)] backdrop-blur-sm md:px-10 md:py-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(218,91,60,0.05) 0%, transparent 42%, rgba(126,180,172,0.08) 100%)',
            }}
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                <span className="block h-px w-10 bg-brand-teal" />
                Frequently Asked Questions
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1a0f00] md:text-5xl lg:text-6xl">
                Important Details,
                <span className="block text-brand-teal">all in one look</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#1a0f00]/60 md:text-base">
                This first version is built to scale with the event. Questions and
                answers can be swapped, expanded, or regrouped later without changing
                the section structure or the interaction pattern.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a0f00]/55">
              <span className="rounded-full border border-[#1a0f00]/10 bg-white/60 px-4 py-2">
                {faqGroups.length} question groups
              </span>
              <span className="rounded-full border border-[#1a0f00]/10 bg-white/60 px-4 py-2">
                {faqGroups.reduce((total, group) => total + group.items.length, 0)} starter entries
              </span>
            </div>
          </div>
        </div>
        
        {/* FAQs container */}
        <div className="relative overflow-hidden rounded-[36px] border border-brand-teal/70 bg-white/70 px-5 py-6 shadow-[0_28px_90px_rgba(26,15,0,0.12)] backdrop-blur-md sm:px-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,248,219,0.74) 100%)',
            }}
          />

          {/* FAQ cards container */}
          <div className="relative grid gap-6 xl:grid-cols-2">
            {faqGroups.map((group) => (
              // container per card
              <article
                key={group.id}
                className="rounded-[28px] border border-brand-teal/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,248,219,0.92)_100%)] p-4 shadow-[0_18px_44px_rgba(26,15,0,0.08)] md:p-5"
              >
                <div className="border-b border-brand-teal/20 pb-4">
                  <span className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-brand-teal">
                    <span className="block h-px w-10 bg-brand-teal" />
                    {group.eyebrow}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-[#1a0f00] md:text-[2rem]">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1a0f00]/60">
                    {group.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => {
                    const isOpen = openItemId === item.id

                    return (
                      <div
                        key={item.id}
                        className="overflow-hidden rounded-[22px] border border-brand-teal/30 bg-white/75 transition duration-200"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenItemId((current) => (current === item.id ? '' : item.id))
                          }
                          aria-expanded={isOpen}
                          className="flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-4 text-left md:px-5"
                        >
                          <div className="min-w-0">
                            <p className="text-base font-semibold leading-relaxed text-[#1a0f00] md:text-lg">
                              {item.question}
                            </p>
                          </div>

                          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-teal/35 bg-brand-teal/10 text-brand-teal">
                            <Chevron isOpen={isOpen} />
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="border-t border-brand-teal/20 px-4 pb-4 pt-4 md:px-5">
                              <p className="text-sm leading-relaxed text-[#1a0f00]/65 md:text-[0.95rem]">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>  
  )
}
