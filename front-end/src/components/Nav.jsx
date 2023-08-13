
import { Link } from "react-router-dom";
const Nav = () => 
{
  const auth = localStorage.getItem('user');
  return (
    <div>
      <div className='nav'>
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
         
            <li><Link to='/profile'>Profile</Link></li>
            <li>{ auth  ? <Link to='/logout'>Logout</Link>:<Link to='/signup'>Signup</Link>}</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
