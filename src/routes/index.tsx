import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { CategorySection } from '../components/CategorySection'
import { PapersGrid } from '../components/PapersGrid'
import { Footer } from '../components/Footer'
import { mockPapers, mockCategories } from '../data/mockPapers'
import { ArrowRight, Beaker, GitFork, Lightbulb } from 'lucide-react'
import type { Paper } from '../types/paper'

// Server function to fetch papers from D1 database
const getPapersFromDB = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    // Access Cloudflare bindings via cloudflare:workers module
    // Try to use D1, fallback to mock data if unavailable
    if (!env?.DB) {
      console.log('⚠️  No DB binding - using mock data')
      return {
        papers: mockPapers,
        categories: mockCategories
      }
    }

    console.log('✅ Using D1 database')

    // Fetch all published papers
    const result = await env.DB.prepare(`
      SELECT
        id, title, category, content, html_content, reading_time,
        difficulty_level, technical_focus, published_on, excerpt_short,
        excerpt_long, slug, featured, published, is_hidden, archived,
        date, excerpt, description, created_at, updated_at, published_at, ascii_art
      FROM papers
      WHERE published = 1 AND is_hidden = 0 AND archived = 0
      ORDER BY featured DESC, created_at DESC
    `).all()

    const papers = (result.results || []) as Paper[]

    // Get category counts
    const categoryResult = await env.DB.prepare(`
      SELECT
        category,
        COUNT(*) as count
      FROM papers
      WHERE published = 1 AND is_hidden = 0 AND archived = 0
      GROUP BY category
      ORDER BY count DESC
    `).all()

    const categories = (categoryResult.results || []).map((row: any) => ({
      name: row.category.charAt(0).toUpperCase() + row.category.slice(1),
      slug: row.category,
      count: row.count
    }))

    return {
      papers,
      categories
    }
  } catch (error) {
    console.error('Error fetching papers:', error)
    // Fallback to mock data on error
    return {
      papers: mockPapers,
      categories: mockCategories
    }
  }
})

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: async () => await getPapersFromDB(),
  head: () => ({
    meta: [
      { title: 'CREATE SOMETHING SPACE | Community Playground for AI-Native Experiments' },
      { name: 'description', content: 'The Experimental Layer. Fork experiments, break things, learn in public. Community playground for testing AI-native development ideas with real data from createsomething.io research.' },
      { name: 'keywords', content: 'AI experiments, community playground, Claude Code community, fork experiments, AI-native development, experimental development, learn in public, development sandbox, AI coding experiments' },

      // Open Graph
      { property: 'og:title', content: 'CREATE SOMETHING SPACE | Experimental Layer' },
      { property: 'og:description', content: 'Community playground for AI-native development experiments. Fork, modify, and share learnings.' },
      { property: 'og:url', content: 'https://createsomething.space' },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:title', content: 'CREATE SOMETHING SPACE' },
      { name: 'twitter:description', content: 'Fork experiments, break things, learn in public' },

      // AEO (Answer Engine Optimization)
      { name: 'article:section', content: 'Experimental Development, Community Learning' },
      { name: 'article:tag', content: 'AI Experiments, Community Playground, Fork and Learn, Development Sandbox' },
    ],
    links: [
      { rel: 'canonical', href: 'https://createsomething.space' },
    ],
  }),
})

function HomePage() {
  const { papers, categories } = Route.useLoaderData()

  // Split papers for different sections
  const latestPapers = papers.slice(0, 12)

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Custom .space Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-lg font-medium text-white/90"
            >
              CREATE SOMETHING SPACE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              The Experimental Layer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
            >
              Community playground for testing ideas. Fork experiments, break things, learn in public.
              Every experiment here feeds back into the research at{' '}
              <a href="https://createsomething.io" className="text-white hover:text-white/80 underline">
                createsomething.io
              </a>
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <Beaker className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">Test Ideas</h3>
                <p className="text-sm text-white/60">
                  Browse tracked experiments with real data: time, costs, errors
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <GitFork className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">Fork & Modify</h3>
                <p className="text-sm text-white/60">
                  Take any experiment and make it your own
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <Lightbulb className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">Share Learnings</h3>
                <p className="text-sm text-white/60">
                  Contribute back to the collective knowledge
                </p>
              </div>
            </motion.div>

            {/* CTA to Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <a
                href="https://createsomething.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <span className="text-sm md:text-base">See the research methodology</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      </section>

      <CategorySection categories={categories} />
      <PapersGrid
        papers={latestPapers}
        title="Community Experiments"
        subtitle="Real experiments from the community — fork them, try them, break them, learn from them"
      />
      <Footer />
    </div>
  )
}