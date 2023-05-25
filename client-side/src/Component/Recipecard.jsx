import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Star from './Star';

const Recipecard = ({recipe}) => {
    const {id,title,image,rating} = recipe;

    return (
        <div style={{width: "18rem",height:"25rem"}} className=' border border-light-2 p-0 position-relative shadow'>
        <div className=''>
            <img src={image} className="card-img" alt={title} />
            <div className="card-body d-flex flex-column justify-content-center align-items center text-center">
                <h5 className="card-title">{title}</h5>
               
                <p className="card-text text-warning">
                    <Star stars={rating}></Star>
                </p>

                <p className='text-success'>
                    A handful of simple ingredients typify the fresh vibrant flavours of Greatcooking.
                </p>
                <Link to={`/recipes/recipepage/${id}`} className="btn btn-cs-primary position-absolute bottom-0 start-50 translate-middle ">Show Recipe</Link>
            </div>
        </div>
        </div>
    );
};

export default Recipecard;