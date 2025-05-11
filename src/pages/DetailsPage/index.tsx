import { useParams, Link } from "react-router-dom";
import listings from "assets/listings.json";
import Header from "components/Header";
import styles from './DetailsPage.module.css'; // Import CSS module

const DetailsPage = () => {
  const { listingId } = useParams();
  const listing = listings.find(l => l.id === listingId);

  return (
    <>
      <Header />
      <main>
        <Link to="/" className={styles.backLink}>Back to Home</Link>

        {!listing ? (
          <div className={styles.notFound}>
            <h2 className={styles.notFoundTitle}>Listing not found</h2>
            <p className={styles.notFoundMessage}>The requested listing could not be found.</p>
          </div>
        ) : (
          <div className={styles.detailsContainer}>
            {listing.images?.[0] && (
              <img 
                src={listing.images[0]} 
                alt={`Primary image of ${listing.title}`}
                className={styles.listingImage}
              />
            )}
            <h3 className={styles.listingTitle}>{listing.title}</h3>
            <p className={styles.listingDescription}>{listing.description}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default DetailsPage;
