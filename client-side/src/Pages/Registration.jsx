import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Registration = () => {
    const [accepted, setAccepted] = useState(false);
    const [err,setErr] = useState('');
    const {createUser,updateUserProfile} = useContext(AuthContext);
    //handle checkbox
    const handelCheckin = (event)=>{
        setAccepted(event.target.checked)
    }
    //handle registration with email and password
    //also update user name and image
    const handleRegistration = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        if(password.length < 6){
            setErr("Password must be at least 6 characters");
            return
        }
        if(email === '' || password ===''){
            setErr ('Can not submit empty email or password');
            return
        }

        console.log(name,email,password,photoUrl);
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name,photoUrl);
            form.reset();
        })
        .catch(error=>{
            console.log(error.message);
            setErr(error.message)
        })
    }
    return (
        <div className='container '>
            <div className="w-75 m-auto">
            <h2 className='text-center'>Register</h2>
            <form className='border border-success-2 rounded p-3' onSubmit={handleRegistration}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" aria-describedby="fullNameField" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="photoUrl" className="form-label">Photo Url</label>
                    <input type="text" className="form-control" id="photoUrl" name="photoUrl" aria-describedby="photo-Url" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" onClick={handelCheckin} className="form-check-input" name="checkinput" id="checkinput"/>
                    <label className="form-check-label" htmlFor="checkinput">Accept Terms & Condition</label>
                </div>
                <button type="submit" disabled={!accepted} className="btn btn-success">Register</button>
                <div className='mt-2'>
                    <p>
                        Alread have an Account? <Link to="/login" className='text-decoration-none'>Login</Link>
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

export default Registration;