import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipecard from '../Component/Recipecard';
import { Container } from 'react-bootstrap';
import Loader from '../Component/Loader';
import LazyLoad from 'react-lazy-load';
const Profile = () => {
    const [recipes,setRecipes] = useState([]);
    const [loading,setLoading] = useState(true);
    const chefData = useLoaderData();
    const {id} = useParams();
    console.log(chefData);
    console.log(id);
    useEffect(()=>{
        fetch('https://thai-tongue-server.vercel.app/recipes')
        .then(res=>res.json())
        .then(data=>{
            setRecipes(data.filter(data=>data.chefId==id))
            setLoading(false)
        })

    },[id])

    if(loading){
        return <Loader></Loader>
    }

   
    const {name,bannerImage,years_of_experience,number_of_recipes,likes,bio} = chefData;
    return (
        <div className='container-fluid'>
            <div className="banner">
            <LazyLoad height={762} offset={300}>
                <img src={bannerImage} className='banner' alt="" />
            </LazyLoad>
            </div>
            <div className="my-3 d-md-flex justify-space-between gap-3">
                <div className='text-success p-2'>
                    <h3>{name}</h3>
                    <p>Bio: {bio}</p>
                    <hr />
                    <p>Total Likes: {likes}</p>
                    <p>Experience: {years_of_experience} years</p>
                    <p>Number of Recipes: {number_of_recipes}</p>
                </div>
                <div>
                    <div className="d-flex flex-column flex-md-row justify-space-even align-items-center gap-3">
                    {
                        recipes.map(recipe=><Recipecard key={recipe.id} recipe={recipe}></Recipecard>)
                    }
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Profile;
