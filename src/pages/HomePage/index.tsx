import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Listing from 'components/Listing';
import listingsData from '../../assets/listings.json';

interface ListingData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const HomePage: React.FC = () => {
  const [listings, setListings] = useState<ListingData[]>([]);

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    setListings(listingsData);
  }, []);

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Switzerland's smartest property search</h1>
        <div className="listings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {listings.map((listing) => (
            <Link 
              key={listing.id} 
              to={`/listing/${listing.id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Listing 
                title={listing.title} 
                description={listing.description.substring(0, 100) + '...'}
                imgSrc={listing.images[0]}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;