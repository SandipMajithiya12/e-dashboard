
import { Link } from "react-router-dom";
const Nav = () => 
{
  return (
    <div>
      <div className='nav'>
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/signup'>signup</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
