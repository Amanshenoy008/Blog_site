import {Link } from 'react-router-dom'


function Navbar(){

    return (
        <>
        <nav className=" flex gap-2 mt-3 ">
            <h1 className=' text-red-600 flex-1 text-3xl '>Blog_site</h1>
            <div className=" flex-1 flex justify-between">
                <Link to="/" className='text-xg hover:border-b-2 hover:border-red-600  ease-out duration-100'>Home</Link>
                <Link to="/create" className=" text-xg border-2 bg-red-600 border-red-600 hover:bg-white ease-out duration-300 rounded-xl p-1"> Create blog</Link>
                <Link to="/Signin" className=' text-xg'> Sign-in</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar