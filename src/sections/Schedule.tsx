import orangeredShape from '../raw-assets/orangered-shape.png'

const days = [
  {
    day: 'Day 1: Hackathon Kickoff and Build Phase ',
    date: 'April 25, 2026',
    accentColor: '#7EB4AC', // brand-teal
    events: [
      { time: '5:45 AM - 8:00 AM', title: 'Ingress', type: 'logistics' },
      { time: '8:00 AM - 9:00 AM', title: 'Registration & AVP Showcase', type: 'logistics' },
      { time: '9:00 AM - 9:20 AM', title: 'Opening Ceremonies', type: 'program' },
      { time: '9:20 AM - 9:40 AM', title: 'Opening Remarks', type: 'talk' },
      { time: '9:40 AM - 10:00 AM', title: 'Icebreaker', type: 'program' },
      { time: '10:00 AM - 11:00 AM', title: 'Keynote Session(s)', type: 'talk' },
      { time: '11:00 AM - 11:30 AM', title: 'Hackathon Overview & Guidelines', type: 'program' },
      { time: '11:30 AM - 11:50 AM', title: 'Mentor Introduction & Track Alignment', type: 'program' },
      { time: '11:50 AM - 12:20 PM', title: 'Hackathon Opening & Team Preparation', type: 'logistics' },
      { time: '12:10 PM', title: 'Hacking Officially Begins', type: 'program' },
      { time: '12:20 PM - 1:00 PM', title: 'Lunch', type: 'logistics' },
      { time: '1:00 PM - 5:00 PM', title: 'Hacking & Mentorship Hours', type: 'program' },
      { time: '5:00 PM - 6:00 PM', title: 'Continue Hacking', type: 'program' },
      { time: '6:00 PM - 7:00 PM', title: 'Dinner', type: 'logistics' },
      { time: '7:00 PM - 7:20 PM', title: 'Overnight Reminders & Announcements', type: 'program' },
      { time: '7:20 PM - Overnight', title: 'Continue Hacking (Overnight Stay)', type: 'program' }
    ],
  },
  {
    day: 'Day 2: Submissions, Pitching, & Finals',
    date: 'April 26, 2026',
    accentColor: '#DA5B3C', // brand-coral
    events: [
      { time: '12:00 AM – 7:00 AM', title: 'Continue Hacking (Overnight)', type: 'program' },
      { time: '7:00 AM – 8:00 AM', title: 'Attendance Check & Breakfast', type: 'logistics' },
      { time: '8:00 AM – 9:00 AM', title: 'Submission Deadline Reminders', type: 'program' },
      { time: '9:00 AM – 10:30 AM', title: 'Final Hacking Push & Project Submissions', type: 'program' },
      { time: '10:30 AM – 11:00 AM', title: 'Raffle & Lunch', type: 'logistics' },
      { time: '11:00 AM – 11:20 AM', title: 'Pitching Mechanics Briefing and Judges Introduction', type: 'program' },
      { time: '11:20 AM – 11:40 AM', title: 'Track Pitch Setup & Transition', type: 'logistics' },
      { time: '11:40 AM – 1:20 PM', title: 'Track Pitching Sessions', type: 'program' },
      { time: '1:20 PM – 1:35 PM', title: 'Track Deliberation', type: 'program' },
      { time: '1:35 PM – 1:50 PM', title: 'Top 2 Announcement per Track', type: 'program' },
      { time: '1:50 PM – 2:10 PM', title: 'Final Pitch Setup & Venue Transition', type: 'logistics' },
      { time: '2:10 PM – 3:50 PM', title: 'Final Pitching (Unified Finals)', type: 'program' },
      { time: '3:50 PM – 4:10 PM', title: 'Final Deliberation', type: 'program' },
      { time: '4:10 PM – 5:00 PM', title: 'Awarding Ceremony', type: 'program' },
      { time: '5:00 PM – 6:30 PM', title: 'Sponsors\' Talk (KMC & Omni)', type: 'talk' },
      { time: '6:30 PM – 6:45 PM', title: 'Closing Program', type: 'program' },
      { time: '6:45 PM – 7:15 PM', title: 'Egress', type: 'logistics' }
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
