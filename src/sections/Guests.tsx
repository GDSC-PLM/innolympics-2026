import { useState } from 'react'

import orangeredShape from '../raw-assets/orangered-shape.png'
import pillar from '../raw-assets/pillar-2.png'

type GuestProfile = {
  name: string
  role: string
  company: string
  blurb: string
  tags: string[]
  topic?: string
  image?: string
  placeholderLabel?: string
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

const dumlao = new URL('../raw-assets/speakers/dumlao.png', import.meta.url).href
const francisco = new URL('../raw-assets/speakers/francisco.jpg', import.meta.url).href
const justiniane = new URL('../raw-assets/speakers/justiniane. [Photo]', import.meta.url).href
const bumanlag = new URL('../raw-assets/mentors/bumanlag.jpg', import.meta.url).href
const himoldang = new URL('../raw-assets/mentors/himoldang.jpg', import.meta.url).href
const hulleza = new URL('../raw-assets/mentors/hulleza.jpg', import.meta.url).href
const madero = new URL('../raw-assets/mentors/madero.png', import.meta.url).href
const tolentino = new URL('../raw-assets/mentors/tolentino.png', import.meta.url).href
const williams = new URL('../raw-assets/mentors/williams.jpeg', import.meta.url).href
const shennaSunico = new URL('../raw-assets/judges/1 Atty Shenna Sunico.jpg', import.meta.url)
  .href
const christopherCarlos = new URL('../raw-assets/judges/Carlos.png', import.meta.url).href
const michaelPeduche = new URL('../raw-assets/judges/Peduche.png', import.meta.url).href
const rafsanjaniRanin = new URL('../raw-assets/judges/Rafsanjani Rañin_Photo-GDSC.jpg', import.meta.url)
  .href
const juanMiguelMendoza = new URL('../raw-assets/judges/miggy.jpg', import.meta.url).href

const mentorGuests: GuestProfile[] = [
  {
    name: 'Drandreb Justiniane',
    role: 'Education and Opportunity Access Mentor',
    company: 'Department of Education',
    topic: 'Education & Opportunity Access',
    blurb:
      'Drandreb Justiniane supports conversations on mental health, education, and human development through public service and community-based practice. His mentoring centers on psychosocial well-being, resilience, and creating more inclusive pathways to opportunity.',
    tags: ['Education', 'Resilience', 'Inclusive growth'],
    image: justiniane,
  },
  {
    name: 'Tedvil Tolentino',
    role: 'Education and Opportunity Access Mentor',
    company: 'Business Development Specialist, Quipper',
    topic: 'Education & Opportunity Access',
    blurb:
      'Tedvil Tolentino is a business development specialist with experience in B2B technology environments and strategic partnerships. With roots in education and innovation, he enjoys mentoring young builders and supporting projects that expand learning and opportunity through tech.',
    tags: ['Partnerships', 'Edtech', 'Digital growth'],
    image: tolentino,
  },
  {
    name: 'Vanessa Williams',
    role: 'Education and Opportunity Access Mentor',
    company: 'Mental Health and Education Professional',
    topic: 'Education & Opportunity Access',
    blurb:
      'Vanessa Williams is a mental health and education professional licensed in psychometrics and teaching. Her experience spans behavioral therapy, psychological assessment, student case management, and neurodiversity-affirming support across clinical and academic settings.',
    tags: ['Assessment', 'Student support', 'Behavioral therapy'],
    image: williams,
  },
  {
    name: 'Danielle Madero',
    role: 'Health and Well-being Access Mentor',
    company: 'Instructor, Pangasinan State University',
    topic: 'Health & Well-being Access',
    blurb:
      'Danielle Madero is a registered psychologist and psychometrician with experience in education, counseling, human resources, and psychological services. She teaches at Pangasinan State University and is committed to creating supportive environments that help people grow and thrive.',
    tags: ['Counseling', 'Psychological services', 'Well-being'],
    image: madero,
  },
  {
    name: 'Jose Mari A. Hulleza',
    role: 'Health and Well-being Access Mentor',
    company: 'Registered Psychologist and Faculty Member',
    topic: 'Health & Well-being Access',
    blurb:
      'Jose Mari A. Hulleza leads mental health trainings for institutions and organizations while teaching in higher education. He advocates for workplace well-being, mental health literacy, and more accessible support, including through community volunteer work and Filipino Sign Language study.',
    tags: ['Workplace wellness', 'Advocacy', 'Accessible support'],
    image: hulleza,
  },
  {
    name: 'Jhun G. Himoldang',
    role: 'Health and Well-being Access Mentor',
    company: 'Counseling and HR Professional',
    topic: 'Health & Well-being Access',
    blurb:
      'Jhun G. Himoldang brings multidisciplinary experience across business process outsourcing, insurance and investment services, workplace counseling, and academia. He takes a strategic, people-centered approach to building systems, strengthening programs, and supporting sustainable, inclusive growth.',
    tags: ['Counseling', 'Program building', 'Inclusive initiatives'],
    image: himoldang,
  },
  {
    name: 'Ryem Jian Dumlao',
    role: 'Governance, Trust, and Livelihoods Mentor',
    company: 'UX Manager, Virtual Studios PH',
    topic: 'Governance, Trust & Livelihoods',
    blurb:
      'Ryem Jian Dumlao guides teams in building user-centered products with stronger clarity, structure, and design thinking. Her background in UX research, product strategy, and design systems helps teams make smarter decisions quickly.',
    tags: ['UX strategy', 'Product clarity', 'Design leadership'],
    image: dumlao,
  },
  {
    name: 'Louis Francisco',
    role: 'Governance, Trust, and Livelihoods Mentor',
    company: 'Senior Dev Fresh Grad, RCBC',
    topic: 'Governance, Trust & Livelihoods',
    blurb:
      'Louis Francisco mentors teams with a builder-first mindset shaped by work across fintech, proptech, e-commerce, and digital media. He is especially strong at helping teams turn scrappy concepts into practical demos and stronger technical execution.',
    tags: ['Technical execution', 'Hackathons', 'Product building'],
    image: francisco,
  },
  {
    name: 'Joshua Bumanlag',
    role: 'Governance, Trust, and Livelihoods Mentor',
    company: 'iOS Engineer, ING Hubs Philippines',
    topic: 'Governance, Trust & Livelihoods',
    blurb:
      'Joshua Bumanlag previously served as a GDSC Lead and Notion Campus Leader, where he managed and mentored developers building cross-platform mobile applications. He brings hands-on product experience and a strong collaborative mindset to student teams.',
    tags: ['Mentorship', 'Cross-platform apps', 'Team leadership'],
    image: bumanlag,
  },
]

const judgeGuests: GuestProfile[] = [
  {
    name: 'Christopher Carlos',
    role: 'Education and Opportunity Access Judge',
    company: 'Systems Analyst, Omni Channel Solutions',
    topic: 'Education & Opportunity Access',
    blurb:
      'Christopher Carlos serves as a Systems Analyst at Omni Channel Solutions, where he designs, develops, and maintains secure, scalable systems for internal operations and client-facing platforms. From his beginnings as an IT intern, he has grown into a key technology team member contributing to system efficiency, reliability, and innovation.',
    tags: ['Systems analysis', 'Secure platforms', 'Operations'],
    image: christopherCarlos,
  },
  {
    name: 'Atty. Shenna Sunico',
    role: 'Education and Opportunity Access Judge',
    company: 'Chief of Staff, DICT ICT Industry Development',
    topic: 'Education & Opportunity Access',
    blurb:
      'Atty. Shenna Sunico is a legal, policy, and governance professional with experience across public sector leadership, public international law, legal research, and technology regulation. She serves as Chief of Staff of the Office of the Undersecretary for ICT Industry Development at DICT, where she works on ICT policy, AI, IoT, data governance, startups, and legislative development.',
    tags: ['ICT policy', 'Technology law', 'Governance'],
    image: shennaSunico,
  },
  {
    name: 'Michael Peduche',
    role: 'Health and Well-being Access Judge',
    company: 'Infotech and Data Protection Officer, Omni Channel Solutions',
    topic: 'Health & Well-being Access',
    blurb:
      'Michael Peduche is the Infotech and Data Protection Officer at Omni Channel Solutions, with over a decade of experience in technology, data management, and information security. He focuses on protecting critical systems, sensitive data, and reliable IT infrastructure.',
    tags: ['Data protection', 'Information security', 'IT infrastructure'],
    image: michaelPeduche,
  },
  {
    name: 'Raf Rañin',
    role: 'Governance, Trust, and Livelihoods Judge',
    company: 'Project Evaluation Officer, Department of Transportation',
    topic: 'Governance, Trust & Livelihoods',
    blurb:
      'Raf Rañin is a Business Economics graduate from Pamantasan ng Lungsod ng Maynila and a Project Evaluation Officer at the Department of Transportation. His work centers on community support, livelihood programs, human rights research, and youth-led advocacy.',
    tags: ['Livelihood programs', 'Human rights', 'Youth leadership'],
    image: rafsanjaniRanin,
  },
  {
    name: 'Juan Miguel Mendoza',
    role: 'Governance, Trust, and Livelihoods Judge',
    company: 'Senior Software Engineer, Globe Telecom',
    topic: 'Governance, Trust & Livelihoods',
    blurb:
      'Miggy Mendoza is a Manila-based Senior Software Engineer with 6+ years architecting scalable web and mobile systems across telecom, fintech, and SaaS. He has delivered event-driven platforms, large-scale APIs, and cloud-native systems, while also founding GDSC PLM, coaching at KadaKareer, and advising startups and community initiatives.',
    tags: ['Cloud engineering', 'Distributed systems', 'Tech for good'],
    image: juanMiguelMendoza,
  },
]

const guestGroups: GuestGroup[] = [
  {
    id: 'mentors',
    label: 'Mentors',
    accent: '#7EB4AC',
    buttonText: '#1A1208',
    eyebrow: 'Hands-on guidance during the build sprint',
    description:
      'Confirmed mentors bring strengths across education, mental health, counseling, UX, product development, partnerships, and team leadership.',
    guests: mentorGuests,
  },
  {
    id: 'judges',
    label: 'Judges',
    accent: '#DFAD57',
    buttonText: '#1A1208',
    eyebrow: 'Confirmed evaluators for the final project showcase',
    description:
      'Confirmed judges bring experience across systems analysis, technology law, data protection, public service, and scalable software engineering.',
    guests: judgeGuests,
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
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

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
    setSlideDirection('left')
    setSpotlightIndex((current) => wrapIndex(current - 1, guestCount))
  }

  const goToNext = () => {
    setSlideDirection('right')
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
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-coral">
            <span className="block h-px w-10 bg-brand-coral" />
            Guest Lineup
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1a0f00] md:text-5xl">
            Mentors & Judges
          </h2>
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
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
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

                <h3 className="mt-3 text-2xl font-bold text-[#1a0f00] md:text-3xl">
                  {activeGroup.label}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
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
                      className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200"
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

            <div className="flex items-center justify-end gap-3 lg:hidden">
              <NavButton direction="previous" onClick={goToPrevious} />
              <NavButton direction="next" onClick={goToNext} />
            </div>

            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-x-full -translate-y-1/2 lg:block lg:-translate-x-8">
                <div className="pointer-events-auto">
                  <NavButton direction="previous" onClick={goToPrevious} />
                </div>
              </div>
              <div className="pointer-events-none absolute right-0 top-1/2 hidden translate-x-full -translate-y-1/2 lg:block lg:translate-x-8">
                <div className="pointer-events-auto">
                  <NavButton direction="next" onClick={goToNext} />
                </div>
              </div>

              <div className="w-full max-w-4xl">
                <article
                  className="relative flex min-h-0 flex-col overflow-hidden rounded-[34px] border bg-[#1a1208] p-5 text-white shadow-[0_36px_80px_rgba(26,15,0,0.26)] sm:p-8 md:p-10 lg:min-h-[600px] lg:max-h-[600px]"
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
                    key={`${currentGuest.name}-${spotlightIndex}`}
                    className="relative flex flex-col"
                    style={{
                      animation: slideDirection === 'right' ? 'slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                    }}
                  >
                    <style>{`
                      @keyframes slideInFromRight {
                        from {
                          transform: translateX(100%);
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                      @keyframes slideInFromLeft {
                        from {
                          transform: translateX(-100%);
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                    `}</style>
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <span
                        className="max-w-full rounded-full px-4 py-2 text-center text-[0.62rem] font-bold uppercase leading-snug tracking-[0.14em] sm:text-[0.7rem] sm:tracking-[0.2em]"
                        style={{
                          backgroundColor: `${activeGroup.accent}22`,
                          border: `1px solid ${activeGroup.accent}44`,
                          color: activeGroup.accent,
                        }}
                      >
                        {currentGuest.topic || activeGroup.label}
                      </span>
                      <span className="max-w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white/55 sm:text-[0.7rem] sm:tracking-[0.2em]">
                        Featured
                      </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                      {/* Left side - Avatar and basic info */}
                      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div
                          className="rounded-full p-2 shadow-[0_0_0_10px_rgba(255,248,219,0.04)]"
                          style={{ background: `linear-gradient(135deg, ${activeGroup.accent}, #FFF8DB)` }}
                        >
                          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-[#1f150d] bg-[#1a1208] sm:h-48 sm:w-48">
                            {currentGuest.image ? (
                              <img
                                src={currentGuest.image}
                                alt={currentGuest.name}
                                className="h-full w-full object-cover object-top"
                              />
                            ) : (
                              <div
                                className="flex h-full w-full items-center justify-center px-6 text-center"
                                style={{
                                  background: `linear-gradient(135deg, ${activeGroup.accent}38 0%, rgba(26,18,8,0.92) 100%)`,
                                }}
                              >
                                <span className="text-sm font-bold uppercase tracking-[0.24em] text-white/72">
                                  {currentGuest.placeholderLabel ?? 'TBA'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 flex w-full flex-col items-center gap-3 lg:items-start">
                          <h4 className="max-w-full break-words text-[1.8rem] font-bold leading-[1.15] text-brand-cream sm:text-[2.25rem]">
                            {currentGuest.name}
                          </h4>
                          <p className="max-w-full break-words text-sm leading-[1.4] text-brand-cream/65 sm:text-base">
                            {currentGuest.company}
                          </p>
                          <p
                            className="max-w-full break-words text-center text-[0.78rem] font-semibold uppercase leading-[1.35] tracking-[0.12em] sm:text-sm sm:tracking-[0.15em] lg:text-left"
                            style={{ color: activeGroup.accent }}
                          >
                            {currentGuest.role}
                          </p>
                        </div>
                      </div>

                      {/* Right side - Description and tags */}
                      <div className="flex flex-col gap-6">
                        <div className="flex min-h-[13rem] max-h-[15rem] flex-col overflow-y-auto rounded-[26px] border border-white/10 bg-white/[0.05] p-5 sm:p-8 lg:min-h-[280px] lg:max-h-[280px]">
                          <span className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brand-gold mb-4">
                            About
                          </span>
                          <p 
                            className="text-[0.82rem] leading-[1.55] text-white/[0.82] sm:text-[0.85rem]"
                          >
                            {currentGuest.blurb}
                          </p>
                        </div>

                        <div className="flex min-h-[4.5rem] flex-wrap content-start gap-2 lg:min-h-[72px]">
                          {currentGuest.tags.map((tag) => (
                            <span
                              key={`${currentGuest.name}-${tag}`}
                              className="max-w-full rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.1em] text-white/55 sm:text-[0.64rem] sm:tracking-[0.14em]"
                              style={{ height: 'fit-content' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot indicators - outside animated content so they don't slide */}
                  <div className="relative mt-8 flex justify-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 shadow-[0_10px_26px_rgba(0,0,0,0.16)]">
                      {activeGroup.guests.map((guest, index) => {
                        const isActive = index === wrapIndex(spotlightIndex, guestCount)

                        return (
                          <button
                            key={`${activeGroup.id}-${guest.name}`}
                            type="button"
                            onClick={() => {
                              setSlideDirection(index > spotlightIndex ? 'right' : 'left')
                              setSpotlightIndex(index)
                            }}
                            aria-label={`Show ${guest.name}`}
                            className="cursor-pointer rounded-full transition-all duration-300"
                            style={{
                              width: isActive ? '2.25rem' : '0.75rem',
                              height: '0.75rem',
                              backgroundColor: isActive ? activeGroup.accent : 'rgba(255,255,255,0.22)',
                            }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </article>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
