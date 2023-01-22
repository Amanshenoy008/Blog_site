import {useState} from 'react'

function Create() {

  const [title , settitle] = useState()
  const [body , setbody] = useState()
  const [author , setauthor] = useState('Mario')
  const [ispending, setpending] = useState('false')


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
    })

  }

  return (
    <div className=''
    >
        <p className=' text-red-500 text-xl'> Add a new blogs</p>
        <form className='' onSubmit={handlesubmit} >
          <label className=' '  > Blog title:</label>
          <input type="text" 
          required 
          className='border-solid border-2 border-sky-500   	'
          value={title}
          onChange={(e)=>{settitle(e.target.value)}}
          />
          <label className='pl-4' > Blog body: </label>
          <textarea name="" id="" cols="30" rows="10" required 
          className='border-solid border-2 border-sky-500  '
          value={body}
          onChange={(e)=>{setbody(e.target.value)}}
          ></textarea>
          <label className='pl-4'> Blog Author:</label>
          <select className='border-solid border-2 border-sky-500  ' 
          value={author}
          onChange={(e)=>setauthor(e.target.value)}>
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
          { ispending && <button className=' bg-red-500 text-white hover:bg-white hover:text-red-500 rounded border-solid border-2 border-red-500 ease-in duration-300' 
          
          > ADDING...</button>}
          { !ispending && <button className=' bg-red-500 text-white hover:bg-white hover:text-red-500 rounded border-solid border-2 border-red-500 ease-in duration-300' 
          
          > SUBMIT</button>}
          
        </form>
    </div>
  )
}

export default Create
