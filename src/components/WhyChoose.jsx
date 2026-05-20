import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Award, Shield, Heart } from 'lucide-react';
import SectionBackground from './SectionBackground';
import { BG_IMAGES } from '../constants/images';

const WhyChoose = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Disponibilité 24/7',
      description: 'Intervention rapide à tout moment pour vos urgences médicales',
      color: 'from-petrol to-petrol-dark',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Personnel Qualifié',
      description: 'Assistante infirmière diplômée, engagée pour votre confort et votre bien-être',
      color: 'from-wellness to-wellness-dark',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Déplacement à Domicile',
      description: 'Nous nous déplaçons directement chez vous pour votre confort',
      color: 'from-petrol to-wellness',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Service Humain',
      description: 'Approche bienveillante et personnalisée pour chaque patient',
      color: 'from-petrol-dark to-petrol',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Confidentialité',
      description: 'Respect strict de la confidentialité et de la vie privée',
      color: 'from-wellness-dark to-wellness',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Confiance',
      description: 'Des milliers de patients nous font confiance depuis des années',
      color: 'from-petrol to-petrol-dark',
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

  return (
    <section id="solutions" className="relative py-16 xs:py-20 sm:py-24 overflow-hidden">
      <SectionBackground image={BG_IMAGES.whyChoose} overlay="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block bg-petrol/10 text-petrol font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-montserrat mb-3 xs:mb-4">
            Pourquoi Nous Choisir
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-petrol mb-3 xs:mb-4">
            L'Excellence des Soins à Domicile
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto px-2 xs:px-0">
            Découvrez ce qui nous distingue et pourquoi des milliers de patients nous font confiance
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white/95 backdrop-blur-md p-5 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl shadow-xl shadow-petrol/10 hover:shadow-2xl hover:shadow-petrol/15 transition-all duration-500 border border-white/80 text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl xs:rounded-2xl text-white mb-4 xs:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg xs:text-xl font-sora font-bold text-petrol mb-2 xs:mb-3 group-hover:text-wellness-dark transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-montserrat text-xs xs:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
