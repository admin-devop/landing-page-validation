import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Startups Complete Onboarding in 45 Minutes",
      description: "A secure, standardized data room is created instantly as founders answer and submit their core due diligence documents.",
    },
    {
      title: "AI engine performs Full Due Diligence in Minutes",
      description: "Goldhawk's validation engine verifies documents, cross-checks data, and produces an investor grade validation report + score",
    },
    {
      title: "Investors Discover or Request Startups",
      description: "VCs verify their firm email, complete ID checks and unlock a dashboard of pre-validated startups ready for review.",
    },
    {
      title: "Founders Approve Access & VCs Unlock the Data Room",
      description: "Once approved, Investors pay (card or invoice) to access the data room and validation report for 30 days.",
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
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            How Founders & Investors Use Goldhawk
          </h2>
          <p className="text-muted-foreground font-semibold">
            Four simple steps - from onboarding to validation to investor access.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border h-full relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full"
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    whileHover={{ background: "hsl(var(--secondary) / 0.8)" }}
                    className="bg-secondary/50 rounded-xl h-48 mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-secondary/70 transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-4 border border-border/50 rounded-lg bg-background/50 relative z-10">
                      <div className="p-3">
                        <motion.div
                          className="h-2 w-24 bg-muted rounded mb-2"
                          whileHover={{ width: "128px" }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="h-1.5 w-32 bg-muted/50 rounded"></div>
                      </div>
                      <div className="px-3 mt-2">
                        <motion.div
                          className="h-8 w-full bg-muted/30 rounded mb-2"
                          whileHover={{ background: "hsl(var(--muted) / 0.5)" }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="h-6 w-3/4 bg-primary/20 rounded"
                          whileHover={{ background: "hsl(var(--primary) / 0.4)" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
