import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email } = JSON.parse(req.body)

  await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID, // from your Resend dashboard
  })

  res.status(200).json({ ok: true })
}