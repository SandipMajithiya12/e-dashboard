
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
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
         
            <li><Link to='/profile'>Profile</Link></li>
           
            {
              auth ? <li><Link to='/signup' onClick={logout}>Logout</Link></li>:
              <>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
               </>
            }
        </ul>
      </div>
    </div>
  )
}

export default Nav;
