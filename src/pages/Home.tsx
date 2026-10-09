import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck, Plane, Calendar, Star, Headset, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { packages } from '@/data/packages';
import { TESTIMONIALS } from '@/data/testimonials';
import { useEffect, useRef, useState } from 'react';
import { BookingForm } from '@/components/BookingForm';
import { supabase } from '@/lib/supabase';

const ClientFeedbackCard = ({
  src,
  label,
  playLabel,
  pauseLabel,
  enableAudioLabel,
  muteAudioLabel,
  errorLabel,
}: {
  src: string;
  label: string;
  playLabel: string;
  pauseLabel: string;
  enableAudioLabel: string;
  muteAudioLabel: string;
  errorLabel: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    void video.play().then(() => {
      setHasPlaybackError(false);
      setIsPlaying(true);
    }).catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      console.error(`Unable to play client feedback video: ${src}`, error);
      setHasPlaybackError(true);
    });
  };

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    const muted = !isMuted;
    video.muted = muted;
    setIsMuted(muted);
    if (!muted && video.paused) playVideo();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      className="group relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 sm:max-w-sm"
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasPlaybackError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        {label}
      </span>
      <button
        type="button"
        onClick={isPlaying ? pauseVideo : playVideo}
        aria-label={isPlaying ? pauseLabel : playLabel}
        className="absolute inset-0 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-black/35 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
          {isPlaying
            ? <Pause className="h-7 w-7 fill-current" />
            : <Play className="ml-1 h-7 w-7 fill-current" />}
        </span>
      </button>
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isMuted ? enableAudioLabel : muteAudioLabel}
        className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
      {hasPlaybackError && (
        <p role="status" className="absolute inset-x-3 bottom-4 rounded-lg bg-black/70 p-3 text-center text-sm text-white">
          {errorLabel}
        </p>
      )}
    </motion.article>
  );
};

const CustomerCount = ({ isHindi }: { isHindi: boolean }) => {
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (value) => Math.round(value).toLocaleString());

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      count.set(500);
      return;
    }

    const animation = animate(count, 500, { duration: 2.2, ease: 'easeOut' });
    return () => animation.stop();
  }, [count, isInView, shouldReduceMotion]);

  return (
    <div ref={countRef} className="relative text-center lg:text-left">
      <div className="absolute left-1/2 -top-5 h-20 w-20 -translate-x-1/2 rounded-full border border-primary/25 lg:left-[-1.25rem] lg:translate-x-0" />
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.24em]">
        {isHindi ? 'आपका भरोसा, हमारी पहचान' : 'Trusted by travelers'}
      </p>
      <div className="flex items-baseline justify-center font-display font-bold leading-none tracking-tight text-foreground lg:justify-start">
        <motion.span className="text-5xl text-primary min-[380px]:text-6xl sm:text-8xl md:text-9xl">
          {roundedCount}
        </motion.span>
        <span className="text-3xl text-primary min-[380px]:text-4xl sm:text-6xl md:text-7xl">+</span>
      </div>
      <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
        {isHindi ? 'संतुष्ट ग्राहक और बढ़ते हुए' : 'Happy customers '}
      </p>
      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary/10 lg:mx-0" />
    </div>
  );
};

const heroImages = [
  {
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&crop=entropy&w=2400&h=1350&q=90',
    destination: 'Kerala, India'
  },
  {
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&crop=entropy&w=2400&h=1350&q=90',
    destination: 'Manali, India'
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85',
    destination: 'Dubai'
  },
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=85',
    destination: 'Bali'
  },
  {
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2400&q=85',
    destination: 'Vietnam'
  }
];

