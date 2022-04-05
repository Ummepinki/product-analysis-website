import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);




    return (
        <div>
            <div className='mx-auto flex items-center justify-around'>
                <div>
                    <h1 className='space-y-4 text-5xl uppercase font-bold'>The Luxary Perfume Brands </h1><br />
                    <p>
                        Chanel may be known for its timeless tweeds and interlocking Cs, but the birth of Chanel No. 5 in 1921 gave the fashion house a name in the fragrance world.
                    </p>

                </div>
                <div className='w-50'>
                    <img src='https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/coco-mademoiselle-eau-de-parfum-spray-100ml.3145891165203.jpg' alt=''></img>
                </div>
            </div>
            <div>
                <h1 className='mb-4 pb-6 font-bold text-2xl'>Customer Reviews</h1>
                <div className=' gap-0 grid grid-cols-3'>
                    {
                        reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>

                <button className='font-bold py-2 px-4 rounded bg-blue-500 text-white mt-4'>
                    <p>All Review</p>
                </button>

            </div>

        </div>




    );
};

export default Home;