import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { ReviewForm } from "@/components/ReviewForm";

const ReviewPage = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-12 text-center">
        Traveller Reviews
      </h1>

      {/* REVIEWS LIST */}
      {loading ? (
        <p className="text-center">Loading reviews...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 bg-background border border-border rounded-xl hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mb-4">"{review.comment}"</p>

              {/* Images */}
              {review.images?.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {review.images.map((img: string) => (
                    <img
                      key={img}
                      src={img}
                      alt="review"
                      className="h-24 w-full object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              {/* Name */}
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* REVIEW FORM */}
      <ReviewForm onSuccess={fetchReviews} />
    </section>
  );
};

export default ReviewPage;
