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
    <>
       {error && <h1>Error...</h1>}
       {isPending && <h1>Loading</h1>}
      { blog &&   
      
          <div className=' w-screen h-screen flex flex-col '>
            <h1 className=' self-center'>{blog.title}</h1>
            <p className='self-center '>{blog.body}</p>
            <button onClick={handleClick} className='self-center w-2/5 '> Delete</button>
            </div>
      }
        
        </>
  )
}

export default Blogdetails


//  npx json-server --watch data/db.json --port 8000