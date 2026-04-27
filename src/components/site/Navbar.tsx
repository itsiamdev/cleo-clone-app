import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <a href="/" className="flex items-center gap-2 font-display font-bold tracking-tight text-lg">
        cleo
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#product" className="hover:text-white transition-colors">Product</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </nav>
      <a
        href="#get"
        className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:scale-105"
      >
        Get the app
      </a>
    </motion.header>
  );
}
