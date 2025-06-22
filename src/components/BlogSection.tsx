
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content?: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const defaultBlogPosts = [
    {
      id: 1,
      title: "The Future of Last-Mile Delivery",
      excerpt: "Exploring how technology is transforming logistics and what it means for businesses and consumers...",
      category: "Technology",
      readTime: "5 min read",
      date: "Coming Soon"
    },
    {
      id: 2,
      title: "Building Communities in Tech",
      excerpt: "Lessons learned from leading developer communities and fostering collaboration in the tech space...",
      category: "Community",
      readTime: "4 min read",
      date: "Coming Soon"
    },
    {
      id: 3,
      title: "Travel Diaries: Tech Inspiration Abroad",
      excerpt: "How traveling to different countries has influenced my perspective on technology and innovation...",
      category: "Travel",
      readTime: "6 min read",
      date: "Coming Soon"
    }
  ];

  useEffect(() => {
    const savedBlogPosts = localStorage.getItem('portfolio_blog_posts');
    if (savedBlogPosts) {
      setBlogPosts(JSON.parse(savedBlogPosts));
    } else {
      setBlogPosts(defaultBlogPosts);
      localStorage.setItem('portfolio_blog_posts', JSON.stringify(defaultBlogPosts));
    }
  }, []);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thoughts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Sharing insights on technology, travel experiences, and social impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Stay tuned for regular updates on tech insights, travel adventures, and social impact stories!
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-colors duration-300">
            Subscribe to Updates
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
