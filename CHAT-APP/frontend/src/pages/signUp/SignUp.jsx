import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const signup = () => {
    const [inputs,SetInputs] = useState({
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        gender:'',
    })

    const {loading,signup}=useSignup();

    const handleCheckBoxChange = (gender) => {
        SetInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup (inputs)
    }


  return <div className='className='flex flex-col items-center justify-center min-w-96 mx-auto>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='Your Name' className='input input-bordered w-full h-10'
                value={inputs.fullName}
                onChange={(e) => SetInputs({...inputs,fullName:e.target.value})}
                />
                
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Enter UserName ' className='input input-bordered w-full h-10'
                value={inputs.userName}
                onChange={(e) => SetInputs({...inputs,userName:e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' 
                placeholder='Enter Password'
                className='input input-bordered w-full h-10'
                value={inputs.password}
                onChange={(e) => SetInputs({...inputs,password:e.target.value})}
                />
            </div>
            <div>
            <label className='label p-2'>
                    <span className='text-base label-text'>Confirm PassWord</span>
                </label>
                <input type='password' 
                placeholder='Enter Password'
                className='input input-bordered w-full h-10'
                value={inputs.confirmPassword}
                onChange={(e) => SetInputs({...inputs,confirmPassword:e.target.value})}
                />
            </div>

            
            <GenderCheckbox oncheckboxChange = { handleCheckBoxChange} selectedGender={inputs.gender}/>

            <Link to={"/Login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                Alredy Have an account?
            </Link>
            <div>
                    <button className='btn btn-block btn-sm-mt-2 border-slate-700'>Sign-up</button>
                </div>
            
        </form>
        
    </div>
  </div>
  
};  

export default signup


/* STARTER CODE
import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const signup = () => {
  return <div className='className='flex flex-col items-center justify-center min-w-96 mx-auto>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='Your Name' className='input input-bordered w-full h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Enter UserName ' className='input input-bordered w-full h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' 
                placeholder='Enter Password'
                className='input input-bordered w-full h-10'
                />
            </div>
            <div>
            <label className='label p-2'>
                    <span className='text-base label-text'>Confirm PassWord</span>
                </label>
                <input type='password' 
                placeholder='Enter Password'
                className='input input-bordered w-full h-10'
                />
            </div>

            
            <GenderCheckbox />

            <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                Alredy Have an account?
            </a>
            <div>
                    <button className='btn btn-block btn-sm-mt-2 border-slate-700'>Sign-up</button>
                </div>
            
        </form>
        
    </div>
  </div>
  
};  

export default signup
*/