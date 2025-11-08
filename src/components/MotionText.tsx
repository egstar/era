'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import Loops from 'next-auth/providers/loops';
import * as React from 'react';
 
type TextStaggeredFadeProps = {
  text: string;
  className?: string;
};
 
export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = '',
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };
 
  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
 
  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={variants}
      viewport={{ once: false }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop", // or "reverse" or "mirror"
      }}
      className={cn(
        'text-xl text-center sm:text-2xl font-bold tracking-tighter md:text-4xl md:leading-16',
        className
      )}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};