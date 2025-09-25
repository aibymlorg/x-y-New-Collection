import React, { useState, useEffect } from 'react';

const products = [
  {
    logo: 'x(y)',
    title: 'Discover the Secret of Hokkaido',
    description: "A new era of skincare, infused with nature's most potent essences.",
    logoStyle: { fontFamily: 'cursive', color: '#EAEAEA' },
    titleColor: 'text-gray-400',
    descriptionColor: 'text-gray-400',
    image: null,
  },
  {
    logo: 'm(fade)',
    title: 'Secret of Hokkaido Hamanashi Roses',
    description: 'Spot Solution · 30ml · Made in Japan',
    logoStyle: { fontFamily: "'Cormorant Garamond', serif", color: '#D4AF37' },
    titleColor: 'text-gray-300',
    descriptionColor: 'text-gray-500',
    image: '/images/hokkaido-hamanashi-roses.png',
  },
  {
    logo: 'a(defend)',
    title: 'Living Gold Infused Rose Water',
    description: 'Age Defence Facial Treatment Essence · 80ml · Made in Singapore',
    logoStyle: { fontFamily: "'Cormorant Garamond', serif", color: '#D4AF37' },
    titleColor: 'text-gray-300',
    descriptionColor: 'text-gray-500',
    image: '/images/living-gold-rose-water.png',
  },
  {
    logo: 'p(free)',
    title: 'Hokkaido Miraculous Seaberry Fruit',
    description: 'Pollution, Pore-Plug Free Cleansing Oil · 75ml · Made in Japan',
    logoStyle: { fontFamily: "'Cormorant Garamond', serif", color: '#D4AF37' },
    titleColor: 'text-gray-300',
    descriptionColor: 'text-gray-500',
    image: '/images/seaberry-fruit-cleansing-oil.png',
  },
];

const RotatingProductDisplay: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change product every 4 seconds
    return () => clearTimeout(timer);
  }, [index]); 

  const product = products[index];

  return (
    <div
      key={index}
      className="w-full max-w-4xl animate-fade-in flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
    >
      {product.image && (
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
      <div className={`space-y-4 ${product.image ? 'text-center md:text-left' : 'text-center'}`}>
        <header className="space-y-2">
          <h1 className={`${product.image ? 'text-4xl md:text-6xl' : 'text-6xl md:text-8xl'} font-bold tracking-tighter`} style={product.logoStyle}>
            {product.logo}
          </h1>
          <p className={`text-xl md:text-2xl ${product.titleColor} tracking-wide ${product.image ? 'pt-2' : 'pt-4'}`}>
            {product.title}
          </p>
        </header>

        <div>
          <p className={`text-lg md:text-xl ${product.descriptionColor} ${!product.image ? 'max-w-2xl mx-auto' : ''}`}>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RotatingProductDisplay;