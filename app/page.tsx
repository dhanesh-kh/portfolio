'use client'
import { motion } from 'motion/react'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { useState } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ProjectMedia } from '@/components/ui/project-media'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  SOCIAL_LINKS,
} from './data'

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

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Crafting intuitive, high-performance web solutions by seamlessly blending design and development expertise.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">My Mission</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          My mission is to translate complex challenges into elegant, user-centric digital solutions. I'm passionate about building innovative web experiences through intuitive design and clean, efficient code, aiming to empower users and deliver lasting impact.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-3">My Toolkit & Background</h3>
        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
          A look into my core technical skills and the educational background that underpins my work.
        </p>

        <div className="rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 sm:p-6 mb-6">
          <div className="flex flex-col space-y-3">
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">Languages</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">JavaScript (ES6+), TypeScript, Python, Java, C++</p>
            </div>
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">Frontend Development</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">React, Next.js, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">Backend Development</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Node.js, FastAPI</p>
            </div>
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">Databases</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">DevOps & Version Control</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Git, GitHub, Vercel, Docker</p>
            </div>
            <div>
              <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">Design Tools</h5>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Figma</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 sm:p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">New Jersey Institute of Technology (NJIT)</h5>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">BS, Web & Information Systems</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Newark, NJ</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">Spring 2025</p>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h5 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Ocean County College</h5>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">AS, Computer Science</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Toms River, NJ</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">Fall 2022</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col space-y-3">
              {(project.screenshots && project.screenshots.length > 0) || project.video ? (
                <ProjectMedia 
                  screenshots={project.screenshots} 
                  videoSrc={project.video} 
                  altText={project.name} 
                />
              ) : (
                <div className="aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <p className="text-zinc-500 dark:text-zinc-400">No preview available</p>
                </div>
              )}
              <div>
                <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Connect with me on the following platforms:
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
