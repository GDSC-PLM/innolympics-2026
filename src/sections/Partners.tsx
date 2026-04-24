import { useState } from 'react'

import blueShape from '../raw-assets/blue-shape.png'
import orangeredShape from '../raw-assets/orangered-shape.png'
import pillar from '../raw-assets/pillar.png'
import gdgHau from '../raw-assets/partners/GDG-HAU.png'
import gdgNu from '../raw-assets/partners/GDG-NU.png'
import scaleLogo from '../raw-assets/partners/SCALE.jpeg'
import kmcLogo from '../raw-assets/sponsors/KMC-Updated-Logo-2026-Black.png'
import manusLogo from '../raw-assets/sponsors/manus.png'
import omniLogo from '../raw-assets/sponsors/Omni_Black_WithTitle.png'
import mentalCoffeeLogo from '../raw-assets/sponsors/The Mental Coffee - Logo.jpg'


const homeRoomLogo = new URL('../raw-assets/sponsors/Copy of Logo (BLUE).JPG', import.meta.url)
  .href

type ArtworkEntry = {
  alt: string
  background?: string
  imageClassName?: string
  name: string
  src: string
  summary: string
}

type Tier = {
  accent: string
  artwork: ArtworkEntry[]
  description: string
  footnote: string
  id: string
  ink: string
  label: string
}

type Showcase = {
  accent: string
  description: string
  eyebrow: string
  id: 'partners' | 'sponsors'
  ink: string
  label: string
  stats: string[]
  tiers: Tier[]
  title: string
}

type SpotlightItem = ArtworkEntry & {
  accent: string
  tierDescription: string
  tierFootnote: string
  tierId: string
  tierLabel: string
}

