import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import globalCss from '../global.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'CREATE SOMETHING SPACE | The Experimental Layer',
      },
      {
        name: 'description',
        content: 'Community playground for AI-native development experiments. Fork experiments, break things, learn in public. Every experiment feeds back into the research at createsomething.io.',
      },
      {
        name: 'keywords',
        content: 'AI experiments community, experimental development, Claude Code playground, fork experiments, learn in public, development sandbox, AI coding experiments, community experiments, experimental layer, AI development playground',
      },
      {
        name: 'author',
        content: 'Micah Johnson',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content: 'index, follow',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://createsomething.space',
      },
      {
        property: 'og:title',
        content: 'CREATE SOMETHING SPACE | The Experimental Layer',
      },
      {
        property: 'og:description',
        content: 'Community playground for AI-native development experiments. Fork, break, learn. Every experiment feeds back into createsomething.io research.',
      },
      {
        property: 'og:image',
        content: 'https://createsomething.space/og-image.svg',
      },
      {
        property: 'og:image:type',
        content: 'image/svg+xml',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:site_name',
        content: 'CREATE SOMETHING SPACE',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: 'https://createsomething.space',
      },
      {
        name: 'twitter:title',
        content: 'CREATE SOMETHING SPACE | The Experimental Layer',
      },
      {
        name: 'twitter:description',
        content: 'Community playground for AI experiments. Fork, break, learn. Every experiment feeds back into the research.',
      },
      {
        name: 'twitter:image',
        content: 'https://createsomething.space/og-image.svg',
      },
      {
        name: 'twitter:creator',
        content: '@micahryanjohnson',
      },
      // Additional SEO
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
      // AEO (Answer Engine Optimization) for AI/LLM queries
      {
        name: 'article:section',
        content: 'Experimental Development, Community Learning',
      },
      {
        name: 'article:tag',
        content: 'AI Experiments, Community Playground, Fork and Learn, Experimental Development, AI Development Sandbox',
      },
      {
        name: 'citation_title',
        content: 'CREATE SOMETHING SPACE: Community Playground for AI-Native Experiments',
      },
      {
        name: 'citation_author',
        content: 'Micah Johnson',
      },
      {
        name: 'citation_publication_date',
        content: '2025',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'canonical',
        href: 'https://createsomething.io',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CREATE SOMETHING',
          alternateName: 'AI-Native Development Research',
          description: 'Systematic evaluation of AI-native development through tracked experiments. Real data from building with Claude Code and Cloudflare: development time, costs, error counts, and honest learnings from production systems.',
          url: 'https://createsomething.io',
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            name: 'Micah Johnson',
            url: 'https://www.linkedin.com/in/micahryanjohnson/',
            jobTitle: 'AI-Native Development Researcher',
          },
          publisher: {
            '@type': 'Organization',
            name: 'CREATE SOMETHING',
            logo: {
              '@type': 'ImageObject',
              url: 'https://createsomething.io/favicon.svg',
            },
          },
          about: {
            '@type': 'Thing',
            name: 'AI-Native Development',
            description: 'Development practices and patterns using AI coding assistants like Claude Code with modern infrastructure',
          },
          keywords: [
            'AI-native development',
            'Claude Code experiments',
            'Cloudflare Workers',
            'development metrics tracking',
            'AI-assisted coding',
            'experiment-driven development',
            'TanStack Router',
            'systems thinking',
            'transparent development costs',
          ],
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://createsomething.io/articles?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="page-transition">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
