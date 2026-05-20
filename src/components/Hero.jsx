import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { BG_IMAGES } from '../constants/images';

const features = [
  { icon: Heart, label: 'Soins experts' },
  { icon: Shield, label: 'Diplômée' },
  { icon: Sparkles, label: '24/7' },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-24"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={BG_IMAGES.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/55 via-black/5 to-petrol-dark/25 md:from-petrol-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16"
      >
        {/* Card — compacte sur mobile */}
        <div className="rounded-2xl md:rounded-3xl border border-white/20 bg-black/30 md:bg-black/25 backdrop-blur-md md:backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.3)] md:shadow-[0_8px_40px_rgba(0,0,0,0.25)] px-4 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 text-center">

          <motion.div variants={itemVariants} className="mb-4 md:mb-8">
            <div className="inline-flex items-center gap-1.5 bg-white/12 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-white/25">
              <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-wellness shrink-0" />
              <span className="text-white font-montserrat text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
                Soins à domicile
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[1.45rem] leading-[1.2] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-sora font-bold text-white mb-3 md:mb-6 tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]"
          >
            Des soins infirmiers
            <span className="block mt-1 text-wellness text-[1.35rem] sm:text-inherit sm:mt-2">
              professionnels chez vous
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base md:text-xl font-montserrat text-white/95 mb-5 md:mb-10 max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]"
          >
            <span className="md:hidden">
              Accompagnement professionnel et bienveillant à domicile.
            </span>
            <span className="hidden md:inline">
              Une équipe qualifiée disponible pour vous accompagner à domicile avec professionnalisme et bienveillance.
            </span>
            <span className="block mt-1.5 md:mt-3 text-wellness-light text-[11px] sm:text-sm md:text-base font-medium">
              Fatima Ezahraa — expertise et douceur
            </span>
          </motion.p>

          {/* CTA mobile : 2 colonnes égales, fines */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:flex-row md:justify-center md:gap-5 md:max-w-none"
          >
            <a
              href="https://wa.me/212629426183"
              target="_blank"
              rel="noopener noreferrer"
              className="group touch-manipulation col-span-1 flex items-center justify-center gap-1 rounded-xl md:rounded-full bg-wellness text-petrol-dark font-semibold md:font-bold px-2.5 py-2.5 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[11px] sm:text-sm md:text-base leading-none shadow-[0_2px_10px_rgba(74,222,128,0.4)] md:shadow-[0_4px_24px_rgba(74,222,128,0.45)] md:bg-gradient-to-r md:from-wellness md:to-wellness-dark transition-all active:scale-[0.96] md:hover:scale-[1.03] font-montserrat md:w-auto"
            >
              <span className="truncate">Rendez-vous</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
            </a>

            <Link
              to="services"
              smooth
              duration={800}
              className="group touch-manipulation col-span-1 flex items-center justify-center gap-0.5 rounded-xl md:rounded-full border border-white/40 md:border-2 md:border-white/50 bg-white/8 md:bg-white/10 backdrop-blur-sm text-white font-medium md:font-semibold px-2 py-2.5 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[10px] sm:text-sm md:text-base leading-none transition-all active:scale-[0.96] font-montserrat cursor-pointer md:w-auto"
            >
              <span className="truncate">Services</span>
              <ChevronDown className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0 opacity-80" />
            </Link>
          </motion.div>
        </div>

        {/* Features — 3 icônes compactes sur mobile */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm sm:max-w-3xl mx-auto mt-5 sm:mt-10 md:mt-12"
        >
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 sm:gap-2.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/25 backdrop-blur-sm border border-white/12"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/10 border border-white/15">
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-wellness" />
              </div>
              <span className="text-white font-montserrat text-[9px] sm:text-xs md:text-sm font-semibold text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-wellness rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
