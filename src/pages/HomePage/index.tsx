import React from 'react';
import Header from 'components/Header';
import Listing from 'components/Listing';
import listings from 'assets/listings.json';
import Callout from 'components/Callout';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Switzerland's smartest property search</h1>
        <Callout />
        {listings.map((listing) => (
          <Listing
            key={listing.id}
            imgSrc={listing.images[0]}
            title={listing.title}
            description={listing.description}
          />
        ))}
      </main>
    </>
  );
};

export default Home;