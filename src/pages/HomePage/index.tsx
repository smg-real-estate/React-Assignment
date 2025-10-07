import Header from 'components/Header';
import Card from 'components/Card';
import listings from 'assets/listings.json';
import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Switzerland's smartest property search</h1>
        <div className="cards-grid" role="list">
          {listings.map((listing) => (
            <div role="listitem" key={listing.id}>
              <Card
                imageSrc={listing.images?.[0]}
                title={listing.title}
                description={listing.description}
                to={`/details/${listing.id}`}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;