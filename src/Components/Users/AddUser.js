import { useState } from 'react';
import style from './AddUser.module.css'
import Card from '../UI/Card';
import Button   from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props =>{
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState(false);
    const [errorData,setErrorData] = useState();

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        if(name.trim().length === 0){
            setError(true);
            setErrorData({
            title:'Invalid Name',
            message:'Error msg " Enter Valid Name [Non-Empty value]" '
            });   
            return;
        }
        if(+age<1 || age.trim().length === 0 ){
            setError(true);
            setErrorData({
                title:'Invalid Age',
                message:'Error msg " Enter Valid Age [Non-Empty and Age > 0]" '
                });  
            return;            
        }
        console.log(name,age);
        const data ={name:name,age:age}
        props.onAddUser(data);
        setName('');
        setAge('');

    }
    const nameHandler = (event) =>{
        setName(event.target.value);
    }
    const ageHandler = (event) =>{
        setAge(event.target.value);
    }
    const errorHandler = () =>{
        setError(false);
    }

    return(
        <div> 
       { error && <ErrorModal header = {errorData.title} description = {errorData.message} onError = {errorHandler}/>}
         
        <Card>
            
        <form className={style.input} onSubmit={formSubmitHandler}>
            <label htmlFor = "username">Name</label>
            <input  id="userName" type='text' value={name} onChange={nameHandler}/>
            <label htmlFor = "age">Age (Years)</label>
            <input id="age"type='number'value={age}onChange={ageHandler}/>
            <Button type="submit" >Add User</Button>
        </form>
        </Card>
               
        </div>
 

    )
}
export default AddUser;