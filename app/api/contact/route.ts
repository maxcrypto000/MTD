import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // ==========================================
    // HONEYPOT ANTI-SPAM SYSTEM
    // ==========================================
    // If the hidden 'website' field is filled, it's a bot.
    const honeypot = formData.get('website');
    if (honeypot) {
      console.log("Spam bot bloccato dall'honeypot.");
      // We return 200 OK to fool the bot into thinking it succeeded
      return NextResponse.json({ success: true });
    }
    
    // Convert FormData to URL-encoded string for Google Apps Script
    const urlEncodedData = new URLSearchParams(formData as any).toString();

    // SCRIPT_URL moved to environment variables to hide it from Git
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!SCRIPT_URL) {
      console.error("Manca la variabile d'ambiente GOOGLE_SCRIPT_URL");
      return NextResponse.json({ error: 'Configurazione server mancante' }, { status: 500 });
    }

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncodedData,
    });

    // We can actually read the response status here
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Errore da Google Apps Script:", response.status, response.statusText);
      return NextResponse.json({ error: 'Errore durante l\'invio' }, { status: 500 });
    }

  } catch (error) {
    console.error("Errore nell'API route /api/contact:", error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
