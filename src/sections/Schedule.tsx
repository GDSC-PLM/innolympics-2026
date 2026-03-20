const days = [
  {
    day: 'Day 1',
    date: 'April 25, 2026',
    accentColor: '#7EB4AC', // brand-teal
    events: [
      { time: '7:00 AM',  title: 'Registration & Check-in',       type: 'logistics' },
      { time: '8:30 AM',  title: 'Opening Ceremony',               type: 'program'   },
      { time: '9:30 AM',  title: 'Keynote: Innovation in the PH',  type: 'talk'      },
      { time: '10:30 AM', title: 'Hackathon Kickoff & Briefing',   type: 'program'   },
      { time: '11:00 AM', title: 'Hacking Begins',                 type: 'hack'      },
      { time: '12:30 PM', title: 'Lunch Break',                    type: 'logistics' },
      { time: '1:30 PM',  title: 'Mentorship Rounds (Batch 1)',    type: 'program'   },
      { time: '3:30 PM',  title: 'Workshop: Pitch Deck Mastery',   type: 'talk'      },
      { time: '4:30 PM',  title: 'Mentorship Rounds (Batch 2)',    type: 'program'   },
      { time: '6:00 PM',  title: 'Dinner & Networking Night',      type: 'logistics' },
      { time: '8:00 PM',  title: 'Overnight Hacking',              type: 'hack'      },
    ],
  },
  {
    day: 'Day 2',
    date: 'April 26, 2026',
    accentColor: '#DA5B3C', // brand-coral
    events: [
      { time: '7:00 AM',  title: 'Breakfast & Free Hacking',       type: 'logistics' },
      { time: '9:00 AM',  title: 'Final Submissions Deadline',      type: 'hack'      },
      { time: '9:30 AM',  title: 'Judging Panel Deliberation',      type: 'program'   },
      { time: '10:30 AM', title: 'Speaker Talk: Design Thinking',   type: 'talk'      },
      { time: '11:30 AM', title: 'Guest Speaker: Google PH Lead',   type: 'talk'      },
      { time: '12:30 PM', title: 'Lunch Break',                     type: 'logistics' },
      { time: '1:30 PM',  title: 'Team Presentations (Round 1)',    type: 'program'   },
      { time: '3:00 PM',  title: 'Team Presentations (Round 2)',    type: 'program'   },
      { time: '4:30 PM',  title: 'Finalists Announced',             type: 'program'   },
      { time: '5:00 PM',  title: 'Awarding Ceremony',               type: 'hack'      },
      { time: '6:00 PM',  title: 'Closing & Group Photo',           type: 'logistics' },
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
          <p className="text-[#1a0f00]/50 mt-3 text-sm">April 25–26, 2026 · Venue To be Announced</p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 mb-12">
          {Object.entries(typeMeta).map(([key, { dot, label }]) => (
            <span key={key} className="flex items-center gap-2 text-xs text-[#1a0f00]/50 font-medium">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} />
              {label}
            </span>
          ))}
        </div>

        {/* Two-column day layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {days.map((day) => (
            <div key={day.day} className="rounded-2xl overflow-hidden border border-[#1a0f00]/10 shadow-sm">

              {/* Day header */}
              <div
                className="px-6 py-5 flex items-baseline justify-between"
                style={{ background: day.accentColor + '22' }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: day.accentColor }}
                  >
                    {day.day}
                  </span>
                  <span className="text-[#1a0f00]/40 text-sm">{day.date}</span>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: day.accentColor + '33', color: day.accentColor }}
                >
                  {day.events.length} events
                </span>
              </div>

              {/* Timeline */}
              <div className="bg-white/60 divide-y divide-[#1a0f00]/[0.06]">
                {day.events.map((event, i) => {
                  const meta = typeMeta[event.type]
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 px-6 py-4 hover:bg-brand-sand/20 transition-colors duration-150 group"
                    >
                      <span className="text-xs text-[#1a0f00]/40 font-mono w-16 shrink-0 pt-0.5">
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
