import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Globe, Users } from 'lucide-react';
import Background3D from './Background3D';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <Code />, name: 'Web Development', description: 'React, TypeScript, Node.js' },
    { icon: <Brain />, name: 'Problem Solving', description: 'Creative Solutions' },
    { icon: <Users />, name: 'Leadership', description: 'Team Management' },
    { icon: <Globe />, name: 'Global Reach', description: 'International Clients' },
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0, rotateX: -15 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const timeline = [
    { year: '2020', event: 'Started Web Development Journey' },
    { year: '2022', event: 'First Freelance Projects' },
    { year: '2022', event: 'Founded TripTrail' },
    { year: '2023', event: 'Expanded to International Markets' }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="about">
      <Background3D type="connect" color="#3B82F6" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={inView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative perspective-1000"
            >
              <img
                src="https://i.postimg.cc/26P7DhDJ/Whats-App-Image-2025-04-17-at-20-35-12-44a32f6f.jpg"
                alt="Professional headshot"
                className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.div>
            
            <div>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                As a passionate web developer and entrepreneur, I've dedicated my career to creating innovative digital solutions that make a difference. From founding TripTrail to helping clients worldwide through Fiverr, I bring creativity and technical expertise to every project.
              </motion.p>
              
              {/* Timeline */}
              <div className="mb-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.year}
                    </motion.div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                      {item.event}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    className="p-4 bg-white rounded-lg shadow-md transform transition-all duration-300 perspective-1000"
                  >
                    <motion.div 
                      className="text-blue-600 mb-2"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-semibold mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}