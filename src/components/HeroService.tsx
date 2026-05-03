import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";

interface HeroServiceProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  tagline?: string;
  description?: string;
  showCTA?: boolean;
  badge?: string;
  trustItems?: string[];
  tall?: boolean;
  h1Keyword?: string;
}

export default function HeroService({
  title, subtitle, image, imageAlt, imageTitle, tagline, description, showCTA, badge, trustItems, tall, h1Keyword,
}: HeroServiceProps) {
  const height = tall ? "h-[600px] md:h-[750px]" : "h-[500px] md:h-[680px]";

  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <Image src={image} alt={imageAlt || title} title={imageTitle || imageAlt || title} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="max-w-[900px] flex flex-col items-center gap-5">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 bg-beige rounded-full animate-pulse" />
              {badge}
            </div>
          )}

          {tagline && !badge && (
            <span className="inline-block font-body font-bold text-xs uppercase tracking-[0.3em] text-accent">{tagline}</span>
          )}

          {h1Keyword ? (
            <>
              <h1 className="font-body text-accent text-sm md:text-base uppercase tracking-[0.2em] font-semibold">{h1Keyword}</h1>
              <h2 className="font-body font-black text-[36px] md:text-[56px] lg:text-[72px] text-white uppercase leading-[0.95]">
                {title}
              </h2>
            </>
          ) : (
            <h1 className="font-body font-black text-[36px] md:text-[56px] lg:text-[72px] text-white uppercase leading-[0.95]">
              {title}
            </h1>
          )}

          {subtitle && <p className="text-white/85 text-lg md:text-xl max-w-[600px] leading-relaxed">{subtitle}</p>}
          {description && <p className="text-white/80 text-base md:text-lg max-w-[550px] leading-relaxed">{description}</p>}
          {showCTA && <CTAButtons className="justify-center" />}

          {trustItems && trustItems.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
              {trustItems.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i === 0 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E07B5D">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
