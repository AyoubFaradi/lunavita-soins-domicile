import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { BG_IMAGES } from '../constants/images';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[4.5rem] xs:pt-20 sm:pt-24"
    >
      {/* Wallpaper — image inchangée */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={BG_IMAGES.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlays légers — le wallpaper reste bien visible */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/50 via-black/5 to-petrol-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Contenu */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-10 xs:py-12 sm:py-16"
      >
        {/* Card glassmorphism premium */}
        <div className="rounded-2xl xs:rounded-3xl border border-white/20 bg-black/25 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] px-5 xs:px-8 sm:px-10 md:px-12 py-8 xs:py-10 sm:py-12 md:py-14 text-center">

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-5 xs:mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 xs:px-5 py-2 xs:py-2.5 rounded-full border border-white/30 shadow-lg">
              <Heart className="w-4 h-4 xs:w-5 xs:h-5 text-wellness shrink-0" />
              <span className="text-white font-montserrat text-xs xs:text-sm font-semibold tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                Soins Infirmiers à Domicile
              </span>
            </div>
          </motion.div>

          {/* Titre */}
          <motion.h1
            variants={itemVariants}
            className="text-[1.65rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-bold text-white mb-4 xs:mb-5 sm:mb-6 leading-[1.15] tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,1)]"
          >
            Des soins infirmiers
            <span className="block mt-1 xs:mt-2 text-wellness [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
              professionnels chez vous
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg md:text-xl font-montserrat text-white mb-7 xs:mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed sm:leading-loose [text-shadow:0_2px_12px_rgba(0,0,0,0.85)] px-1"
          >
            Une équipe qualifiée disponible pour vous accompagner à domicile avec professionnalisme et bienveillance.
            <span className="block mt-2 xs:mt-3 text-wellness-light font-medium">
              Fatima Ezahraa vous accompagne avec expertise, douceur et soins de qualité.
            </span>
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 xs:gap-4 sm:gap-5"
          >
            <a
              href="https://wa.me/212629426183"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 xs:gap-3 bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-bold px-6 xs:px-8 py-3.5 xs:py-4 rounded-full shadow-[0_4px_24px_rgba(74,222,128,0.45)] hover:shadow-[0_6px_32px_rgba(74,222,128,0.55)] hover:brightness-105 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] font-montserrat text-sm xs:text-base w-full xs:w-auto min-h-[48px]"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
            </a>

            <Link
              to="services"
              smooth
              duration={800}
              className="group inline-flex items-center justify-center gap-2 text-white font-semibold px-6 xs:px-8 py-3.5 xs:py-4 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-wellness hover:text-wellness-light transition-all duration-300 font-montserrat text-sm xs:text-base w-full xs:w-auto cursor-pointer min-h-[48px] [text-shadow:0_1px_4px_rgba(0,0,0,0.4)] shadow-lg"
            >
              Découvrir nos services
              <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-y-0.5 transition-transform duration-300 shrink-0" />
            </Link>
          </motion.div>
        </div>

        {/* Features — sous la card */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 max-w-3xl mx-auto mt-8 xs:mt-10 sm:mt-12"
        >
          {[
            { icon: Heart, label: 'Soins experts & bienveillants' },
            { icon: Shield, label: "Diplôme d'infirmière" },
            { icon: Sparkles, label: 'Disponible 24/7' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-row xs:flex-col items-center gap-3 xs:gap-2.5 p-3 xs:p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
            >
              <div className="w-11 h-11 xs:w-12 xs:h-12 shrink-0 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <Icon className="w-5 h-5 xs:w-6 xs:h-6 text-wellness" />
              </div>
              <span className="text-white font-montserrat text-xs xs:text-sm font-semibold text-left xs:text-center leading-snug [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 xs:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-wellness rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
