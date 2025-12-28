import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string, {
      // If proxying enabled create the call this way, works only on localhost
      /* 
      api_host: '/ingest', // Points to your local proxy
      ui_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.posthog.com',
      */
      api_host:
        import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for all users
      defaults: '2025-11-30',
    })

    setHydrated(true)
  }, [])

  if (!hydrated) return <>{children}</>
  return <PHProvider client={posthog}>{children}</PHProvider>
}
