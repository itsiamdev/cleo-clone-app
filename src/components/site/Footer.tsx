import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="px-6 md:px-10 pt-24 pb-12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[16vw] md:text-[14rem] leading-none font-bold tracking-tighter text-center"
        >
          Talk soon.
        </motion.h2>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
          <div className="flex items-center gap-3 font-display font-bold tracking-tight">
            cleo
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} cleo</div>
        </div>
      </div>
    </footer>
  );
}
