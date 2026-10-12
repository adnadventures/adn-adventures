import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { packages, type PackageType } from '@/data/packages';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Search, Users } from 'lucide-react';

const packageTypes: { value: PackageType; image: string }[] = [
  { value: 'domestic', image: '/manali.jpg' },
  { value: 'international', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80' },
  { value: 'honeymoon', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80' },
  { value: 'iv', image: '/pondicherry.jpg' },
  { value: 'spiritualHeritage', image: '/aarupadai.jpg' },
];

export const Packages = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = packageTypes.find(({ value }) => value === searchParams.get('type'))?.value ?? null;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = selectedType
    ? packages.filter((pkg) => {
      if (pkg.packageType !== selectedType) return false;

      const query = searchQuery.trim().toLocaleLowerCase();
      if (!query) return true;

      return [
        pkg.title,
        pkg.titleHi,
        pkg.location,
        pkg.description,
        pkg.descriptionHi,
      ].some((value) => value?.toLocaleLowerCase().includes(query));
    })
    : [];

  return (
    <main className="min-h-screen pb-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base">
            {t('packages.eyebrow')}
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {selectedType
              ? t('packages.collectionHeading', { type: t(`packages.types.${selectedType}`) })
              : t('packages.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {selectedType ? t(`packages.typeDescriptions.${selectedType}`) : t('packages.subtitle')}
          </p>
        </motion.div>

        {!selectedType ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {packageTypes.map(({ value, image }, index) => (
              <motion.button
                key={value}
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({ type: value });
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group relative h-72 overflow-hidden rounded-3xl text-left shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:h-80 lg:h-[22rem]"
              >
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8">
                  <span>
                    <span className="block text-3xl font-bold sm:text-4xl">
                      {t(`packages.types.${value}`)}
                    </span>
                    <span className="mt-2 block text-sm text-white/80">
                      {packages.filter((pkg) => pkg.packageType === value).length} {t('packages.packageCount')}
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            ))}
          </div>
        ) : (
          <>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setSearchQuery('');
                setSearchParams({});
              }}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('packages.backToTypes')}
            </Button>

            <div className="mx-auto mb-8 max-w-xl">
              <div className="relative">
                <Search aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={t('packages.searchPlaceholder')}
                  aria-label={t('packages.searchPlaceholder')}
                  className="h-11 rounded-xl pl-12 text-sm"
                />
              </div>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                {filteredPackages.map((pkg, index) => (
                <motion.article
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-72 overflow-hidden sm:h-80">
                    <img
                      src={pkg.image}
                      alt={i18n.language === 'en' ? pkg.title : pkg.titleHi}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      {t(`packages.types.${pkg.packageType}`)}
                    </span>
                    {pkg.isSample && (
                      <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-foreground">
                        {t('packages.sample')}
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur-sm">
                      {pkg.duration} {t('packages.days')}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h2 className="mb-3 font-display text-2xl font-bold sm:text-3xl">
                      {i18n.language === 'en' ? pkg.title : pkg.titleHi}
                    </h2>
                    <p className="mb-4 line-clamp-3 flex-1 text-muted-foreground">
                      {i18n.language === 'en' ? pkg.description : pkg.descriptionHi}
                    </p>
                    <div className="mb-5 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar aria-hidden="true" className="mr-2 h-4 w-4 text-primary" />
                        {pkg.duration} {t('packages.days')} / {pkg.duration - 1} {t('packages.nights')}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin aria-hidden="true" className="mr-2 h-4 w-4 text-primary" />
                        {pkg.location ?? 'India'}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users aria-hidden="true" className="mr-2 h-4 w-4 text-primary" />
                        {t('packages.minimumGroup', { count: pkg.min })}
                      </div>
                    </div>
                    <div className="border-t border-border pt-4 text-center">
                      <Button asChild className="w-[80%] bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to={`/packages/${pkg.id}`}>
                          {t('packages.viewDetails')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
                ))}
              </div>
            ) : (
              <p className="py-12 text-center text-muted-foreground">
                {t('packages.noSearchResults')}
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
};
