import { useState } from 'react'

import blackbot from '../raw-assets/blackbot.png'
import bluebot from '../raw-assets/bluebot.png'
import blueShape from '../raw-assets/blue-shape.png'
import greenbot from '../raw-assets/greenbot.png'
import orangeredShape from '../raw-assets/orangered-shape.png'
import pillar from '../raw-assets/pillar.png'
import redbot from '../raw-assets/redbot.png'
import whitebot from '../raw-assets/whitebot.png'
import yellowbot from '../raw-assets/yellowbot.png'

type ArtworkEntry = {
  src: string
  alt: string
}

type Tier = {
  id: string
  label: string
  description: string
  footnote: string
  accent: string
  ink: string
  artwork: ArtworkEntry[]
}

type Showcase = {
  id: 'partners' | 'sponsors'
  label: string
  eyebrow: string
  title: string
  description: string
  accent: string
  ink: string
  stats: string[]
  preview: ArtworkEntry
  previewCopy: string
  tiers: Tier[]
}

const artworkLibrary = {
  blackbot: {
    src: blackbot,
    alt: 'Black colorbot placeholder artwork',
  },
  bluebot: {
    src: bluebot,
    alt: 'Blue colorbot placeholder artwork',
  },
  greenbot: {
    src: greenbot,
    alt: 'Green colorbot placeholder artwork',
  },
  redbot: {
    src: redbot,
    alt: 'Red colorbot placeholder artwork',
  },
  whitebot: {
    src: whitebot,
    alt: 'White colorbot placeholder artwork',
  },
  yellowbot: {
    src: yellowbot,
    alt: 'Yellow colorbot placeholder artwork',
  },
} satisfies Record<string, ArtworkEntry>

function pickArtwork(...keys: Array<keyof typeof artworkLibrary>) {
  return keys.map((key) => artworkLibrary[key])
}

const showcases: Showcase[] = [
  {
    id: 'partners',
    label: 'Partners',
    eyebrow: 'Alliance lanes for the event buildout',
    title: 'Strategic partner tiers for schools, communities, and ecosystems',
    description:
      'This view frames collaborators in distinct partnership lanes so academic support, community backing, and media reach can all live in one polished section.',
    accent: '#DA5B3C',
    ink: '#FFF8DB',
    stats: ['4 partner tiers', 'reference-inspired columns', 'colorbot placeholders'],
    preview: artworkLibrary.bluebot,
    previewCopy:
      'The active view now uses the colorbot renders from raw-assets as stand-ins, so we can keep the layout expressive while the real partner artwork is still pending.',
    tiers: [
      {
        id: 'academic',
        label: 'Academic',
        description: 'University and campus-aligned collaborators who help ground the event in student communities.',
        footnote: 'Institutional visibility',
        accent: '#DA5B3C',
        ink: '#FFF8DB',
        artwork: pickArtwork('bluebot', 'whitebot', 'greenbot'),
      },
      {
        id: 'community',
        label: 'Community',
        description: 'Student groups, volunteer networks, and civic organizations that expand reach on the ground.',
        footnote: 'Grassroots support',
        accent: '#FFD65D',
        ink: '#1A1208',
        artwork: pickArtwork('yellowbot', 'redbot', 'whitebot'),
      },
      {
        id: 'media',
        label: 'Media',
        description: 'Coverage, storytelling, and documentation partners that help the event travel beyond the venue.',
        footnote: 'Reach and storytelling',
        accent: '#7EB4AC',
        ink: '#1A1208',
        artwork: pickArtwork('bluebot', 'redbot', 'yellowbot'),
      },
      {
        id: 'ecosystem',
        label: 'Ecosystem',
        description: 'Builder communities, org allies, and innovation groups that strengthen the event network.',
        footnote: 'Startup and dev links',
        accent: '#DFAD57',
        ink: '#1A1208',
        artwork: pickArtwork('greenbot', 'whitebot', 'blackbot'),
      },
    ],
  },
  {
    id: 'sponsors',
    label: 'Sponsors',
    eyebrow: 'Support levels that can scale once the real roster lands',
    title: 'Sponsor tiers with a cleaner hierarchy for funding visibility',
    description:
      'This companion view is structured around sponsor recognition, giving each level a clearer sense of prominence while still using the current placeholder artwork pool.',
    accent: '#FFD65D',
    ink: '#1A1208',
    stats: ['4 sponsor tiers', 'switchable layout', 'colorbot placeholders'],
    preview: artworkLibrary.yellowbot,
    previewCopy:
      'Sponsor mode leans into the brighter mascots to keep the card feeling alive without crushing the copy into a tiny corner.',
    tiers: [
      {
        id: 'presenting',
        label: 'Presenting',
        description: 'Top-line backing with strongest exposure across event communications and on-site presentation.',
        footnote: 'Headline visibility',
        accent: '#FFD65D',
        ink: '#1A1208',
        artwork: pickArtwork('yellowbot', 'whitebot', 'bluebot'),
      },
      {
        id: 'gold',
        label: 'Gold',
        description: 'Major support tier for programs, activations, and key attendee touchpoints throughout the event.',
        footnote: 'Program support',
        accent: '#DA5B3C',
        ink: '#FFF8DB',
        artwork: pickArtwork('redbot', 'yellowbot', 'whitebot'),
      },
      {
        id: 'silver',
        label: 'Silver',
        description: 'Reliable operational support for booths, community moments, and participant-facing experiences.',
        footnote: 'Booths and activations',
        accent: '#7EB4AC',
        ink: '#1A1208',
        artwork: pickArtwork('bluebot', 'blackbot', 'whitebot'),
      },
      {
        id: 'prize',
        label: 'Prize',
        description: 'Awards, perks, or special-track contributions that add excitement and value for competing teams.',
        footnote: 'Perks and awards',
        accent: '#DFAD57',
        ink: '#1A1208',
        artwork: pickArtwork('greenbot', 'redbot', 'yellowbot'),
      },
    ],
  },
]

