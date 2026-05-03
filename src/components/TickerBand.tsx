interface TickerItem {
  text: string;
  icon?: React.ReactNode;
}

interface TickerBandProps {
  items: (string | TickerItem)[];
  bgColor?: string;
  textColor?: string;
  direction?: "left" | "right";
  size?: "small" | "medium" | "large";
}

const sizeConfig = {
  small: { height: "h-[70px]", text: "text-lg md:text-xl", gap: "gap-10", speed: "animate-ticker", dot: "text-base" },
  medium: { height: "h-[80px]", text: "text-xl md:text-2xl", gap: "gap-12", speed: "animate-ticker", dot: "text-lg" },
  large: { height: "h-[120px]", text: "text-3xl md:text-5xl", gap: "gap-14", speed: "animate-ticker", dot: "text-2xl" },
};

export default function TickerBand({
  items,
  bgColor = "bg-accent",
  textColor = "text-white",
  direction = "left",
  size = "medium",
}: TickerBandProps) {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  const cfg = sizeConfig[size];

  return (
    <div className={`${bgColor} overflow-hidden ${cfg.height} flex items-center`}>
      <div
        className={`flex ${cfg.gap} whitespace-nowrap ${cfg.speed}`}
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {repeated.map((item, i) => {
          const text = typeof item === "string" ? item : item.text;
          const icon = typeof item === "string" ? null : item.icon;

          return (
            <span
              key={i}
              className={`${textColor} font-display ${cfg.text} uppercase tracking-wide flex items-center ${cfg.gap}`}
            >
              {icon && <span className="flex-shrink-0 opacity-80">{icon}</span>}
              {text}
              {!icon && <span className={`opacity-40 ${cfg.dot}`}>&#9679;</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
