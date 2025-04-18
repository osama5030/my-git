import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, Star } from 'lucide-react';
import Background3D from './Background3D';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "CEO & Founder",
      company: "TripTrail Tourism Company",
      period: "2022 - Present",
      description: "Leading the development and growth of an innovative tourism platform, managing team operations, and driving business strategy.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Freelance Web Developer",
      company: "Fiverr",
      period: "2022 - Present",
      description: "Delivering high-quality web development solutions to clients worldwide, maintaining a 5-star rating and consistent client satisfaction.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -15
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <Background3D type="bubble" color="#6366F1" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 perspective-1000"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-blue-100 rounded-lg text-blue-600"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}