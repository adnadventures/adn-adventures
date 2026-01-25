import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Award, Shield, Calendar, Star } from 'lucide-react';
import { packages } from '@/data/packages';
import { TESTIMONIALS } from '@/data/testimonials';
import { useEffect, useState } from 'react';
import { BookingForm } from '@/components/BookingForm';
import { supabase } from '@/lib/supabase';

export const Home = () => {
  const { t, i18n } = useTranslation();

  const [topReviews, setTopReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

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

  const features = [
    {
      icon: MapPin,
      title: 'Expert Destinations',
      titleHi: 'विशेषज्ञ गंतव्य',
      description: 'Curated tours across India',
      descriptionHi: 'भारत भर में क्यूरेटेड टूर'
    },
    {
      icon: Users,
      title: 'Professional Guides',
      titleHi: 'पेशेवर गाइड',
      description: 'Experienced local experts',
      descriptionHi: 'अनुभवी स्थानीय विशेषज्ञ'
    },
    {
      icon: Award,
      title: 'Premium Service',
      titleHi: 'प्रीमियम सेवा',
      description: 'Luxury accommodations',
      descriptionHi: 'लक्जरी आवास'
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      titleHi: 'सुरक्षित यात्रा',
      description: 'Fully insured packages',
      descriptionHi: 'पूरी तरह से बीमित पैकेज'
    }
  ];

  const featuredPackages = packages.slice(0, 3);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-lake-in-the-mountains-3607/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-3xl font-display text-primary mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {i18n.language === 'en' ? feature.title : feature.titleHi}
                </h3>
                <p className="text-muted-foreground">
                  {i18n.language === 'en' ? feature.description : feature.descriptionHi}
                </p>
              </motion.div>
            ))}
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
