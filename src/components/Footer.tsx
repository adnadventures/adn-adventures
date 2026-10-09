import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export const Whatsapp = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#dcaf53" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
</svg>
    )

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative isolate overflow-hidden border-t border-primary bg-primary/90 text-primary-foreground backdrop-blur-2xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-primary/75"
      />
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-primary">
              ADN Adventures
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              {t('footer.aboutText')}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/_adnadventures_"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb8i7sSDzgTJXmD6sT2c"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="WhatsApp"
              >
                <Whatsapp className="h-5 w-5 text-primary-foreground" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-display font-semibold text-primary-foreground">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.packages')}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t('nav.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-display font-semibold text-primary-foreground">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-foreground" />
                <a
                  href="mailto:info@adnadventures.com"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  info@adnadventures.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-foreground" />
                <a
                  href="tel:+918248468334"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  +91 80985 94364
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-foreground" />
                <span className="text-sm text-primary-foreground/80">
                  Puducherry, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-display font-semibold text-primary-foreground">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Subscribe to get special offers and travel tips
            </p>
            <div className="w-full flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-primary-foreground/20 bg-background/70 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <button className="w-24 rounded-lg bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/25 pt-8 text-center">
          <div className="space-y-3">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} ADN Adventures. {t('footer.rights')}
            </p>
            <p className="text-xs text-primary-foreground/75">
              Designed and Developed by{' '}
              <a
                href="https://www.techgajana.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-foreground hover:underline transition-colors"
              >
                TechGajana Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
 