
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {

  const [formData, setFormData] = useState(
    {
      firstName: '',
    lastName: '',
    email: '',
    place: '',
    description: ''
    }
  )
  const [isSubmitting, setIssubmitting] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} =e.target;
    setFormData(prev=>({
      ...prev,[name]:value
    }))
  }

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIssubmitting(true);

    try {
      const result = await emailjs.send(
        "service_w7fpdt2",
        // "template_42r8f91",
        "template_oms2w9u",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          location: formData.place,
          message: formData.description,
        },
        "DFZhpuQmWfC_NBjK0"
      );
      alert("✅ Message sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        place: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }
   


    setIssubmitting(false);
  };

    
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Always excited to collaborate on innovative projects, discuss tech trends, or just have a great conversation
          </p>
        </div>
        

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Professional Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Interested in discussing startup opportunities, tech innovations, or potential collaborations?
                </p>
                <a href="mailto:mohamedfazil961@gmail.com">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Send Professional Email
                </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Want to talk about tech innovation,  or discuss community initiatives?
                </p>
                <a href="tel:+918086447566">
                <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Let's Connect
                </Button>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mb-16">
            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="firstname"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="lastname"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="place">Location</Label>
                    <Input
                      id="place"
                      name="place"
                      type="text"
                      value={formData.place}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Message</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          
        </div>
        </div>

          <div className="text-center space-y-8">
            <div>
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">Follow My Journey</h3>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/mohamedfazilk"
                  className="group flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-gray-300"
                >
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300">
                    <Github size={16} className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-fazil-k-054217196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="group flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-300"
                >
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Linkedin size={16} className="sm:w-5 sm:h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ContactSection;
