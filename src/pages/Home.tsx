import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck, Plane, Calendar, Star, Headset } from 'lucide-react';
import { packages } from '@/data/packages';
import { TESTIMONIALS } from '@/data/testimonials';
import { useEffect, useRef, useState } from 'react';
import { BookingForm } from '@/components/BookingForm';
import { supabase } from '@/lib/supabase';

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
        <motion.span className="text-6xl text-primary min-[380px]:text-7xl sm:text-8xl md:text-9xl">
          {roundedCount}
        </motion.span>
        <span className="text-4xl text-primary min-[380px]:text-5xl sm:text-6xl md:text-7xl">+</span>
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

  const featuredPackages = packages.slice(0, 3);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-primary sm:text-sm">
              {t('hero.subtitle')}
            </p>
            <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">{t('hero.titleLine1')}</span>
              <span className="block">{t('hero.titleLine2')}</span>
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all"
              >
                <Link to="/packages">
                  {t('hero.cta')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Link to="/gallery">{t('hero.cta2')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-white drop-shadow">
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t('packages.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('packages.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/packages/${pkg.id}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={i18n.language === 'en' ? pkg.title : pkg.titleHi}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {i18n.language === 'en' ? pkg.title : pkg.titleHi}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {i18n.language === 'en' ? pkg.description : pkg.descriptionHi}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          {/* <span className="text-sm text-muted-foreground">{t('packages.from')}</span> */}
                          {/* <p className="text-2xl font-bold text-primary">
                            ₹{pkg.price.toLocaleString()}
                            {pkg.category}
                          </p> */}
                          <span className="flex px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold capitalize">
                            <Calendar className="h-5 w-5 text-primary mr-3" />
                            <span>{pkg.duration} days / {pkg.duration - 1} nights</span>
                          </span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
        {t('testimonials.title')}
      </h2>
      <p className="text-xl text-muted-foreground">
        {t('testimonials.subtitle')}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loadingReviews ? (
        <p className="text-center col-span-full text-muted-foreground">
          Loading reviews...
        </p>
      ) : topReviews.length === 0 ? (
        <p className="text-center col-span-full text-muted-foreground">
          No reviews yet ⭐
        </p>
      ) : (
        topReviews.map((review) => {
          // Fallback image
          const imageSrc = review.images?.[0] || "/images/user-default.png";

          return (
            <div
              key={review.id}
              className="relative h-80 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
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
                <p className="text-sm md:text-base leading-relaxed mb-2 line-clamp-3">
                  "{review.comment}"
                </p>

                {/* Author */}
                <p className="text-sm font-semibold opacity-90">
                  — {review.name}
                </p>
              </div>
            </div>
          );
        })
      )}
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
      <section className="py-20 bg-gradient-to-r from-primary/90 to-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Book your dream tour today and experience India like never before
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/packages">
                Explore Packages <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
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
