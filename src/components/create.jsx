import {useState} from 'react'

function Create() {

  const [title , settitle] = useState()
  const [body , setbody] = useState()
  const [auth , setauth] = useState()

  return (
    <div className=''
    >
        <p className=' text-red-500 text-xl'> Add a new blogs</p>
        <form className='' >
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
          value={auth}
          onChange={(e)=>setauth(e.target.value)}>
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>

        </form>
    </div>
  )
}

export default Create