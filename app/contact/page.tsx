'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react' 
import { SOCIAL_LINKS, EMAIL } from '../data' 

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function ContactPage() {
  const githubLink = SOCIAL_LINKS.find(link => link.label.toLowerCase() === 'github')?.link;
  const linkedinLink = SOCIAL_LINKS.find(link => link.label.toLowerCase() === 'linkedin')?.link;

  return (
    <motion.main
      className="min-h-screen space-y-12 md:space-y-16 lg:space-y-20 py-16 sm:py-20 md:py-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="w-full max-w-xl p-6 sm:p-8 space-y-8 bg-zinc-50/40 dark:bg-zinc-950/40 rounded-2xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 mx-auto"
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Let's Connect</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <form /* action={`mailto:${EMAIL}`} method="POST" encType="text/plain" */ className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-zinc-100"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-zinc-100"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-zinc-100"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            Or reach out directly:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm text-zinc-800 dark:text-zinc-200">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Mail className="h-4 w-4 text-zinc-500 group-hover:text-blue-500" />
              {EMAIL}
            </a>
            <div className="group flex items-center gap-2 rounded-md px-3 py-2">
              <Phone className="h-4 w-4 text-zinc-500" />
              <span>(732) 691-8984</span>
            </div>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors duration-200 flex items-center">
                <Github className="h-5 w-5 mr-1" /> GitHub
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors duration-200 flex items-center">
                <Linkedin className="h-5 w-5 mr-1" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
