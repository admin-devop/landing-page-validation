import { motion } from "framer-motion";

const InvestorsOfferSection = () => {
  // Quick tuners for the right-side preview cards
  const rightCardMinHeight = 320; // adjust to make the image cards taller/shorter
  const rightCardInnerHeight = 240; // adjust the inner placeholder height proportionally
  const bottomCardMinHeight = 340; // bottom card matching top
  const bottomCardInnerHeight = 260; // bottom card inner height

  const features = [
    {
      title: "Access Pre-Validated Startups",
      description: "Fully vetted across legal, financial, technical, market, and compliance pillars. Reduce uncertainty at the top of your funnel.",
    },
    {
      title: "Verified, Cross-Checked Data",
      description: "AI reviews all documents and numbers for accuracy, consistency, and reliability.",
    },
    {
      title: "Standardized, Investor-Ready Data Room",
      description: "Unified data room including: Cleaned + extracted files, AI verified documents, Validation report + score Delivered in a clean enterprise-grade interface.",
    },
    {
      title: "Reduce Diligence Cost and Time by 90%",
      description: "Replace fragmented files and manual checks with one consolidated package.",
    },
    {
      title: "High-Confidence, High-Velocity Decision-Making",
      description: "Goldhawk surfaces: Red flags, Inconsistencies, Legal + financial mismatches, Technical risks, Market feasibility issues",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="investors" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-secondary px-6 py-3 rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              What Goldhawk Offers Investors
            </h2>
          </motion.div>
          <motion.p
            className="text-muted-foreground font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Validated startups remove 90% of the risk before you even take the first meeting.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch content-start">
          {/* Left Column - Features List */}
          <motion.div
            className="space-y-6 h-full flex flex-col self-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -4, x: 6, boxShadow: "0 22px 60px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card border border-border rounded-2xl p-5 shadow-card transition-all duration-300 flex gap-4 appear-card"
                >
                  <div className="h-10 w-10" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Dashboard Placeholders */}
          <div className="flex flex-col gap-10 h-full self-stretch justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(0,0,0,0.14)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-3xl p-7 shadow-card border border-border flex-1 flex items-center justify-center appear-card"
                style={{ minHeight: rightCardMinHeight }}
              >
                <motion.div
                  whileHover={{ background: "hsl(var(--secondary) / 0.8)" }}
                  className="bg-secondary/50 rounded-2xl w-full flex items-center justify-center"
                  style={{ height: rightCardInnerHeight }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">Generate Investor Invite Link</p>
                    <motion.div
                      className="mt-4 h-8 w-48 bg-muted/50 rounded mx-auto"
                      whileHover={{ background: "hsl(var(--muted) / 0.7)" }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(0,0,0,0.14)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-3xl p-7 shadow-card border border-border flex-1 flex items-center justify-center appear-card"
                style={{ minHeight: bottomCardMinHeight }}
              >
                <motion.div
                  whileHover={{ background: "hsl(var(--secondary) / 0.8)" }}
                  className="bg-secondary/50 rounded-2xl w-full flex items-center justify-center"
                  style={{ height: bottomCardInnerHeight }}
                >
                  <motion.div
                    className="text-center w-full px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium mb-4">Validation Dashboard</p>
                    <div className="space-y-3">
                      <motion.div
                        className="h-3 w-full bg-muted/30 rounded"
                        whileHover={{ background: "hsl(var(--muted) / 0.5)" }}
                      />
                      <motion.div
                        className="h-8 w-full bg-primary/20 rounded"
                        whileHover={{ background: "hsl(var(--primary) / 0.4)" }}
                      />
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <motion.div
                          className="h-12 bg-muted/20 rounded"
                          whileHover={{ background: "hsl(var(--muted) / 0.35)" }}
                        />
                        <motion.div
                          className="h-12 bg-muted/20 rounded"
                          whileHover={{ background: "hsl(var(--muted) / 0.35)" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsOfferSection;