const showcases: Showcase[] = [
  {
    id: 'partners',
    label: 'Partners',
    eyebrow: 'Confirmed school and ecosystem collaborators',
    title: 'Partner spotlights now give each organization its own featured moment',
    description:
      'The partner view focuses on one organization at a time so every logo, tier, and summary stays readable without squeezing the roster into dense columns.',
    accent: '#DA5B3C',
    ink: '#FFF8DB',
    stats: ['3 featured partners', '2 partner lanes', 'auto-rotating spotlight'],
    tiers: [
      {
        id: 'campus-chapters',
        label: 'Campus Chapters',
        description:
          'Google Developer Groups on Campus chapters helping widen student reach, technical community presence, and school-to-school collaboration.',
        footnote: 'Academic partners',
        accent: '#DA5B3C',
        ink: '#FFF8DB',
        artwork: [
          {
            src: gdgHau,
            alt: 'GDG-HAU logo',
            name: 'GDG-HAU',
            summary:
              'Google Developer Group on Campus - Holy Angel University, represented by Joaquin Galang, expands the campus builder network supporting the event.',
            background: 'rgba(255,248,219,0.96)',
          },
          {
            src: gdgNu,
            alt: 'GDGoC NU Manila logo',
            name: 'GDGoC - NU Manila',
            summary:
              'The National University Manila chapter, represented by Gwyenth Lim, adds another student-led developer community to the confirmed partner roster.',
            background: 'rgba(255,255,255,0.98)',
          },
        ],
      },
      {
        id: 'startup-ecosystem',
        label: 'Startup Ecosystem',
        description:
          'Builder and entrepreneurship communities contributing founder-minded support, networks, and innovation energy around the event.',
        footnote: 'Ecosystem partners',
        accent: '#7EB4AC',
        ink: '#1A1208',
        artwork: [
          {
            src: scaleLogo,
            alt: 'SCALE logo',
            name: 'SCALE',
            summary:
              'Startup Creator and Accelerator for Lasallian Entrepreneurs brings DLSU-LSEED founder support and ecosystem reach through its student and faculty leadership team.',
            background: 'rgba(255,255,255,0.96)',
          },
        ],
      },
    ],
  },
  {
    id: 'sponsors',
    label: 'Sponsors',
    eyebrow: 'Confirmed backers mapped to their actual tier names',
    title: 'Sponsor spotlights now rotate through the actual 2026 tier lineup',
    description:
      'The sponsor view keeps the real tier hierarchy from the source files while giving each brand enough space for a clean logo presentation and readable summary.',
    accent: '#FFD65D',
    ink: '#1A1208',
    stats: ['6 featured sponsors', '5 live tiers', 'real logos and descriptions'],
    tiers: [
      {
        id: 'presented-by',
        label: 'Presented By',
        description:
          'Headline sponsor lane carrying the Platinum Prism Partner tier from the sponsor brief.',
        footnote: 'Platinum Prism Partner',
        accent: '#FFD65D',
        ink: '#1A1208',
        artwork: [
          {
            src: manusLogo,
            alt: 'Manus logo',
            name: 'Manus',
            summary:
              'Manus from Meta is a general AI agent that turns thoughts into actions across work and life while helping teams automate complex workflows and move faster.',
            background: '#050505',
          },
          {
            src: omniLogo,
            alt: 'Omni Channel Solutions logo',
            name: 'Omni Channel Solutions PH, Inc.',
            summary:
              'Omni Channel Solutions joins the Presented By lane with official company details and event coordination contact information already supplied in the sponsor brief.',
            background: 'rgba(255,255,255,0.98)',
          },
        ],
      },
      {
        id: 'co-presented-by',
        label: 'Co-Presented By',
        description:
          'Radiant Red backing for wider event visibility and attendee-facing support throughout the program.',
        footnote: 'Radiant Red Partner',
        accent: '#DA5B3C',
        ink: '#FFF8DB',
        artwork: [
          {
            src: homeRoomLogo,
            alt: 'HomeRoom Dapitan logo',
            name: 'HomeRoom Dapitan',
            summary:
              'HomeRoom Dapitan is confirmed under the Co-Presented By lane as the sponsor listed in the Radiant Red Partner tier.',
            background: 'rgba(255,255,255,0.96)',
          },
        ],
      },
      {
        id: 'official-venue-partner',
        label: 'Official Venue Partner',
        description:
          'Venue and workspace support helping host teams, guests, and the on-site event experience.',
        footnote: 'Venue host support',
        accent: '#7EB4AC',
        ink: '#1A1208',
        artwork: [
          {
            src: kmcLogo,
            alt: 'KMC Solutions logo',
            name: 'KMC Solutions',
            summary:
              'KMC Solutions builds offshore global teams and flexible workspaces across the Philippines and Colombia, and serves as the official venue partner for the event.',
            background: 'rgba(255,255,255,0.98)',
          },
        ],
      },
      {
        id: 'concessionaire',
        label: 'Concessionaire',
        description:
          'On-site refreshments and wellness-focused drinks available for attendees during the event.',
        footnote: 'Food and beverage support',
        accent: '#7EB4AC',
        ink: '#1A1208',
        artwork: [
          {
            src: mentalCoffeeLogo,
            alt: 'The Mental Coffee logo',
            name: 'The Mental Coffee',
            summary:
              'The Mental Coffee is a premium wellness brand offering coffee and non-coffee drinks designed to support focus, memory, and sustained mental energy.',
            background: '#050505',
          },
        ],
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
      aria-label={isPrevious ? 'Show previous spotlight' : 'Show next spotlight'}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-white/[0.14] cursor-pointer"
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

export default function Partners() {
  const [activeShowcaseId, setActiveShowcaseId] = useState<Showcase['id']>('partners')
  const [spotlightIndex, setSpotlightIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const activeShowcase =
    showcases.find((showcase) => showcase.id === activeShowcaseId) ?? showcases[0]
  const spotlightItems: SpotlightItem[] = activeShowcase.tiers.flatMap((tier) =>
    tier.artwork.map((entry) => ({
      ...entry,
      accent: tier.accent,
      tierDescription: tier.description,
      tierFootnote: tier.footnote,
      tierId: tier.id,
      tierLabel: tier.label,
    })),
  )
  const normalizedSpotlightIndex = wrapIndex(spotlightIndex, spotlightItems.length)
  const activeSpotlight = spotlightItems[normalizedSpotlightIndex] ?? spotlightItems[0]

  if (!activeSpotlight) {
    return null
  }

  const goToPrevious = () => {
    setSlideDirection('left')
    setSpotlightIndex((current) => wrapIndex(current - 1, spotlightItems.length))
  }

  const goToNext = () => {
    setSlideDirection('right')
    setSpotlightIndex((current) => wrapIndex(current + 1, spotlightItems.length))
  }

  return (
    <section
      id="partners"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1208 0%, #120d05 100%)',
        clipPath: 'polygon(0 72px, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-72px',
        paddingTop: '9rem',
        paddingBottom: '7rem',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(255,214,93,0.12), transparent 26%), radial-gradient(circle at bottom right, rgba(126,180,172,0.1), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 46%)',
        }}
      />

      <img
        src={blueShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4rem] top-16 hidden w-52 select-none opacity-[0.18] md:block"
      />
      <img
        src={orangeredShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5rem] top-24 hidden w-56 select-none opacity-[0.18] lg:block"
      />
      <img
        src={pillar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-3rem] left-[-3rem] hidden w-52 select-none opacity-[0.14] xl:block"
      />

      <div className="relative z-10 mx-auto max-w-[96rem] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-sm md:px-10 md:py-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,214,93,0.04) 0%, transparent 38%, rgba(126,180,172,0.05) 100%)',
            }}
          />

          <div className="relative flex flex-col gap-8">
            <div>
              <div>
                <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
                  <span className="block h-px w-10 bg-brand-gold" />
                  Partnership Wall
                </span>

                <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Partners, Sponsors, and Concessionaires
                </h2>
              </div>
            </div>

            <div
              role="tablist"
              aria-label="Toggle partnership showcase"
              className="flex flex-wrap gap-3"
            >
              {showcases.map((showcase) => {
                const isActive = showcase.id === activeShowcase.id

                return (
                  <button
                    key={showcase.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-pressed={isActive}
                    onClick={() => {
                      setActiveShowcaseId(showcase.id)
                      setSlideDirection('right')
                      setSpotlightIndex(0)
                    }}
                    className="cursor-pointer rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: isActive ? showcase.accent : 'rgba(255,255,255,0.04)',
                      borderColor: isActive ? showcase.accent : 'rgba(255,255,255,0.12)',
                      color: isActive ? showcase.ink : '#FFF8DB',
                      boxShadow: isActive ? `0 14px 32px ${showcase.accent}33` : 'none',
                    }}
                  >
                    {showcase.label}
                  </button>
                )
              })}
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[rgba(255,248,219,0.06)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.2)] md:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <span
                    className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em]"
                    style={{ color: activeShowcase.accent }}
                  >
                    <span
                      className="block h-px w-10"
                      style={{ backgroundColor: activeShowcase.accent }}
                    />
                    {activeShowcase.eyebrow}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                    {activeShowcase.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 self-start lg:self-auto">
                  <NavButton direction="previous" onClick={goToPrevious} />
                  <NavButton direction="next" onClick={goToNext} />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeShowcase.tiers.map((tier) => {
                  const isCurrentTier = tier.id === activeSpotlight.tierId

                  return (
                    <span
                      key={`${activeShowcase.id}-${tier.id}`}
                      className="rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: isCurrentTier ? `${tier.accent}24` : 'rgba(255,255,255,0.04)',
                        borderColor: isCurrentTier ? `${tier.accent}99` : 'rgba(255,255,255,0.12)',
                        color: isCurrentTier ? tier.accent : 'rgba(255,248,219,0.72)',
                      }}
                    >
                      {tier.label}
                    </span>
                  )
                })}
              </div>

              <div
                key={`${activeShowcase.id}-${activeSpotlight.name}-${normalizedSpotlightIndex}`}
                className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
                style={{
                  animation:
                    slideDirection === 'right'
                      ? 'spotlightInFromRight 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards'
                      : 'spotlightInFromLeft 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
                }}
              >
                <style>{`
                  @keyframes spotlightInFromRight {
                    from {
                      transform: translateX(6%);
                      opacity: 0;
                    }
                    to {
                      transform: translateX(0);
                      opacity: 1;
                    }
                  }
                  @keyframes spotlightInFromLeft {
                    from {
                      transform: translateX(-6%);
                      opacity: 0;
                    }
                    to {
                      transform: translateX(0);
                      opacity: 1;
                    }
                  }
                `}</style>

                <div className="h-full min-h-[26rem] max-h-[26rem] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,219,0.1)_0%,rgba(255,255,255,0.04)_100%)] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] sm:min-h-[30rem] sm:max-h-[30rem] xl:min-h-[34rem] xl:max-h-[34rem]">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/62">
                    Currently Highlighted
                  </span>

                  <div
                    className="mt-5 flex h-[18rem] items-center justify-center rounded-[24px] border border-white/12 p-6 sm:h-[22rem] sm:p-8 xl:h-[24rem]"
                    style={{
                      background:
                        activeSpotlight.background ??
                        'radial-gradient(circle at center, rgba(255,248,219,0.12) 0%, rgba(255,248,219,0.03) 58%, transparent 100%)',
                    }}
                  >
                    <img
                      src={activeSpotlight.src}
                      alt={activeSpotlight.alt}
                      className={
                        activeSpotlight.imageClassName ??
                        'max-h-[16rem] w-full object-contain sm:max-h-[20rem]'
                      }
                    />
                  </div>
                </div>

                <div className="flex h-full min-h-[28rem] max-h-[34rem] flex-col gap-4 overflow-y-auto rounded-[30px] border border-white/10 bg-black/15 p-5 sm:min-h-[30rem] sm:max-h-[30rem] sm:overflow-hidden sm:p-6 md:p-8 xl:min-h-[34rem] xl:max-h-[34rem]">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="max-w-full rounded-full px-4 py-2 text-center text-[0.64rem] font-bold uppercase leading-snug tracking-[0.14em] sm:text-[0.72rem] sm:tracking-[0.18em]"
                      style={{
                        backgroundColor: `${activeSpotlight.accent}22`,
                        border: `1px solid ${activeSpotlight.accent}55`,
                        color: activeSpotlight.accent,
                      }}
                    >
                      {activeSpotlight.tierLabel}
                    </span>
                    <span className="max-w-full rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-center text-[0.64rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white/58 sm:text-[0.72rem] sm:tracking-[0.18em]">
                      {activeSpotlight.tierFootnote}
                    </span>
                  </div>

                  <div>
                    <h4 className="break-words text-2xl font-bold leading-tight text-white sm:text-3xl xl:text-[2.3rem]">
                      {activeSpotlight.name}
                    </h4>
                    <p className="mt-3 min-h-[5.25rem] text-[0.82rem] leading-[1.65] text-white/68 sm:min-h-[4.75rem] md:text-[0.92rem]">
                      {activeSpotlight.tierDescription}
                    </p>
                  </div>

                  <div className="max-h-[13rem] flex-1 overflow-y-auto rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:max-h-none sm:p-5">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-[0.72rem] sm:tracking-[0.2em]">
                      About This Organization
                    </span>
                    <p className="mt-4 text-[0.82rem] leading-relaxed text-white/82 md:text-[0.95rem]">
                      {activeSpotlight.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                      {normalizedSpotlightIndex + 1} of {spotlightItems.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {spotlightItems.map((item, index) => {
                  const isActive = index === normalizedSpotlightIndex

                  return (
                    <button
                      key={`${activeShowcase.id}-${item.tierId}-${item.name}`}
                      type="button"
                      onClick={() => {
                        setSlideDirection(index > normalizedSpotlightIndex ? 'right' : 'left')
                        setSpotlightIndex(index)
                      }}
                      className="cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition duration-200"
                      style={{
                        backgroundColor: isActive ? `${item.accent}24` : 'rgba(255,255,255,0.04)',
                        borderColor: isActive ? `${item.accent}99` : 'rgba(255,255,255,0.12)',
                        color: isActive ? item.accent : '#FFF8DB',
                        boxShadow: isActive ? `0 12px 28px ${item.accent}22` : 'none',
                      }}
                    >
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
