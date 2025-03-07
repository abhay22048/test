import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const searchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none' />

        </button>

    </form>
  )
}

export default searchInput


// STARTER CODE SNIPPET

// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";


// const searchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='search' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <IoSearchSharp className='w-6 h-6 outline-none' />

//         </button>

//     </form>
//   )
// }

// export default searchInput