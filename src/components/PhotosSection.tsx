
import { useState, useEffect } from "react";
import { Camera, MapPin, Trophy, Users, Heart } from "lucide-react";
import travel1 from '../Assets/travel/qtbminar.jpeg'
import travel2 from '../Assets/travel/manali.jpg'
import travel3 from '../Assets/travel/fazu.jpg'
import travel4 from '../Assets/travel/indiagate.jpeg'
import travel5 from '../Assets/travel/taj.jpeg'
import travel6 from '../Assets/travel/tajgate.jpeg'

interface Photo {
  id: number;
  src: string;
  alt: string;
  location: string;
  category: string;
}

const PhotosSection = () => {
  const [activeCategory, setActiveCategory] = useState("travel");
  const [photos, setPhotos] = useState<Photo[]>([]);

  const categories = [
    { id: "travel", name: "Travel", icon: MapPin, color: "from-green-500 to-teal-600" },
    { id: "startup", name: "Startup Life", icon: Camera, color: "from-blue-500 to-indigo-600" },
    { id: "football", name: "Football Moments", icon: Trophy, color: "from-orange-500 to-red-600" },
    { id: "events", name: "Events & Meetups", icon: Users, color: "from-purple-500 to-pink-600" },
    { id: "community", name: "Community Work", icon: Heart, color: "from-rose-500 to-pink-600" }
  ];

  // Default photos if none are saved
  const defaultPhotos = {
    travel: [
      { id: 1, src: travel1, alt: "India Gate", location: "Delhi", category: "travel" },
      { id: 2, src: travel2, alt: "Kulu", location: "Himachal Pradesh", category: "travel" },
       { id: 3, src: travel3, alt: "Solang Valley", location: "Himachal Pradesh", category: "travel" },
      { id: 4, src: travel4, alt: "Qutub Minar", location: "Delhi", category: "travel" },
       { id: 5, src: travel5, alt: "TajMahal View", location: "Uttar Pradesh", category: "travel" },
      { id: 6, src: travel6, alt: "Taj 2nd Gate", location: "Uttar Pradesh", category: "travel" },
      // { id: 3, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", alt: "Serene lake view", location: "Lake Como, Italy", category: "travel" },
      // { id: 4, src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop", alt: "Historic architecture", location: "Santorini, Greece", category: "travel" },
      // { id: 5, src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop", alt: "Desert safari", location: "Dubai, UAE", category: "travel" },
      // { id: 6, src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop", alt: "Wildlife photography", location: "Kenya Safari", category: "travel" }
    ],
    startup: [
      { id: 7, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", alt: "Team brainstorming session", location: "Zopsho HQ", category: "startup" },
      { id: 8, src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop", alt: "Product launch event", location: "Bangalore", category: "startup" },
      { id: 9, src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop", alt: "Investor pitch", location: "Mumbai", category: "startup" },
      { id: 10, src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop", alt: "Team celebration", location: "Office", category: "startup" }
    ],
    football: [
      { id: 11, src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop", alt: "Championship trophy", location: "Cognizant Cup", category: "football" },
      { id: 12, src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop", alt: "Team huddle", location: "Local Ground", category: "football" },
      { id: 13, src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop", alt: "Training session", location: "Sports Complex", category: "football" },
      { id: 14, src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop", alt: "Victory celebration", location: "Stadium", category: "football" }
    ],
    events: [
      { id: 15, src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop", alt: "Tech conference speaking", location: "DevFest 2023", category: "events" },
      { id: 16, src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop", alt: "Google Developer Groups meetup", location: "GDG Bangalore", category: "events" },
      { id: 17, src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop", alt: "Startup pitch event", location: "TechCrunch", category: "events" },
      { id: 18, src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop", alt: "Networking session", location: "Tech Summit", category: "events" }
    ],
    community: [
      { id: 19, src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop", alt: "Teaching kids programming", location: "Rural School", category: "community" },
      { id: 20, src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop", alt: "Laptop donation drive", location: "Community Center", category: "community" },
      { id: 21, src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop", alt: "Charity football match", location: "Local Ground", category: "community" },
      { id: 22, src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop", alt: "Volunteer work", location: "Orphanage", category: "community" }
    ]
  };

  // useEffect(() => {
  //   const savedPhotos = localStorage.getItem('portfolio_photos');
  //   if (savedPhotos) {
  //     setPhotos(JSON.parse(savedPhotos));
  //   } else {
  //     // Initialize with default photos if none are saved
  //     const allDefaultPhotos = Object.values(defaultPhotos).flat();
  //     setPhotos(allDefaultPhotos);
  //     localStorage.setItem('portfolio_photos', JSON.stringify(allDefaultPhotos));
  //   }
  // }, []);

  useEffect(() => {
  const savedPhotos = localStorage.getItem('portfolio_photos');

  // Force reloading updated photos (for development)
  const forceUpdatePhotos = true;

  if (savedPhotos && !forceUpdatePhotos) {
    setPhotos(JSON.parse(savedPhotos));
  } else {
    const allDefaultPhotos = Object.values(defaultPhotos).flat();
    setPhotos(allDefaultPhotos);
    localStorage.setItem('portfolio_photos', JSON.stringify(allDefaultPhotos));
  }
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default PhotosSection;
