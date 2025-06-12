'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

type StackBlitzEmbedProps = {
  repo: string;
  file?: string;
  height?: string;
  view?: 'preview' | 'editor' | 'both';
};

export const StackBlitzEmbed = ({
  repo,
  file = 'README.md',
  height = '600px',
  view = 'preview',
}: StackBlitzEmbedProps) => {
  const [loaded, setLoaded] = useState(false);
  const src = `https://stackblitz.com/github/${repo}?embed=1&file=${file}&view=${view}`;

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='relative'>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-center h-[600px] bg-gray-100 absolute w-full'>
            <p className='text-gray-500 text-4xl'>불러오는중...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        src={src}
        width='100%'
        height={height}
        className='overflow-hidden'
        onLoad={handleLoad}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      />
    </div>
  );
};
