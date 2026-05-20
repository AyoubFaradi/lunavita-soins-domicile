import { motion } from 'framer-motion';
import { ShoppingCart, Star, Award, Leaf, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Vitalité Premium',
      description: 'Complexe multivitaminé haute qualité pour une énergie optimale',
      price: '349 DH',
      rating: 4.9,
      reviews: 128,
      icon: <Award className="w-6 h-6" />,
      badge: 'Best Seller',
      gradient: 'from-petrol to-petrol-dark',
    },
    {
      id: 2,
      name: 'Immunité Plus',
      description: 'Renforcez vos défenses naturelles avec notre formule exclusive',
      price: '429 DH',
      rating: 4.8,
      reviews: 95,
      icon: <Shield className="w-6 h-6" />,
      badge: 'Nouveau',
      gradient: 'from-wellness to-wellness-dark',
    },
    {
      id: 3,
      name: 'Zen Nature',
      description: 'Détente et sérénité avec des ingrédients 100% naturels',
      price: '299 DH',
      rating: 4.7,
      reviews: 76,
      icon: <Leaf className="w-6 h-6" />,
      badge: 'Bio',
      gradient: 'from-petrol to-wellness',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-wellness/10 text-wellness-dark font-semibold px-4 py-2 rounded-full text-sm font-montserrat mb-4">
            Nos Produits
          </span>
          <h2 className="text-4xl sm:text-5xl font-sora font-bold text-petrol mb-4">
            Solutions Premium
          </h2>
          <p className="text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">
            Découvrez notre gamme de produits wellness conçus avec les meilleurs ingrédients naturels
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden hover:shadow-2xl hover:shadow-petrol/10 transition-all duration-500"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-wellness to-wellness-dark text-white text-xs font-bold px-3 py-1 rounded-full font-montserrat">
                  {product.badge}
                </span>
              </div>

              {/* Card Header */}
              <div className={`bg-gradient-to-br ${product.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl" />
                </div>
                <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl text-white">
                  {product.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-montserrat">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-sora font-bold text-petrol mb-2 group-hover:text-wellness-dark transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-montserrat text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-sora font-bold text-petrol">{product.price}</span>
                  </div>
                  <a
                    href="https://wa.me/212629426183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 bg-gradient-to-r from-petrol to-petrol-dark text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-petrol/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="font-montserrat text-sm font-medium">Commander</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/212629426183"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-wellness to-wellness-dark text-petrol-dark font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-wellness/40 transition-all duration-300 transform hover:scale-105 font-montserrat"
          >
            Voir tous nos produits sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
