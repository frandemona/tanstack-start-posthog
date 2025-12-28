import { createFileRoute } from '@tanstack/react-router'

// Define your PostHog host (US or EU)
const POSTHOG_HOST =
  import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

export const Route = createFileRoute('/api/ingest')({
  server: {
    handlers: {
      GET: ({ request }) => handleProxy(request),
      POST: ({ request }) => handleProxy(request),
    },
  },
})

async function handleProxy(request: Request) {
  const url = new URL(request.url)

  // 1. Construct the target URL
  // We want to forward the search params (e.g. ?v=3&ip=1) to PostHog
  const targetUrl = new URL(
    url.pathname.replace('/api/ingest', ''),
    POSTHOG_HOST,
  )
  targetUrl.search = url.search

  // 2. Forward the request
  const response = await fetch(targetUrl.toString(), {
    method: request.method,
    headers: {
      ...Object.fromEntries(request.headers),
      host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'us.i.posthog.com',
    },
    body: request.method === 'POST' ? await request.blob() : null,
  })

  // 3. Return the response to the client
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  })
}
