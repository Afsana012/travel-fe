import React from "react";
import {
  MapPin,
  SlidersHorizontal,
  NotebookPen,
  Star,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Interactive Map",
    description:
      "Explore destinations worldwide with our interactive map. Pin your dream locations and visualize your travel goals.",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description:
      "Filter destinations by budget, climate, activities, and more. Find the perfect trip tailored to your preferences.",
    iconColor: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: NotebookPen,
    title: "Travel Notes",
    description:
      "Keep all your travel ideas, tips, and memories organized in one place. Never forget a recommendation again.",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description:
      "Share your experiences and read reviews from fellow travelers. Make informed decisions about your next destination.",
    iconColor: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: CalendarCheck,
    title: "Trip Planning",
    description:
      "Plan your itineraries day by day. Set dates, book activities, and create detailed schedules for every adventure.",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Track places you've visited and see how much of the world you've explored. Celebrate your travel milestones.",
    iconColor: "text-rose-500",
    bg: "bg-rose-50",
  },
];

const Features = () => {
  return (
    <section className="bg-[#f8f9fa] px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
          Everything You Need to Plan Your Adventures
        </h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          Powerful features to make travel planning effortless
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`rounded-xl p-4 sm:p-6 ${feature.bg} transition hover:shadow-md`}
          >
            <div className={`mb-4 ${feature.iconColor}`}>
              <feature.icon className="size-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
