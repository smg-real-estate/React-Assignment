interface ListingProps {
  imgSrc?: string;
  title: string;
  description?: string;
  className?: string;
}

const Listing = ({ 
  imgSrc, 
  title, 
  description,
}: ListingProps) => {
  return (
    <div>
      {imgSrc && (
        <img 
          src={imgSrc} 
          alt={`${title}`}
        />
      )}
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Listing;