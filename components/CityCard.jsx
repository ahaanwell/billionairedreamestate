import Link from "next/link";

export default function CityCard({ city }) {
  return (
    <Link
      href="#"
      className="group min-w-[280px] lg:min-w-[320px] snap-start"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
        
        {/* Image */}
        <img
          src={city.image}
          alt={city.cityName}
          className="h-[200px] w-full object-cover 
          transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* City Name */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span
            className="px-5 py-2 rounded-full text-white font-semibold text-lg
            bg-white/20 backdrop-blur-md border border-white/30
            group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)]
            transition"
          >
            {city.cityName}
          </span>
        </div>
      </div>
    </Link>
  );
}
