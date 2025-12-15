import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 6, // 200% slower than the previous 3s
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 70%", "center 20%"],
  });

  const tiltX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 3, 0]);
  const liftY = useTransform(scrollYProgress, [0, 1], [16, 0]);

  const renderTypewriterLine = (text: string, delayOffset = 0) =>
    text.split("").map((char, index) => (
      <motion.span
        key={`${text}-${index}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delayOffset + index * 0.02,
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(180deg, hsl(var(--background) / 0) 55%, hsl(var(--background)) 95%), url('/hero-main.png')",
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={headingVariants}
          className="font-serif text-[2.16rem] md:text-[2.7rem] lg:text-[3.24rem] font-bold leading-tight tracking-tight mb-6"
        >
          <span className="block">Investor Grade Due Diligence.</span>
          <span className="block">Generated in Minutes.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-snug font-bold italic"
        >
          <span className="block">
            {renderTypewriterLine("Startup's Legal, Financial, Technical, Market & Compliance Validation", 0.2)}
          </span>
          <span className="block mt-1">
            {renderTypewriterLine("Trusted before the first call", 1.4)}
          </span>
        </motion.p>


        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="hero" size="lg">
              Get Validated For Free
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="heroOutline" size="lg">
              For VCs & Investors
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-16 max-w-[86rem] mx-auto px-2 sm:px-4 perspective-1200"
        >
          <motion.div
            ref={cardRef}
            whileHover={{
              y: -10,
              rotateX: -6,
              rotateY: 6,
              scale: 1.01,
              boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.9 }}
            className="bg-card rounded-2xl shadow-card border border-border/70 p-4 md:p-8 origin-center will-change-transform appear-card"
            style={{ rotateX: tiltX, y: liftY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
          >
            <div className="bg-secondary/50 rounded-xl h-[414px] md:h-[598px] flex items-center justify-center overflow-hidden relative">
              <img
                src="/for-startups/image-2.webp"
                alt="Validation Dashboard preview"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
