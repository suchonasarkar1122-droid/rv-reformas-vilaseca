interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 md:p-7 flex flex-col h-full shadow-sm border border-dark/5">
      <div className="text-black/[0.06] font-display text-[64px] leading-[0.8] select-none">&ldquo;</div>

      <div className="flex gap-1 mt-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E07B5D" stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="font-body font-semibold text-dark uppercase leading-[1.5] tracking-wide text-[13px] md:text-[14px] flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-black/5">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <span className="font-body font-bold text-accent text-sm">
            {name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-body font-bold text-dark text-sm truncate">{name}</p>
          <p className="font-body text-subtitle text-xs mt-0.5 truncate">{role}</p>
        </div>
      </div>
    </div>
  );
}
