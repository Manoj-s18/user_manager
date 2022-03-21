import { useState,useRef } from 'react';
import style from './AddUser.module.css'
import Card from '../UI/Card';
import Button   from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props =>{
    const nameRef = useRef();
    const ageRef = useRef();
    const [error,setError] = useState(false);
    const [errorData,setErrorData] = useState();

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const age = ageRef.current.value;
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
        nameRef.current.value='';
        ageRef.current.value='';
        

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
            <input  id="userName" type='text' ref={nameRef} />
            <label htmlFor = "age">Age (Years)</label>
            <input id="age"type='number' ref={ageRef}/>
            <Button type="submit" >Add User</Button>
        </form>
        </Card>
               
        </div>
 

    )
}
export default AddUser;