import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', wordClassName = '' }) => {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden align-bottom">
          <span className={`inline-block split-word ${wordClassName}`}>
            {word}
          </span>
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};
