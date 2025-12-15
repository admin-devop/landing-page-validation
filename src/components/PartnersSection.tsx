import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Gemini", logo: "/logos/gemini.png" },
    { name: "Persona", logo: "/logos/persona.png" },
    { name: "Plaid", logo: "/logos/plaid.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Stripe", logo: "/logos/stripe.png" },
  ];

  const tickerItems = [...partners, ...partners];
  const itemWidthPx = 120; // approximate width for one item including gap

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6 text-center relative">
        <motion.h3
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm font-bold text-foreground mb-2 tracking-wide uppercase"
        >
          Our Validation Partners
        </motion.h3>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-foreground font-semibold text-base md:text-lg mb-10"
        >
          Industry-standard validation, backed by trusted compliance and AI partners.
        </motion.p>

        <div className="relative mx-auto w-fit overflow-hidden py-8 px-6">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex items-center gap-12 md:gap-16"
            style={{ width: `${partners.length * itemWidthPx}px` }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 20 }}
          >
            {tickerItems.map((partner, idx) => (
                <motion.div
                key={`ticker-${idx}-${partner.name}`}
                  whileHover={{ scale: 1.12, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-white transition-all duration-300 cursor-pointer"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-foreground">{partner.name}</span>
                  )}
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
