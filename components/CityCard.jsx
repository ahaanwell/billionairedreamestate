import Link from "next/link";

export default function CityCard({ city }) {
  return (
    <Link href="#" className="min-w-[300px] rounded-md boxShadow2 snap-start">
      <div className="relative">
        <img
          src={city.image}
          alt={city.cityName}
          className="h-[200px] w-full object-cover rounded-md"
        />
        <div className="absolute bottom-0 w-full flex justify-center p-4">
          <p className="text-white text-lg bg-[#ffffff3d] backdrop-blur-md py-2 px-4 rounded-md font-semibold">
            {city.cityName}
          </p>
        </div>
      </div>
    </Link>
  );
}
