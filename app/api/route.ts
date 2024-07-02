import { Resend } from 'resend'

export async function POST(request: Request) {

    const { name, email, message } = await request.json()

    const env_resend_api_key = process.env.RESEND_API_KEY || 'x-undefined-key'

    const resend = new Resend(env_resend_api_key)

    // send email to pfuev team
    const { data, error } = await resend.emails.send({
        from: 'pfuev@pfuev.org',
        to: 'info@pfuev.org',
        subject: 'Nachricht von ' + name || 'Unbekannt',
        html: `
        <h3>Nachricht</h3>
        <p>${message || 'keine Nachricht'}</p>
        <h3>Absender</h3>
        <p>Name: ${name || 'kein Name'}</p>
        <p>Email: ${email || 'keine Email'}</p>
        `,
    })

    if ( !error ) {
        // send email to sender
        await resend.emails.send({
            from: 'noreply@pfuev.org',
            to: email,
            subject: 'Vielen Dank für Ihre Nachricht an den Pfüv',
            html: `
            <p>Vielen Dank für Ihre Nachricht an den Pfüv. Wir haben Ihre Anfrage erhalten und werden sie schnellstmöglich bearbeiten.</p>
            <p>Mit freundlichen Grüßen</p>
            <p>Ihr Pfüv-Team</p>
            <h3>Ihre Nachricht</h3>
            <p>${message || 'keine Nachricht'}</p>
            `
        })
    }

    if (process.env.NODE_ENV === 'development') {
        console.log("DEBUGGING: ", { name, email, message })
        return Response.json({ data: { name: name, email: email, message: message }, error: "" })
    } else {
        console.log(data, error)
        return Response.json({ data, error })
    }
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'