import { Link } from "react-router-dom"

const BlogList =(props)=>{
    const blogs=props.blogs
    const title = props.blogs.title
//    const handledelete = props.handledelete

    console.log(props )
    return(
        <div className="blog-lists">
            <h1>{title}</h1>
            {
                    blogs.map((blog) => (
                    <div className="details"  key={blog.id}>
                        <Link to={'/blogs/'+blog.id}>
                            <h1>{blog.title}</h1>
                            <p>{ blog.body}</p>
                            <p>{blog.author}</p>
                        </Link>
                    </div>
                ))}
        </div>
    )
}

export default BlogList