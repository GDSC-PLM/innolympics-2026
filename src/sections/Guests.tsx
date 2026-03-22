import { useState } from 'react'

import sample1 from '../guest-pics/sample-1.jpg'
import sample2 from '../guest-pics/sample-2.jpg'
import sample3 from '../guest-pics/sample-3.jpg'
import orangeredShape from '../raw-assets/orangered-shape.png'
import pillar from '../raw-assets/pillar-2.png'

type GuestProfile = {
  name: string
  role: string
  company: string
  blurb: string
  tags: string[]
  image: string
}

type GuestGroup = {
  id: string
  label: string
  accent: string
  buttonText: string
  eyebrow: string
  description: string
  guests: GuestProfile[]
}

const guestGroups: GuestGroup[] = [
  {
    id: 'speakers',
    label: 'Speakers',
    accent: '#DA5B3C',
    buttonText: '#FFF8DB',
    eyebrow: 'Featured talks and opening energy',
    description:
      'A headline lineup to set the tone for the weekend with practical stories, bold ideas, and the kind of sessions that make teams want to build immediately.',
    guests: [
      {
        name: 'McLovin',
        role: 'Startup Storytelling Speaker',
        company: 'Sample keynote profile',
        blurb:
          'Placeholder speaker bio for a high-energy opening talk focused on turning rough ideas into memorable products people can rally behind.',
        tags: ['Keynote', 'Founder energy', 'Narrative'],
        image: sample1,
      },
      {
        name: 'Ramona Flowers',
        role: 'Product Design Speaker',
        company: 'Sample featured speaker',
        blurb:
          'Dummy profile copy for a speaker centered on crafting experience-driven products, shipping with taste, and staying sharp under pressure.',
        tags: ['Design systems', 'UX clarity', 'Creative direction'],
        image: sample2,
      },
      {
        name: 'Patrick Bateman',
        role: 'Brand Strategy Speaker',
        company: 'Sample industry speaker',
        blurb:
          'Temporary content for a polished strategy talk around positioning, presentation discipline, and making a strong impression in competitive rooms.',
        tags: ['Branding', 'Pitch polish', 'Executive framing'],
        image: sample3,
      },
    ],
  },
  {
    id: 'mentors',
    label: 'Mentors',
    accent: '#7EB4AC',
    buttonText: '#1A1208',
    eyebrow: 'Guidance during the build sprint',
    description:
      'Mentors are positioned as hands-on guides for teams who need product, technical, and presentation feedback while ideas are still taking shape.',
    guests: [
      {
        name: 'McLovin',
        role: 'Hackathon Growth Mentor',
        company: 'Sample mentor profile',
        blurb:
          'Placeholder mentor copy for helping teams validate their audience, simplify their message, and find the most convincing version of their story.',
        tags: ['Growth loops', 'Audience fit', 'Messaging'],
        image: sample1,
      },
      {
        name: 'Ramona Flowers',
        role: 'Design Sprint Mentor',
        company: 'Sample mentor profile',
        blurb:
          'Dummy profile for a mentor supporting interface decisions, prototype refinement, and the small interaction choices that make a demo feel finished.',
        tags: ['Prototype reviews', 'UX critique', 'Flows'],
        image: sample2,
      },
      {
        name: 'Patrick Bateman',
        role: 'Pitch Positioning Mentor',
        company: 'Sample mentor profile',
        blurb:
          'Temporary mentorship profile focused on sharpening value propositions, trimming weak slides, and helping teams present with confidence.',
        tags: ['Deck cleanup', 'Positioning', 'Delivery'],
        image: sample3,
      },
    ],
  },
  {
    id: 'judges',
    label: 'Judges',
    accent: '#DFAD57',
    buttonText: '#1A1208',
    eyebrow: 'Evaluation with product and business lens',
    description:
      'The judging group highlights the people who will examine feasibility, usability, and market direction once teams step into final presentation mode.',
    guests: [
      {
        name: 'McLovin',
        role: 'Feasibility Judge',
        company: 'Sample judging profile',
        blurb:
          'Placeholder judging bio representing practical review of implementation scope, execution realism, and whether a concept can survive outside the event.',
        tags: ['Execution', 'Technical fit', 'Scope'],
        image: sample1,
      },
      {
        name: 'Ramona Flowers',
        role: 'User Experience Judge',
        company: 'Sample judging profile',
        blurb:
          'Dummy judge copy for reviewing interface quality, accessibility of ideas, and whether the product genuinely solves a human problem clearly.',
        tags: ['UX quality', 'Human-centered', 'Clarity'],
        image: sample2,
      },
      {
        name: 'Patrick Bateman',
        role: 'Business Model Judge',
        company: 'Sample judging profile',
        blurb:
          'Temporary judge profile focused on traction logic, market narrative, and whether a team can explain why their solution deserves attention.',
        tags: ['Market fit', 'Strategy', 'Commercial sense'],
        image: sample3,
      },
    ],
  },
  {
    id: 'valuable-guests',
    label: 'Other Valuable Guests',
    accent: '#FFD65D',
    buttonText: '#1A1208',
    eyebrow: 'Extra voices across the event space',
    description:
      'This block is reserved for notable guests who bring community value, inspiration...',
    guests: [
      {
        name: 'McLovin',
        role: 'Community Partner Guest',
        company: 'Sample guest profile',
        blurb:
          'Placeholder profile for a guest contributing community visibility, grassroots perspective, and high-approachability networking energy.',
        tags: ['Community', 'Networking', 'Ecosystem'],
        image: sample1,
      },
      {
        name: 'Ramona Flowers',
        role: 'Startup Ecosystem Guest',
        company: 'Sample guest profile',
        blurb:
          'Dummy content for a guest who adds product culture insight, startup-world context, and outside perspective teams can learn from in between sessions.',
        tags: ['Startup culture', 'Insight', 'Connections'],
        image: sample2,
      },
      {
        name: 'Patrick Bateman',
        role: 'Industry Network Guest',
        company: 'Sample guest profile',
        blurb:
          'Temporary profile representing guests who elevate conversations around professionalism, presentation, and building strong external relationships.',
        tags: ['Industry links', 'Presence', 'Professional polish'],
        image: sample3,
      },
    ],
  },
]

