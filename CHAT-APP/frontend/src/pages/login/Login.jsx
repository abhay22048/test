import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'>ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>UserName</span>
                    </label>
                    <input type='text' placeholder='Enter UserName' className="input input-bordered w-full max-w-xs"></input>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='input input-bordered w-full max-w-xs'
                    />            
                </div>
                <Link to='/SignUp' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have any account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm-mt-2'>Login</button>
                </div>

            </form>

        </div>
    </div>


}

export default login



//STARTER CODE FOR THIS FILE
// import React from 'react'

// const login = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Login
//                 <span className='text-blue-500'>ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>UserName</span>
//                     </label>
//                     <input type='text' placeholder='Enter UserName' className="input input-bordered w-full max-w-xs"></input>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input
//                         type='password'
//                         placeholder='Enter Password'
//                         className='input input-bordered w-full max-w-xs'
//                     />            
//                 </div>
//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     {"Don't"} have any account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm-mt-2'>Login</button>
//                 </div>

//             </form>

//         </div>
//     </div>


// }

// export default login