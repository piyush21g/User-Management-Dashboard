import React,{useState, useEffect} from 'react'
import UserTable from './UserTable'
import './UserDetails.css';

function UserDetails() {
    const [userApi,setUserApi] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserApi(json))
    },[])
    
    

  return (
    <div> 
        <UserTable users={userApi}/>

    </div>
  )
}

export default UserDetails