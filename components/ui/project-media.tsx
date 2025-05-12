'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';

export type ProjectMediaProps = {
  videoSrc?: string;
  screenshots?: string[];
  altText?: string; // Added for better accessibility, can be project name
};

export function ProjectMedia({ videoSrc, screenshots, altText = 'Project media' }: ProjectMediaProps) {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to track dialog open/close
  const AUTOPLAY_INTERVAL = 4000; // 4 seconds for autoplay

  const handleNextScreenshot = (manual = false) => {
    if (screenshots) {
      setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
      if (manual && intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null; // Indicate autoplay is stopped
      }
    }
  };

  const handlePrevScreenshot = (manual = false) => {
    if (screenshots) {
      setCurrentScreenshotIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
      if (manual && intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null; // Indicate autoplay is stopped
      }
    }
  };

  // Store interval ID in a ref to access it in cleanup and event handlers
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing interval first
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }

    // Only set up interval if dialog is closed and there are multiple screenshots
    if (screenshots && screenshots.length > 1 && !isDialogOpen) {
      intervalIdRef.current = setInterval(() => {
        handleNextScreenshot(); // Autoplay calls without manual flag
      }, AUTOPLAY_INTERVAL);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [screenshots, AUTOPLAY_INTERVAL, isDialogOpen, currentScreenshotIndex]); // Add isDialogOpen and currentScreenshotIndex to dependencies

  let triggerContent;
  if (screenshots && screenshots.length > 0) {
    triggerContent = (
      <div className="relative aspect-video w-full cursor-zoom-in rounded-xl overflow-hidden group">
        <AnimatePresence mode='wait'> 
          <motion.img
            key={currentScreenshotIndex} // Key for AnimatePresence
            src={screenshots[currentScreenshotIndex]} // Use the cycling index
            alt={`${altText} - preview ${currentScreenshotIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }} // Slightly longer fade for thumbnail
            className="absolute top-0 left-0 aspect-video w-full object-cover"
          />
        </AnimatePresence>
        {screenshots.length > 1 && (
          <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white z-10">
            {screenshots.length} images
          </div>
        )}
      </div>
    );
  } else if (videoSrc) {
    triggerContent = (
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="aspect-video w-full cursor-zoom-in rounded-xl"
      />
    );
  } else {
    triggerContent = (
      <div className="aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
        <p className="text-zinc-500 dark:text-zinc-400">Media not available</p>
      </div>
    );
  }

  let dialogMediaContent;
  if (screenshots && screenshots.length > 0) {
    dialogMediaContent = (
      <div className="relative aspect-video h-full w-full select-none overflow-hidden">
        <AnimatePresence initial={false} custom={currentScreenshotIndex}>
          <motion.img
            key={currentScreenshotIndex} // Important for AnimatePresence to track items
            src={screenshots[currentScreenshotIndex]}
            alt={`${altText} - screenshot ${currentScreenshotIndex + 1}`}
            initial={{ opacity: 0, x: 50 }} // Start off-screen right and faded out
            animate={{ opacity: 1, x: 0 }}   // Animate to full opacity and original position
            exit={{ opacity: 0, x: -50 }}   // Animate off-screen left and faded out
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className="absolute top-0 left-0 h-full w-full rounded-xl object-contain"
          />
        </AnimatePresence>
        {screenshots.length > 1 && (
          <>
            <button
              onClick={() => handlePrevScreenshot(true)}
              className="absolute left-1 top-1/2 -translate-y-1/2 transform rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/50 focus:outline-none sm:left-2 sm:p-2 z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => handleNextScreenshot(true)}
              className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/50 focus:outline-none sm:right-2 sm:p-2 z-10"
              aria-label="Next screenshot"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white z-10">
              {currentScreenshotIndex + 1} / {screenshots.length}
            </div>
          </>
        )}
      </div>
    );
  } else if (videoSrc) {
    dialogMediaContent = (
      <video
        src={videoSrc}
        autoPlay
        loop
        controls
        playsInline
        className="aspect-video h-full w-full rounded-xl"
      />
    );
  } else {
    dialogMediaContent = (
      <div className="aspect-video h-full w-full flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
        <p className="text-zinc-500 dark:text-zinc-400">Media not available</p>
      </div>
    );
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
      open={isDialogOpen} 
      onOpenChange={setIsDialogOpen} 
    >
      <MorphingDialogTrigger>{triggerContent}</MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video h-auto w-[90vw] max-w-3xl rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 md:h-[70vh] lg:w-full">
          {dialogMediaContent}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-4 right-4 z-50 h-fit w-fit rounded-full bg-white/80 p-1.5 text-zinc-700 backdrop-blur-sm transition hover:bg-white focus:outline-none sm:top-6 sm:right-6"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.2 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
          }}
        >
          <XIcon className="h-5 w-5" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
