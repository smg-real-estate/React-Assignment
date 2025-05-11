import Header from 'components/Header';
import Card from 'components/Card';
import listingsData from 'assets/listings.json';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.pageTitle}>Switzerland's smartest property search</h1>
        <div className={`listings-grid ${styles.homeListingsGrid}`}>
          {listingsData.map((listing) => (
            <Link key={listing.id} to={`/details/${listing.id}`} className={`listing-link ${styles.homeListingLink}`}>
              <Card
                title={listing.title}
                description={listing.description}
                imgSrc={listing.images && listing.images.length > 0 ? listing.images[0] : undefined}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;