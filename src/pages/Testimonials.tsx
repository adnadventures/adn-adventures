"use client"

import { useState } from "react"

import { Star, X } from "lucide-react"
import { TESTIMONIALS } from "@/data/testimonials"
import { useTranslation } from "react-i18next"

export default function Testimonials() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const { t } = useTranslation();

    const testimonials = [
        { name: 'Rahul Sharma', rating: 5, text: 'Amazing Kashmir trip! Professional service.' },
        { name: 'Priya Patel', rating: 5, text: 'Kerala backwaters were breathtaking!' },
        { name: 'Amit Kumar', rating: 5, text: 'Best Rajasthan heritage tour ever!' },
    ];


    return (
        <div className="min-h-screen bg-background">



            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl font-bold text-foreground mb-4">
                            <span className="">{t('testimonials.title')}</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('testimonials.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="p-8 bg-background border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? "fill-accent text-accent" : "text-border"}`}
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border border-border rounded-xl text-center">
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
                    </div>
                </div>
            </section>

        </div>
    )
}