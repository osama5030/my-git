import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo, useCallback } from 'react';
import { Code2, Database, Palette, Globe2, PenTool as Tool, Cloud, FileCode2, Server } from 'lucide-react';

type Skill = {
  name: string;
  icon: JSX.Element;
  category: string;
  progress: number;
};

type Category = {
  id: string;
  name: string;
  icon: JSX.Element;
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: Category[] = useMemo(() => [
    { id: 'all', name: 'All', icon: <Globe2 className="w-5 h-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Tool className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-5 h-5" /> },
  ], []);

  const skills: Skill[] = useMemo(() => [
    // Frontend
    { name: 'React', icon: <FileCode2 />, category: 'frontend', progress: 90 },
    { name: 'Vue.js', icon: <FileCode2 />, category: 'frontend', progress: 85 },
    { name: 'TypeScript', icon: <FileCode2 />, category: 'frontend', progress: 88 },
    { name: 'Next.js', icon: <FileCode2 />, category: 'frontend', progress: 85 },
    
    // Backend
    { name: 'Node.js', icon: <Server />, category: 'backend', progress: 92 },
    { name: 'Express', icon: <Server />, category: 'backend', progress: 88 },
    { name: 'Python', icon: <Server />, category: 'backend', progress: 85 },
    { name: 'Django', icon: <Server />, category: 'backend', progress: 82 },
    
    // Database
    { name: 'PostgreSQL', icon: <Database />, category: 'database', progress: 88 },
    { name: 'MongoDB', icon: <Database />, category: 'database', progress: 85 },
    { name: 'Redis', icon: <Database />, category: 'database', progress: 80 },
    
    // Design
    { name: 'Figma', icon: <Palette />, category: 'design', progress: 85 },
    { name: 'UI/UX', icon: <Palette />, category: 'design', progress: 88 },
    
    // Tools
    { name: 'Git', icon: <Tool />, category: 'tools', progress: 90 },
    { name: 'Docker', icon: <Tool />, category: 'tools', progress: 85 },
    { name: 'Webpack', icon: <Tool />, category: 'tools', progress: 82 },
    
    // Cloud
    { name: 'AWS', icon: <Cloud />, category: 'cloud', progress: 85 },
    { name: 'Vercel', icon: <Cloud />, category: 'cloud', progress: 88 },
    { name: 'Netlify', icon: <Cloud />, category: 'cloud', progress: 86 },
  ], []);

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = useMemo(() => 
    skills.filter(skill => activeCategory === 'all' || skill.category === activeCategory),
    [activeCategory, skills]
  );

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  const SkillCard = useCallback(({ skill }: { skill: Skill }) => (
    <motion.div
      key={skill.name}
      layout="position"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-700/50 transition-colors will-change-transform"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
      
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.progress}%` }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <div className="mt-2 text-right text-gray-400">
        {skill.progress}%
      </div>
    </motion.div>
  ), []);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}