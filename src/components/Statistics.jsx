import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { BG_IMAGES } from '../constants/images';

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const StatCard = ({ icon, number, suffix, label }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-petrol-dark/40 backdrop-blur-md rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 text-center border border-wellness/25 shadow-lg shadow-black/20"
    >
      <div className="flex items-center justify-center mb-3 xs:mb-4">
        <div className="text-wellness">{icon}</div>
      </div>
      <div className="text-2xl xs:text-3xl sm:text-4xl font-sora font-bold text-white mb-1 xs:mb-2">
        <AnimatedCounter value={number} />{suffix}
      </div>
      <p className="text-xs xs:text-sm text-white/80 font-montserrat">{label}</p>
    </motion.div>
  );
};

const Statistics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-16 xs:py-20 sm:py-24 overflow-hidden">
      {/* Fond web + overlay pétrole (même ambiance que Hero / Services) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={BG_IMAGES.statistics}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-petrol-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-dark/75 via-petrol/50 to-petrol-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/60 via-transparent to-petrol-dark/40" />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block bg-white/10 text-white font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-montserrat mb-3 xs:mb-4">
            Nos Réalisations
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-white mb-3 xs:mb-4 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
            Chiffres Clés
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-white/90 font-montserrat max-w-2xl mx-auto px-2 xs:px-0 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            L'impact de nos soins infirmiers sur la santé de nos patients
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8"
        >
          <StatCard
            icon={<Users className="w-6 xs:w-8 h-6 xs:h-8" />}
            number={500}
            suffix="+"
            label="Patients Soignés"
          />
          <StatCard
            icon={<Award className="w-6 xs:w-8 h-6 xs:h-8" />}
            number={99}
            suffix="%"
            label="Taux de Satisfaction"
          />
          <StatCard
            icon={<Globe className="w-6 xs:w-8 h-6 xs:h-8" />}
            number={100}
            suffix="%"
            label="Engagement Qualité"
          />
          <StatCard
            icon={<Heart className="w-6 xs:w-8 h-6 xs:h-8" />}
            number={24}
            suffix="/7"
            label="Disponibilité"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
