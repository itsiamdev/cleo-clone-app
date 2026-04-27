import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
  index: number;
}

export function FeatureSection({ eyebrow, title, description, visual, reverse, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            0{index} — {eyebrow}
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            {title}
          </h2>
          <p className="text-lg text-white/60 max-w-md leading-relaxed">{description}</p>
        </motion.div>

        <motion.div style={{ y }} className="relative">
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
