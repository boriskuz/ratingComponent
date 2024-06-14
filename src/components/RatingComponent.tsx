import { useEffect, useState } from 'react';

interface StarRatingProps {
  starLength?: number;
}

const StarRating = ({ starLength = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);

  useEffect(() => {
    const ratingStorage = window.sessionStorage.getItem('rating');
    if (ratingStorage) {
      setRating(+ratingStorage);
    }
  }, [rating]);

  const handleRating = (ratingPar: number) => {
    // if (ratingPar === rating) {
    //   setRating(0);
    //   window.sessionStorage.setItem('rating', JSON.stringify(0));
    //   return;
    // }
    setRating(ratingPar);
    window.sessionStorage.setItem('rating', JSON.stringify(ratingPar));
  };

  return (
    <div className="container">
      <div className="star-container">
        {Array.from({ length: starLength }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;

interface StarProps {
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: boolean;
}

function Star({ onRate, onHoverIn, onHoverOut, full }: StarProps) {
  return (
    <span role="button" className="star" onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <svg width="38" height="42" viewBox="0 0 38 42" fill="#ffb400" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z"
            fill="#ffb400"
          />
        </svg>
      ) : (
        <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z"
            fill="#808080"
          />
        </svg>
      )}
    </span>
  );
}
