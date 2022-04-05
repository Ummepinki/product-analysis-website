import React from 'react';

const Review = (props) => {
    const { name, comment, ratings, img } = props.review;

    return (
        <div>
            <div className='border-2 rounded-md m-10 h-48'>

                <img className='w-16 h-16' src={img} alt=''></img>
                <p className='m-2'>Brand name: {name}</p>
                <p className='m-2'> Comment:{comment}</p>
                <p className='m-0'><small>Ratings: {ratings}</small></p>
            </div>



        </div>
    );
};

export default Review;