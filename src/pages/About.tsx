import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Compass,
  Heart,
  Map,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const statistics: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '500+', label: 'Customers served', icon: Users },
  { value: '1+ year', label: 'Building travel experiences', icon: CalendarDays },
  { value: 'Every journey', label: 'Planned with care', icon: Compass },
  { value: 'One mission', label: 'Your comfort and happiness', icon: Heart },
];

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Comfort comes first',
    description: 'We pay attention to the details that help make every trip more comfortable and enjoyable.',
    icon: Heart,
  },
  {
    title: 'Friendly, personal service',
    description: 'Great travel starts with listening to people and helping them throughout the planning process.',
    icon: Users,
  },
  {
    title: 'Thoughtful trip planning',
    description: 'We work to organize journeys carefully, so you can spend less time worrying about arrangements.',
    icon: Map,
  },
  {
    title: 'Memories that last',
    description: 'Our goal is to help travelers discover beautiful places and create memories worth remembering.',
    icon: Camera,
  },
  {
    title: 'A customer-first approach',
    description: 'We value trust, clear communication, and the opportunity to improve with every journey.',
    icon: ShieldCheck,
  },
];

const storyParagraphs = [
  'ADN Adventures Tours & Travels began with a simple belief: travel should be more than reaching a destination. It should be about the comfort of the journey, the joy of discovering new places, and the memories we carry home.',
  'Founded by V. Adhithyan, ADN Adventures has grown through dedication, personal attention, and a commitment to making travel a positive experience for every customer.',
  'From planning each trip carefully to helping travelers feel comfortable and confident throughout their journey, we focus on the little details that make a big difference.',
  'In over a year of running our business, we have had the opportunity to serve more than 500 customers. Every traveler has contributed to our journey, motivating us to improve, explore new possibilities, and create even better travel experiences.',
  'Our story is still growing, and we look forward to helping many more people discover the beauty of travel.',
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const description = 'Discover ADN Adventures Tours & Travels, founded by V. Adhithyan. With 500+ customers served, we focus on comfortable journeys, thoughtful planning, and memorable travel experiences.';
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousTitle = document.title;
    const previousDescription = descriptionTag?.content;

    document.title = 'About Us | ADN Adventures Tours & Travels';
    if (descriptionTag) descriptionTag.content = description;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== undefined) {
        descriptionTag.content = previousDescription;
      }
    };
  }, []);

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-slate-950 pt-28 text-white sm:pt-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <img
            src="/manali.jpg"
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              <span className="h-px w-8 bg-primary" />
              ADN Adventures Tours &amp; Travels
            </p>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.12] sm:text-5xl md:text-6xl">
              More Than Travel.
              <span className="mt-1 block text-primary">We Create Experiences.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              At ADN Adventures Tours &amp; Travels, we believe every journey should be comfortable, exciting, and filled with unforgettable memories. Founded by V. Adhithyan, our journey is built on personal care, thoughtful planning, and a genuine passion for helping people explore the world.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6 text-base">
                <Link to="/packages">
                  Explore Our Trips <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/35 bg-white/5 px-6 text-base text-white hover:bg-white/15 hover:text-white"
              >
                <Link to="/contact">Plan Your Journey</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-white/70">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="h-9 w-9 rounded-full border-2 border-slate-950 bg-primary/90" />
                <span className="h-9 w-9 rounded-full border-2 border-slate-950 bg-orange-300" />
                <span className="h-9 w-9 rounded-full border-2 border-slate-950 bg-amber-700" />
              </span>
              <span><strong className="text-white">500+</strong> travelers served with care</span>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/30 sm:-inset-4" />
            <img
              src="/trek.jpg"
              alt="Travelers walking together through a mountain landscape"
              className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/15 bg-slate-950/85 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-5">
              <p className="font-display text-lg font-semibold text-white">Thoughtful from the very first mile.</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">Personal care and careful planning, wherever the road leads.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="container mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src="/gallery/0.jpg"
              alt="Travelers sharing a moment together on a trip"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 right-4 rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-lg sm:right-8">
              <p className="font-display text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">customers served</p>
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our story</p>
            <h2 className="mb-6 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              A Journey Built With Passion and Purpose
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our journey in numbers</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Small details. Meaningful journeys.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map(({ value, label, icon: Icon }, index) => (
              <motion.article
                key={value}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                className={`rounded-2xl border border-border/60 bg-card p-6 shadow-sm ${index === 0 ? 'border-primary/40 shadow-md shadow-primary/10' : ''}`}
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="font-display text-2xl font-bold capitalize sm:text-[1.7rem]">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="container mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <article className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
            <img
              src="/adhithyan.png"
              alt="V. Adhithyan, founder of ADN Adventures Tours & Travels"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]"
            />
            <div className="bg-slate-950 p-6 text-white sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 bg-primary/15 text-primary">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">V. Adhithyan</h3>
                  <p className="mt-1 text-sm text-white/70">Founder, ADN Adventures Tours &amp; Travels</p>
                </div>
              </div>
              <p className="border-l-2 border-primary pl-4 font-display text-lg italic leading-relaxed text-white/90">
                “Every great journey begins with care, and every memorable trip begins with a promise to make it special.”
              </p>
              <p className="mt-4 text-sm text-white/60">Built around the people and places that make every trip meaningful.</p>
            </div>
          </article>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The vision behind every journey</p>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight sm:text-4xl">The Vision Behind Every Journey</h2>
            <p className="mb-6 font-display text-xl font-semibold text-foreground">Personal care, one journey at a time.</p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Behind ADN Adventures Tours &amp; Travels is V. Adhithyan, whose vision is to make travel more comfortable, enjoyable, and accessible through thoughtful planning and friendly service.
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Building the business has been a journey of dedication, learning, and attention to every little detail. From understanding what customers need to working towards better travel experiences, the focus has always remained on customer satisfaction.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              For Adhithyan, success is not simply about organizing trips. It is about earning trust, making travelers feel cared for, and helping people return home with wonderful memories. With a customer-first approach and a passion for travel, he continues to build ADN Adventures around one important principle: every traveler deserves a great experience.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full border border-primary/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 -z-10 h-72 w-72 rounded-full border border-primary/10" />
        <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Why travel with us
            </p>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              The Little Details Make Every Journey Special
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/65">
              A memorable trip is made up of thoughtful choices. Here is what we bring to every journey we plan.
            </p>
            <div className="mt-8 hidden h-px w-24 bg-primary/60 lg:block" />
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {features.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                className="group grid gap-4 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6 sm:py-7"
              >
                <div className="flex items-center gap-4 sm:block">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-slate-950">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-white/35 sm:mt-3 sm:block">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-semibold sm:text-2xl">{title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What guides us</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Mission and Vision</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our mission</p>
              <h3 className="mb-4 font-display text-2xl font-bold sm:text-3xl">Make every journey feel good.</h3>
              <p className="max-w-xl leading-relaxed text-white/75">
                To make travel comfortable, enjoyable, and memorable through thoughtful trip planning, friendly service, and a genuine commitment to customer satisfaction.
              </p>
            </article>
            <article className="relative isolate overflow-hidden rounded-3xl border border-primary/25 bg-card p-8 sm:p-10">
              <img
                src="/Coorg.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 -z-10 bg-background/80" />
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our vision</p>
              <h3 className="mb-4 font-display text-2xl font-bold sm:text-3xl">Grow through trust and care.</h3>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                To grow ADN Adventures Tours &amp; Travels into a trusted travel brand known for personal care, meaningful experiences, and journeys that bring people closer to the world around them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="container mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-slate-950 text-white lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <img
              src="/gallery/2.jpg"
              alt="A group of ADN Adventures travelers enjoying a trip together"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-slate-950/70 lg:bg-gradient-to-l" />
          </div>
          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our promise to every traveler</p>
            <h2 className="mb-5 font-display text-3xl font-bold sm:text-4xl">Your Journey Matters to Us</h2>
            <p className="mb-4 leading-relaxed text-white/75">
              At ADN Adventures Tours &amp; Travels, we understand that every traveler has a different reason to explore. Some travel to relax, some to discover new places, and others to create memories with the people they love.
            </p>
            <p className="mb-4 leading-relaxed text-white/75">
              Whatever your reason, we strive to make your journey feel well planned, welcoming, and enjoyable. We believe that a friendly conversation, careful preparation, and attention to detail can transform an ordinary trip into a wonderful experience.
            </p>
            <p className="leading-relaxed text-white/75">Your trust inspires us to keep moving forward, one journey at a time.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Your next chapter awaits</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Your Next Adventure Starts Here</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75 sm:text-lg">
            Have a destination in mind? Let ADN Adventures Tours &amp; Travels help you plan a journey filled with comfort, discovery, and unforgettable memories.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-base">
              <Link to="/packages">
                Explore Our Packages <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/35 bg-white/5 px-6 text-base text-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