function wrapIndex(index: number, length: number) {
  if (length === 0) {
    return 0
  }

  return (index + length) % length
}

type StageCardProps = {
  guest: GuestProfile
  accent: string
  label: string
  onClick: () => void
  align: 'left' | 'right'
}

function StageCard({ guest, accent, label, onClick, align }: StageCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group hidden h-full text-left lg:block ${
        align === 'left' ? 'lg:pr-3 xl:pr-5' : 'lg:pl-3 xl:pl-5'
      }`}
    >
      <article className="flex h-full min-h-[31rem] flex-col rounded-[28px] border border-[#1a0f00]/10 bg-white/60 p-4 shadow-[0_18px_44px_rgba(26,15,0,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#1a0f00]/20 xl:min-h-[34rem]">
        <div className="overflow-hidden rounded-[22px] bg-[#1a1208]">
          <div
            className="h-[21rem] w-full xl:h-[24rem]"
            style={{
              background: `linear-gradient(180deg, ${accent}18 0%, rgba(26,18,8,0.05) 100%)`,
            }}
          >
            <img
              src={guest.image}
              alt={guest.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col justify-between gap-5">
          <div>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#1a0f00]/40">
              {guest.company}
            </span>
            <h4 className="mt-2 text-[1.7rem] leading-[1.05] font-bold text-[#1a0f00]">
              {guest.name}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#1a0f00]/60">{guest.role}</p>
          </div>

          <span
            className="block h-px w-16 rounded-full"
            style={{ backgroundColor: `${accent}55` }}
          />
        </div>
      </article>
    </button>
  )
}

type NavButtonProps = {
  direction: 'previous' | 'next'
  onClick: () => void
}

function NavButton({ direction, onClick }: NavButtonProps) {
  const isPrevious = direction === 'previous'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? 'Show previous guest' : 'Show next guest'}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1a0f00]/10 bg-white/80 text-[#1a0f00] shadow-[0_12px_30px_rgba(26,15,0,0.08)] transition hover:-translate-y-0.5 hover:bg-white cursor-pointer"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${isPrevious ? '' : 'rotate-180'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  )
}

export default function Guests() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [spotlightIndex, setSpotlightIndex] = useState(1)

  const activeGroup = guestGroups[activeGroupIndex] ?? guestGroups[0]
  const guestCount = activeGroup.guests.length

  const getGuestAtOffset = (offset: number) => {
    const wrappedIndex = wrapIndex(spotlightIndex + offset, guestCount)
    return activeGroup.guests[wrappedIndex] ?? activeGroup.guests[0]
  }

  const previousGuest = getGuestAtOffset(-1)
  const currentGuest = getGuestAtOffset(0)
  const nextGuest = getGuestAtOffset(1)

  if (!previousGuest || !currentGuest || !nextGuest) {
    return null
  }

  const goToPrevious = () => {
    setSpotlightIndex((current) => wrapIndex(current - 1, guestCount))
  }

  const goToNext = () => {
    setSpotlightIndex((current) => wrapIndex(current + 1, guestCount))
  }

  return (
    <section
      id="guests"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #FFF8DB 0%, rgba(255,248,219,0.94) 28%, rgba(210,201,163,0.72) 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(126,180,172,0.14), transparent 26%), radial-gradient(circle at bottom right, rgba(255,214,93,0.22), transparent 34%)',
        }}
      />

      <img
        src={orangeredShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10rem] hidden w-[34rem] select-none opacity-[0.22] lg:block"
      />
      <img
        src={pillar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-4rem] hidden w-52 select-none opacity-[0.18] xl:block"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:px-12 md:py-28">
        <div className="relative overflow-hidden rounded-[32px] border border-[#1a0f00]/10 bg-brand-cream/[0.85] px-6 py-8 shadow-[0_25px_70px_rgba(26,15,0,0.08)] backdrop-blur-sm md:px-10 md:py-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-gold/10 to-transparent lg:block" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-coral">
                <span className="block h-px w-10 bg-brand-coral" />
                Guest Lineup
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1a0f00] md:text-5xl lg:text-6xl">
                Speakers, Mentors, Judges, and
                <span className="block text-brand-coral">Other Valuable Guests</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#1a0f00]/60 md:text-base">
                A dedicated stage for the people shaping the InnOlympics experience,
                from featured talks and mentorship rounds to final judging and
                community-building moments in between.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a0f00]/55">
              <span className="rounded-full border border-[#1a0f00]/10 bg-white/60 px-4 py-2">
                4 guest tracks
              </span>
              <span className="rounded-full border border-[#1a0f00]/10 bg-white/60 px-4 py-2">
                3 sample profiles
              </span>
              <span className="rounded-full border border-[#1a0f00]/10 bg-white/60 px-4 py-2">
                asset-led layout
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[40px] border border-[#1a0f00]/10 px-5 py-8 shadow-[0_28px_90px_rgba(26,15,0,0.12)] sm:px-6 md:px-10 md:py-10 lg:px-14 lg:py-14">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,248,219,0.92) 0%, rgba(210,201,163,0.72) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-10 top-8 hidden h-px bg-[#1a0f00]/[0.08] lg:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/[0.08] to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-6 xl:grid xl:min-h-[11rem] xl:grid-cols-[minmax(0,1fr)_minmax(26rem,40rem)] xl:items-start xl:gap-8">
              <div className="max-w-2xl">
                <span
                  className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em]"
                  style={{ color: activeGroup.accent }}
                >
                  <span
                    className="block h-px w-10"
                    style={{ backgroundColor: activeGroup.accent }}
                  />
                  {activeGroup.eyebrow}
                </span>

                <h3 className="mt-4 text-3xl font-bold text-[#1a0f00] md:text-4xl">
                  {activeGroup.label}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1a0f00]/60 md:text-base">
                  {activeGroup.description}
                </p>
              </div>

              <div className="w-full xl:ml-auto xl:max-w-[40rem]">
                <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#1a0f00]/[0.42]">
                  <span className="block h-px flex-1 bg-[#1a0f00]/[0.12]" />
                  Categories
                  <span className="block h-px flex-1 bg-[#1a0f00]/[0.12]" />
                </div>

                <div className="mt-3 overflow-x-auto px-1 pt-2 pb-3">
                  <div className="flex w-max min-w-full items-center gap-3 xl:justify-end">
                    {guestGroups.map((group, index) => {
                      const isActive = index === activeGroupIndex

                      return (
                        <button
                          key={group.id}
                          type="button"
                          onClick={() => {
                            setActiveGroupIndex(index)
                            setSpotlightIndex(1)
                          }}
                          aria-pressed={isActive}
                          className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
                          style={{
                            backgroundColor: isActive ? group.accent : `${group.accent}14`,
                            color: isActive ? group.buttonText : '#1A1208',
                            borderColor: isActive ? group.accent : `${group.accent}33`,
                          }}
                        >
                          {group.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 lg:hidden">
              <NavButton direction="previous" onClick={goToPrevious} />
              <NavButton direction="next" onClick={goToNext} />
            </div>

            <div className="relative min-h-[56rem] lg:min-h-[39rem]">
              <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                <div className="pointer-events-auto">
                  <NavButton direction="previous" onClick={goToPrevious} />
                </div>
              </div>
              <div className="pointer-events-none absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 lg:block">
                <div className="pointer-events-auto">
                  <NavButton direction="next" onClick={goToNext} />
                </div>
              </div>

              <div className="grid items-end gap-5 lg:min-h-[39rem] lg:grid-cols-[0.82fr_1.12fr_0.82fr]">
                <StageCard
                  guest={previousGuest}
                  accent={activeGroup.accent}
                  label={`Show ${previousGuest.name}`}
                  onClick={goToPrevious}
                  align="left"
                />

                <article
                  className="relative flex min-h-[35rem] flex-col overflow-hidden rounded-[34px] border bg-[#1a1208] p-5 text-white shadow-[0_36px_80px_rgba(26,15,0,0.26)] sm:p-6 md:p-8 lg:h-[39rem]"
                  style={{
                    borderColor: `${activeGroup.accent}55`,
                    boxShadow: `0 36px 80px ${activeGroup.accent}22`,
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at top left, rgba(255,214,93,0.22), transparent 38%), radial-gradient(circle at bottom right, rgba(126,180,172,0.22), transparent 42%)',
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-36"
                    style={{
                      background: `radial-gradient(circle at top, ${activeGroup.accent}22 0%, transparent 72%)`,
                    }}
                  />

                  <div className="relative flex h-full min-h-0 flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="rounded-full px-3.5 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.2em]"
                        style={{
                          backgroundColor: `${activeGroup.accent}22`,
                          border: `1px solid ${activeGroup.accent}44`,
                          color: activeGroup.accent,
                        }}
                      >
                        {activeGroup.label}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
                        Featured
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col items-center text-center">
                      <div
                        className="rounded-full p-1.5 shadow-[0_0_0_8px_rgba(255,248,219,0.04)]"
                        style={{ background: `linear-gradient(135deg, ${activeGroup.accent}, #FFF8DB)` }}
                      >
                        <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-[#1f150d] bg-[#1a1208] sm:h-40 sm:w-40">
                          <img
                            src={currentGuest.image}
                            alt={currentGuest.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex min-h-[8.25rem] max-w-[17rem] flex-col items-center">
                        <h4 className="text-[2rem] font-bold leading-[0.98] text-brand-cream sm:text-[2.25rem]">
                          {currentGuest.name}
                        </h4>
                        <p className="mt-2 max-w-[15rem] text-sm text-brand-cream/55">
                          {currentGuest.company}
                        </p>
                        <p
                          className="mt-3 max-w-[16rem] text-sm leading-relaxed font-semibold uppercase tracking-[0.2em]"
                          style={{ color: activeGroup.accent }}
                        >
                          {currentGuest.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex min-h-[11rem] flex-1 flex-col">
                      <div className="flex h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                        <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-gold">
                          About
                        </span>
                        <div className="mt-3 h-[8rem] overflow-hidden">
                          <p
                            className="text-sm leading-relaxed text-white/[0.78]"
                            style={{
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 5,
                              overflow: 'hidden',
                            }}
                          >
                            {currentGuest.blurb}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 shrink-0 flex justify-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.16)]">
                        {activeGroup.guests.map((guest, index) => {
                          const isActive = index === wrapIndex(spotlightIndex, guestCount)

                          return (
                            <button
                              key={`${activeGroup.id}-${guest.name}`}
                              type="button"
                              onClick={() => setSpotlightIndex(index)}
                              aria-label={`Show ${guest.name}`}
                              className="cursor-pointer rounded-full transition"
                              style={{
                                width: isActive ? '2rem' : '0.7rem',
                                height: '0.7rem',
                                backgroundColor: isActive ? activeGroup.accent : 'rgba(255,255,255,0.22)',
                              }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </article>

                <StageCard
                  guest={nextGuest}
                  accent={activeGroup.accent}
                  label={`Show ${nextGuest.name}`}
                  onClick={goToNext}
                  align="right"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 lg:hidden">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="rounded-[24px] border border-[#1a0f00]/10 bg-white/55 p-3 text-left shadow-[0_16px_34px_rgba(26,15,0,0.07)]"
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <div
                      className="h-[16rem]"
                      style={{
                        background: `linear-gradient(180deg, ${activeGroup.accent}16 0%, rgba(26,18,8,0.04) 100%)`,
                      }}
                    >
                      <img
                        src={previousGuest.image}
                        alt={previousGuest.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="mt-3 text-lg font-bold text-[#1a0f00]">{previousGuest.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#1a0f00]/60">{previousGuest.role}</p>
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="rounded-[24px] border border-[#1a0f00]/10 bg-white/55 p-3 text-left shadow-[0_16px_34px_rgba(26,15,0,0.07)]"
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <div
                      className="h-[16rem]"
                      style={{
                        background: `linear-gradient(180deg, ${activeGroup.accent}16 0%, rgba(26,18,8,0.04) 100%)`,
                      }}
                    >
                      <img
                        src={nextGuest.image}
                        alt={nextGuest.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="mt-3 text-lg font-bold text-[#1a0f00]">{nextGuest.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#1a0f00]/60">{nextGuest.role}</p>
                </button>
              </div>
            </div>

            <div className="rounded-[26px] border border-[#1a0f00]/[0.08] bg-white/45 px-4 py-4 text-sm leading-relaxed text-[#1a0f00]/[0.58] md:px-5">
              Photos and biographies in this section currently use the placeholder
              assets from <span className="font-semibold text-[#1a0f00]/[0.72]">src/guest-pics</span>.
              The structure is ready for the final confirmed lineup once names, titles,
              and organizations are locked in.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
