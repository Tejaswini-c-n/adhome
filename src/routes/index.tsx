import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, MapPin, Menu, Phone, Star } from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/adhome-hero-tiramisu.jpg";
import classicImage from "@/assets/adhome-classic.jpg";
import collectionImage from "@/assets/adhome-tiramisu-collection.jpg";
import chocolateImage from "@/assets/adhome-chocolate-gift.jpg";
import storyImage from "@/assets/adhome-story.jpg";
import momentImage from "@/assets/adhome-moment.jpg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const phone = "08951067467";
const phoneHref = `tel:${phone}`;
const directionsHref = "https://www.google.com/maps/dir/?api=1&destination=107%2C%208th%20Cross%20Rd%2C%20Malleshwaram%2C%20Bengaluru%2C%20Karnataka%20560003";
const reviewsHref = "https://www.google.com/maps/search/?api=1&query=Adhome%2C%20107%2C%208th%20Cross%20Rd%2C%20Malleshwaram%2C%20Bengaluru%2C%20Karnataka%20560003";

const nav = [
  ["Home", "home"], ["Tiramisu", "tiramisu"], ["Chocolates", "chocolates"],
  ["Our Story", "story"], ["Reviews", "reviews"], ["Visit Us", "visit"],
] as const;

const products = [
  ["Dry Fruit Tiramisu", "A rich variation with a delicately textured finish."],
  ["Choco Chip Tiramisu", "Creamy, indulgent and finished with a chocolatey bite."],
  ["Strawberry Tiramisu", "A bright, fruit-forward take on the Adhome favourite."],
  ["Blueberry Tiramisu", "A luscious variation with a vibrant berry finish."],
] as const;

