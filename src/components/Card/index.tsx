import { Link } from "react-router-dom";
import Listing from "components/Listing";
import "./styles.css";

export interface CardProps {
  imageSrc?: string;
  title: string;
  description?: string;
  to?: string;
  className?: string;
}

function truncateDescription(input: string | undefined, maxLength: number): string | undefined {
  if (!input) return input;
  if (input.length <= maxLength) return input;
  return `${input.slice(0, maxLength).trim()}…`;
}

const Card = ({ imageSrc, title, description, to, className = "" }: CardProps) => {
  const content = (
    <div className={`card ${className}`}>
      <Listing
        imgSrc={imageSrc}
        title={title}
        description={truncateDescription(description, 100)}
      />
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="card-link" aria-label={`View details for ${title}`}>
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
