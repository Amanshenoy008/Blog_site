import { useNavigate, useParams} from 'react-router-dom'
import useFetch from './useFetch'

function Blogdetails() {
    const {id} = useParams()
    const Navigate = useNavigate()
    const { data:blog , isPending, error } = useFetch('http://localhost:8000/blogs/'+id)
    
  const handleClick=()=>{
        
      fetch('http://localhost:8000/blogs/'+id,{
        method:'DELETE',
      }).then(res=>res.json())
      .then(()=>{
        console.log(`deleted blog id ${id} successfully`)
        Navigate('/')
      })
  }

  return (
    <div>
        
       <h1> blogdetails  -{id} </h1>
       {error && <h1>Error...</h1>}
       {isPending && <h1>Loading</h1>}
      { blog &&   
      
          <div>
            <h1 className=' '>{blog.title}</h1>
            <p className=' '>{blog.body}</p>
            <button onClick={handleClick} className=' '> Delete</button>
            </div>
      }
        
        </div>
  )
}

export default Blogdetails


//  npx json-server --watch data/db.json --port 8000