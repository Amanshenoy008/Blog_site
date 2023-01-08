import {useParams} from 'react-router-dom'

function Blogdetails() {
    const {id} = useParams()


  return (
    <div>
        
       <h1> blogdetails  -{id} </h1>

        
        </div>
  )
}

export default Blogdetails


//  npx json-server --watch data/db.json --port 8000