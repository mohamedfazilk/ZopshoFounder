
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Passion {
  id: number;
  title: string;
  icon: string;
  description: string;
  color: string;
}

const PassionsSection = () => {
  const [passions, setPassions] = useState<Passion[]>([]);

  const defaultPassions = [
    {
      id: 1,
      title: "Vision For Change",
      icon: "💻",
      description: "Driven by a passion for innovation, I strive to bring meaningful change to society through technology. By embracing new ideas and building practical solutions, my goal is to simplify everyday challenges, empower communities, and contribute to a smarter, more connected future.",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "Travel & Exploration",
      icon: "🌍",
      description: "Exploring new destinations, experiencing diverse cultures, and documenting adventures. Each journey brings fresh perspectives and inspiration for innovation.",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Community Service",
      icon: "🤝",
      description: "Actively helping underprivileged communities through technology education and social initiatives. Believing in giving back and creating opportunities for others.",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 4,
      title: "Tech Communities",
      icon: "👥",
      description: "Active member of Google Developer Groups and various tech communities. Sharing knowledge, learning from peers, and building the future together.",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  useEffect(() => {
  const savedPassions = localStorage.getItem('portfolio_passions');

  // Set this to true only while testing changes
  const forceUpdatePassions = true;

  if (savedPassions && !forceUpdatePassions) {
    setPassions(JSON.parse(savedPassions));
  } else {
    setPassions(defaultPassions);
    localStorage.setItem('portfolio_passions', JSON.stringify(defaultPassions));
  }
}, []);

  // useEffect(() => {
  //   const savedPassions = localStorage.getItem('portfolio_passions');
  //   if (savedPassions) {
  //     setPassions(JSON.parse(savedPassions));
  //   } else {
  //     setPassions(defaultPassions);
  //     localStorage.setItem('portfolio_passions', JSON.stringify(defaultPassions));
  //   }
  // }, []);

  return (
    <section id="passions" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Passions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Life is about more than just code - it's about the experiences, connections, and impact we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {passions.map((passion, index) => (
            <Card key={passion.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${passion.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{passion.icon}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">{passion.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">{passion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
