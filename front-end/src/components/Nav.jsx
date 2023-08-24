
import { Link,useNavigate } from "react-router-dom";
const Nav = () => 
{
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup');
  }
  const auth = localStorage.getItem('user');
  return (
    <div>
      <div className='nav'>
        { auth ?<ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update/:id'></Link></li>
         
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
     
            </ul>
           :
           <ul className="nav1">
             
             
             <li><Link to='/login'>Login</Link></li>
              
              <li><Link to='/signup'>Signup</Link></li>
              
              
            
           </ul>
        }
        
      </div>
    </div>
  )
}

export default Nav;
