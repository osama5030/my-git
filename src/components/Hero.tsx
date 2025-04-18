import { motion } from 'framer-motion';
import Lottie from "lottie-react";
// --- إعادة استيراد الأيقونات ---
import { Code2, Database, Brain, Server, Layers } from 'lucide-react';

// --- تأكد أن المسار ده صحيح ---
// استبدل المسار التالي بالمسار الصحيح لملف lottie عندك إذا كان مختلفاً
import heroLottieAnimation from "../hero-lottie.json";

function Hero() {
  const handleViewWork = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- إعادة تعريف الأيقونات العائمة ---
  const floatingElements = [
    { icon: <Code2 className="w-10 h-10 md:w-12 md:h-12" />, delay: 0, color: "text-cyan-400", hoverColor: "hover:text-cyan-300" },
    { icon: <Database className="w-10 h-10 md:w-12 md:h-12" />, delay: 0.2, color: "text-emerald-400", hoverColor: "hover:text-emerald-300" },
    { icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />, delay: 0.4, color: "text-pink-400", hoverColor: "hover:text-pink-300" },
    { icon: <Server className="w-10 h-10 md:w-12 md:h-12" />, delay: 0.6, color: "text-orange-400", hoverColor: "hover:text-orange-300" },
    { icon: <Layers className="w-10 h-10 md:w-12 md:h-12" />, delay: 0.8, color: "text-yellow-400", hoverColor: "hover:text-yellow-300" }
  ];


  // --- تعريف أشكال الخلفية (بعدد أكبر وتنوع أكتر) ---
  const backgroundShapes = [
    // --- دوائر كبيرة ومتوسطة ---
    { type: 'circle', size: 'w-12 h-12', color: 'bg-pink-400', position: 'top-16 left-10 md:left-16', opacity: 'opacity-70', delay: 0.1, animation: { y: [0, -5, 0], scale: [1, 1.05, 1], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-8 h-8', color: 'bg-blue-600', position: 'top-24 right-12 md:right-24', opacity: 'opacity-60', delay: 0.3, animation: { y: [0, 8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-6 h-6', color: 'bg-cyan-400', position: 'top-1/2 right-16 transform -translate-y-1/2', opacity: 'opacity-80', delay: 0.5, animation: { x: [0, 6, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-10 h-10', color: 'bg-purple-500', position: 'bottom-24 left-1/4', opacity: 'opacity-60', delay: 0.9, animation: { y: [0, 6, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-16 h-16', color: 'bg-indigo-500', position: 'bottom-10 right-1/2 transform translate-x-1/2', opacity: 'opacity-40', delay: 1.1, animation: { scale: [1, 1.1, 1], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-5 h-5', color: 'bg-teal-400', position: 'top-1/3 left-1/3', opacity: 'opacity-70', delay: 1.3, animation: { x: [0, -5, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-7 h-7', color: 'bg-orange-400', position: 'bottom-1/3 right-1/4', opacity: 'opacity-60', delay: 1.6, animation: { y: [0, -7, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'circle', size: 'w-9 h-9', color: 'bg-rose-500', position: 'top-3/4 left-1/3', opacity: 'opacity-50', delay: 1.8, animation: { x: [0, 8, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } },

    // --- حلقات ---
    { type: 'ring', size: 'w-10 h-10', color: 'border-yellow-400', position: 'bottom-16 right-20 md:right-32', opacity: 'opacity-90', delay: 0.7, animation: { rotate: 360, transition: { duration: 10, repeat: Infinity, ease: "linear" } } },
    { type: 'ring', size: 'w-14 h-14', color: 'border-pink-400', position: 'top-32 left-1/2 transform -translate-x-1/2', opacity: 'opacity-50', delay: 1.0, animation: { rotate: -360, transition: { duration: 12, repeat: Infinity, ease: "linear" } } },
    { type: 'ring', size: 'w-8 h-8', color: 'border-cyan-300', position: 'bottom-8 left-8', opacity: 'opacity-70', delay: 2.0, animation: { rotate: 180, transition: { duration: 8, repeat: Infinity, ease: "linear" } } },

    // --- مثلثات ---
    { type: 'triangle', size: 'w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-400', color: '', position: 'top-10 right-1/4 md:right-1/3', opacity: 'opacity-80', delay: 0.4, animation: { y: [0, -4, 0], rotate: [0, 10, -5, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'triangle', size: 'w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-cyan-400', color: '', position: 'bottom-1/3 left-16', opacity: 'opacity-70', delay: 1.2, animation: { y: [0, 5, 0], rotate: [0, -8, 4, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'triangle', size: 'w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-purple-400', color: '', position: 'top-1/2 right-1/3 transform translate-y-full', opacity: 'opacity-60', delay: 2.2, animation: { x: [0, 4, -4, 0], rotate: [0, 15, -10, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } } },


    // --- علامات زائد ---
    { type: 'plus', content: '+', size: 'w-8 h-8 text-3xl font-bold', color: 'text-pink-400', position: 'top-1/2 left-10 md:left-24 transform -translate-y-1/2', opacity: 'opacity-90', delay: 0.6, animation: { rotate: [0, 90, 0], scale: [1, 1.1, 1], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'plus', content: '+', size: 'w-6 h-6 text-2xl font-bold', color: 'text-yellow-400', position: 'bottom-12 right-10', opacity: 'opacity-80', delay: 1.4, animation: { rotate: [0, -90, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } },
    { type: 'plus', content: '+', size: 'w-7 h-7 text-3xl font-bold', color: 'text-teal-400', position: 'top-20 left-1/3', opacity: 'opacity-70', delay: 2.4, animation: { scale: [1, 1.2, 1], rotate: [0, 45, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } },

    // --- نقاط صغيرة متفرقة (نجوم) - عدد أكبر ---
    { type: 'circle', size: 'w-2 h-2', color: 'bg-purple-300', position: 'top-1/4 left-1/3', opacity: 'opacity-50', delay: 0.8, animation: { scale: [1, 1.5, 1], transition: { duration: 3, repeat: Infinity } } },
    { type: 'circle', size: 'w-2 h-2', color: 'bg-teal-300', position: 'bottom-1/4 right-1/4', opacity: 'opacity-50', delay: 1.0, animation: { scale: [1, 1.5, 1], transition: { duration: 3.5, repeat: Infinity } } },
    { type: 'circle', size: 'w-1.5 h-1.5', color: 'bg-pink-300', position: 'top-1/2 left-3/4', opacity: 'opacity-40', delay: 1.5, animation: { scale: [1, 1.4, 1], transition: { duration: 2.5, repeat: Infinity } } },
    { type: 'circle', size: 'w-1.5 h-1.5', color: 'bg-blue-300', position: 'bottom-1/3 left-1/2', opacity: 'opacity-40', delay: 1.7, animation: { scale: [1, 1.4, 1], transition: { duration: 4, repeat: Infinity } } },
    { type: 'circle', size: 'w-2.5 h-2.5', color: 'bg-yellow-300', position: 'top-20 right-1/2', opacity: 'opacity-60', delay: 1.9, animation: { scale: [1, 1.6, 1], transition: { duration: 3.8, repeat: Infinity } } },
    { type: 'circle', size: 'w-1 h-1', color: 'bg-gray-400', position: 'top-3/4 left-1/4', opacity: 'opacity-30', delay: 2.1, animation: { scale: [1, 1.3, 1], transition: { duration: 3.2, repeat: Infinity } } },
    { type: 'circle', size: 'w-2 h-2', color: 'bg-orange-300', position: 'bottom-1/2 right-1/3', opacity: 'opacity-50', delay: 2.3, animation: { scale: [1, 1.5, 1], transition: { duration: 4.2, repeat: Infinity } } },
    { type: 'circle', size: 'w-1 h-1', color: 'bg-indigo-200', position: 'top-10 left-10', opacity: 'opacity-40', delay: 2.5, animation: { scale: [1, 1.2, 1], transition: { duration: 3.1, repeat: Infinity } } },
    { type: 'circle', size: 'w-2 h-2', color: 'bg-rose-300', position: 'bottom-10 right-10', opacity: 'opacity-50', delay: 2.7, animation: { scale: [1, 1.5, 1], transition: { duration: 3.6, repeat: Infinity } } },
    { type: 'circle', size: 'w-1.5 h-1.5', color: 'bg-lime-300', position: 'top-1/2 right-3/4', opacity: 'opacity-40', delay: 2.9, animation: { scale: [1, 1.4, 1], transition: { duration: 2.8, repeat: Infinity } } },
    { type: 'circle', size: 'w-2.5 h-2.5', color: 'bg-sky-300', position: 'bottom-1/4 left-1/2', opacity: 'opacity-60', delay: 3.1, animation: { scale: [1, 1.6, 1], transition: { duration: 4.0, repeat: Infinity } } },
    { type: 'circle', size: 'w-1 h-1', color: 'bg-fuchsia-300', position: 'top-1/4 right-1/4', opacity: 'opacity-30', delay: 3.3, animation: { scale: [1, 1.3, 1], transition: { duration: 3.4, repeat: Infinity } } },
  ];


  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 flex items-center justify-center py-20 md:py-0"
    >
      {/* --- حاوية لأشكال الخلفية --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {backgroundShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.position} ${shape.opacity} ${
              shape.type === 'circle' ? `${shape.color} rounded-full` :
              shape.type === 'ring' ? `${shape.color} border-2 md:border-4 rounded-full` : // تعديل سمك الحلقة
              shape.type === 'plus' ? `${shape.color} flex items-center justify-center` :
              shape.type === 'triangle' ? `${shape.color}` : '' // الكلاسات الخاصة بالمثلث موجودة في size
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: parseFloat(shape.opacity.replace('opacity-', '')) / 100 || 0.7, scale: 1, ...shape.animation }}
            transition={{ delay: shape.delay, duration: 1 }} // حركة الدخول الأولية
          >
            {shape.type === 'plus' ? shape.content : null}
          </motion.div>
        ))}
      </div>

       {/* Main Content Area */}
       <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10">

         {/* Left Side: Text Content */}
         <motion.div
           className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left"
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           {/* العنوان الرئيسي */}
           <motion.h1 className="pacifico-font text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-amber-100 drop-shadow-md">
             Osama Taher
           </motion.h1>

           {/* العنوان الفرعي */}
           <motion.div className="dancing-script-font text-4xl md:text-5xl font-semibold mb-6 text-orange-500 drop-shadow-sm">
             Creative Developer
           </motion.div>

           {/* الفقرة */}
           <p className="text-xl md:text-2xl text-gray-200 mb-10">
             Transforming ideas into exceptional digital experiences
           </p>

           {/* Floating Icons */}
           <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mb-12">
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + element.delay, duration: 0.8 }} // تأخير بسيط إضافي
                whileHover={{
                  scale: 1.15,
                  // تأثير توهج مشابه للصورة القديمة عند الـ hover
                  filter: `drop-shadow(0 0 8px currentColor) drop-shadow(0 0 15px ${element.color.replace('text-','').split('-')[0]+'-500'})`,
                  y: -8
                }}
                className={`cursor-pointer transition-all duration-300 ${element.color} ${element.hoverColor}`}
              >
                {element.icon}
              </motion.div>
            ))}
          </div>

           {/* Button */}
           <motion.button
             whileHover={{ scale: 1.05, rotate: 2 }}
             whileTap={{ scale: 0.95 }}
             onClick={handleViewWork}
             className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-md"
           >
             View My Work
           </motion.button>
         </motion.div>

         {/* Right Side: Lottie Animation */}
         <motion.div
           className="w-full md:w-1/2 lg:w-2/5 mt-10 md:mt-0 flex justify-center items-center"
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
         >
           <Lottie
             animationData={heroLottieAnimation}
             loop={true}
             style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
           />
         </motion.div>

       </div>
    </section>
  );
}

export default Hero;