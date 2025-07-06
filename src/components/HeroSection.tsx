
import { Github, Linkedin, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 mt-5">
      <div className="w-full text-center">
        <div className="animate-fade-in">
           <div className="mb-8 relative sm:align-middle w-full h-64 sm:h-56 md:h-64 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1751220170114-5fd803a8e01b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D')"
        
              }}
            ></div>
            
            {/* Quote Overlay */}
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between px-8 px-4 sm:px-6 md:px-8 py-4">
              <div className="text-center sm:text-left text-white max-w-xs sm:max-w-md mb-4 sm:mb-0">
                <p className="text-sm sm:text-base md:text-lg font-medium italic mb-1 sm:mb-2">
                  "I'm Solving What i'm facing now - that's the only way to move forward"
                </p>
                <p className="text-sm opacity-80">Mohamed Fazil k</p>
              </div>
              
              {/* Avatar positioned on the right */}
              <Avatar className="w-36 h-36 sm:w-32 sm:h-32 md:w-48 md:h-48 shadow-2xl border-2 sm:border-4 border-white flex-shrink-0">
                <AvatarImage 
                src="/indiagate.jpg" 
                alt="Mohamed Fazil K" 
                className="object-cover"
              />
                <AvatarFallback className="bg-gray-800 text-white text-2xl font-bold">
                  MF
                </AvatarFallback>
              </Avatar>
            </div>
            </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
            Mohamed <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fazil K</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Engineer & Co-founder of <span className="font-semibold text-blue-600">Zopsho</span>
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Revolutionizing last-mile delivery while exploring the world and creating positive change in communities
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className=" sm:w-32 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" size="lg" className=" sm:w-32 border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <a href="#contact">Let's Connect</a>
            </Button>
           
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
