import { useState } from 'react'
import orangeredShape from '../raw-assets/orangered-shape.png'

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
    id: 'event-primer',
    eyebrow: 'Initializing readiness',
    title: 'Event Primer',
    description:
      "Know what this year's InnOlympics has to offer. Your readiness is key to elevating ideas",
    items: [
      {
        id: 'what-is-innolympics',
        question: 'What is InnOlympics 2026?',
        answer:
          'InnOlympics 2026 is a 2-day, 1-night hackathon where teams of four build practical solutions that make it easier for Filipinos to dream without compromise.',
      },
      {
        id: 'theme-this-year',
        question: 'What is the theme for this year?',
        answer:
          'Participants will choose one of three tracks—Pangarap sa Pagkatuto (Education & Opportunity Access), Pangarap sa Kalusugan (Health & Well-being Access), or Pangarap sa Bayan (Governance, Trust, and Livelihoods).',
      },
      {
        id: 'event-rules',
        question: 'Are there specific rules for the project?',
        answer:
          'Projects must be grounded in Filipino context and designed for real constraints, and teams are still required to integrate at least one Google technology',
      },
      {
        id: 'team-members',
        question: 'Can I join the hackathon solo?',
        answer: 
          'No, individual registrations are not allowed. You must have a fully-formed team of 4 members upon registration.',
      },
    ],
  },
  {
    id: 'logistics-and-prep',
    eyebrow: 'Getting ready to attend',
    title: 'Logistics and Preparation',
    description:
      'Plan your trip, pack your bags, and definitely charge your devices. Let us see where InnOlympics 2026 will bring you this time.',
    items: [
      {
        id: 'venue-details',
        question: 'Where is the venue going to be at?',
        answer:
          'Our venue partner, KMC Solutions, has permitted to launch this event in their offices at the 18th Floor EXXA Tower, Bridgetown Business Park, Quezon City.',
      },
      {
        id: 'eat-and-sleep',
        question: 'Will there be places to eat and sleep?',
        answer:
          'For food, there are pantries, concessionaires and restaurants available. There are designated sleep schedules and spaces for each track.',
      },
      {
        id: 'what-to-bring',
        question: 'What are we allowed to bring?',
        answer:
          'Your team is highly encouraged to bring laptops, smartphones, their chargers, and other devices essential to project building—as well as the genius, talent, and your full enthusiasm on D-Day. ',
      },
      {
        id: 'ushers-mentors',
        question: 'Will there be people to guide us throughout?',
        answer: 'If it is about helping you navigate the venue, there will be ushers available within the premises. If it is about the project, there will be mentors and help desks to reach out if your team needs guidance.',
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
      <img
        src={orangeredShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-0 hidden h-full w-[12rem] object-cover object-left opacity-25 md:block md:w-[16rem] lg:w-[20rem] xl:w-[24rem]"
      />

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
        <div className="relative px-6 py-8 md:px-10 md:py-10">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                <span className="block h-px w-10 bg-brand-teal" />
                Frequently Asked Questions
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1a0f00] md:text-5xl lg:text-6xl">
                Important
                <span className="md:ml-4 block md:inline text-brand-teal">Details</span>
              </h2>
              <p className="text-[#1a0f00]/50 mt-3">that you don&apos;t want to miss</p>
            </div>
          </div>
        </div>
        
        {/* FAQs container */}
        <div className="relative overflow-hidden rounded-[36px] border border-brand-teal/70 bg-white/40 px-5 py-6 shadow-[0_28px_90px_rgba(26,15,0,0.12)] backdrop-blur-[2px] sm:px-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
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
