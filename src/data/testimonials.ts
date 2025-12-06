
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}   
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    rating: 5,
    text: "ADN Adventures made our Rajasthan trip absolutely unforgettable! The guides were knowledgeable and the accommodations were excellent. Highly recommended!",
    image: "/profile-photo-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    text: "Best travel experience of my life! From Kerala backwaters to Kashmir mountains, every moment was magical. ADN Adventures truly delivers excellence.",
    image: "/profile-photo-2.jpg",
  },
  {
    id: 3,
    name: "Maria González",
    location: "Madrid, Spain",
    rating: 5,
    text: "The Kashmir package was breathtaking. Professional team, comfortable travel, and authentic cultural experiences. Worth every penny!",
    image: "/profile-photo-3.jpg",
  },
  {
    id: 4,
    name: "James Chen",
    location: "Singapore",
    rating: 4,
    text: "Great organization and wonderful experiences. The Goa beach package was perfect for relaxation. Looking forward to the next trip!",
    image: "/profile-photo-4.jpg",
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "As an Indian, I was surprised by how much I learned about my own country! ADN Adventures made me see India with fresh eyes.",
    image: "/profile-photo-5.jpg",
  },
  {
    id: 6,
    name: "Marco Rossi",
    location: "Rome, Italy",
    rating: 5,
    text: "The wildlife safari in Ranthambore was incredible! Spotted tigers, excellent guides, and perfectly organized. This team knows what they're doing!",
    image: "/profile-photo-6.jpg",
  },
]