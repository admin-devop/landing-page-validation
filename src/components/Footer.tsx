import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const sections = [
    {
      title: "Who We Work With",
      links: ["Founders", "Angel Investors", "Venture Capital Firms"],
    },
    {
      title: "Resources",
      links: ["Pricing", "Investor Matching", "Partners", "Case Studies"],
    },
    {
      title: "Support",
      links: ["Help Center", "Security", "Status"],
    },
  ];

  const socials = [
    { label: "X", Icon: Twitter },
    { label: "Instagram", Icon: Instagram },
    { label: "LinkedIn", Icon: Linkedin },
  ];

  const tickerItems = Array.from({ length: 10 }, () => "Goldhawk Capital");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-[#F3F8EE] text-black pt-16"
    >

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 rounded-3xl border border-black/10 bg-[#F3F8EE] shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-8 md:p-10">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-black/10 bg-white">
                <img
                  src="/goldhawk-final-logo.webp"
                  alt="Goldhawk Capital"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-black">Goldhawk Capital</p>
                <p className="text-sm text-black/70">Future of fundraising & diligence.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-black/80 text-sm">
              <p>Validated deal rooms for founders and investors.</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-black/70">{section.title}</h4>
                <ul className="space-y-3 text-sm text-black/80">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-black transition-colors duration-200 inline-flex items-center">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/25 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 bg-transparent text-black"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden border-t border-black/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex min-w-max items-center gap-10 py-6 uppercase tracking-[0.35em] text-black/40 text-lg font-semibold"
        >
          {tickerItems.map((text, idx) => (
            <span key={`${text}-${idx}`} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20, delay: 10 }}
          className="flex min-w-max items-center gap-10 pb-6 uppercase tracking-[0.35em] text-black/40 text-lg font-semibold"
        >
          {tickerItems.map((text, idx) => (
            <span key={`second-${text}-${idx}`} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-black/70 relative">
        <div className="space-y-2">
          <p>(c) 2025 Goldhawk Capital. All rights reserved.</p>
          <p className="text-black/60">995 Market St, San Francisco, CA 94103</p>
        </div>
        <div className="flex flex-wrap gap-4 text-black/80">
          <a href="#" className="hover:text-black transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors duration-200">Communication Preferences</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
