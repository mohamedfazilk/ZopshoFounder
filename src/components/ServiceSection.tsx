import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
    const services = [
        {
            title: "Website Development",
            description: "Professional websites built with modern technologies. From business sites to complex web applications.",
            features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
            category: "Web Development",
            link: "#"
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
            features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Deployment"],
            category: "Mobile Development",
            link: "#"
        },
        {
            title: "UI/UX Design",
            description: "Beautiful and functional designs that convert visitors into customers. Complete design systems.",
            features: ["User Research", "Prototyping", "Design Systems", "Brand Identity"],
            category: "Design",
            link: "#"
        },
        {
            title: "Resume & Portfolio",
            description: "Professional resumes and portfolios that showcase your skills and help you land your dream job.",
            features: ["ATS Optimized", "Custom Design", "LinkedIn Optimization", "Cover Letters"],
            category: "Career Services",
            link: "#"
        },
        {
            title: "E-commerce Solutions",
            description: "Complete online stores with payment integration, inventory management, and marketing tools.",
            features: ["Payment Integration", "Inventory Management", "Analytics", "Marketing Tools"],
            category: "E-commerce",
            link: "#"
        },
        {
            title: "Custom Development",
            description: "Tailored solutions for your unique business needs. From automation to complex integrations.",
            features: ["API Integration", "Database Design", "Cloud Solutions", "Automation"],
            category: "Custom Solutions",
            link: "#"
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                        Professional development services from our expert team. Let us bring your ideas to life with cutting-edge technology
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                        {service.category}
                                    </span>
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {service.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Button onClick={() => {
                                    window.location.href = "mailto:mohamedfazil961@gmail.com";
                                }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300">
                                    Connect With me
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
