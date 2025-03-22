import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Studio {
  id: number;
  name: string;
  location: string;
  priceRange: string;
  imageUrl: string;
}

const studios: Studio[] = [
  {
    id: 1,
    name: "Ceramic Studio NYC",
    location: "New York, NY",
    priceRange: "2-4 credits",
    imageUrl: "/studio1.jpg"
  },
  {
    id: 2,
    name: "Glass Art Workshop",
    location: "Brooklyn, NY",
    priceRange: "3-5 credits",
    imageUrl: "/studio2.jpg"
  },
  {
    id: 3,
    name: "Pottery Lab",
    location: "Manhattan, NY",
    priceRange: "1-3 credits",
    imageUrl: "/studio3.jpg"
  },
  {
    id: 4,
    name: "Clay & Fire Studio",
    location: "Brooklyn, NY",
    priceRange: "2-4 credits",
    imageUrl: "/studio4.jpg"
  },
  {
    id: 5,
    name: "Artisan Workshop",
    location: "Manhattan, NY",
    priceRange: "2-5 credits",
    imageUrl: "/studio5.jpg"
  },
  {
    id: 6,
    name: "Creative Space",
    location: "Brooklyn, NY",
    priceRange: "2-6 credits",
    imageUrl: "/studio6.jpg"
  }
];

const StudioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= studios.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(studios.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-40">
      <h2 className="text-center text-xl font-regular mb-8 md:mb-10">Studios our users love</h2>
      
      {/* Mobile View - Stacked */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {studios.map((studio) => (
          <div
            key={studio.id}
            className="flex flex-col bg-white/20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={studio.imageUrl}
                alt={studio.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{studio.name}</h3>
              <p className="text-neutral-600 mb-2">{studio.location}</p>
              <p className="font-medium">Classes from {studio.priceRange}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Carousel */}
      <div className="hidden md:block relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white/80 rounded-full shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="grid grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {studios.slice(currentIndex, currentIndex + 3).map((studio) => (
            <div
              key={studio.id}
              className="flex flex-col bg-white/20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={studio.imageUrl}
                  alt={studio.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{studio.name}</h3>
                <p className="text-neutral-600 mb-2">{studio.location}</p>
                <p className="font-medium">Classes from {studio.priceRange}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white/80 rounded-full shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default StudioCarousel; 