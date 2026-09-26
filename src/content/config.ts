import { defineCollection, z } from 'astro:content';

// Every .md file placed in src/content/milestones/ automatically becomes
// a milestone card on /milestones and gets its own page at /milestones/<filename>.
const milestones = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      phase: z.string().optional(), // e.g. "Inception", "Elaboration"
      date: z.coerce.date().optional(),
      summary: z.string(), // short blurb shown on the card
      image: image().optional(), // put the image file next to the .md file, e.g. ./milestone-1.png
      link: z.string().url().optional(), // optional external link (e.g. a report on Drive)
    }),
});

// Every .md file placed in src/content/meetings/ automatically becomes
// a row in the meetings log on /meetings.
const meetings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    attendees: z.array(z.string()).optional(),
    summary: z.string().optional(), // one-line outcome, shown in the log
    location: z.string().optional(), // e.g. "Discord", "DETI 4.1.02"
    duration: z.string().optional(), // e.g. "1h40"
    nextMeeting: z.coerce.date().optional(),
  }),
});

export const collections = { milestones, meetings };
