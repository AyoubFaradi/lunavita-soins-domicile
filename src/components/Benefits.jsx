import { motion } from 'framer-motion';
import { Syringe, Droplets, Activity, HeartPulse, Bandage, UserCheck } from 'lucide-react';
import SectionBackground from './SectionBackground';
import { BG_IMAGES } from '../constants/images';

const Benefits = () => {
  const services = [
    {
      icon: <Syringe className="w-8 h-8" />,
      title: 'Injections',
      description: 'Administration d\'injections et médicaments injectables à domicile',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Prises de sang',
      description: 'Prélèvements sanguins professionnels au confort de votre domicile',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Perfusions',
      description: 'Mise en place et surveillance des perfusions à domicile',
      color: 'from-purple-400 to-violet-500',
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Pansements',
      description: 'Soins et changement de pansements pour toutes types de plaies',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Bandage className="w-8 h-8" />,
      title: 'Suivi diabétique',
      description: 'Accompagnement et surveillance pour patients diabétiques',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Assistance personnes âgées',
      description: 'Soins et accompagnement personnalisé pour seniors',
      color: 'from-indigo-400 to-blue-500',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="relative py-16 xs:py-20 sm:py-24 overflow-hidden">
      <SectionBackground image={BG_IMAGES.services} overlay="medium" />
      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block bg-wellness/10 text-wellness-dark font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-montserrat mb-3 xs:mb-4">
            Nos Services
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-petrol mb-3 xs:mb-4">
            Soins Infirmiers à Domicile
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto px-2 xs:px-0">
            Des soins professionnels et personnalisés au confort de votre domicile
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/95 backdrop-blur-md p-5 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl shadow-xl shadow-petrol/10 hover:shadow-2xl hover:shadow-petrol/15 transition-all duration-500 overflow-hidden border border-white/80"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl xs:rounded-2xl text-white mb-4 xs:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg xs:text-xl font-sora font-bold text-petrol mb-2 xs:mb-3 group-hover:text-wellness-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-montserrat text-xs xs:text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 right-0 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 xs:mt-12 sm:mt-16 bg-gradient-to-r from-petrol to-petrol-dark rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 xs:w-64 h-48 xs:h-64 bg-wellness rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 xs:w-48 h-32 xs:h-48 bg-wellness rounded-full blur-2xl" />
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl xs:text-2xl md:text-3xl font-sora font-bold text-white mb-3 xs:mb-4">
              Soins Professionnels Certifiés
            </h3>
            <p className="text-white/80 font-montserrat text-sm xs:text-base max-w-2xl mx-auto mb-4 xs:mb-6 px-2 xs:px-0">
              Tous nos soins sont réalisés par notre assistante infirmière diplômée, dans le respect des normes médicales les plus strictes.
            </p>
            <a
              href="https://wa.me/212690204408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-petrol font-semibold px-5 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 font-montserrat text-sm xs:text-base w-full sm:w-auto"
            >
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
