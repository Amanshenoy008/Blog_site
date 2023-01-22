import { Link } from "react-router-dom"

const BlogList =(props)=>{
    const blogs=props.blogs
   // const title = props.blogs.title
    //console.log(title)
//    const handledelete = props.handledelete




    console.log(props)
    return(
        <div className="mt-20 flex flex-col-reverse  w-5/6  ">
            {
                    blogs.map((blog) => (
                    <div className=" m-2 border-2 border-red-200 hover:border-red-400  h-24 cursor-pointer hover:drop-shadow-2xl "  key={blog.id}>
                        <Link to={'/blogs/'+blog.id}>
                            <div className="text-red-600  text-lg p-2" >{blog.title}</div>
                            <div className="text-gray-700 text-base pl-2 ">Author : {blog.author}</div>
                        </Link>
                    </div>
                ))}
        </div>
    )
}

export default BlogList