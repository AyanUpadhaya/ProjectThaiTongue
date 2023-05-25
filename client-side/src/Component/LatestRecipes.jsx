import React, { useEffect, useState } from 'react';
import Recipecard from './Recipecard';

const LatestRecipes = () => {
    const [recipes,setRecipes]= useState([])
    useEffect(()=>{
        fetch('https://thai-tongue-server.vercel.app/recipes/')
        .then(res=>res.json())
        .then(data=>setRecipes(data.slice(0,4)))
    },[])
    return (
        <div className='py-3 mb-3'>
            <h2 className='display-2 text-center fw-bold'>Latest Recipes</h2>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-3">
                    {
                        recipes.map(recipe=><Recipecard key={recipe.id} recipe={recipe}></Recipecard>)
                    }
            </div>

            
        </div>
    );
};

export default LatestRecipes;