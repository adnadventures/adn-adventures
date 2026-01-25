import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { ReviewForm } from "@/components/ReviewForm";
import { useTranslation } from "react-i18next";

const ReviewPage = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const { data } = await supabase
            .from("reviews")
            .select("*")
            .order("created_at", { ascending: false });

        setReviews(data || []);
        setLoading(false);
    };

    return (
        <section
            className="
    w-full py-16
    bg-gradient-to-br
    from-background
    via-[hsl(var(--primary)/0.10)]
    to-background
    dark:via-[hsl(var(--primary)/0.06)]
  "
        >

            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold text-foreground mb-4">
                    <span className="">{t('testimonials.title')}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('testimonials.subtitle')}
                </p>
            </div>

            {/* REVIEW FORM */}
            <ReviewForm onSuccess={fetchReviews} />

            {/* REVIEWS LIST */}
            {loading ? (
                <p className="text-center">Loading reviews...</p>
            ) : (
                <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review) => {
                        const imageSrc =
                            review.images?.length > 0
                                ? review.images[0]
                                : "/images/user-default.png";

                        return (
                            <div
                                key={review.id}
                                className="relative h-80 rounded-xl overflow-hidden group shadow-md border-2 border-border"
                            >
                                {/* Background Image */}
                                <img
                                    src={imageSrc}
                                    alt="review"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition" />

                                {/* Content Overlay */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-white/40"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-sm leading-relaxed line-clamp-3 mb-2">
                                        “{review.comment}”
                                    </p>

                                    {/* Name */}
                                    <p className="text-sm font-semibold opacity-90">
                                        — {review.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}




        </section>
    );
};

export default ReviewPage;
