import { jsxs, jsx } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
function Navbar() {
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5",
      children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center gap-2 font-display font-bold tracking-tight text-lg", children: "cleo" }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-white/70", children: [
          /* @__PURE__ */ jsx("a", { href: "#product", className: "hover:text-white transition-colors", children: "Product" }),
          /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-white transition-colors", children: "Features" }),
          /* @__PURE__ */ jsx("a", { href: "#pricing", className: "hover:text-white transition-colors", children: "Pricing" }),
          /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-white transition-colors", children: "About" })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#get",
            className: "px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:scale-105",
            children: "Get the app"
          }
        )
      ]
    }
  );
}
const ease$1 = [0.22, 1, 0.36, 1];
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const headline = ["Your", "money,", "spoken."];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain pt-24",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1.6, ease: ease$1 },
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 35%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(motion.div, { style: { y, opacity, scale }, className: "relative z-10 text-center px-6", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: ease$1, delay: 0.2 },
              className: "mb-10 flex justify-center",
              children: /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.4em] uppercase text-white/50 border border-white/15 rounded-full px-4 py-1.5", children: "cleo" })
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-[14vw] md:text-[9rem] lg:text-[12rem] leading-[0.85] font-bold tracking-tighter", children: headline.map((word, i) => /* @__PURE__ */ jsx("span", { className: "inline-block overflow-hidden align-bottom mr-[0.18em]", children: /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "inline-block",
              initial: { y: "110%" },
              animate: { y: "0%" },
              transition: { duration: 1.1, ease: ease$1, delay: 0.5 + i * 0.12 },
              children: word
            }
          ) }, i)) }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: ease$1, delay: 1.2 },
              className: "mt-8 text-lg md:text-xl text-white/60 max-w-xl mx-auto",
              children: "The AI assistant that talks to you about your finances. Honest. Sharp. Always there."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: ease$1, delay: 1.4 },
              className: "mt-12 flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#get",
                    className: "group relative px-8 py-4 rounded-full bg-white text-black font-medium overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Download free" }),
                      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#features",
                    className: "px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors",
                    children: "See how it works"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2, duration: 1 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase",
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, 8, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                children: "Scroll"
              }
            )
          }
        )
      ]
    }
  );
}
function Marquee() {
  const items = [
    "Spending insights",
    "Budget coach",
    "Bill negotiator",
    "Savings autopilot",
    "Credit builder",
    "Debt slayer"
  ];
  const all = [...items, ...items];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-white/10 py-8 overflow-hidden bg-black", children: /* @__PURE__ */ jsx("div", { className: "flex marquee-track whitespace-nowrap", children: all.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-10 px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "font-display text-3xl md:text-5xl font-bold tracking-tight text-white/80", children: t }),
    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-white/30" })
  ] }, i)) }) });
}
const ease = [0.22, 1, 0.36, 1];
function FeatureSection({ eyebrow, title, description, visual, reverse, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return /* @__PURE__ */ jsx("section", { ref, className: "relative py-32 md:py-48 px-6 md:px-10 overflow-hidden", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 60 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1.1, ease },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xs tracking-[0.3em] uppercase text-white/50 mb-6", children: [
                "0",
                index,
                " — ",
                eyebrow
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8", children: title }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-white/60 max-w-md leading-relaxed", children: description })
            ]
          }
        ),
        /* @__PURE__ */ jsx(motion.div, { style: { y }, className: "relative", children: visual })
      ]
    }
  ) });
}
function PhoneMock({ children }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { rotateY: 8, rotateX: -4 },
      transition: { type: "spring", stiffness: 100, damping: 20 },
      style: { perspective: 1e3 },
      className: "mx-auto w-[280px] md:w-[340px] aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 p-3 shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)]",
      children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full rounded-[2.4rem] bg-black overflow-hidden relative grain", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-4 bg-zinc-900 rounded-full" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 z-20 text-[10px] tracking-[0.3em] uppercase text-white/50", children: "cleo" }),
        /* @__PURE__ */ jsx("div", { className: "pt-14 px-5 pb-5 h-full flex flex-col", children })
      ] })
    }
  );
}
function ChatBubble({
  children,
  from = "bot",
  delay = 0
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12, scale: 0.95 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      className: `max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-snug ${from === "bot" ? "bg-white/10 text-white self-start rounded-bl-sm" : "bg-white text-black self-end rounded-br-sm"}`,
      children
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/10 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "px-6 md:px-10 pt-24 pb-12 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        className: "font-display text-[16vw] md:text-[14rem] leading-none font-bold tracking-tighter text-center",
        children: "Talk soon."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 font-display font-bold tracking-tight", children: "cleo" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " cleo"
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-black text-white selection:bg-white selection:text-black", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(FeatureSection, { index: 1, eyebrow: "Autopilot", title: "Saves money while you sleep.", description: "We move the right amount, on the right day, to the right place. You wake up with more. That's it.", visual: /* @__PURE__ */ jsx(PhoneMock, { children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col gap-3 justify-end", children: [
      /* @__PURE__ */ jsx(ChatBubble, { delay: 0.1, children: "You hit your savings goal 3 days early. Casual flex." }),
      /* @__PURE__ */ jsx(ChatBubble, { from: "me", delay: 0.3, children: "wait fr??" }),
      /* @__PURE__ */ jsx(ChatBubble, { delay: 0.5, children: "+£127 moved to savings this week. You're welcome." })
    ] }) }) }),
    /* @__PURE__ */ jsx(FeatureSection, { index: 2, reverse: true, eyebrow: "Money IQ", title: "Reads your spending. Speaks the truth.", description: "Real conversations about where your money actually goes. No sugar coating, no spreadsheets.", visual: /* @__PURE__ */ jsx(PhoneMock, { children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col gap-3 justify-end", children: [
      /* @__PURE__ */ jsx(ChatBubble, { from: "me", delay: 0.1, children: "how bad was last weekend" }),
      /* @__PURE__ */ jsx(ChatBubble, { delay: 0.3, children: "£94 on takeout in 48 hours. We need to talk." }),
      /* @__PURE__ */ jsx(ChatBubble, { delay: 0.6, children: "Want me to set a delivery limit before Friday?" })
    ] }) }) }),
    /* @__PURE__ */ jsx(FeatureSection, { index: 3, eyebrow: "The Card", title: "A black card with a brain.", description: "Built-in budgets, instant insights, and zero hidden fees. Tap, and we handle the rest.", visual: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      rotate: -4,
      scale: 1.04
    }, transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }, className: "mx-auto w-[320px] md:w-[420px] aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/15 p-7 flex flex-col justify-between shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] grain", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-white/50", children: "cleo" }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-7 rounded-md bg-gradient-to-br from-white/30 to-white/10" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-mono tracking-widest text-white/80 mb-3", children: "•••• •••• •••• 0427" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] uppercase tracking-widest text-white/40", children: [
          /* @__PURE__ */ jsx("span", { children: "Cardholder" }),
          /* @__PURE__ */ jsx("span", { children: "04/30" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-32 px-6 text-center", children: [
      /* @__PURE__ */ jsx(motion.h2, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight", children: "One million people already talk money with us." }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 1,
        delay: 0.4
      }, className: "mt-12 flex flex-wrap justify-center gap-12 text-white/50", children: [{
        n: "1M+",
        l: "Users"
      }, {
        n: "£280M",
        l: "Saved"
      }, {
        n: "4.8★",
        l: "App Store"
      }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl md:text-6xl font-bold text-white", children: s.n }),
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] mt-2", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