export const Home = () => {
  const { t, i18n } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const [topReviews, setTopReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchTopReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, name, comment, rating, images, created_at")
        .order("rating", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) {
        setTopReviews(data || []);
      }

      setLoadingReviews(false);
    };

    fetchTopReviews();
  }, []);

  const [showBooking, setShowBooking] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowBooking(prev => (prev ? prev : true));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("bookingShown");

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShowBooking(true);
      sessionStorage.setItem("bookingShown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const trustFeatures = [
    {
      icon: Award,
      title: 'Premium Service',
      titleHi: 'प्रीमियम सेवा',
      description: 'Thoughtful support, tailored to your trip',
      descriptionHi: 'आपकी यात्रा के अनुसार व्यक्तिगत सहायता',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'
    },
    {
      icon: ShieldCheck,
      title: 'Safe Travel',
      titleHi: 'सुरक्षित यात्रा',
      description: 'Reliable planning and support at every step',
      descriptionHi: 'हर कदम पर भरोसेमंद योजना और सहायता',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80'
    },
    {
      icon: Plane,
      title: 'Visa Support',
      titleHi: 'वीज़ा सहायता',
      description: 'Guidance to help make travel preparation easier',
      descriptionHi: 'यात्रा की तैयारी को आसान बनाने के लिए मार्गदर्शन',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
    },
    {
      icon: Headset,
      title: '24/7 Support',
      titleHi: '24/7 सहायता',
      description: "We're here to help, whenever you need us",
      descriptionHi: 'जब भी आपको ज़रूरत हो, हम सहायता के लिए मौजूद हैं',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80'
    }
  ];

  const featuredPackages = packages.slice(0, 5);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Hero Section */}
      <section className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden sm:min-h-[640px]">
        <div className="absolute inset-0 z-0 bg-slate-900">
          {heroImages.map((image, index) => (
            <motion.div
              key={image.image}
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${image.image}")` }}
              initial={false}
              animate={{ opacity: activeHeroImage === index ? 1 : 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 text-center sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary min-[380px]:text-xs min-[380px]:tracking-[0.28em] sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
              {t('hero.subtitle')}
            </p>
            <h1 className="mx-auto mb-5 max-w-5xl break-words font-display text-3xl font-bold leading-tight text-white min-[380px]:text-4xl sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">{t('hero.titleLine1')}</span>
              <span className="block">{t('hero.titleLine2')}</span>
            </h1>
            <p className="mx-auto mb-7 max-w-3xl text-base leading-relaxed text-white/90 sm:mb-9 sm:text-lg md:text-2xl">
              {t('hero.description')}
            </p>
            <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full px-6 py-5 text-base bg-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Link to="/packages">
                  {t('hero.cta')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-white/10 px-6 py-5 text-base text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Link to="/gallery">{t('hero.cta2')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-4 z-10 flex max-w-[calc(100%-2rem)] flex-wrap items-center gap-2 sm:bottom-8 sm:left-8 sm:gap-3">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-white drop-shadow sm:text-xs">
            {heroImages[activeHeroImage].destination}
          </span>
          {heroImages.map((image, index) => (
            <span
              key={image.image}
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeHeroImage === index ? 'w-8 bg-primary' : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-8 sm:block"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Features Section */}
      <section className="relative overflow-hidden border-y border-primary/15 bg-gradient-to-br from-background via-primary/[0.07] to-background py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <CustomerCount isHindi={i18n.language !== 'en'} />
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative isolate overflow-hidden rounded-2xl border border-primary/15 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 lg:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.24] transition-opacity duration-300 group-hover:opacity-[0.30]"
                    style={{ backgroundImage: `url("${feature.image}")` }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-gradient-to-br from-background/65 via-background/80 to-background/95"
                  />
                  <div className="relative z-20">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-primary/20 sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.7} />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold sm:text-xl">
                      {i18n.language === 'en' ? feature.title : feature.titleHi}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {i18n.language === 'en' ? feature.description : feature.descriptionHi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="bg-muted/30 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center sm:mb-12"
          >
            <h2 className="mb-3 text-3xl font-display font-bold sm:mb-4 sm:text-5xl">
              {t('packages.title')}
            </h2>
            <p className="text-base text-muted-foreground sm:text-xl">
              {t('packages.subtitle')}
            </p>
          </motion.div>

          <div
            role="region"
            aria-label={t('packages.title')}
            className="overflow-hidden pb-6"
          >
            <div className="package-carousel-track flex w-max">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 gap-8 pr-8"
                  >
                    {featuredPackages.map((pkg, index) => (
                      <motion.div
                        key={`${pkg.id}-${copy}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group w-[88vw] max-w-[380px] shrink-0 sm:w-[calc((100vw-4rem)/2)] sm:max-w-none lg:w-[calc((min(100vw,1280px)-8rem)/3)]"
                      >
                        <Link className="block h-full" to={`/packages/${pkg.id}`}>
                          <div className="h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden min-[380px]:h-56 sm:h-64">
                              <img
                                src={pkg.image}
                                alt={i18n.language === 'en' ? pkg.title : pkg.titleHi}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                {pkg.category}
                              </div>
                            </div>
                            <div className="p-4 sm:p-6">
                              <h3 className="mb-2 text-xl font-display font-bold sm:text-2xl">
                                {i18n.language === 'en' ? pkg.title : pkg.titleHi}
                              </h3>
                              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground sm:text-base">
                                {i18n.language === 'en' ? pkg.description : pkg.descriptionHi}
                              </p>
                              <div className="flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                                <span className="flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary sm:px-4 sm:text-sm">
                                  <Calendar className="mr-2 h-4 w-4 shrink-0 text-primary sm:mr-3 sm:h-5 sm:w-5" />
                                  <span>{pkg.duration} days / {pkg.duration - 1} nights</span>
                                </span>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 min-[420px]:w-auto">
                                  {t('packages.viewDetails')}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/packages">
                View All Packages <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="relative isolate overflow-hidden border-t border-border bg-card px-3 py-12 sm:px-6 sm:py-16 lg:px-8">
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full text-primary/20"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="1190" cy="145" r="58" />
    <path d="M0 475 195 270l104 112 143-185 225 278H0Z" />
    <path d="m390 475 183-194 125 137 140-175 236 232H390Z" />
    <path d="M0 498h1440M0 523h1440" strokeDasharray="5 12" />
    <path d="M120 190c160-115 340-105 480-15s260 90 385-10 220-110 340-35" strokeDasharray="8 12" />
    <path d="m1274 116 45-6-23 14-6 24-8-19-25-6 17-7Z" />
    <path d="M1300 700c12-94 18-157 13-222m0 62-57-55m57 83 55-57m-55 99-45-37m45 67 42-37" />
    <path d="M1297 480c-48-5-69-27-65-61 37 5 60 23 65 61Zm15-31c1-39 19-61 54-66 2 36-17 58-54 66Z" />
    <path d="M70 120c0 25-34 61-34 61S2 145 2 120a34 34 0 1 1 68 0Z" transform="translate(70 100)" />
    <circle cx="104" cy="220" r="10" />
  </svg>
  <div className="relative z-10 mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 text-center sm:mb-12"
    >
      <h2 className="mb-3 text-3xl font-display font-bold sm:mb-4 sm:text-5xl">
        {t('testimonials.title')}
      </h2>
      <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
        {t('testimonials.subtitle')}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {loadingReviews ? (
        <p className="text-center col-span-full text-muted-foreground">
          Loading reviews...
        </p>
      ) : topReviews.length === 0 ? (
        <p className="text-center col-span-full text-muted-foreground">
          No reviews yet ⭐
        </p>
      ) : (
        topReviews.map((review, index) => {
          // Fallback image
          const imageSrc = review.images?.[0] || "/images/user-default.png";

          return (
            <motion.div
              key={review.id}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 260, damping: 20, delay: index * 0.12 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
              className="group relative h-72 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl sm:h-80"
            >
              {/* Customer Image */}
              <img
                src={imageSrc}
                alt={review.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* Overlay Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white sm:p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-white/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="mb-2 line-clamp-3 text-sm leading-relaxed sm:text-base">
                  "{review.comment}"
                </p>

                {/* Author */}
                <p className="text-sm font-semibold opacity-90">
                  — {review.name}
                </p>
              </div>
            </motion.div>
          );
        })
      )}
    </div>

    <div className="mt-8 text-center sm:mt-10">
      <Button asChild size="lg" className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
        <Link to="/testimonials">
          {t('testimonials.viewAllReviews')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>

          {/* <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border border-border rounded-xl text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Google Reviews & Ratings</h3>
            <p className="text-muted-foreground mb-4">
              Our travelers have given us an average rating of 4.8/5 stars on Google
            </p>
            <a
              href="https://www.google.com/search?q=ADN+Adventures+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              View on Google
            </a>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary px-4 py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-display font-bold text-primary-foreground sm:mb-6 sm:text-5xl">
              Ready for Your Adventure?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-primary-foreground/90 sm:mb-8 sm:text-xl">
              Book your dream tour today and experience India like never before
            </p>
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs bg-background text-foreground hover:bg-background/90 sm:w-auto"
            >
              <Link to="/contact">
                {t('contact.enquireNow')} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Feedback Videos */}
      <section className="relative isolate overflow-hidden bg-muted/30 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: `url("${heroImages[0].image}")` }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-background/75" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-12 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-96 w-96 translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center sm:mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:mb-3 sm:text-sm sm:tracking-[0.25em]">
              {t('testimonials.feedbackEyebrow')}
            </p>
            <h2 className="mb-3 text-3xl font-display font-bold sm:mb-4 sm:text-5xl">
              {t('testimonials.feedbackTitle')}
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('testimonials.feedbackSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {['/videos/r-1.mp4', '/videos/r-2.mp4', '/videos/r-3.mp4'].map((src, index) => (
              <ClientFeedbackCard
                key={src}
                src={src}
                label={t('testimonials.clientVideo', { number: index + 1 })}
                playLabel={t('testimonials.playVideo')}
                pauseLabel={t('testimonials.pauseVideo')}
                enableAudioLabel={t('testimonials.enableVideoAudio')}
                muteAudioLabel={t('testimonials.muteVideoAudio')}
                errorLabel={t('testimonials.videoUnavailable')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOOKING POPUP ================= */}
      {showBooking && (
        <BookingForm
          packageId="default"
          packageTitle="Custom Tour Package"
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
};
