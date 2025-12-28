# TanStack Start + PostHog Analytics 🦔

A production-ready example showing how to integrate **PostHog** analytics into a **TanStack Start** application.

This repository demonstrates how to handle analytics in a modern SSR environment, ensuring events are captured correctly on the client side without breaking server-side rendering or hydration.

## 🚀 Features

- **TanStack Start**: Full-stack React framework with SSR and server functions.
- **PostHog**: Complete setup for product analytics.
- **Type-Safe Env**: Validation of analytics keys using standard environment checks.
- **SSR Compatible**: Ensures analytics don't break during server-side rendering or hydration.
- **Proxy Setup (Optional)**: Example config to proxy PostHog events through your own domain to avoid ad-blockers.

## 🛠️ Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- A [PostHog](https://posthog.com) account (Cloud or Self-hosted)

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/frandemona/tanstack-start-posthog.git
cd tanstack-start-posthog
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**
   Copy the example `.env` file:

```bash
cp .env.example .env
```

Fill in your PostHog details in `.env`:

```env
# Your Public API Key (Project Settings > API Key)
VITE_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxx

# Your Instance Host (usually https://us.i.posthog.com or https://eu.i.posthog.com)
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## 🏃‍♂️ Usage

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. You should see events appearing in your PostHog "Live Events" tab immediately.

## 🧠 Key Integration Concepts

### Client-Side Initialization

We initialize PostHog only once in the client entry point to ensure it persists across route changes.

**File:** `src/providers.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.
