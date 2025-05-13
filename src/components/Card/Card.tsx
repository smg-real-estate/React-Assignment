import React from 'react';
import styles from './Card.module.css'; // Import CSS module

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  const truncatedDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <div className={styles.card}> {/* Use styles.card */}
      <img src={imageUrl} alt={title} className={styles.cardImage} /> {/* Use styles.cardImage */}
      <div className={styles.cardContent}> {/* Use styles.cardContent */}
        <h3 className={styles.cardTitle}>{title}</h3> {/* Use styles.cardTitle */}
        <p className={styles.cardDescription}>{truncatedDescription}</p> {/* Use styles.cardDescription */}
      </div>
    </div>
  );
};

export default Card; 