import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
const Login = () => {
    const {loginUser,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const [err,setErr] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSignIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch(error=>{
            setErr(error.message.split(':')[1]);
            return;
        })


    }
    const loginWithGoogle =()=>{
        signInWithGoogle()
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch((error)=>console.log(error))
    }
    const loginWithGitHub =()=>{
        signInWithGithub()
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch((error)=>console.log(error))
    }
    return (
        <div className='container '>
            <div className="w-75 m-auto">
            <h2 className='text-center'>Login</h2>
            <form className='border border-success-2 rounded p-3' onSubmit={handleSignIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Button variant='outline-primary' className='mr-3' onClick={loginWithGoogle}><FaGoogle></FaGoogle> Google Sign In</Button>
                    <br/>
                    <Button variant='outline-dark' onClick={loginWithGitHub}><FaGithub></FaGithub> Github Sign In</Button>
                </div>
                <div className='mt-2'>
                    <p>
                        Don't Have an Accout? <Link to="/register" className='text-decoration-none'>Register</Link>
                    </p>
                </div>
                {
                    err && <p className='text-danger'>{err}</p>
                }
            </form>
            </div>
            
        </div>
    );
};

export default Login;