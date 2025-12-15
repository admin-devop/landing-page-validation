import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speedMs?: number;
}

// Simple marquee that scrolls the provided children right-to-left continuously.
// Does not clone/resize children; caller controls what goes inside.
const Marquee = ({ children, speedMs = 16000 }: MarqueeProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="marquee-track flex flex-nowrap items-center"
        style={{ animationDuration: `${speedMs}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
