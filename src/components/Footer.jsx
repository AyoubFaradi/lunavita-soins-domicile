import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'À Propos', to: 'solutions' },
      { name: 'Nos Services', to: 'services' },
      { name: 'Témoignages', to: 'testimonials' },
      { name: 'Contact', to: 'contact' },
    ],
    support: [
      { name: 'FAQ', to: 'faq' },
      { name: 'Disponibilité', to: 'contact' },
      { name: 'Zones couvertes', to: 'contact' },
      { name: 'Urgences', to: 'contact' },
    ],
    wellness: [
      { name: 'Soins infirmiers', to: 'services' },
      { name: 'Prises de sang', to: 'services' },
      { name: 'Injections', to: 'services' },
      { name: 'Assistance', to: 'services' },
    ],
  };

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.me/212690204408', name: 'WhatsApp' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-petrol via-petrol-dark to-petrol text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-10 xs:py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4 xs:space-y-6">
            <img src="/Lunavita.svg" alt="LUNAVITA" className="h-10 xs:h-12 w-auto brightness-0 invert" />
            <p className="text-white/70 font-montserrat text-xs xs:text-sm leading-relaxed">
              LUNAVITA CARE - Soins infirmiers professionnels à domicile. Assistante infirmière dévouée à votre bien-être.
            </p>
            <div className="flex items-center gap-2 xs:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 xs:w-10 h-8 xs:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-wellness hover:text-petrol-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-sora font-bold text-base xs:text-lg mb-4 xs:mb-6">Entreprise</h3>
            <ul className="space-y-2 xs:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    className="text-white/70 font-montserrat text-xs xs:text-sm hover:text-wellness transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-sora font-bold text-base xs:text-lg mb-4 xs:mb-6">Support</h3>
            <ul className="space-y-2 xs:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    className="text-white/70 font-montserrat text-xs xs:text-sm hover:text-wellness transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-3 xs:space-y-4">
            <h3 className="font-sora font-bold text-base xs:text-lg mb-4 xs:mb-6">Contact</h3>
            <div className="space-y-2 xs:space-y-3">
              <a
                href="https://wa.me/212690204408"
                className="flex items-center gap-2 xs:gap-3 text-white/70 font-montserrat text-xs xs:text-sm hover:text-wellness transition-colors duration-300"
              >
                <Phone className="w-3 xs:w-4 h-3 xs:h-4" />
                <span>06 90 20 44 08</span>
              </a>
              <a
                href="https://wa.me/212690204408"
                className="flex items-center gap-2 xs:gap-3 text-white/70 font-montserrat text-xs xs:text-sm hover:text-wellness transition-colors duration-300"
              >
                <MessageCircle className="w-3 xs:w-4 h-3 xs:h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-2 xs:gap-3 text-white/70 font-montserrat text-xs xs:text-sm">
                <MapPin className="w-3 xs:w-4 h-3 xs:h-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 xs:gap-4">
            <p className="text-white/60 font-montserrat text-xs xs:text-sm text-center md:text-left">
              © 2026 LUNAVITA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
