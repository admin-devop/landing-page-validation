import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-center">
        <motion.div
          className="pointer-events-auto w-full max-w-5xl rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between gap-4 relative overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >


          <div className="relative flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-2xl relative flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Dark metallic silver gradient base */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900" />
              
              {/* Metallic shine overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Dynamic shine that responds to hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 rounded-2xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-2xl shadow-inset shadow-black/50" />
              
              {/* Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white relative z-10 drop-shadow-lg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
              {/* Outer ring highlight */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-400/30" />
            </motion.div>
            <span className="font-semibold text-base text-foreground">Goldhawk Capital</span>
          </div>

          <nav className="relative hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {["Startups", "VCs / Investors", "Features", "Benefits"].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(" / ", "-").replace(" ", "-")}`}
                className="relative px-1 transition-colors duration-300 hover:text-foreground"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.04 }}
              >
                {link}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary/80 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              variant="outline"
              size="default"
              className="rounded-full border border-white/10 bg-white/10 text-foreground backdrop-blur-xl hover:bg-white/20 hover:text-foreground shadow-sm font-medium px-5 transition-all duration-300"
            >
              Sign In
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
