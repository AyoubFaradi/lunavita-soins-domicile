import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mme Benali',
      role: 'Patient',
      content: 'L\'infirmière est très professionnelle et douce. Les soins à domicile sont parfaits pour ma mère âgée. Je recommande vivement.',
      rating: 5,
      avatar: 'MB',
      color: 'from-petrol to-petrol-dark',
    },
    {
      name: 'M. El Fassi',
      role: 'Famille',
      content: 'Service exceptionnel! L\'infirmière est venue en urgence pour une perfusion. Très réactive et compétente. Merci pour votre disponibilité.',
      rating: 5,
      avatar: 'EF',
      color: 'from-wellness to-wellness-dark',
    },
    {
      name: 'Fatima T.',
      role: 'Patient',
      content: 'Les prises de sang à domicile sont beaucoup plus confortables. Fatima Ezahraa est très douce et professionnelle. Un accompagnement de qualité, ça se voit!',
      rating: 5,
      avatar: 'FT',
      color: 'from-petrol to-wellness',
    },
    {
      name: 'Dr. Kabbaj',
      role: 'Médecin',
      content: 'Je recommande LUNAVITA CARE à mes patients. L\'infirmière est très compétente et les soins sont réalisés avec professionnalisme.',
      rating: 5,
      avatar: 'DK',
      color: 'from-petrol-dark to-petrol',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="testimonials" className="py-16 xs:py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block bg-wellness/10 text-wellness-dark font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-montserrat mb-3 xs:mb-4">
            Témoignages
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-petrol mb-3 xs:mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto px-2 xs:px-0">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white p-5 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-petrol/10 transition-all duration-500 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 xs:top-6 right-4 xs:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 xs:w-16 h-12 xs:h-16 text-petrol" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 xs:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 xs:w-5 h-4 xs:h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 font-montserrat text-xs xs:text-sm sm:text-base leading-relaxed mb-4 xs:mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 xs:gap-4">
                <div className={`w-10 xs:w-12 h-10 xs:h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-sora font-bold text-sm xs:text-base`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-petrol text-sm xs:text-base">{testimonial.name}</h4>
                  <p className="text-xs xs:text-sm text-gray-500 font-montserrat">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 xs:mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 px-2 xs:px-0"
        >
          <div className="flex items-center gap-2 text-gray-600 font-montserrat text-xs xs:text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 xs:w-5 h-4 xs:h-5 text-wellness fill-wellness" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 sur 500+ avis</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-montserrat text-xs xs:text-sm">
            <span className="font-semibold text-wellness-dark">✓</span>
            <span>100% Satisfait ou Remboursé</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-montserrat text-xs xs:text-sm">
            <span className="font-semibold text-wellness-dark">✓</span>
            <span>Livraison Gratuite</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
