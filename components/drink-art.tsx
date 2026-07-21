import Image from "next/image";

const drinkPhotos: Record<string, string> = {
  berry: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=560&fit=crop",
  citrus: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=560&fit=crop",
  matcha: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=560&fit=crop",
  coffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=560&fit=crop",
  mango: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=560&fit=crop",
  mojito: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=560&fit=crop",
};

type DrinkArtProps = {
  kind: "berry" | "citrus" | "matcha" | "coffee" | "mango" | "mojito";
  className?: string;
  label?: string;
};

export function DrinkArt({ kind, className = "", label }: DrinkArtProps) {
  const src = drinkPhotos[kind] ?? drinkPhotos.berry;

  return (
    <div
      className={`drink-art drink-art--${kind} ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="drink-shadow" aria-hidden="true" />
      <Image
        src={src}
        alt={label ?? `${kind} drink`}
        fill
        sizes="(max-width: 640px) 180px, 220px"
        className="drink-photo"
        loading="lazy"
      />
    </div>
  );
}
