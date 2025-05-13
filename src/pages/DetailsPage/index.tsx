import React from 'react';
import { useParams, Link } from "react-router-dom";
import listingsData from "../../assets/listings.json"; // Corrected path
import Header from "components/Header";

interface ListingData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Updated to use 'id'
  const listing = listingsData.find((l: ListingData) => l.id === id);

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Link to="/" style={{ marginBottom: '20px', display: 'inline-block' }}>
          &larr; Back to Home
        </Link>
        {!listing ? (
          <>
            <h2>Listing not found</h2>
            <p>The requested listing could not be found.</p>
          </>
        ) : (
          <article>
            <h2>{listing.title}</h2>
            <div className="listing-images" style={{ marginBottom: '20px' }}>
              {listing.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${listing.title} - image ${index + 1}`} 
                  style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} 
                />
              ))}
            </div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{listing.description}</p> {/* Use pre-wrap to respect newlines in description */}
          </article>
        )}
      </main>
    </>
  );
};

export default DetailsPage;
