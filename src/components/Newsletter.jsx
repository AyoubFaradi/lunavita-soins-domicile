import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 xs:py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-petrol to-petrol-dark rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 xs:w-64 h-48 xs:h-64 bg-wellness rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 xs:w-48 h-32 xs:h-48 bg-wellness rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center justify-center w-14 xs:w-16 h-14 xs:h-16 bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl text-white flex-shrink-0"
              >
                <Mail className="w-6 xs:w-8 h-6 xs:h-8" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-xl xs:text-2xl md:text-3xl sm:text-4xl font-sora font-bold text-white mb-2 xs:mb-4">
                  Restez Informé
                </h2>
                <p className="text-white/80 font-montserrat text-sm xs:text-base mb-4 xs:mb-6 max-w-xl">
                  Inscrivez-vous pour recevoir nos conseils santé, informations sur nos services et disponibilités.
                </p>

                {/* Form */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 xs:gap-4 max-w-lg mx-auto lg:mx-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      required
                      className="flex-1 px-4 xs:px-6 py-3 xs:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 font-montserrat text-sm xs:text-base focus:outline-none focus:border-wellness transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-semibold px-5 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full hover:shadow-2xl hover:shadow-wellness/40 transition-all duration-300 transform hover:scale-105 font-montserrat text-sm xs:text-base sm:text-lg whitespace-nowrap"
                    >
                      S'inscrire
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 bg-wellness/20 backdrop-blur-sm px-4 xs:px-6 py-3 xs:py-4 rounded-full border border-wellness/30"
                  >
                    <CheckCircle className="w-5 xs:w-6 h-5 xs:h-6 text-wellness" />
                    <span className="text-white font-montserrat text-sm xs:text-base font-medium">
                      Merci pour votre inscription!
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-white/60 font-montserrat text-xs mt-4">
              En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