type TierColumnProps = {
  tier: Tier
}

function TierColumn({ tier }: TierColumnProps) {
  return (
    <article className="group relative flex h-full flex-col pt-6">
      <div
        className="absolute inset-x-4 top-0 z-10 rounded-[22px] px-4 py-4 text-center shadow-[0_18px_40px_rgba(26,15,0,0.2)]"
        style={{
          background: `linear-gradient(135deg, ${tier.accent} 0%, ${tier.accent}dd 100%)`,
          color: tier.ink,
        }}
      >
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] opacity-75">
          Tier
        </span>
        <h4 className="mt-1 text-[1.7rem] font-bold leading-none">{tier.label}</h4>
      </div>

      <div className="flex min-h-[33rem] flex-1 flex-col rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,219,0.12)_0%,rgba(255,255,255,0.04)_100%)] p-4 pt-24 shadow-[0_28px_70px_rgba(5,4,2,0.24)] backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
        <p className="text-center text-sm leading-relaxed text-brand-cream/70">
          {tier.description}
        </p>

        <div className="mt-5 flex flex-1 flex-col gap-4">
          {tier.artwork.map((image, index) => (
            <div
              key={`${tier.id}-${image.alt}-${index}`}
              className="flex h-[6.75rem] items-center justify-center rounded-[22px] border border-white/12 bg-transparent px-6 py-5"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255,248,219,0.12) 0%, rgba(255,248,219,0.02) 55%, transparent 100%)',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.22)]"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((dotIndex) => (
              <span
                key={`${tier.id}-dot-${dotIndex}`}
                className="h-2.5 rounded-full border"
                style={{
                  width: dotIndex === 1 ? '1.75rem' : '0.6rem',
                  backgroundColor: dotIndex === 1 ? tier.accent : 'transparent',
                  borderColor: `${tier.accent}aa`,
                }}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-cream/45">
            {tier.footnote}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Partners() {
  const [activeShowcaseId, setActiveShowcaseId] = useState<Showcase['id']>('partners')

  const activeShowcase =
    showcases.find((showcase) => showcase.id === activeShowcaseId) ?? showcases[0]

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

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
                <span className="block h-px w-10 bg-brand-gold" />
                Partnership Wall
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Partners and Sponsors,
                <span className="block text-brand-gold">tiered and switchable in one section</span>
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
                Built around your reference layout, this section separates partner
                lanes from sponsor tiers while keeping the same InnOlympics palette,
                lighting, and soft-glass card treatment used across the page.
              </p>

              <div
                role="tablist"
                aria-label="Toggle partnership showcase"
                className="mt-6 flex flex-wrap gap-3"
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
                      onClick={() => setActiveShowcaseId(showcase.id)}
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

              <div className="mt-6 flex flex-wrap gap-3">
                {activeShowcase.stats.map((stat) => (
                  <span
                    key={`${activeShowcase.id}-${stat}`}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/62"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            <aside className="relative min-h-[20rem] overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(218,91,60,0.2)_0%,rgba(255,214,93,0.12)_48%,rgba(126,180,172,0.18)_100%)] p-6 sm:p-7">
              <div className="flex h-full flex-col gap-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <span className="inline-flex rounded-full border border-white/15 bg-black/15 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-cream/72">
                      Active View
                    </span>

                    <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                      {activeShowcase.label}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/70 sm:max-w-[12.5rem]">
                      {activeShowcase.tiers.length} ready-made tiers with colorbot
                      artwork placeholders from <code>src/raw-assets</code>.
                    </p>
                  </div>

                  <div className="flex h-32 w-28 shrink-0 items-end justify-center self-start rounded-[24px] border border-white/10 bg-black/10">
                    <img
                      src={activeShowcase.preview.src}
                      alt={activeShowcase.preview.alt}
                      className="h-28 w-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/12 bg-black/12 p-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/45">
                    Placeholder Treatment
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">
                    {activeShowcase.previewCopy}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                    Layout fits confirmed data later
                  </span>
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                    Artwork can be swapped quickly
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[34px] border border-white/8 bg-[rgba(255,248,219,0.06)] px-5 py-6 md:px-8 md:py-8">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at top left, rgba(255,214,93,0.14), transparent 32%), radial-gradient(circle at bottom right, rgba(126,180,172,0.12), transparent 40%)',
              }}
            />

            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                  {activeShowcase.description}
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                {activeShowcase.tiers.length} tiers in this view
              </div>
            </div>

            <div className="relative mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {activeShowcase.tiers.map((tier) => (
                <TierColumn key={`${activeShowcase.id}-${tier.id}`} tier={tier} />
              ))}
            </div>

            <div className="mt-2 rounded-[24px] border border-white/10 bg-black/15 px-4 py-4 text-sm leading-relaxed text-brand-cream/65 md:px-5">
              The artwork in this section currently comes from{' '}
              <code className="font-semibold text-brand-cream/80">src/raw-assets</code>{' '}
              using the colorbot renders as temporary stand-ins. When the confirmed
              partner and sponsor roster arrives, we can swap the content without
              redesigning the section.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