const reviews = [
  { quote: "Absolutely loved the tiramisu. So creamy, fresh and perfectly balanced. The texture was amazing and every bite was delicious. Definitely worth trying ❤️", name: "Sahana S J" },
  { quote: "Super taste come and try it's actually tiramisu, Adhome tiramisu super😍", name: "Renuka Shivakumar" },
  { quote: "The tiramisu is delicious you all should definitely come and do try it. It’s lovely.", name: "kartikey narang" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adhome — Premium Tiramisu & Chocolates in Malleshwaram" },
      { name: "description", content: "Discover Adhome's indulgent tiramisu varieties and handcrafted chocolates in Malleshwaram, Bengaluru. Open Thursday to Sunday from 3 PM." },
      { property: "og:title", content: "Adhome — When good taste speaks for itself." },
      { property: "og:description", content: "Premium tiramisu and handcrafted chocolates, made with care in Malleshwaram, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdhomePage,
});

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.22em] ${light ? "text-secondary" : "text-berry"}`}>{children}</p>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/95 py-3 shadow-sm backdrop-blur-md" : "border-primary-foreground/20 bg-primary/20 py-4 backdrop-blur-sm"}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button onClick={() => scrollTo("home")} className={`font-display text-2xl uppercase tracking-[0.14em] ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>Adhome</button>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {nav.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className={`text-[0.66rem] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-60 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>{label}</button>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant={scrolled ? "luxury" : "cream"} size="editorial" className="hidden sm:inline-flex"><a href={phoneHref}>Order now</a></Button>
          <Sheet>
            <SheetTrigger asChild><Button variant={scrolled ? "ghost" : "cream"} size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-full border-border bg-background px-7 pt-20 sm:max-w-md">
              <SheetTitle className="font-display text-3xl font-normal uppercase tracking-[0.12em]">Adhome</SheetTitle>
              <nav className="mt-12 flex flex-col border-t border-border">
                {nav.map(([label, id]) => <SheetClose key={id} asChild><button onClick={() => scrollTo(id)} className="border-b border-border py-5 text-left font-display text-2xl">{label}</button></SheetClose>)}
              </nav>
              <Button asChild variant="luxury" size="editorial" className="mt-8 w-full"><a href={phoneHref}>Order now</a></Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function AdhomePage() {
  return (
    <main className="bg-background">
      <Header />
      <section id="home" className="editorial-grain relative min-h-[94svh] overflow-hidden bg-espresso text-primary-foreground">
        <img src={heroImage} alt="A cocoa-dusted slice of classic tiramisu" width={1600} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[94svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="reveal max-w-3xl">
            <Eyebrow light>Adhome • Desserts & Chocolates</Eyebrow>
            <h1 className="max-w-3xl font-display text-[clamp(3.3rem,7.4vw,7.6rem)] leading-[0.94]">When good taste speaks for itself.</h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base">Indulgent Tiramisu and handcrafted chocolates, made with care, quality ingredients, and a whole lot of love.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cream" size="editorial"><a href={phoneHref}>Order now <ArrowRight /></a></Button>
              <Button variant="luxury-outline" size="editorial" onClick={() => scrollTo("tiramisu")}>Explore tiramisu</Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em]"><span className="h-px w-10 bg-accent" />Thursday — Sunday</div>
        </div>
        <button onClick={() => scrollTo("intro")} aria-label="Scroll to introduction" className="absolute bottom-7 right-6 z-20 hidden text-primary-foreground lg:block"><ArrowDown /></button>
      </section>

      <section id="intro" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Made with care.<br />Meant to be remembered.</h2>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:pb-1 lg:text-lg">From creamy Tiramisu to beautifully crafted chocolates, Adhome brings together rich flavours, thoughtful presentation, and the joy of something truly indulgent.</p>
        </div>
      </section>

      <section id="tiramisu" className="bg-ivory px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div><Eyebrow>The Adhome Classics</Eyebrow><h2 className="font-display text-6xl leading-none sm:text-7xl lg:text-8xl">Tiramisu,<br />your way.</h2></div>
            <p className="text-lg text-muted-foreground lg:pb-3 lg:text-right">Five irresistible takes on a timeless favourite.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr]">
            <article className="group grid bg-primary text-primary-foreground md:grid-cols-[1.15fr_.85fr]">
              <div className="image-reveal min-h-[480px]"><img src={classicImage} alt="Classic Tiramisu in a glass box" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="flex flex-col justify-between p-8 lg:p-10"><span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary">01 • Signature</span><div><h3 className="font-display text-5xl">Classic Tiramisu</h3><p className="mt-5 leading-7 text-primary-foreground/70">The timeless Adhome favourite—creamy, cocoa-dusted and made to be savoured.</p><Button asChild variant="cream" size="editorial" className="mt-8"><a href={phoneHref}>Order</a></Button></div></div>
            </article>
            <div className="grid grid-cols-2 border border-border">
              <div className="image-reveal col-span-2 aspect-[4/2.65] border-b border-border"><img src={collectionImage} alt="Four Adhome tiramisu variations" width={1600} height={1200} loading="lazy" className="h-full w-full object-cover" /></div>
              {products.map(([name, description], index) => <article key={name} className={`flex min-h-64 flex-col justify-between p-5 sm:p-7 ${index % 2 === 0 ? "border-r border-border" : ""} ${index < 2 ? "border-b border-border" : ""}`}><span className="text-[0.62rem] text-muted-foreground">0{index + 2}</span><div><h3 className="font-display text-2xl sm:text-3xl">{name}</h3><p className="mt-3 hidden text-sm leading-6 text-muted-foreground sm:block">{description}</p><Button asChild variant="link" className="mt-2 h-auto p-0 text-[0.65rem] uppercase tracking-[0.16em]"><a href={phoneHref}>Order <ArrowRight /></a></Button></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-berry px-5 py-24 text-primary-foreground sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 border-b border-primary-foreground/20 pb-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><Eyebrow light>Loved by dessert lovers</Eyebrow><div className="flex items-center gap-4"><span className="font-display text-8xl sm:text-9xl">5.0</span><Star className="size-9 fill-current text-accent" /></div><p className="mt-2 text-sm uppercase tracking-[0.18em]">52 Google Reviews</p></div>
            <p className="font-display text-4xl leading-tight sm:text-5xl">Sweet words from people who came for a taste—and found a favourite.</p>
          </div>
          <div className="grid lg:grid-cols-3">
            {reviews.map((review, index) => <blockquote key={review.name} className={`flex min-h-80 flex-col justify-between py-10 lg:px-8 ${index > 0 ? "border-t border-primary-foreground/20 lg:border-l lg:border-t-0" : ""}`}><p className="font-display text-2xl leading-snug">“{review.quote}”</p><footer className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">{review.name}</footer></blockquote>)}
          </div>
          <Button asChild variant="cream" size="editorial"><a href={reviewsHref} target="_blank" rel="noreferrer">View more reviews <ArrowRight /></a></Button>
        </div>
      </section>

      <section id="chocolates" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28 lg:self-start"><Eyebrow>The Adhome Chocolate Collection</Eyebrow><h2 className="font-display text-6xl leading-none sm:text-7xl">More than just a sweet craving.</h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">Thoughtfully crafted for gifting, celebrating, or simply making an ordinary day a little sweeter.</p><Button asChild variant="luxury" size="editorial" className="mt-8"><a href={phoneHref}>Enquire for custom chocolates</a></Button></div>
            <div><div className="image-reveal aspect-[5/4]"><img src={chocolateImage} alt="A gift box of handcrafted Adhome chocolates" width={1408} height={1104} loading="lazy" className="h-full w-full object-cover" /></div><div className="grid grid-cols-2 border-x border-b border-border sm:grid-cols-4">{["Heart-Shaped Chocolates", "Bar Chocolates", "Customized Chocolates", "And more varieties"].map((item, i) => <div key={item} className={`min-h-32 p-5 ${i < 3 ? "border-r border-border" : ""}`}><span className="text-[0.62rem] text-muted-foreground">0{i + 1}</span><p className="mt-7 font-display text-xl leading-tight">{item}</p></div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1240px] text-center"><Eyebrow>For every occasion</Eyebrow><h2 className="mx-auto max-w-4xl font-display text-5xl sm:text-7xl">Made for moments worth celebrating.</h2><div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-4 border-y border-border py-8 font-display text-2xl sm:gap-x-12 sm:text-3xl">{["Birthdays", "Anniversaries", "Gifting", "Celebrations", "Just Because"].map((item, i) => <span key={item} className="flex items-center gap-7 sm:gap-12">{item}{i < 4 && <span className="text-berry">•</span>}</span>)}</div><p className="mx-auto mt-8 max-w-lg leading-7 text-muted-foreground">Customized chocolates, thoughtfully created for the people and moments that matter.</p><Button asChild variant="luxury" size="editorial" className="mt-8"><a href={phoneHref}>Make an enquiry</a></Button></div>
      </section>

      <section id="story" className="bg-espresso text-primary-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="image-reveal min-h-[560px] lg:min-h-[760px]"><img src={storyImage} alt="A chocolate being carefully finished by hand" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" /></div>
          <div className="flex items-center px-7 py-20 sm:px-14 lg:px-20"><div className="max-w-xl"><Eyebrow light>The Adhome Way</Eyebrow><h2 className="font-display text-5xl leading-tight sm:text-7xl">Good taste deserves good care.</h2><p className="mt-8 text-base leading-8 text-primary-foreground/70">At Adhome, desserts are created with a simple idea — good taste deserves good care. From creamy Tiramisu to thoughtfully crafted chocolates, every creation is made to turn a sweet craving into something worth remembering.</p></div></div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><Eyebrow>Follow the sweet side</Eyebrow><h2 className="font-display text-6xl sm:text-7xl">A little closer.</h2></div><Button variant="luxury-outline" size="editorial" disabled title="Instagram profile link not yet provided"><Instagram /> Follow Adhome</Button></div>
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4"><div className="image-reveal aspect-square"><img src={classicImage} alt="Classic tiramisu close-up" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" /></div><div className="image-reveal aspect-square md:mt-14"><img src={chocolateImage} alt="Chocolate gift packaging" width={1408} height={1104} loading="lazy" className="h-full w-full object-cover" /></div><div className="image-reveal aspect-square"><img src={collectionImage} alt="Tiramisu collection" width={1600} height={1200} loading="lazy" className="h-full w-full object-cover" /></div><div className="image-reveal aspect-square md:mt-14"><img src={momentImage} alt="A customer enjoying tiramisu" width={1200} height={1200} loading="lazy" className="h-full w-full object-cover" /></div></div>
        </div>
      </section>

      <section id="visit" className="bg-ivory px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div><Eyebrow>Visit Adhome</Eyebrow><h2 className="max-w-2xl font-display text-6xl leading-none sm:text-8xl">Come Find Your Sweet Spot.</h2></div>
          <div className="border-t border-border pt-7"><h3 className="font-display text-4xl">Adhome</h3><address className="mt-6 not-italic leading-7 text-muted-foreground">107, 8th Cross Rd,<br />Malleshwaram,<br />Bengaluru, Karnataka 560003</address><dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6"><div><dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">Available</dt><dd className="mt-2 font-display text-xl">Thursday – Sunday</dd></div><div><dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">Opening</dt><dd className="mt-2 font-display text-xl">3:00 PM onwards</dd></div></dl><a href={phoneHref} className="mt-6 flex items-center gap-3 text-lg"><Phone className="size-4" />{phone}</a><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="luxury" size="editorial"><a href={phoneHref}>Call Adhome</a></Button><Button asChild variant="luxury-outline" size="editorial"><a href={directionsHref} target="_blank" rel="noreferrer"><MapPin /> Get directions</a></Button><Button asChild variant="luxury-outline" size="editorial"><a href={phoneHref}>Order now</a></Button></div></div>
        </div>
      </section>

      <section className="editorial-grain bg-primary px-5 py-24 text-center text-primary-foreground sm:px-8 lg:py-32"><div className="relative z-10 mx-auto max-w-4xl"><h2 className="font-display text-6xl leading-none sm:text-8xl">Try it once.<br />Love it forever.</h2><p className="mx-auto mt-7 max-w-2xl leading-7 text-primary-foreground/70">From your first spoonful of Tiramisu to your next chocolate craving, there's something sweet waiting at Adhome.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="cream" size="editorial"><a href={phoneHref}>Order from Adhome</a></Button><Button variant="luxury-outline" size="editorial" onClick={() => scrollTo("visit")}>Visit us</Button></div></div></section>

      <footer className="bg-espresso px-5 py-14 text-primary-foreground sm:px-8"><div className="mx-auto max-w-[1320px]"><div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div><p className="font-display text-4xl uppercase tracking-[0.12em]">Adhome</p><p className="mt-4 font-display text-2xl text-primary-foreground/70">When good taste speaks for itself.</p></div><nav className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.14em]">{nav.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-left hover:text-accent">{label}</button>)}</nav><div className="text-sm leading-7 text-primary-foreground/70"><a href={phoneHref}>{phone}</a><p className="mt-3">107, 8th Cross Rd,<br />Malleshwaram,<br />Bengaluru, Karnataka 560003</p><p className="mt-3 text-xs uppercase tracking-[0.16em] text-secondary">Thursday — Sunday</p></div></div><div className="flex items-center justify-between pt-7 text-xs text-primary-foreground/50"><span>Adhome • Bengaluru</span><div className="flex gap-4"><span title="Instagram profile link not provided"><Instagram className="size-4" /></span><a href={reviewsHref} target="_blank" rel="noreferrer" aria-label="Find Adhome on Google"><MapPin className="size-4" /></a></div></div></div></footer>
    </main>
  );
}