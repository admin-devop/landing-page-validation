import { cn } from "@/lib/utils";

interface FloatingLogoProps {
  type: "plaid" | "openai" | "stripe" | "spark";
  className?: string;
  delay?: number;
}

const FloatingLogo = ({ type, className, delay = 0 }: FloatingLogoProps) => {
  const animationClass = delay === 0 
    ? "animate-float" 
    : delay === 1 
    ? "animate-float-delay-1" 
    : delay === 2 
    ? "animate-float-delay-2" 
    : "animate-float-delay-3";

  const logos = {
    plaid: (
      <div className={cn("w-16 h-16 rounded-xl bg-plaid flex items-center justify-center shadow-lg", animationClass, className)}>
        <div className="text-primary-foreground font-bold text-xs tracking-wide flex flex-col items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.9"/>
            <rect x="18" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.7"/>
            <rect x="4" y="18" width="10" height="10" rx="2" fill="currentColor" opacity="0.7"/>
            <rect x="18" y="18" width="10" height="10" rx="2" fill="currentColor" opacity="0.9"/>
          </svg>
          <span className="mt-1 text-[10px]">PLAID</span>
        </div>
      </div>
    ),
    openai: (
      <div className={cn("w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg", animationClass, className)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground">
          <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M16 11c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
    ),
    stripe: (
      <div className={cn("w-16 h-16 rounded-xl bg-stripe flex items-center justify-center shadow-lg", animationClass, className)}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    spark: (
      <div className={cn("w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg", animationClass, className)}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-plaid">
          <path d="M12 2L12 22M2 12L22 12M5.64 5.64L18.36 18.36M18.36 5.64L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    ),
  };

  return logos[type];
};

export default FloatingLogo;
