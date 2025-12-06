import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-display font-bold mb-8">{t('terms.title')}</h1>
          <div className="prose prose-lg max-w-none">
            <h2>Booking Terms</h2>
            <p>All bookings require a 30% advance payment. Full payment must be made 15 days before departure.</p>
            <h2>Cancellation Policy</h2>
            <p>Free cancellation up to 7 days before departure. Partial refund for 3-7 days. No refund within 3 days.</p>
            <h2>Privacy Policy</h2>
            <p>We protect your personal information and use it only for booking purposes.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
