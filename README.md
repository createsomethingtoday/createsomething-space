# CREATE SOMETHING Space

**The Experimental Layer** — Community playground for AI-native experiments. Fork, break, learn in public.

Built with TanStack Start and Cloudflare Workers.

![Create Something](https://img.shields.io/badge/TanStack-Start-red) ![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-orange) ![Tailwind](https://img.shields.io/badge/Tailwind-v4.1.17-blue)

## What This Is

This is the experimental layer of the CREATE SOMETHING ecosystem. Take any experiment from [createsomething.io](https://createsomething.io), fork it, modify it, break it, learn from it.

No barriers. No judgment. Just learning in public.

## The Hermeneutic Circle

This repository is part of a three-domain architecture based on Heidegger's hermeneutic circle:

- **[createsomething.io](https://createsomething.io)** → Research & Experiments
- **[createsomething.agency](https://createsomething.agency)** → Professional Services
- **[createsomething.space](https://createsomething.space)** (this repo) → Community Playground

Community experiments inform research. Research provides experiments to fork. The circle accelerates collective learning.

## How to Use This

1. **Browse** experiments from createsomething.io research
2. **Fork** this repo or individual experiments
3. **Modify** anything — break things, try new approaches
4. **Share** your learnings via issues or PRs
5. **Learn** from what worked and what didn't

Your experiments feed back into [createsomething.io](https://createsomething.io) research.

## Features

- 🧪 **Forkable Experiments** — Every research paper has runnable code
- 🔨 **Break Things** — Safe environment for trying new ideas
- 📚 **Learn in Public** — Share your findings with the community
- 🤝 **Collaborative** — PR your improvements and learnings
- ⚡ **Zero Setup** — Fork and start experimenting immediately
- 🌍 **Global Deployment** — Deploy your forks to Cloudflare Workers

## Quick Start

```bash
# Fork this repository on GitHub

# Clone your fork
git clone https://github.com/YOUR-USERNAME/createsomething-space.git
cd createsomething-space

# Install dependencies
pnpm install

# Start experimenting!
pnpm dev

# Deploy your experiment
pnpm deploy
```

Visit **http://localhost:3000** to see your playground.

## Project Structure

```
createsomething-space/
├── src/
│   ├── routes/
│   │   ├── index.tsx              # Playground homepage
│   │   ├── experiments.tsx        # Browse experiments
│   │   └── papers/$slug.tsx       # Individual experiments
│   ├── components/
│   │   ├── PapersGrid.tsx         # Experiment browsing
│   │   └── TerminalExperience.tsx # Interactive demos
│   └── services/
│       └── ascii-generator.ts     # Visual generation
├── db/
│   ├── schema.sql                 # Experiments database schema
│   └── seed-data.sql              # Community experiments
└── docs/
    ├── SPACE_SPECIFICATION.md
    └── THREE_DOMAIN_ARCHITECTURE.md
```

## Tech Stack

- **TanStack Start v1.136** — Full-stack React framework
- **Cloudflare Workers** — Edge deployment
- **Cloudflare D1** — SQLite database (shared across all domains)
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling

## Contributing Your Experiments

Tried something interesting? Share it with the community:

1. **Document what you tried** — What was the hypothesis?
2. **Share what happened** — Success, failure, or surprise?
3. **Open a PR** with your experiment
4. **We'll feature it** on createsomething.space

The best community experiments become research papers on [createsomething.io](https://createsomething.io).

## Example Experiments

Here are some ideas to get started:

- Fork the "Zoom to Notion" experiment and try a different AI model
- Take the "ASCII Art Generator" and create music instead of visuals
- Modify the "Context Extraction" pattern for a new domain
- Break something intentionally to understand error modes
- Combine two experiments into something new

## Learning Resources

- **[Research Archive](https://createsomething.io)** — 100+ tracked experiments
- **[Methodology](https://createsomething.io/methodology)** — How experiments are structured
- **[Case Studies](https://createsomething.agency)** — Professional applications

## The Knowledge Layer

Want to understand the research behind these experiments?

→ **[createsomething.io](https://createsomething.io)** — Every experiment tracked with real metrics.

## The Practice Layer

Need professional help applying these patterns?

→ **[createsomething.agency](https://createsomething.agency)** — Consulting and implementation services.

## Community Guidelines

- **Be curious** — Try things that might not work
- **Share honestly** — Failures teach as much as successes
- **Build on others** — Fork and improve existing experiments
- **Give credit** — Acknowledge sources and inspirations
- **Learn together** — Help others learn from your mistakes

## License

MIT License - See [LICENSE](./LICENSE) for details

Fork freely. Break things. Learn.

---

**Built with TanStack Start and Cloudflare Workers**

For collaboration: [open an issue](https://github.com/createsomethingtoday/createsomething-space/issues)
