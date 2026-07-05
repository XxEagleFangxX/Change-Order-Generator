/**
 * api/verify.js — Vercel Edge Function
 * Digital Foreman Suite — Pro license key verification
 *
 * Called by the app when a user enters a license key in Settings.
 * Proxies the request to Gumroad's license verify API so the
 * Gumroad product permalink stays server-side (not exposed in app JS).
 *
 * TO ACTIVATE: replace GUMROAD_PRODUCT_PERMALINK below with your
 * actual Gumroad product permalink once the store is live.
 */

export const config = { runtime: 'edge' };

const GUMROAD_PRODUCT_PERMALINK = 'change-order-generator';
/* Gumroad now requires product_id (not permalink) to verify licenses for this product.
   This is the public product identifier Gumroad's own API instructs us to use — not a secret. */
const GUMROAD_PRODUCT_ID = 'KvcsGzZjU1jyUx3LiqjjEw==';

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ valid: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  let key = '';
  try {
    const body = await req.json();
    key = (body.key || '').trim();
  } catch (e) {
    return new Response(JSON.stringify({ valid: false, error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  if (!key) {
    return new Response(JSON.stringify({ valid: false, error: 'No license key provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // If Gumroad permalink not yet set, return a pending response
  if (GUMROAD_PRODUCT_PERMALINK === 'REPLACE_WITH_YOUR_GUMROAD_PERMALINK') {
    return new Response(JSON.stringify({ valid: false, error: 'Store not yet live' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  try {
    const formData = new URLSearchParams({
      product_id: GUMROAD_PRODUCT_ID,
      license_key: key,
      increment_uses_count: 'false'
    });

    const gumroadRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    });

    const data = await gumroadRes.json();
    const valid = data.success === true && !data.purchase?.refunded && !data.purchase?.chargebacked;

    return new Response(JSON.stringify({ valid }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ valid: false, error: 'Verification service unavailable' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
