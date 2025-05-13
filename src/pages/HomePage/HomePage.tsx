import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import listingsData from '../../assets/listings.json';
import styles from './HomePage.module.css';

interface Listing {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const HomePage: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setListings(listingsData);
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Property Listings</h1>
      <div className={styles.listingsGrid}>
        {listings.map((listing) => (
          <Card
            key={listing.id}
            imageUrl={listing.images[0]} // Use the first image as the featured image
            title={listing.title}
            description={listing.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 