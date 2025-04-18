import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo, useCallback } from 'react';
import { Globe, Code2, Palette, ExternalLink, X, BarChart, Brain, Laptop, ShoppingCart } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  icon: JSX.Element;
  link: string;
  category: string;
};

type Category = {
  id: string;
  name: string;
};

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = useMemo<Category[]>(() => [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ], []);

  const projects = useMemo<Project[]>(() => [
    {
      title: "TripTrail Tourism Platform",
      description: "A comprehensive tourism platform revolutionizing travel experiences in Egypt.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      icon: <Globe className="w-6 h-6" />,
      link: "https://triptrail.me",
      category: 'fullstack'
    },
    {
      title: "ClicData Dashboard",
      description: "Advanced data visualization and analytics dashboard built with ClicData.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tech: ["ClicData", "SQL", "API"],
      icon: <BarChart className="w-6 h-6" />,
      link: "https://www.clicdata.com/",
      category: 'frontend'
    },
    {
      title: "Visme Platform",
      description: "Interactive design platform integration with custom templates.",
      image: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392",
      tech: ["Visme API", "React", "WebGL"],
      icon: <Palette className="w-6 h-6" />,
      link: "https://www.visme.co/",
      category: 'frontend'
    },
    {
      title: "ContentEdge AI",
      description: "AI-powered content generation and optimization platform.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      tech: ["OpenAI", "Next.js", "Python"],
      icon: <Brain className="w-6 h-6" />,
      link: "https://www.contentedge.com/",
      category: 'fullstack'
    },
    {
      title: "Coligo Learning",
      description: "Comprehensive learning management system with video courses.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      tech: ["Vue.js", "Django", "PostgreSQL"],
      icon: <Laptop className="w-6 h-6" />,
      link: "https://web.coligotech.com/",
      category: 'fullstack'
    },
    {
      title: "Ester E-Commerce",
      description: "Full-featured online store with inventory management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      tech: ["React", "Node.js", "Stripe"],
      icon: <ShoppingCart className="w-6 h-6" />,
      link: "https://ester.co/",
      category: 'fullstack'
    }
  ], []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => 
    projects.filter(project => activeCategory === 'all' || project.category === activeCategory),
    [activeCategory, projects]
  );

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  const ProjectCard = useCallback(({ project }: { project: Project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform-gpu hover:scale-[1.02] transition-transform"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-blue-400">{project.icon}</div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-600/20 text-sm text-blue-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ), []);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-800 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                loading="lazy"
              />

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-600/20 text-sm text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}