
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className=" text-2xl sm:text-xs md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-4">
              Tech Innovator & Social Impact Advocate
            </h3>
            <p className=" sm:text-2xl md:text-lg text-gray-600 leading-relaxed">
              As a passionate software engineer and co-founder of Zopsho, I'm dedicated to revolutionizing last-mile delivery through innovative technology solutions. My journey in tech is driven by a deep desire to create meaningful impact in people's lives.
            </p>
            <p className=" sm:text-2xl md:text-lg text-gray-600 leading-relaxed">
              Beyond code and algorithms, I believe in the power of community and social good. Whether it's through my active participation in Google Developer Groups or initiatives to help the underprivileged, I strive to use technology as a force for positive change.
            </p>
            <p className="sm:text-2xl md:text-lg text-gray-600 leading-relaxed">
              When I'm not building the next big thing, you'll find me exploring new destinations, playing football with friends, or engaging with like-minded individuals who share the vision of making the world a better place.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Core Values</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Innovation</h5>
                  <p className="text-gray-600">Constantly pushing boundaries to create solutions that matter</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Community</h5>
                  <p className="text-gray-600">Building connections and supporting growth in tech communities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Social Impact</h5>
                  <p className="text-gray-600">Using technology to create positive change in society</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Exploration</h5>
                  <p className="text-gray-600">Embracing new experiences and learning from diverse cultures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
