'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { PROJECTS } from '../data'
import { ProjectMedia } from '@/components/ui/project-media'

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

export default function ProjectsPage() {
  return (
    <motion.main
      className="min-h-screen space-y-12 md:space-y-16 lg:space-y-20" 
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="w-full"
      >
        <h1 className="text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-zinc-900 dark:text-zinc-50">My Projects Showcase</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
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
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
