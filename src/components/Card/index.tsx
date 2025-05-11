import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  imgSrc?: string;
  title: string;
  description?: string;
  onClick?: () => void; // Optional: for making the card clickable
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, onClick }) => {
  const truncateDescription = (text?: string, maxLength: number = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className={styles.card} onClick={onClick}>
      {imgSrc && (
        <img src={imgSrc} alt={title} className={styles.cardImage} />
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <p className={styles.cardDescription}>
            {truncateDescription(description)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card; 