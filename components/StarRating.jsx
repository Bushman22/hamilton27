import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500 w-6 h-6" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500 w-6 h-6" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-yellow-500 w-6 h-6" />
      ))}
    </div>
  );
};

export default StarRating;
