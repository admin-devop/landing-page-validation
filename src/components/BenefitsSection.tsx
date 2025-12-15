import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState<"startups" | "investors">("startups");

  const startupBenefits = [
    {
      title: "Save Time",
      description: "400+ hours of manual diligence work into minutes",
      imageSrc: "/for-startups/image-1.png",
    },
    {
      title: "Save Money",
      description: "Avoid $100,000+ in legal and Consulting fees",
      imageSrc: "/for-startups/image-2.webp",
    },
    {
      title: "Gain Trust",
      description: "Earn instant investor credibility to accelerate your next round.",
      imageSrc: "/for-startups/image-3.webp",
    },
  ];

  const investorBenefits = [
    {
      title: "Access Quality",
      description: "Request or access a pool of pre-validated startups, with standardized validation and a complete data room before investing.",
    },
    {
      title: "Reduce Risk",
      description: "Make faster, higher confidence investment decisions with verified data.",
    },
    {
      title: "Save Resources",
      description: "Cut diligence time and cost by up to 90% across your entire deal flow.",
    },
  ];

  const benefits = activeTab === "startups" ? startupBenefits : investorBenefits;

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
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Benefits Of Goldhawk Capital
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-semibold">
            Streamline your business with unified metrics and AI-powered analytics - all in one place.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setActiveTab("startups")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 border-2 motion-safe-transition",
              activeTab === "startups"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-foreground hover:border-primary/50"
            )}
          >
            For Startups
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("investors")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 border-2 motion-safe-transition",
              activeTab === "investors"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-foreground hover:border-primary/50"
            )}
          >
            VCs / Investors
          </motion.button>
        </motion.div>

        {/* Benefits Grid - Symmetric 3 column layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key={activeTab}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 24px 70px rgba(0,0,0,0.14)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-3xl p-7 md:p-8 shadow-card border border-border h-full appear-card"
              >
                {/* Media */}
                <motion.div
                  whileHover={{ background: "hsl(var(--secondary) / 0.8)" }}
                  className="bg-secondary/50 rounded-2xl h-52 mb-8 flex items-center justify-center overflow-hidden relative"
                >
                  {benefit.imageSrc ? (
                    <>
                      <img
                        src={benefit.imageSrc}
                        alt={benefit.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center relative z-10"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </motion.div>
                    </>
                  )}
                </motion.div>
                <h3 className="font-semibold text-2xl mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="hero" size="lg">
              Get Your Startup Validated
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="heroOutline" size="lg">
              Sign Up As A Investor
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
