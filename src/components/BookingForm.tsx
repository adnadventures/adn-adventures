import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  packageId: string;
  packageTitle: string;
  onClose: () => void;
}

export const BookingForm = ({ packageId, packageTitle, onClose }: BookingFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Submitted!",
        description: t('booking.success'),
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-display font-bold">{t('booking.title')}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{t('booking.package')}</label>
            <Input value={packageTitle} disabled />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('booking.name')}</label>
            <Input required placeholder="John Doe" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.email')}</label>
              <Input type="email" required placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.phone')}</label>
              <Input type="tel" required placeholder="+91 1234567890" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.date')}</label>
              <Input type="date" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.guests')}</label>
              <Input type="number" min="1" required placeholder="2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('booking.message')}</label>
            <Textarea placeholder="Any special requirements..." rows={4} />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            {isSubmitting ? 'Submitting...' : t('booking.submit')}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};
