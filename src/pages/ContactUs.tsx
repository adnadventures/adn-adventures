import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactUs() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto flex flex-col items-center gap-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        {t("contact.title")}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <ContactEnquiryForm className="max-w-3xl" />

                <section className="mt-8 w-full max-w-3xl" aria-labelledby="contact-faq-title">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-center"
                    >
                        <h2 id="contact-faq-title" className="mb-2 text-3xl font-display font-bold sm:text-4xl">
                            {t("contact.faqTitle")}
                        </h2>
                        <p className="text-muted-foreground">{t("contact.faqSubtitle")}</p>
                    </motion.div>
                    <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card/70 px-5 sm:px-7">
                        {Array.from({ length: 5 }, (_, index) => (
                            <AccordionItem key={index} value={`faq-${index + 1}`}>
                                <AccordionTrigger className="text-left text-sm sm:text-base">
                                    {t(`contact.faq${index + 1}Question`)}
                                </AccordionTrigger>
                                <AccordionContent className="leading-relaxed text-muted-foreground">
                                    {t(`contact.faq${index + 1}Answer`)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>
        </div>
    );
}