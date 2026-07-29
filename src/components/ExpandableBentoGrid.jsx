import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/use-outside-click';
import { X } from 'lucide-react';

export default function ExpandableBentoGrid({ items }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm h-full w-full z-[10000]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[10001] p-4 sm:p-6 overflow-y-auto">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[620px] max-h-[85vh] flex flex-col bg-neutral-900 text-white border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative my-auto"
            >
              {/* Close Button */}
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white border border-white/20 rounded-full h-9 w-9 z-20 backdrop-blur-md transition-colors"
                onClick={() => setActive(null)}
              >
                <X className="h-5 w-5 text-white" />
              </motion.button>

              {/* Banner / Header Icon Area */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div
                  className="w-full h-44 sm:h-52 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: active.bannerGradient || 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900" />
                  {active.icon ? (
                    <div className="scale-[1.8] relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                      {active.icon}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-neutral-800" />
                  )}
                </div>
              </motion.div>

              {/* Title & Description Bar */}
              <div className="px-6 pt-2 pb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/10 pb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl sm:text-2xl text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-neutral-400 text-sm mt-1"
                    >
                      {active.description || active.subtitle}
                    </motion.p>
                  </div>
                </div>

                {/* Expanded Detailed Content (Techs inside this category) */}
                <div className="pt-4 overflow-y-auto max-h-[40vh] custom-scrollbar">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-sm flex flex-col gap-4 pr-1"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid view of category cards */}
      <ul className="max-w-6xl mx-auto w-full gap-4 sm:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={item.id}
            onClick={() => setActive(item)}
            className="p-5 sm:p-6 flex flex-col justify-between items-start rounded-2xl cursor-pointer bg-white/[0.03] border border-white/10 transition-all duration-300 shadow-lg group relative overflow-hidden hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Subtle category glow dot */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"
              style={{ background: item.color || '#6366f1' }}
            />

            <div className="flex gap-4 items-center w-full">
              <div
                className="h-14 w-14 rounded-xl flex items-center justify-center p-2.5 border border-white/10 shadow-inner shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-base sm:text-lg truncate group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 w-full flex justify-between items-center text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors duration-300">
              <span>View Technologies ({item.techCount || 0})</span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300">Explore →</span>
            </div>
          </motion.div>
        ))}
      </ul>

    </>
  );
}
