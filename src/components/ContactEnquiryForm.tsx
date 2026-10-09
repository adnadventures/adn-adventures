import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactEnquiryFormProps {
  className?: string;
}

const glassFieldClass =
  'h-14 border-white/30 bg-white/20 px-5 text-white placeholder:text-white/80 focus-visible:ring-primary';
const glassLabelClass = 'sr-only';

export const ContactEnquiryForm = ({ className = '' }: ContactEnquiryFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    destination: '',
    date: '',
    people: '',
    vacationType: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enquiry = [
      t('booking.whatsappDraft.title'),
      `${t('booking.name')}: ${formData.name}`,
      `${t('booking.email')}: ${formData.email}`,
      `${t('booking.phone')}: +91 ${formData.phone}`,
      `${t('booking.whatsapp')}: +91 ${formData.whatsapp}`,
      `${t('booking.cityOfResidence')}: ${formData.city}`,
      `${t('booking.travelDestination')}: ${formData.destination}`,
      `${t('booking.date')}: ${formData.date}`,
      `${t('booking.people')}: ${formData.people}`,
      `${t('booking.vacationType')}: ${t(`booking.vacationTypes.${formData.vacationType}`)}`,
      `${t('booking.message')}: ${formData.message}`,
    ].join('\n');
    const query = new URLSearchParams({
      phone: '918124270750',
      text: enquiry,
    });

    window.location.assign(`https://api.whatsapp.com/send?${query.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative isolate w-full overflow-hidden rounded-2xl px-5 py-8 shadow-2xl sm:rounded-3xl sm:px-10 sm:py-10 md:px-12 md:py-12 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/manali.jpg")' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-br from-amber-950/80 via-yellow-900/70 to-stone-950/80"
      />

      <div className="relative z-10">
        <h2 className="mb-7 text-center font-display text-3xl font-bold leading-tight text-white drop-shadow sm:mb-9 sm:text-4xl md:text-5xl">
          {t('booking.title')}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
          <div>
            <label htmlFor="contact-enquiry-name" className={glassLabelClass}>{t('booking.name')}</label>
            <Input
              id="contact-enquiry-name"
              required
              name="name"
              autoComplete="name"
              placeholder={t('booking.name')}
              value={formData.name}
              onChange={handleChange}
              className={glassFieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-enquiry-email" className={glassLabelClass}>{t('booking.email')}</label>
            <Input
              id="contact-enquiry-email"
              type="email"
              required
              name="email"
              autoComplete="email"
              placeholder={t('booking.email')}
              value={formData.email}
              onChange={handleChange}
              className={glassFieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-enquiry-phone" className="mb-1 block text-sm font-medium text-white">
              {t('booking.phone')} <span className="text-rose-300">*</span>
            </label>
            <div className="flex h-14 overflow-hidden rounded-md border border-white/20 bg-white/15 focus-within:ring-2 focus-within:ring-white/70">
              <span aria-hidden="true" className="flex shrink-0 items-center border-r border-white/30 px-3 text-sm text-white sm:px-4">
                🇮🇳 <span className="ml-2">+91</span>
              </span>
              <Input
                id="contact-enquiry-phone"
                type="tel"
                required
                name="phone"
                autoComplete="tel-national"
                aria-label={t('booking.phone')}
                placeholder={t('booking.phone')}
                value={formData.phone}
                onChange={handleChange}
                className="h-full min-w-0 border-0 bg-transparent px-3 text-white placeholder:text-white/75 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-5"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-enquiry-whatsapp" className="mb-1 block text-sm font-medium text-white">
              {t('booking.whatsapp')} <span className="text-rose-300">*</span>
            </label>
            <div className="flex h-14 overflow-hidden rounded-md border border-white/20 bg-white/15 focus-within:ring-2 focus-within:ring-white/70">
              <span aria-hidden="true" className="flex shrink-0 items-center border-r border-white/30 px-3 text-sm text-white sm:px-4">
                🇮🇳 <span className="ml-2">+91</span>
              </span>
              <Input
                id="contact-enquiry-whatsapp"
                type="tel"
                required
                name="whatsapp"
                autoComplete="tel-national"
                aria-label={t('booking.whatsapp')}
                placeholder={t('booking.whatsapp')}
                value={formData.whatsapp}
                onChange={handleChange}
                className="h-full min-w-0 border-0 bg-transparent px-3 text-white placeholder:text-white/75 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-5"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-enquiry-city" className={glassLabelClass}>{t('booking.cityOfResidence')}</label>
            <Input
              id="contact-enquiry-city"
              required
              name="city"
              autoComplete="address-level2"
              placeholder={t('booking.cityOfResidence')}
              value={formData.city}
              onChange={handleChange}
              className={glassFieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-enquiry-destination" className={glassLabelClass}>{t('booking.travelDestination')}</label>
            <Input
              id="contact-enquiry-destination"
              required
              name="destination"
              placeholder={t('booking.travelDestination')}
              value={formData.destination}
              onChange={handleChange}
              className={glassFieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-enquiry-date" className="sr-only">{t('booking.date')}</label>
            <div className="relative">
              {!formData.date && (
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-5 z-10 flex items-center text-white/80">
                  {t('booking.date')}
                </span>
              )}
              <Input
                id="contact-enquiry-date"
                type="date"
                required
                name="date"
                aria-label={t('booking.date')}
                value={formData.date}
                onChange={handleChange}
                onClick={(event) => {
                  const input = event.currentTarget;
                  if (typeof input.showPicker === 'function') input.showPicker();
                }}
                className={`${glassFieldClass} cursor-pointer appearance-none [color-scheme:light] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden ${formData.date ? 'text-white' : 'text-transparent'}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-enquiry-people" className={glassLabelClass}>{t('booking.people')}</label>
            <Input
              id="contact-enquiry-people"
              type="number"
              min="1"
              required
              name="people"
              placeholder={t('booking.people')}
              value={formData.people}
              onChange={handleChange}
              className={glassFieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-enquiry-vacation" className={glassLabelClass}>{t('booking.vacationType')}</label>
            <select
              id="contact-enquiry-vacation"
              required
              name="vacationType"
              value={formData.vacationType}
              onChange={handleChange}
              className="h-14 w-full appearance-none rounded-md border border-white/30 bg-white/20 px-5 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" className="text-foreground">{t('booking.vacationType')}</option>
              {['domestic', 'international', 'honeymoon', 'iv', 'spiritualHeritage'].map((type) => (
                <option key={type} value={type} className="text-foreground">
                  {t(`booking.vacationTypes.${type}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-enquiry-message" className={glassLabelClass}>{t('booking.message')}</label>
            <Textarea
              id="contact-enquiry-message"
              name="message"
              rows={2}
              placeholder={t('booking.message')}
              value={formData.message}
              onChange={handleChange}
              className="min-h-14 resize-y border-white/30 bg-white/20 px-5 py-4 text-white placeholder:text-white/80 focus-visible:ring-primary"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-6 h-14 w-full bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90 sm:mt-8"
        >
          {t('booking.bookNow')}
        </Button>
      </div>
    </form>
  );
};
