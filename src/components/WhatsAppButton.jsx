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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 z-50 bg-gradient-to-r from-wellness to-wellness-dark text-white p-3 xs:p-4 rounded-full shadow-2xl shadow-wellness/40 hover:shadow-wellness/60 transition-all duration-300"
      style={{ boxShadow: '0 0 0 0 rgba(74, 222, 128, 0.7)' }}
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(74, 222, 128, 0.7)',
            '0 0 0 15px rgba(74, 222, 128, 0)',
            '0 0 0 0 rgba(74, 222, 128, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="relative"
      >
        <MessageCircle className="w-5 xs:w-6 h-5 xs:h-6" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
