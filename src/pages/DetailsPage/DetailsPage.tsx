import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import listingsData from '../../assets/listings.json';
import styles from './DetailsPage.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Listing {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const DetailsPage: React.FC = () => {
  const { listingId } = useParams<{ listingId: string }>();
  const navigate = useNavigate();
  
  const listing = listingsData.find((l) => l.id === listingId!);

  const handleBack = () => {
    navigate(-1); 
  };

  if (!listing) {
    return <div>Listing not found. <button onClick={handleBack}>Go Back</button></div>;
  }

  // Format description with <br> tags for HTML rendering
  const formattedDescription = { __html: listing.description.replace(/\r\n/g, '<br />') };

  return (
    <div className={styles.detailsPage}>
       <button onClick={handleBack} className={styles.backButton}>&larr; Back</button>
      <h1>{listing.title}</h1>
      <div className={styles.imageGallery}>
        {listing.images.map((image, index) => (
          <img key={index} src={image} alt={`${listing.title} - Image ${index + 1}`} className={styles.detailImage} />
        ))}
      </div>
      {/* Use dangerouslySetInnerHTML to render description with line breaks */}
      <p 
        className={styles.description} 
        dangerouslySetInnerHTML={formattedDescription}
      />
    </div>
  );
};

export default DetailsPage; 