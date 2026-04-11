import orangeredShape from '../raw-assets/orangered-shape.png'

const days = [
  {
    day: 'Community Workshop',
    date: 'April 19, 2026 · 12:00 PM – 6:00 PM',
    accentColor: '#7EB4AC', // brand-teal
    events: [
      { time: '12:00 PM – 1:00 PM', title: 'Ingress', type: 'logistics' },
      { time: '1:00 PM – 1:20 PM', title: 'Opening & Welcome Remarks', type: 'program' },
      { time: '1:20 PM – 2:05 PM', title: 'Speaker 1: Bridging the Divide (Learning & Upward Mobility)', type: 'talk' },
      { time: '2:05 PM – 2:50 PM', title: 'Speaker 2: Systemic Wellness (Healthcare & Mental Health)', type: 'talk' },
      { time: '2:50 PM – 3:10 PM', title: 'Afternoon Snacks & Break', type: 'logistics' },
      { time: '3:10 PM – 3:55 PM', title: 'Speaker 3: Empowering the Citizen (Transparency & Economic Agency)', type: 'talk' },
      { time: '3:55 PM – 5:00 PM', title: 'Panel Discussion & Open Q&A', type: 'program' },
      { time: '5:00 PM – 5:10 PM', title: 'Awarding of Certificates', type: 'program' },
      { time: '5:10 PM – 5:30 PM', title: 'Closing & Announcements', type: 'program' },
      { time: '5:30 PM – 6:00 PM', title: 'Egress', type: 'logistics' },
    ],
  },
  {
    day: 'Technical Workshop',
    date: 'April 20, 2026 · 8:30 AM – 5:00 PM',
    accentColor: '#DA5B3C', // brand-coral
    events: [
      { time: '8:30 AM – 9:00 AM', title: 'Ingress', type: 'logistics' },
      { time: '9:00 AM – 9:15 AM', title: 'Opening Remarks & Workshop Overview', type: 'program' },
      { time: '9:15 AM – 9:30 AM', title: 'Mini Icebreaker', type: 'program' },
      { time: '9:30 AM – 10:30 AM', title: 'Speaker 1 Talk (AM): Hackathon Fundamentals', type: 'talk' },
      { time: '10:30 AM – 10:40 AM', title: 'Q&A (Speaker 1)', type: 'program' },
      { time: '10:40 AM – 10:45 AM', title: 'Certificate Awarding (Speaker 1)', type: 'program' },
      { time: '10:45 AM – 11:45 AM', title: 'Speaker 2 Talk (AM): UI/UX & Product Thinking', type: 'talk' },
      { time: '11:45 AM – 11:55 AM', title: 'Q&A (Speaker 2)', type: 'program' },
      { time: '11:55 AM – 12:00 PM', title: 'Certificate Awarding (Speaker 2)', type: 'program' },
      { time: '12:00 PM – 12:50 PM', title: 'Lunch Break', type: 'logistics' },
      { time: '12:50 PM – 1:00 PM', title: 'Post-Lunch Energizer', type: 'program' },
      { time: '1:00 PM – 2:00 PM', title: 'Speaker 3 Talk (PM): Google Technologies for Prototypes', type: 'talk' },
      { time: '2:00 PM – 2:10 PM', title: 'Q&A (Speaker 3)', type: 'program' },
      { time: '2:10 PM – 2:15 PM', title: 'Certificate Awarding (Speaker 3)', type: 'program' },
      { time: '2:15 PM – 3:15 PM', title: 'Speaker 4 Talk (PM): Pitching for Impact', type: 'talk' },
      { time: '3:15 PM – 3:25 PM', title: 'Q&A (Speaker 4)', type: 'program' },
      { time: '3:25 PM – 3:30 PM', title: 'Certificate Awarding (Speaker 4)', type: 'program' },
      { time: '3:30 PM – 4:15 PM', title: 'Hackathon Announcements & Early Topic Reveal', type: 'program' },
      { time: '4:15 PM – 4:30 PM', title: 'Closing & Final Reminders', type: 'program' },
      { time: '4:30 PM – 5:00 PM', title: 'Egress', type: 'logistics' },
    ],
  },
]

const typeMeta: Record<string, { dot: string; label: string }> = {
  hack:      { dot: '#FFD65D', label: 'Hacking'   },
  talk:      { dot: '#7EB4AC', label: 'Talk'      },
  program:   { dot: '#DFAD57', label: 'Program'   },
  logistics: { dot: '#D2C9A3', label: 'Logistics' },
}

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-brand-cream"
      style={{
        clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-80px',
        paddingTop: '8rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Faint diagonal band accent — mirrors hero motif */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #7EB4AC44 0%, transparent 45%)',
        }}
      />
        <img
          src={orangeredShape}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-40 hidden w-136 select-none opacity-[0.18] -scale-x-100 lg:block"
        />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-brand-coral text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="block w-10 h-px bg-brand-coral" />
            Program Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a0f00]">
            Event <span className="text-brand-coral">Schedule</span>
          </h2>
          <p className="text-[#1a0f00]/50 mt-3 text-sm">April 19–20, 2026 · Community + Technical Workshops</p>
        </div>

        {/* Two-column day layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {days.map((day) => (
            <div key={day.day} className="rounded-2xl overflow-hidden border border-[#1a0f00]/10 shadow-sm h-full flex flex-col">

              {/* Day header */}
              <div
                className="px-6 py-5"
                style={{ background: day.accentColor }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-2xl font-bold text-brand-cream drop-shadow-[0_1px_1px_rgba(26,15,0,0.28)]"
                  >
                    {day.day}
                  </span>
                  <span className="text-sm text-brand-cream/85">{day.date}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white/60 divide-y divide-[#1a0f00]/6 lg:h-155 overflow-y-auto pb-4">
                {day.events.map((event, i) => {
                  const meta = typeMeta[event.type]
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 px-6 py-4 hover:bg-brand-sand/20 transition-colors duration-150 group"
                    >
                      <span className="text-xs text-[#1a0f00]/40 font-mono w-35 shrink-0 pt-0.5 leading-snug">
                        {event.time}
                      </span>
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ background: meta.dot }}
                      />
                      <span className="text-sm text-[#1a0f00]/70 group-hover:text-[#1a0f00] transition-colors duration-150 font-medium leading-snug">
                        {event.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
