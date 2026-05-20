import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Comment prendre rendez-vous?',
      answer: 'Vous pouvez prendre rendez-vous directement via WhatsApp en cliquant sur le bouton "Contacter" sur notre site. Notre infirmière vous répondra rapidement pour fixer un rendez-vous à domicile.',
    },
    {
      question: 'Proposez-vous le déplacement à domicile?',
      answer: 'Oui, nous nous déplaçons directement chez vous pour tous les soins infirmiers. Notre infirmière se rend à votre domicile pour votre confort et votre bien-être.',
    },
    {
      question: 'Quelles sont les zones couvertes?',
      answer: 'Nous intervenons principalement à Casablanca et ses environs. Contactez-nous pour vérifier si votre zone est couverte.',
    },
    {
      question: 'Quelle est votre disponibilité?',
      answer: 'Notre infirmière est disponible 24h/24 et 7j/7 pour les urgences. Pour les rendez-vous programmés, nous nous adaptons à vos horaires.',
    },
    {
      question: 'Quels types de soins proposez-vous?',
      answer: 'Nous proposons une large gamme de soins : injections, prises de sang, perfusions, pansements, suivi diabétique, assistance personnes âgées, soins post-opératoires et accompagnement médical.',
    },
    {
      question: 'Qui réalise les soins à domicile?',
      answer: 'Fatima Ezahraa est assistante infirmière diplômée. Elle met son savoir-faire et sa bienveillance au service de tous types de soins infirmiers à domicile.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="faq" className="py-16 xs:py-20 sm:py-24 bg-white">
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
            FAQ
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-petrol mb-3 xs:mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto px-2 xs:px-0">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-3 xs:space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl xs:rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6 flex items-center justify-between text-left"
              >
                <span className="font-sora font-semibold text-petrol text-sm xs:text-base sm:text-lg pr-8 xs:pr-12">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 xs:w-6 h-5 xs:h-6 text-petrol transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 xs:px-6 sm:px-8 pb-4 xs:pb-5 sm:pb-6">
                      <p className="text-gray-600 font-montserrat text-xs xs:text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 xs:mt-12 sm:mt-16 text-center px-2 xs:px-0"
        >
          <p className="text-gray-600 font-montserrat text-sm xs:text-base mb-4 xs:mb-6">
            Vous ne trouvez pas votre réponse?
          </p>
          <a
            href="https://wa.me/212629426183"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-semibold px-5 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full hover:shadow-2xl hover:shadow-wellness/40 transition-all duration-300 transform hover:scale-105 font-montserrat text-sm xs:text-base sm:text-lg w-full sm:w-auto"
          >
            <MessageCircle className="w-4 xs:w-5 h-4 xs:h-5" />
            <span>Contactez-nous sur WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
