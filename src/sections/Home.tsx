import heroIllus from '../assets/hero-illus.png'

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#1a0f00]" />

      {/*
        BANDS — all converge at a single point outside the lower-left corner
        creating a sunburst/fan effect (rays of light / Olympic torch energy).
        Origin anchor: (-8%, 115%) — slightly below and left of the viewport.

        To customize:  change `background` color per band.
        To adjust fan spread: move the two % values at the top (0%) line.
        Polygon format: (origin, top-left %, top-right %)
      */}

      {/* Band 1 */}
      <div
        className="absolute inset-0"
        style={{
          background: '#7EB4AC',               /* ← Band 1 color */
          clipPath: 'polygon(-8% 115%, 0% 0%, 13% 0%)',
        }}
      />

      {/* Band 2 */}
      <div
        className="absolute inset-0"
        style={{
          background: '#2a6b64',               /* ← Band 2 color */
          clipPath: 'polygon(-8% 115%, 13% 0%, 26% 0%)',
        }}
      />

      {/* Band 3 */}
      <div
        className="absolute inset-0"
        style={{
          background: '#3B6EC3',               /* ← Band 3 color */
          clipPath: 'polygon(-8% 115%, 26% 0%, 39% 0%)',
        }}
      />

      {/* Band 4 */}
      <div
        className="absolute inset-0"
        style={{
          background: '#DA5B3C',               /* ← Band 4 color */
          clipPath: 'polygon(-8% 115%, 39% 0%, 52% 0%)',
        }}
      />

      {/* Band 5 */}
      <div
        className="absolute inset-0"
        style={{
          background: '#FFD65D',               /* ← Band 5 color */
          clipPath: 'polygon(-8% 115%, 52% 0%, 65% 0%)',
        }}
      />

      {/* Subtle diagonal line texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            #fff 0px, #fff 1px,
            transparent 1px, transparent 48px
          )`,
        }}
      />

      {/* Illustration — starts below navbar (top-20), pillars reach bottom */}
      <div className="absolute top-20 bottom-0 right-[4%] z-10 flex items-end justify-end pointer-events-none w-72 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[520px]">
        <img
          src={heroIllus}
          alt="Innolympics 2026 mascots"
          className="h-full w-auto object-contain object-bottom select-none"
          style={{
            filter: 'drop-shadow(-8px 0 30px rgba(255,214,93,0.12))',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-12 w-full flex items-center pt-24 pb-16">

        {/* Left — text block */}
        <div className="flex-1 flex flex-col gap-6 md:gap-7">

          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
            <span className="block w-10 h-px bg-brand-gold" />
            Google Developer Groups · PLM
          </span>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
            <span className="text-white">Inn</span>
            <span className="text-brand-gold">O</span>
            <span className="text-white">lympics</span>
            <span className="block text-brand-gold leading-tight mt-1">2026</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/60 font-light max-w-sm leading-relaxed italic">
            To Let Filipinos Dream Without Compromise
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="px-7 py-3 rounded-full bg-brand-coral text-white font-semibold text-sm hover:bg-brand-coral/90 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-coral/40 cursor-pointer">
              Register Now
            </button>
            <button className="px-7 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>



      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a0f00] to-transparent pointer-events-none" />
    </section>
  )
}