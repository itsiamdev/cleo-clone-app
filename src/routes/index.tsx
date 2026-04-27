import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { FeatureSection } from "@/components/site/FeatureSection";
import { PhoneMock, ChatBubble } from "@/components/site/PhoneMock";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "cleo — Your money, spoken." },
      {
        name: "description",
        content:
          "The AI assistant that talks to you about your finances. Honest, sharp, always there.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />

      <FeatureSection
        index={1}
        eyebrow="Autopilot"
        title="Saves money while you sleep."
        description="We move the right amount, on the right day, to the right place. You wake up with more. That's it."
        visual={
          <PhoneMock>
            <div className="flex-1 flex flex-col gap-3 justify-end">
              <ChatBubble delay={0.1}>You hit your savings goal 3 days early. Casual flex.</ChatBubble>
              <ChatBubble from="me" delay={0.3}>wait fr??</ChatBubble>
              <ChatBubble delay={0.5}>+£127 moved to savings this week. You're welcome.</ChatBubble>
            </div>
          </PhoneMock>
        }
      />

      <FeatureSection
        index={2}
        reverse
        eyebrow="Money IQ"
        title="Reads your spending. Speaks the truth."
        description="Real conversations about where your money actually goes. No sugar coating, no spreadsheets."
        visual={
          <PhoneMock>
            <div className="flex-1 flex flex-col gap-3 justify-end">
              <ChatBubble from="me" delay={0.1}>how bad was last weekend</ChatBubble>
              <ChatBubble delay={0.3}>£94 on takeout in 48 hours. We need to talk.</ChatBubble>
              <ChatBubble delay={0.6}>Want me to set a delivery limit before Friday?</ChatBubble>
            </div>
          </PhoneMock>
        }
      />

      <FeatureSection
        index={3}
        eyebrow="The Card"
        title="A black card with a brain."
        description="Built-in budgets, instant insights, and zero hidden fees. Tap, and we handle the rest."
        visual={
          <motion.div
            whileHover={{ rotate: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="mx-auto w-[320px] md:w-[420px] aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/15 p-7 flex flex-col justify-between shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] grain"
          >
            <div className="flex justify-between items-start">
              <div className="text-xs tracking-[0.3em] uppercase text-white/50">cleo</div>
              <div className="w-10 h-7 rounded-md bg-gradient-to-br from-white/30 to-white/10" />
            </div>
            <div>
              <div className="text-xl font-mono tracking-widest text-white/80 mb-3">
                •••• •••• •••• 0427
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                <span>Cardholder</span>
                <span>04/30</span>
              </div>
            </div>
          </motion.div>
        }
      />

      <section className="py-32 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight"
        >
          One million people already talk money with us.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-12 text-white/50"
        >
          {[
            { n: "1M+", l: "Users" },
            { n: "£280M", l: "Saved" },
            { n: "4.8★", l: "App Store" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl font-bold text-white">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.3em] mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
