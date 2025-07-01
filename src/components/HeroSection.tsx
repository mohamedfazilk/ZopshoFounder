
import { Github, Linkedin, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
              MF
            </div>
          </div> */}
           {/* <Avatar className="w-32 h-32 mx-auto mb-6 shadow-2xl"> */}
            <Avatar className="relative z-10 w-48 h-48 mx-auto mb-6 shadow-2xl border-8 border-white ring-8 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-500 transform hover:scale-110 bg-gradient-to-br from-white to-blue-50">
              <AvatarImage 
                src="/indiagate.jpg" 
                alt="Mohamed Fazil K" 
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold">
                MF
              </AvatarFallback>
            </Avatar>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mohamed <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fazil K</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Engineer & Co-founder of <span className="font-semibold text-blue-600">Zopsho</span>
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Revolutionizing last-mile delivery while exploring the world and creating positive change in communities
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <a href="#contact">Let's Connect</a>
            </Button>
           
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
