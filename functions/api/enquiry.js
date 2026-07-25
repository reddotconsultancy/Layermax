// Cloudflare Pages Function — POST /api/enquiry
// Sends enquiry / customisation / support submissions via Resend.
//
// Environment variables (Pages > Settings > Environment variables):
//   RESEND_API_KEY  secret  — Resend API key  (REQUIRED — the only var you must set)
//   ENQUIRY_FROM    plain   — optional override; defaults to Layermax <enquiries@layermax.in>
//   ENQUIRY_TO      plain   — optional override; defaults to info@layermax.in
//
// The sending domain (layermax.in) must be verified in Resend for delivery to work.

const DEFAULT_FROM = 'Layermax <enquiries@layermax.in>';
const DEFAULT_TO = 'info@layermax.in';

const FORM_TYPES = {
  product: 'Product Enquiry',
  custom: 'Custom Furniture Request',
  support: 'Support Message'
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

const esc = (v = '') =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Only these keys are read off the payload; anything else is ignored.
const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  orderId: 'Order ID',
  subject: 'Subject',
  productName: 'Product',
  productId: 'Product ID',
  productUrl: 'Product URL',
  material: 'Material / Upholstery',
  dimensions: 'Dimensions',
  message: 'Message'
};

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed.' }, 405);

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  // Honeypot — bots fill hidden fields. Return success so they stop retrying.
  if (data.company) return json({ ok: true });

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!name || !message) return json({ ok: false, error: 'Name and message are required.' }, 400);
  if (!isEmail(email)) return json({ ok: false, error: 'A valid email address is required.' }, 400);

  if (!env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY');
    return json({ ok: false, error: 'Enquiries are temporarily unavailable. Please call or WhatsApp us.' }, 500);
  }
  const fromAddress = env.ENQUIRY_FROM || DEFAULT_FROM;
  const toAddresses = (env.ENQUIRY_TO || DEFAULT_TO).split(',').map((t) => t.trim());

  const label = FORM_TYPES[data.type] || 'Website Enquiry';
  const rows = Object.entries(FIELD_LABELS)
    .filter(([key]) => data[key] && String(data[key]).trim())
    .map(([key, heading]) => {
      const value = esc(data[key]).replace(/\n/g, '<br>');
      return `<tr>
        <td style="padding:8px 16px 8px 0;vertical-align:top;color:#5a6675;white-space:nowrap;">${heading}</td>
        <td style="padding:8px 0;vertical-align:top;color:#12212f;">${value}</td>
      </tr>`;
    })
    .join('');

  const html = `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;">
    <h2 style="margin:0 0 4px;font-size:18px;color:#0a2c5c;">${esc(label)}</h2>
    <p style="margin:0 0 20px;color:#5a6675;">Submitted from layermax.com</p>
    <table style="border-collapse:collapse;">${rows}</table>
  </div>`;

  const subject = data.productName
    ? `${label}: ${data.productName} — ${name}`
    : `${label} — ${name}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: toAddresses,
        reply_to: email,
        subject,
        html
      })
    });

    if (!res.ok) {
      console.error('Resend error', res.status, await res.text());
      return json({ ok: false, error: 'We could not send your enquiry. Please call or WhatsApp us.' }, 502);
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return json({ ok: false, error: 'We could not send your enquiry. Please call or WhatsApp us.' }, 502);
  }

  return json({ ok: true });
}
