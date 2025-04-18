import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Background3D from './Background3D';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number.replace(/^0/, '20')}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus('sending');
      await emailjs.sendForm(
        'service_rd74x8j',
        'template_zgasgjd',
        formRef.current,
        '_91grWQNmXJgtCQMo'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
      console.error('Failed to send email:', error);
    }
  };

  const contacts = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Primary Phone",
      value: "01280791996",
      action: () => handleWhatsApp("01280791996")
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Secondary Phone",
      value: "01286804397",
      action: () => handleWhatsApp("01286804397")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "osamataher5030@gmail.com",
      action: () => window.location.href = "mailto:osamataher5030@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <Background3D type="bubble" color="#4F46E5" />
      
      <div className="contact-section relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          
          <div className="grid gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-white p-6 rounded-xl shadow-lg cursor-pointer backdrop-blur-sm bg-white/90"
                onClick={contact.action}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4">
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
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{contact.label}</h3>
                    <p className="text-blue-600 break-words">{contact.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-white p-8 rounded-xl shadow-lg backdrop-blur-sm bg-white/90"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="input-field"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                required
                className="input-field"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="textarea-field"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p 
                  className="text-green-600 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  className="text-red-600 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>

      <style>
        {`
          .contact-section {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }

          .input-field {
            width: 100%;
            max-width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
            overflow-wrap: break-word;
          }

          .textarea-field {
            width: 100%;
            max-width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
            resize: vertical;
          }

          .button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .button:hover {
            background-color: #0056b3;
          }

          .button[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
          }
        `}
      </style>
    </section>
  );
}