import type { MetadataRoute } from 'next'

const baseUrl = 'https://cholez-pagotto.fr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/espace-client', '/admin', '/api'],
      },
      {
        // Robots IA explicitement autorises : visibilite dans les reponses
        // des moteurs generatifs (ChatGPT, Claude, Perplexity, Google AI, Apple).
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/espace-client', '/admin', '/api'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}