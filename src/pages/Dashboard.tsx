
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Edit, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Photo {
  id: number;
  src: string;
  alt: string;
  location: string;
  category: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content?: string;
}

interface Passion {
  id: number;
  title: string;
  icon: string;
  description: string;
  color: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [passions, setPassions] = useState<Passion[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [activeSection, setActiveSection] = useState("photos");

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPhotos = localStorage.getItem('portfolio_photos');
    const savedBlogPosts = localStorage.getItem('portfolio_blog_posts');
    const savedPassions = localStorage.getItem('portfolio_passions');

    if (savedPhotos) setPhotos(JSON.parse(savedPhotos));
    if (savedBlogPosts) setBlogPosts(JSON.parse(savedBlogPosts));
    if (savedPassions) setPassions(JSON.parse(savedPassions));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolio_photos', JSON.stringify(photos));
  }, [photos]);

  useEffect(() => {
    localStorage.setItem('portfolio_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('portfolio_passions', JSON.stringify(passions));
  }, [passions]);

  const handleAddPhoto = (photoData: Omit<Photo, 'id'>) => {
    const newPhoto = { ...photoData, id: Date.now() };
    setPhotos([...photos, newPhoto]);
    toast({ title: "Photo added successfully!" });
  };

  const handleAddBlogPost = (postData: Omit<BlogPost, 'id'>) => {
    const newPost = { ...postData, id: Date.now() };
    setBlogPosts([...blogPosts, newPost]);
    toast({ title: "Blog post added successfully!" });
  };

  const handleAddPassion = (passionData: Omit<Passion, 'id'>) => {
    const newPassion = { ...passionData, id: Date.now() };
    setPassions([...passions, newPassion]);
    toast({ title: "Passion added successfully!" });
  };

  const handleDeletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
    toast({ title: "Photo deleted successfully!" });
  };

  const handleDeleteBlogPost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    toast({ title: "Blog post deleted successfully!" });
  };

  const handleDeletePassion = (id: number) => {
    setPassions(passions.filter(passion => passion.id !== id));
    toast({ title: "Passion deleted successfully!" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your portfolio content easily</p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="mt-4"
            variant="outline"
          >
            ← Back to Portfolio
          </Button>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="passions">Passions</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <PhotoManager 
              photos={photos}
              onAdd={handleAddPhoto}
              onDelete={handleDeletePhoto}
            />
          </TabsContent>

          <TabsContent value="blog">
            <BlogManager 
              blogPosts={blogPosts}
              onAdd={handleAddBlogPost}
              onDelete={handleDeleteBlogPost}
            />
          </TabsContent>

          <TabsContent value="passions">
            <PassionManager 
              passions={passions}
              onAdd={handleAddPassion}
              onDelete={handleDeletePassion}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Photo Manager Component
const PhotoManager = ({ photos, onAdd, onDelete }: {
  photos: Photo[];
  onAdd: (photo: Omit<Photo, 'id'>) => void;
  onDelete: (id: number) => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    src: '',
    alt: '',
    location: '',
    category: 'travel'
  });

  const categories = ['travel', 'startup', 'football', 'events', 'community'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ src: '', alt: '', location: '', category: 'travel' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Manage Photos</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Photo
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Photo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="src">Image URL</Label>
                <Input
                  id="src"
                  value={formData.src}
                  onChange={(e) => setFormData({...formData, src: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div>
                <Label htmlFor="alt">Description</Label>
                <Input
                  id="alt"
                  value={formData.alt}
                  onChange={(e) => setFormData({...formData, alt: e.target.value})}
                  placeholder="Photo description"
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Location name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-2">
                <Button type="submit">Add Photo</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id}>
            <CardContent className="p-4">
              <img src={photo.src} alt={photo.alt} className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-semibold">{photo.alt}</h3>
              <p className="text-sm text-gray-600">{photo.location}</p>
              <p className="text-xs text-blue-600 capitalize">{photo.category}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(photo.id)}
                className="mt-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Blog Manager Component
const BlogManager = ({ blogPosts, onAdd, onDelete }: {
  blogPosts: BlogPost[];
  onAdd: (post: Omit<BlogPost, 'id'>) => void;
  onDelete: (id: number) => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Technology',
    readTime: '',
    date: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', excerpt: '', category: 'Technology', readTime: '', date: '', content: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Manage Blog Posts</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Blog Post
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="readTime">Read Time</Label>
                <Input
                  id="readTime"
                  value={formData.readTime}
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                  placeholder="5 min read"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">Add Post</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-xs text-blue-600">{post.date}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(post.id)}
                className="mt-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Passion Manager Component
const PassionManager = ({ passions, onAdd, onDelete }: {
  passions: Passion[];
  onAdd: (passion: Omit<Passion, 'id'>) => void;
  onDelete: (id: number) => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    icon: '',
    description: '',
    color: 'from-blue-400 to-indigo-500'
  });

  const colorOptions = [
    'from-green-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-orange-400 to-red-500',
    'from-blue-400 to-indigo-500',
    'from-yellow-400 to-orange-500',
    'from-pink-400 to-red-500'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', icon: '', description: '', color: 'from-blue-400 to-indigo-500' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Manage Passions</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Passion
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Passion</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="icon">Icon (emoji)</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  placeholder="⚽"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="color">Color Gradient</Label>
                <select
                  id="color"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {colorOptions.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-2">
                <Button type="submit">Add Passion</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {passions.map((passion) => (
          <Card key={passion.id}>
            <CardContent className="p-4">
              <div className={`h-2 bg-gradient-to-r ${passion.color} mb-4 rounded`}></div>
              <div className="text-2xl mb-2">{passion.icon}</div>
              <h3 className="font-semibold mb-2">{passion.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{passion.description}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(passion.id)}
                className="mt-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
