import { motion } from "framer-motion";

const StartupsOfferSection = () => {
  const features = [
    {
      title: "Complete Validation at Zero Cost",
      description: "Goldhawk delivers full legal, financial, technical, market, and compliance validation - 100% free for startups. No legal fees. No consulting fees. No hidden costs.",
    },
    {
      title: "400+ Hours of Diligence Reduced to Minutes",
      description: "Skip the manual document management, signature chasing, and repeated investor questions. Complete one streamlined onboarding flow and Goldhawk automates the rest.",
    },
    {
      title: "Save $100,000+ in Professional Fees",
      description: "Traditional diligence requires lawyers, accountants, technical auditors, and compliance teams. Goldhawk replaces all of this with an AI-powered multi-pillar validation engine at no cost.",
    },
    {
      title: "Instant Investor Credibility",
      description: "Every validated startup receives: A standardized, secure data room. A complete validation report. A multi-pillar diligence score. Verified documents and cross-checked data. This positions your company as fund-ready from Day 1.",
    },
    {
      title: "Raise Faster With Less Friction",
      description: "Goldhawk eliminates: endless investor back-and-forth, repetitive document requests, Inconsistent formats, long verification cycles. Founders spend less time fixing diligence - and more time building.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="startups" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            What Goldhawk Offers Startups
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-semibold">
            Validated startups are one step away from a signed term sheet. Unvalidated ones are still at the starting line.
          </p>
        </motion.div>

        {/* Symmetric 2-2-1 Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* First 4 cards in 2x2 grid */}
          {features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border h-full appear-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg leading-tight pr-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Last feature centered */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-1/2 lg:w-2/5 group"
            whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border appear-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg leading-tight pr-4 group-hover:text-primary transition-colors duration-300">{features[4].title}</h3>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{features[4].description}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsOfferSection;
