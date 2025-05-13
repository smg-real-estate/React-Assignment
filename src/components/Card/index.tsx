import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  className 
}) => {
  const truncateDescription = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const truncatedDescription = truncateDescription(description, 100);

  return (
    <div className={`card ${className || ''}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="card-image" 
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default Card; 