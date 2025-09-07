import React, { useState } from 'react'

type Booking = {
  name: string
  language: string
  mobility: string
  date: string
  package: string
  notes: string
}

const App: React.FC = () => {
  const [booking, setBooking] = useState<Booking>({
    name: '',
    language: 'English',
    mobility: 'Independent',
    date: '',
    package: 'Door-to-Door',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setBooking((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Booking submitted', booking)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center text-white font-bold">
            NJ
          </div>
          <div>
            <h1 className="text-xl font-semibold">NestJourneys — Personalized Travel for Seniors</h1>
            <p className="text-sm text-gray-500">Door-to-door care • Native-language companions • Real-time family updates</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#book" className="hover:underline">Book a trip</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Travel with confidence. Travel with care.</h2>
            <p className="mt-4 text-gray-600">
              NestJourneys pairs elderly travelers with trained companions who speak their language, handle logistics, and keep families updated in real time. Door-to-door support for flights, trains, tours, and family visits.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow">Book a free consult</a>
              <a href="#services" className="inline-block border border-gray-300 px-5 py-3 rounded-lg">See services</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-700">
              <div>
                <div className="font-bold text-lg">99%</div>
                <div className="text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-gray-500">Family updates</div>
              </div>
              <div>
                <div className="font-bold text-lg">20+</div>
                <div className="text-gray-500">Languages supported</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-semibold mb-3">Quick sample itinerary</h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p><strong>9:00</strong> — Door pickup, confirm medications</p>
              <p><strong>10:30</strong> — Museum visit with 1-hour accessible tour</p>
              <p><strong>12:30</strong> — Lunch at a calm, senior-friendly restaurant</p>
              <p><strong>14:00</strong> — Scenic drive and rest stop</p>
              <p><strong>16:30</strong> — Door drop-off and post-trip check-in</p>
            </div>
            <div className="mt-4 border-t pt-4">
              <p className="text-xs text-gray-500">Example itinerary — fully customizable, paced for comfort.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-8">
          <h3 className="text-2xl font-semibold">How it works</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Consultation', desc: 'Tell us health, mobility & interests.' },
              { title: 'Custom plan', desc: 'We design a personalized, senior-friendly itinerary.' },
              { title: 'Trained companions', desc: 'Multilingual staff trained in first aid & elder care.' },
              { title: 'Real-time updates', desc: 'Family receives live location and status updates.' },
            ].map((s) => (
              <div key={s.title} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-8">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Door-to-door transfers</h4>
              <p className="text-sm text-gray-600 mt-2">Pickup, luggage handling, mobility assistance, boarding help at airports and stations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Guided personalized tours</h4>
              <p className="text-sm text-gray-600 mt-2">Cultural, religious, scenic or family visit itineraries paced for seniors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Medical & emergency support</h4>
              <p className="text-sm text-gray-600 mt-2">First-aid trained companions, coordination with local healthcare and insurance.</p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="book" className="py-8">
          <h3 className="text-2xl font-semibold">Book a trip</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <div className="text-sm font-medium">Full name</div>
                  <input name="name" value={booking.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" required />
                </label>

                <label className="block">
                  <div className="text-sm font-medium">Preferred language</div>
                  <select name="language" value={booking.language} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                    <option>Spanish</option>
                    <option>Mandarin</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <div className="text-sm font-medium">Mobility</div>
                  <select name="mobility" value={booking.mobility} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2">
                    <option>Independent</option>
                    <option>Needs walking assistance</option>
                    <option>Wheelchair user</option>
                    <option>Requires stretcher</option>
                  </select>
                </label>

                <label className="block">
                  <div className="text-sm font-medium">Date</div>
                  <input name="date" type="date" value={booking.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
                </label>

                <label className="block md:col-span-2">
                  <div className="text-sm font-medium">Package</div>
                  <select name="package" value={booking.package} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2">
                    <option>Door-to-Door</option>
                    <option>Full-day personalized tour</option>
                    <option>Airport assistance only</option>
                    <option>Medical appointment support</option>
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <div className="text-sm font-medium">Notes (medications, allergies, emergency contact)</div>
                  <textarea name="notes" value={booking.notes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows={4} />
                </label>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg">Request booking</button>
                <div className="text-sm text-gray-500">We will follow up by phone or WhatsApp to confirm details.</div>
              </div>

              {submitted && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded">
                  Thanks! Your request was received. We'll contact you shortly.
                </div>
              )}
            </form>

            <aside className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Why families choose us</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Background-checked multilingual companions</li>
                <li>Clear pricing, no hidden fees</li>
                <li>Emergency procedures & insurance</li>
                <li>Photos & trip summary for families</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600">Email: hello@nestjourneys.example</p>
              <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
              <p className="text-sm text-gray-600 mt-4">We operate in major metro areas. Want us to come to your city? Tell us.</p>
              <div className="mt-6">
                <h5 className="font-semibold">Subscribe for updates</h5>
                <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
                  <input className="flex-1 rounded-md border-gray-200 p-2" placeholder="Email" />
                  <button className="px-4 py-2 rounded bg-gray-800 text-white">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Safety & Privacy</h4>
              <p className="text-sm text-gray-600 mt-2">All companions are background-checked and trained. Family location updates are only shared with authorized contacts. We recommend travel insurance for medical events.</p>
              <h4 className="font-semibold mt-4">Languages</h4>
              <p className="text-sm text-gray-600">We support English, Hindi, Tamil, Spanish, Mandarin and more via our local partner network.</p>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NestJourneys. Designed for safe, joyful travel.
        </footer>
      </main>
    </div>
  )
}

export default App
