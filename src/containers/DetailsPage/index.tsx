import React, { FC } from "react";
import { useParams } from "react-router-dom";
import listings from "../../assets/listings";

const DetailsPage: FC = () => {
  const { listingId } = useParams();
  const listing = listings.find((l: any) => l.id === listingId);

  if (!listing) {
    return (
      <div>
        <h1>Listing not found.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Details Page</h1>

      <div className="listingSummary">
        {listing.images && <img src={listing.images[0]} alt="" />}
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
