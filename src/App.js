import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import DisplayUsers from './Components/Users/DisplayUsers';
import Card from './Components/UI/Card';

function App() {
  const [userList,setUserList] = useState([
    {name:'Max',age:'22'},{name:'Ben',age:'24'},{name:'Alex',age:'26'}
  ])

  const addUserHandler = (data)=>{
    setUserList((prevData) => {
      return [...prevData,data]
    })
    }
   
  
  


  return (
    
    <Card>
      <AddUser onAddUser = {addUserHandler}/>
      <DisplayUsers users = {userList}/>
    </Card>
  );
}

export default App;
