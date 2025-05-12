type Project = {
  name: string
  description: string
  link: string
  video?: string
  screenshots?: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Knowledge Graph RAG Pipeline',
    description:
      'A retrieval-augmented generation system using knowledge graphs for enhanced information retrieval.',
    link: 'https://github.com/tomasGonz67/theoforge-be/blob/philosophers/PIPELINE.md',
    screenshots: [
      '/kg1.png',
      '/kg2.png',
      '/kg3.png'
    ],
    id: 'project1',
  },
  {
    name: 'NJIT Student Marketplace',
    description: 'A student marketplace for NJIT students to buy and sell items.',
    link: 'https://github.com/dhanesh-kh/njitstudentmarketplace',
    screenshots: [
      '/mk1.png',
      '/mk2.png',
      '/mk3.png'
    ],
    id: 'project2',
  },
  {
    name: 'DC Crime Data Visualization',
    description: 'Interactive dashboard visualizing crime statistics across Washington DC with filtering and trend analysis.',
    link: 'https://is-219.vercel.app/',
    video:
      '/dc_crime_visualization.mov',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [

  {
    company: 'Freelance',
    title: 'Full Stack Developer',
    start: '2024',
    end: 'Present',
    link: '',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dhanesh-kh',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dhanesh-khemraj',
  },
]
