
import React from 'react';

const Reviews = (props) => {
    const { name, comment, ratings, img } = props.review;

    return (
        <div>
            <div>
                <img className='w-16' src={img} alt=''></img>
                <p>Brand name: {name}</p>
                <p> Comment:{comment}</p>
                <p><small>Ratings: {ratings}</small></p>
            </div>



        </div>
    );
};

export default Reviews;