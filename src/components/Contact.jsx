import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: 'Casablanca, Maroc',
      color: 'from-petrol to-petrol-dark',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '06 29 42 61 83',
      color: 'from-wellness to-wellness-dark',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '06 29 42 61 83',
      color: 'from-petrol to-wellness',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Disponibilité',
      content: '24h/24 - 7j/7',
      color: 'from-petrol-dark to-petrol',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-16 xs:py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block bg-petrol/10 text-petrol font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-montserrat mb-3 xs:mb-4">
            Contact
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-petrol mb-3 xs:mb-4">
            Contactez-Nous
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto px-2 xs:px-0">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4 xs:space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gradient-to-br from-gray-50 to-white p-4 xs:p-6 rounded-2xl xs:rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-center gap-3 xs:gap-4"
              >
                <div className={`inline-flex items-center justify-center w-12 xs:w-14 h-12 xs:h-14 bg-gradient-to-br ${info.color} rounded-xl xs:rounded-2xl text-white flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-sora font-bold text-petrol text-sm xs:text-base mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat text-xs xs:text-sm">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-12 border border-gray-100"
          >
            <div className="grid md:grid-cols-1 gap-6 xs:gap-8 items-center">
              <div>
                <h3 className="text-xl xs:text-2xl md:text-3xl font-sora font-bold text-petrol mb-3 xs:mb-4">
                  Contactez l'Infirmière
                </h3>
                <p className="text-gray-600 font-montserrat text-sm xs:text-base mb-4 xs:mb-6">
                  Fatima Ezahraa, assistante infirmière diplômée, est disponible pour répondre à vos questions et planifier vos soins à domicile.
                </p>
                <a
                  href="https://wa.me/212629426183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 xs:gap-3 bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-semibold px-5 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full hover:shadow-2xl hover:shadow-wellness/40 transition-all duration-300 transform hover:scale-105 font-montserrat text-sm xs:text-base sm:text-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span>Contacter sur WhatsApp</span>
                </a>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-petrol to-petrol-dark rounded-2xl p-6 xs:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 xs:w-20 h-16 xs:h-20 bg-white/10 backdrop-blur-sm rounded-full text-white mb-3 xs:mb-4">
                    <MessageCircle className="w-8 xs:w-10 h-8 xs:h-10" />
                  </div>
                  <p className="text-white font-montserrat text-sm xs:text-base mb-1 xs:mb-2">
                    Réponse rapide
                  </p>
                  <p className="text-white/80 font-montserrat text-xs xs:text-sm">
                    Disponible 24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
