
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Zopsho Digital Ventures Pvt Ltd",
      role: "Co-founder & Managing Director",
      description: "Revolutionizing last-mile delivery with innovative technology solutions. Building a platform that connects businesses with efficient delivery networks, making logistics smarter and more accessible.",
      highlights: ["Startup Leadership", "Logistics Innovation", "Tech Strategy"],
      status: "Active Venture"
    },
    {
      title: "Community Tech Initiatives",
      role: "Developer & Mentor",
      description: "Contributing to open-source projects and mentoring aspiring developers through Google Developer Groups and local tech communities.",
      highlights: ["Open Source", "Mentorship", "Community Building"],
      status: "Ongoing"
    },
    {
      title: "Social Impact Projects",
      role: "Technology Advocate",
      description: "Developing solutions to help underprivileged communities access technology and digital literacy programs.",
      highlights: ["Social Good", "Digital Inclusion", "Education"],
      status: "Impact Initiative"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ventures</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Building innovative solutions that make a difference in the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-purple-600 font-medium">{project.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
