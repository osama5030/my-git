import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- تعريف الروابط هنا ---
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }, // <<< Skills مضافة هنا
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id); // يبدأ بـ ID أول عنصر

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      // --- استخدام IDs من navItems ---
      const currentSection = navItems.find(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // الأقسام في النصف العلوي من الشاشة تعتبر نشطة
          return rect.top <= window.innerHeight / 2 && rect.bottom >= 100; // 100 كإزاحة للـ header
        }
        return false;
      });

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      } else if (!currentSection && window.scrollY < 200 && activeSection !== 'home') {
         // العودة إلى 'home' إذا كان المستخدم قريباً جداً من الأعلى
         setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // تحسين الأداء
    handleScroll(); // استدعاء عند التحميل
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // الاعتماد على activeSection للمقارنة فقط

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header (نفس القيمة المستخدمة سابقاً)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // أغلق القائمة عند الضغط
      // التحديث الفوري للحالة النشطة هنا يعطي استجابة أسرع للمستخدم (اختياري)
      // setActiveSection(sectionId);
    }
  };

  // --- menuVariants and mobileMenuVariants remain the same ---
  const menuVariants = {
    closed: {
      rotateY: 0,
      opacity: 1
    },
    open: {
      rotateY: 180,
      opacity: 0
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      rotateX: -15
    },
    open: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation('home')} // استخدام ID من المصفوفة
          >
            <Code className="w-8 h-8 text-blue-600" />
            {/* <span className="font-bold text-xl text-gray-800">Osama</span> */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* --- استخدام navItems.map --- */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.id} // استخدام ID كـ key
                onClick={() => handleNavigation(item.id)} // تمرير ID للدالة
                className={`text-gray-700 hover:text-blue-600 transition-colors relative font-medium ${ // إضافة font-medium
                  activeSection === item.id ? 'text-blue-600' : '' // المقارنة بـ ID
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item.label} {/* عرض الـ label */}
                {activeSection === item.id && ( // المقارنة بـ ID
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" // إضافة rounded-full
                    layoutId="activeSection" // layoutId يجب أن يكون فريدًا لمجموعة العناصر المتحركة معًا
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} // تحسين الحركة
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
             className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none" // تبسيط الستايل قليلاً
             onClick={() => setIsOpen(!isOpen)}
           >
             <span className="sr-only">Toggle menu</span>
             <AnimatePresence initial={false} mode="wait">
               <motion.div
                 key={isOpen ? 'x' : 'menu'}
                 initial={{ rotate: -90, opacity: 0 }}
                 animate={{ rotate: 0, opacity: 1 }}
                 exit={{ rotate: 90, opacity: 0 }}
                 transition={{ duration: 0.2 }}
               >
                 {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
               </motion.div>
             </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white rounded-lg shadow-lg mt-2 overflow-hidden border border-gray-100" // إضافة حد خفيف
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* --- استخدام navItems.map --- */}
                {navItems.map((item) => (
                  <motion.button
                    key={item.id} // استخدام ID كـ key
                    onClick={() => handleNavigation(item.id)} // تمرير ID للدالة
                    className={`block w-full text-left px-3 py-2 rounded-md font-medium ${ // إضافة font-medium
                      activeSection === item.id // المقارنة بـ ID
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    } transition-all`}
                    whileHover={{ x: 5 }} // تعديل حركة الـ hover
                    // إضافة animation بسيطة عند الضغط
                    whileTap={{ scale: 0.98, backgroundColor: 'rgba(219, 234, 254, 0.8)' }}
                  >
                    {item.label} {/* عرض الـ label */}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}