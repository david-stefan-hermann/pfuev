import { Resend } from 'resend'

interface Env {
    RESEND_API_KEY: string
}

export async function POST(request: Request, env: Env) {
    const { name, email, message } = await request.json()

    const resend = new Resend(env.RESEND_API_KEY || 'x')

    const { data, error } = await resend.emails.send({
        from: 'info@pfuev.org',
        to: 'info@pfuev.org',
        subject: 'Pfuev.org: Nachricht von ' + name || 'Unbekannt',
        html: `
        <h3>Nachricht</h3>
        <p>${message || 'keine Nachricht'}</p>
        <h3>Absender</h3>
        <p>Name: ${name || 'kein Name'}</p>
        <p>Email: ${email || 'keine Email'}</p>`,
    })
    console.log(data, error)
    return Response.json({ data, error })
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'