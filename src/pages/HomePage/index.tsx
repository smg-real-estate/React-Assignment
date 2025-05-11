import Header from 'components/Header';
import Listing from 'components/Listing';
import listingsData from 'assets/listings.json';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Switzerland's smartest property search</h1>
        <div className="listings-grid">
          {listingsData.map((listing) => (
            <Listing
              key={listing.id}
              title={listing.title}
              description={listing.description}
              imgSrc={listing.images && listing.images.length > 0 ? listing.images[0] : undefined}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;