
import { Award,  Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    // {
    //   category: "Awards & Recognition",
    //   icon: Award,
    //   items: [
    //     {
    //       title: "Excellence in Innovation Award",
    //       description: "Recognized for groundbreaking work in logistics technology",
    //       year: "2024"
    //     },
    //     {
    //       title: "Rising Entrepreneur of the Year",
    //       description: "For leadership in the startup ecosystem",
    //       year: "2023"
    //     }
    //   ]
    // },
    {
      category: "Startup Milestones",
      icon: Target,
      items: [
        {
          title: "Building Zopsho",
          description: "Started laying the foundation for a tech-driven delivery platform to simplify everyday needs.",
          year: "2023"
        },
        {
          title: "Zopsho Official Launch",
          description: "Launched Zopsho in Kochi, marking our entry into the on-demand pickup and delivery space.",
          year: "2025"
        },
        {
          title: "Funding & Expansion",
          description: "Secured significant investment for expansion",
          year: "Ongoing"
        }
      ]
    },
    {
      category: "Tech Community",
      icon: Users,
      items: [
        {
          title: "Google Developer Groups Lead",
          description: "Leading tech community initiatives and events",
          year: "2022-Present"
        },
       
        {
          title: "Tech Mentor",
          description: "Mentoring 10+ aspiring developers",
          year: "2023-Present"
        }, {
          title: "Open Source Contributor",
          description: "Active contributor to multiple open source projects",
          year: "Ongoing"
        }
      ]
    },

    // {
    //   category: "Social Impact",
    //   icon: Heart,
    //   items: [
    //     {
    //       title: "Digital Literacy Program",
    //       description: "Taught programming to 200+ underprivileged students",
    //       year: "2023"
    //     },
    //     {
    //       title: "Community Tech Drive",
    //       description: "Donated laptops and tech equipment to rural schools",
    //       year: "2022"
    //     },
    //     {
    //       title: "Charity Football Match",
    //       description: "Organized fundraising match for local orphanage",
    //       year: "2024"
    //     }
    //   ]
    // }
  ];

  return (
    <section id="achievements" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Celebrating the journey of innovation, leadership, and positive impact
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((achievement, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">{achievement.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{achievement.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
