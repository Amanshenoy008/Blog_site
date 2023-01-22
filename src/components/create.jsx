import {useState} from 'react'
import {  useNavigate } from "react-router-dom";

function Create() {

  const [title , settitle] = useState()
  const [body , setbody] = useState()
  const [author , setauthor] = useState('')
  const [ispending, setpending] = useState('false')
  const navi = useNavigate()
  

  const handlesubmit = (e)=>{
    e.preventDefault()

    const bod ={title, body, author}

    console.log(bod)

    setpending(true)

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'} ,
      body: JSON.stringify(bod)
    }).then(()=>{
      console.log('New Blog added')
      setpending(false)
      navi('/')
    })

  }

  return (
    <div className=''>
        <p className=' text-red-600 text-2xl text-center mt-10 mb-2   '> Add a new blogs</p>
        <form className='flex flex-col gap-y-3' onSubmit={handlesubmit} >
          <label className=' text-left self-center'  > Blog Title:</label>
          <input type="text" 
          required 
          className='border-solid border-2 border-gray-500  self-center 	'
          value={title}
          onChange={(e)=>{settitle(e.target.value)}}
          />
          <label className='text-left self-center' > Blog Body: </label>
          <textarea name="" id="" cols="30" rows="10" required 
          className='border-solid border-2 border-gray-500  self-center'
          value={body}
          onChange={(e)=>{setbody(e.target.value)}}
          ></textarea>
          <label className='text-left self-center'>Author:</label>
          <input className='border-solid border-2 border-gray-500 self-center ' 
          value={author}
          onChange={(e)=>setauthor(e.target.value)} />
         
          { ispending && <button className='mt-5 w-2/5 self-center bg-red-500 text-white hover:bg-white hover:text-red-500 rounded border-solid border-2 border-red-500 ease-in duration-300' 
          
          > SUBMIT</button>}
          { !ispending && <button className='mt-5 w-2/5 bg-red-500 text-white hover:bg-white hover:text-red-500 rounded border-solid border-2 border-red-500 ease-in duration-300' 
          
          > Creating...</button>}
          
        </form>
    </div>
  )
}

export default Create
