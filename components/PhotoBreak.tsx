type Props = {
  src: string;
  alt: string;
  caption?: string;
  tone?: "white" | "cream";
  rotate?: string;
};

export function PhotoBreak({
  src,
  alt,
  caption,
  tone = "white",
  rotate = "rotate-[-2deg]",
}: Props) {
  const bg = tone === "cream" ? "bg-cream" : "bg-white";
  return (
    <div className={`${bg} px-6 py-14 sm:py-20`}>
      <figure className="mx-auto w-56 sm:w-64">
        <div className={`bg-white p-3 pb-5 shadow-xl rounded-sm ${rotate}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm"
          />
          {caption && (
            <figcaption className="text-center font-serif italic text-coral text-lg mt-3">
              {caption}
            </figcaption>
          )}
        </div>
      </figure>
    </div>
  );
}
