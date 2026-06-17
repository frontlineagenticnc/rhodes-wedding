import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Travel } from "@/components/Travel";
import { Schedule } from "@/components/Schedule";
import { Registry } from "@/components/Registry";
import { Section } from "@/components/Section";
import { PhotoBreak } from "@/components/PhotoBreak";
import { RSVPForm } from "@/components/RSVPForm";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Travel />
        <PhotoBreak
          src={content.moments[0].src}
          alt={content.moments[0].alt}
          caption={content.moments[0].caption}
          tone="white"
          rotate="rotate-[-2deg]"
        />
        <Schedule />
        <PhotoBreak
          src={content.moments[1].src}
          alt={content.moments[1].alt}
          caption={content.moments[1].caption}
          tone="cream"
          rotate="rotate-[2deg]"
        />
        <Registry />
        <PhotoBreak
          src={content.moments[2].src}
          alt={content.moments[2].alt}
          caption={content.moments[2].caption}
          tone="white"
          rotate="rotate-[-1.5deg]"
        />
        <Section id="rsvp" eyebrow="Reply" title="RSVP" tone="cream">
          <p className="text-center text-lg text-ink/80 max-w-2xl mx-auto mb-10">
            {content.rsvp.intro}
          </p>
          <RSVPForm />
        </Section>
        <footer className="bg-white text-center py-10 text-sm text-ink/50 no-print">
          <p className="font-serif text-lg text-coral">
            {content.couple.first} &amp; {content.couple.second}
          </p>
          <p>{content.dateLong}</p>
          <p>
            {content.venue.name} &middot; {content.venue.city}, {content.venue.region}
          </p>
        </footer>
      </main>
    </>
  );
}
