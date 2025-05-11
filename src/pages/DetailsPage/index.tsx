import { useParams, Link } from "react-router-dom";
import listings from "assets/listings.json";
import Header from "components/Header";

const DetailsPage = () => {
  const { listingId } = useParams();
  const listing = listings.find(l => l.id === listingId);

  return (
    <>
      <Header />
      <main>
        <Link to="/">Back to Home</Link>

        {!listing ? (
          <>
          <h2>Listing not found</h2>
          <p>The requested listing could not be found.</p>
        </>
      ) : (
        <>
          <h2>Details</h2>
          <div>
            {listing.images?.[0] && (
              <img 
                src={listing.images[0]} 
                alt={`Primary image of ${listing.title}`}
              />
            )}
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
          </div>
        </>
      )}
    </main>
    </>
  );
};

export default DetailsPage;
