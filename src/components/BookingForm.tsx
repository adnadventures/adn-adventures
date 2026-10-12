import { useTranslation } from 'react-i18next';
import { ContactEnquiryForm } from '@/components/ContactEnquiryForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

interface BookingFormProps {
  packageTitle: string;
  onClose: () => void;
}

export const BookingForm = ({ packageTitle, onClose }: BookingFormProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-3xl gap-0 overflow-y-auto overscroll-contain border-0 bg-transparent p-0 shadow-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] [&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-white/15 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-white/25"
      >
        <DialogTitle className="sr-only">{t('booking.title')}</DialogTitle>
        <DialogDescription className="sr-only">{packageTitle}</DialogDescription>
        <ContactEnquiryForm
          className="max-w-none"
          idPrefix="booking-enquiry"
          initialDestination={packageTitle}
          packageTitle={packageTitle}
        />
      </DialogContent>
    </Dialog>
  );
};
