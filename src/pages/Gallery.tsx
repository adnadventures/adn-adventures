import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold mb-4">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
