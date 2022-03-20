import Card from "../UI/Card";
import style from './DisplayUsers.module.css';


const DisplayUsers = props =>{
    return( 
        <Card >
            <ul className={style.users} >
                {props.users.map(user => 
                    
                    <li key={user.name}>
                        {user.name} ({user.age} Years Old)
                        
                    </li>)
                }
            </ul>
        </Card>

    )
}
export default DisplayUsers;