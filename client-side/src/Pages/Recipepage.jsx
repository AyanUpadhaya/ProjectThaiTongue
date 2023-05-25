import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../Component/Loader';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';
const Recipepage = () => {
    const [loading,setLoading]=useState(true);
    const recipeData = useLoaderData();
    const [liked,setLiked] = useState(false)
    const {title,image,rating,recipe} = recipeData;
    const notify = () => {
        toast.success('Added to your Favourites', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    const handleLiked =()=>{
        setLiked(true)
        notify()
    }
    useEffect(()=>{
        setLoading(false);
    },[recipeData])
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className='p-3'>
            <h2>{title}</h2>
            <LazyLoad offset={300}>
            <div className='d-md-flex justify-space-between gap-3'>
                <img src={image} className='img-fluid res-img' alt="" style={{height:"500px"}} />
            
            
                <div>
                    <div className='d-md-flex justify-space-between'>
                    <h3 className='flex-grow-1'>Ingredients</h3>
                    <button className='btn btn-danger' disabled={liked} onClick={handleLiked}><FaHeart></FaHeart> Fabvourite</button>
                    </div>

                    
                    <hr />
                    {
                        recipe.ingredients.map((rc)=><li>{rc.name}, Qty: {rc.quantity}</li>)
                    }
                        <p>Rating: {rating}</p>
                        <p>
                            <span><strong>Prep Time:</strong> {recipe.prep_time}</span>
                            <br />
                            <span><strong>Cook Time:</strong> {recipe.cook_time}</span>
                            <br />
                            <span><strong>Total Time:</strong> {recipe.total_time}</span>
                        </p>

                    <h3>Instructions</h3>
                    <hr />
                    <p>
                    {
                        recipe.instructions.join(' ')
                    }
                    </p>
                    

                </div>

            </div>
            </LazyLoad>
            
            <ToastContainer />
        </div>
    );
};

export default Recipepage;