import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PhoneMock({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ rotateY: 8, rotateX: -4 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{ perspective: 1000 }}
      className="mx-auto w-[280px] md:w-[340px] aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 p-3 shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)]"
    >
      <div className="w-full h-full rounded-[2.4rem] bg-black overflow-hidden relative grain">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center">
          <div className="w-16 h-4 bg-zinc-900 rounded-full" />
        </div>
        <div className="absolute top-4 left-4 z-20 text-[10px] tracking-[0.3em] uppercase text-white/50">
          cleo
        </div>
        <div className="pt-14 px-5 pb-5 h-full flex flex-col">{children}</div>
      </div>
    </motion.div>
  );
}

export function ChatBubble({
  children,
  from = "bot",
  delay = 0,
}: {
  children: ReactNode;
  from?: "bot" | "me";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-snug ${
        from === "bot"
          ? "bg-white/10 text-white self-start rounded-bl-sm"
          : "bg-white text-black self-end rounded-br-sm"
      }`}
    >
      {children}
    </motion.div>
  );
}
