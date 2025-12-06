import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { name: 'Rahul Sharma', rating: 5, text: 'Amazing Kashmir trip! Professional service.' },
    { name: 'Priya Patel', rating: 5, text: 'Kerala backwaters were breathtaking!' },
    { name: 'Amit Kumar', rating: 5, text: 'Best Rajasthan heritage tour ever!' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold mb-4">{t('testimonials.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-2xl"
            >
              <div className="flex mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{item.text}</p>
              <p className="font-semibold">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
