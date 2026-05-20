import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/212629426183"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed z-50 bg-wellness text-petrol-dark p-2.5 sm:p-4 rounded-full shadow-[0_4px_20px_rgba(74,222,128,0.5)] md:hover:scale-110 transition-transform duration-300 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
