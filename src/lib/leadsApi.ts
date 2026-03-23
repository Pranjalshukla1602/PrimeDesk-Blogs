/**
 * VPS / production leads API base URL (no trailing slash).
 *
 * - Production (Vercel): set `NEXT_PUBLIC_API_BASE_URL` to your public HTTPS API,
 *   e.g. `https://api.primedesk.co.in` or `https://your-vps-domain.com`
 * - Local dev: unset → defaults to `http://localhost:5000`
 *
 * Never use localhost in production builds — browsers block public HTTPS origins
 * from calling loopback (Private Network Access / CORS).
 */
export function getLeadsApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (raw) return raw.replace(/\/$/, '');
  if (process.env.NODE_ENV === 'development') return 'http://localhost:5000';
  return '';
}
