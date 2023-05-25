import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {id,name,image,years_of_experience,likes} = chef;
    return (
        <div style={{width: "18rem"}} className='my-5 border border-light-2 py-3 shadow'>
        <div className='d-flex flex-column justify-content-center align-items center text-center'>
            <img src={image} className="card-img-top rounded-circle cs-img-size d-block m-auto" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Years of Experience: {years_of_experience}
                </p>
                <p className="card-text">
                    Likes: {likes}
                </p>
                <Link to={`/recipes/${id}`} className="btn btn-cs-primary">View Recipeies</Link>
            </div>
        </div>
        </div>
    );
};

export default Chef;