import { useState } from "react";
import { Star, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export const ReviewForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const uploadImages = async () => {
    const uploadedUrls: string[] = [];

    for (const file of images) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("review-images")
        .upload(fileName, file);

      if (error) throw error;

      const { data } = supabase.storage
        .from("review-images")
        .getPublicUrl(fileName);

      uploadedUrls.push(data.publicUrl);
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating) {
      toast({ title: "Please select a rating ⭐" });
      return;
    }

    setLoading(true);

    try {
      const imageUrls = await uploadImages();

      await supabase.from("reviews").insert({
        name,
        comment,
        rating,
        images: imageUrls,
      });

      toast({ title: "Review submitted successfully 🎉" });

      setName("");
      setComment("");
      setRating(0);
      setImages([]);

      onSuccess?.();
    } catch {
      toast({ title: "Failed to submit review ❌" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-16 p-8 border border-border rounded-xl bg-background space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Write a Review</h2>

      {/* Rating */}
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-16 h-16 cursor-pointer ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      {/* Images (MODIFIED ONLY HERE) */}
      <div className="space-y-2 w-full">
        <label className="text-sm font-semibold text-gray-700">
          Add photos to your review
        </label>

        <label className="block w-full cursor-pointer">
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl
            p-4 sm:p-6 hover:border-blue-500 transition
            flex flex-col items-center justify-center gap-3"
          >
            <Camera className="h-8 w-8 text-gray-500" />

            <p className="text-sm sm:text-base text-gray-600">
              Tap anywhere to upload images
            </p>

            {images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full mt-3">
                {images.map((file, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden border"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Name */}
      <Input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Comment */}
      <Textarea
        placeholder="Share your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        required
      />

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};
