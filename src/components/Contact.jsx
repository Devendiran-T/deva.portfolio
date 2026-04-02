import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../constants'
import FloatingTorus from './bg3d/FloatingTorus'

// ─────────────────────────────────────────────
// HOW TO GET YOUR EMAILJS CREDENTIALS (free):
//  1. Go to https://www.emailjs.com and sign up
//  2. Dashboard → Email Services → Add New Service
//     → choose Gmail → connect your Gmail account
//     → copy the Service ID  →  replace VITE_EMAILJS_SERVICE_ID
//  3. Dashboard → Email Templates → Create New Template
//     → use variables: {{from_name}}, {{from_email}}, {{message}}
//     → copy the Template ID  →  replace VITE_EMAILJS_TEMPLATE_ID
//  4. Dashboard → Account → Public Key
//     → copy it  →  replace VITE_EMAILJS_PUBLIC_KEY
//
//  Store them in  3dPortfolio/.env  (create the file):
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
//
//  .env is already in .gitignore so your keys stay private.
// ─────────────────────────────────────────────

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'

const inputClass =
  'w-full bg-transparent border border-[#4f9eff22] text-white placeholder-[#8da5c4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f9eff] transition'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus]   = useState(null) // 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="section-bg relative px-6 py-20"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(2,6,23,0.55) 0%, rgba(0,10,40,0.50) 100%)' }}
      />
      {/* 3D torus knot — centered */}
      <div
        className="absolute w-[600px] h-[600px] opacity-40 pointer-events-none z-[2]"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <FloatingTorus />
      </div>

      <div className="max-w-7xl mx-auto relative z-[3]">
      <p className="text-[#8da5c4] text-[17px] uppercase tracking-wider">Get in touch</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact
      </h2>
      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* ── Contact info ── */}
        <div className="border border-[#4f9eff18] rounded-2xl p-8 flex flex-col gap-4 text-[#8da5c4] text-[15px] lg:w-[340px] shrink-0" style={{ backdropFilter: 'blur(4px)', background: 'rgba(10,22,40,0.10)' }}>
          <p>
            <span className="text-white font-semibold">📧 Email </span><br />
            <a href={`mailto:${personalInfo.email}`} className="text-[#4f9eff] hover:underline break-all">
              {personalInfo.email}
            </a>
          </p>
          <p>
            <span className="text-white font-semibold">📱 Phone </span><br />
            {personalInfo.phone}
          </p>
          <p>
            <span className="text-white font-semibold">📍 Location </span><br />
            {personalInfo.location}
          </p>
          <p>
            <span className="text-white font-semibold">💻 GitHub </span><br />
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#4f9eff] hover:underline break-all">
              {personalInfo.github}
            </a>
          </p>
          <p>
            <span className="text-white font-semibold">🔗 LinkedIn </span><br />
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#0077b5] hover:underline break-all">
              linkedin.com/in/devendiran-t
            </a>
          </p>
        </div>

        {/* ── Contact form ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="border border-[#4f9eff18] rounded-2xl p-8 flex flex-col gap-5 flex-1"
          style={{ backdropFilter: 'blur(4px)', background: 'rgba(10,22,40,0.10)' }}
        >
          <div>
            <label className="text-[#8da5c4] text-sm mb-1 block">Your Name</label>
            <input
              type="text"
              name="from_name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-[#8da5c4] text-sm mb-1 block">Your Email</label>
            <input
              type="email"
              name="from_email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-[#8da5c4] text-sm mb-1 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Hi Devendiran, I'd like to connect..."
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#4f9eff] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#3a88e8] transition shadow-glow disabled:opacity-50 disabled:cursor-not-allowed w-fit"
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm mt-1">
              ✅ Thanks! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-1">
              ❌ Something went wrong. Please email me directly at{' '}
              <a href={`mailto:${personalInfo.email}`} className="underline">
                {personalInfo.email}
              </a>
            </p>
          )}
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
