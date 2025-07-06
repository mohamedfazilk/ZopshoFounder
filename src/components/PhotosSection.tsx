
import { useState, useEffect } from "react";
import { Camera, MapPin, Trophy, Users, Heart } from "lucide-react";


interface Photo {
  id: number;
  src: string;
  alt: string;
  location: string;
  category: string;
}

const PhotosSection = () => {
  const [activeCategory, setActiveCategory] = useState("startup");
  const [photos, setPhotos] = useState<Photo[]>([]);

  const categories = [
     { id: "startup", name: "Startup Life", icon: Camera, color: "from-blue-500 to-indigo-600" },
    { id: "travel", name: "Travel", icon: MapPin, color: "from-green-500 to-teal-600" },
    // { id: "football", name: "Football Moments", icon: Trophy, color: "from-orange-500 to-red-600" },
    { id: "events", name: "Events & Meetups", icon: Users, color: "from-purple-500 to-pink-600" },
    // { id: "community", name: "Community Work", icon: Heart, color: "from-rose-500 to-pink-600" }
  ];



 useEffect(() => {
    const loadPhotos = () => {
      const savedPhotos = localStorage.getItem('portfolio_photos');
      if (savedPhotos) {
        setPhotos(JSON.parse(savedPhotos));
      } else {
        setPhotos([]);
      }
    };
    loadPhotos();

    
    const handlePhotosUpdate = (event: CustomEvent) => {
      setPhotos(event.detail);
    };

    window.addEventListener('portfolio_photos_updated', handlePhotosUpdate as EventListener);

    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'portfolio_photos' && e.newValue) {
        setPhotos(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('portfolio_photos_updated', handlePhotosUpdate as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  const photosByCategory = photos.reduce((acc: Record<string, Photo[]>, photo) => {
    if (!acc[photo.category]) {
      acc[photo.category] = [];
    }
    acc[photo.category].push(photo);
    return acc;
  }, {});

  return (
    <section id="photos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Capturing moments from my journey of innovation, adventure, and community impact
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(photosByCategory[activeCategory] || []).map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                  <p className="text-gray-200 text-xs">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
          {(photosByCategory[activeCategory] || []).length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(photosByCategory[activeCategory] || []).map((photo, index) => (
              <div
                key={photo.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                    <p className="text-gray-200 text-xs">{photo.location}</p>
                  </div>
                </div>
              </div>
               ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos in this category yet</h3>
            <p className="text-gray-500">Photos will appear here once you add them through the dashboard</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotosSection;
