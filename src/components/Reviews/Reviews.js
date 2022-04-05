
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className=' gap-2 grid grid-cols-3'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>



    );
};

export default Reviews;