import Image from "next/image";

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export default function ProcessCard({ step, title, description, image, objectPosition = "center" }: ProcessCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border border-dark/5">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, 25vw"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-accent text-white flex items-center justify-center font-body font-black text-lg">
          {step}
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-body font-bold text-dark text-[17px] mb-3">{title}</h3>
        <p className="font-body text-subtitle text-[14px] leading-[1.7]">{description}</p>
      </div>
    </div>
  );
}
