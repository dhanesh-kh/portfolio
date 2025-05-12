'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Dhanesh Khemraj
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Web Developer
        </TextEffect>
      </div>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
