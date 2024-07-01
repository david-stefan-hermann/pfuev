import { Resend } from 'resend'

export async function POST(request: Request, env: { RESEND_API_KEY: string }) {
    const { name, email, message } = await request.json()

    const resend = new Resend(env.RESEND_API_KEY || "undefined");

    const { data, error } = await resend.emails.send({
        from: email || 'Keine Email angegeben',
        to: 'info@pfuev.org',
        subject: 'Pfuev.org: Neue Nachricht von ' + name || 'Unbekannt',
        html: message || 'Keine Nachricht',
    })
    return Response.json({ data, error })
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'