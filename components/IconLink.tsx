import React from 'react';

interface IconLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 border border-gray-600 rounded-full text-gray-300 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 group"
      aria-label={label}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="text-lg font-medium tracking-wide">{label}</span>
    </a>
  );
};

export default IconLink;