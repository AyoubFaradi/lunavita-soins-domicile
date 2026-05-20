import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-scroll';

const menuItems = [
  { name: 'Accueil', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'Pourquoi Nous', to: 'solutions' },
  { name: 'Témoignages', to: 'testimonials' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.to);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
    },
    exit: {
      opacity: 0,
      y: '100%',
      transition: { duration: 0.28, ease: 'easeIn' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.35 },
    }),
  };

  const onDarkNav = !isScrolled;

  const linkClass = (to) => {
    const isActive = activeSection === to;
    if (onDarkNav) {
      return `font-montserrat text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${
        isActive
          ? 'text-wellness bg-white/15 shadow-[0_0_20px_rgba(74,222,128,0.25)]'
          : 'text-white hover:text-wellness hover:bg-white/10 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]'
      }`;
    }
    return `font-montserrat text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${
      isActive
        ? 'text-petrol-dark bg-petrol/10'
        : 'text-petrol hover:text-wellness-dark hover:bg-gray-100'
    }`;
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          onDarkNav
            ? 'bg-petrol-dark/80 backdrop-blur-xl border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
            : 'bg-white/98 backdrop-blur-xl border-b border-petrol/10 shadow-xl shadow-petrol/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              <Link to="home" smooth duration={800} className="cursor-pointer block">
                <img
                  src="/Lunavita.svg"
                  alt="LUNAVITA"
                  className={`h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300 ${
                    onDarkNav ? 'brightness-0 invert drop-shadow-lg' : ''
                  }`}
                />
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={800}
                    spy
                    offset={-90}
                    activeClass="!text-wellness"
                    className={linkClass(item.to)}
                    onSetActive={() => setActiveSection(item.to)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              <a
                href="tel:+212629426183"
                className={`hidden xl:inline-flex items-center gap-2 font-montserrat text-sm font-semibold transition-colors ${
                  onDarkNav ? 'text-white/90 hover:text-wellness' : 'text-petrol hover:text-wellness-dark'
                }`}
              >
                <Phone className="w-4 h-4" />
                06 29 42 61 83
              </a>
              <a
                href="https://wa.me/212629426183"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-bold px-5 py-2.5 rounded-full hover:shadow-2xl hover:shadow-wellness/40 transition-all duration-300 transform hover:scale-105 font-montserrat text-sm shadow-lg"
              >
                Rendez-vous
              </a>
            </motion.div>

            <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/212629426183"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-wellness text-petrol-dark font-bold text-[11px] px-3 py-1.5 rounded-full font-montserrat shadow-md active:scale-95 transition-transform"
            >
              RDV
            </a>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                onDarkNav
                  ? 'text-white bg-white/10 border border-white/20'
                  : 'text-petrol-dark bg-petrol/5 border border-petrol/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 bottom-0 z-[60] lg:hidden rounded-t-3xl bg-petrol-dark border-t border-white/15 shadow-[0_-8px_40px_rgba(0,0,0,0.4)] max-h-[85dvh] overflow-y-auto"
            >
              <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mt-3 mb-4" />
              <div className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <div className="flex items-center justify-between mb-5">
                  <img
                    src="/Lunavita.svg"
                    alt="LUNAVITA"
                    className="h-8 w-auto brightness-0 invert"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 rounded-lg bg-white/10"
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={item.to}
                        smooth
                        duration={800}
                        offset={-70}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3 px-3 rounded-xl font-montserrat text-base font-medium transition-all cursor-pointer ${
                          activeSection === item.to
                            ? 'text-wellness bg-white/10'
                            : 'text-white/90 active:bg-white/5'
                        }`}
                      >
                        {item.name}
                        {activeSection === item.to && (
                          <span className="w-1.5 h-1.5 rounded-full bg-wellness" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  <a
                    href="tel:+212629426183"
                    className="flex items-center justify-center gap-2 w-full text-white/90 font-montserrat text-sm py-2.5 rounded-xl border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    06 29 42 61 83
                  </a>
                  <a
                    href="https://wa.me/212629426183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-wellness text-petrol-dark font-bold py-3 rounded-xl text-center font-montserrat text-sm shadow-lg active:scale-[0.98] transition-transform"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
