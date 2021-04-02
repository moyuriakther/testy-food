import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
        <div className="nav">
          
               <div>
                   <h3 style={{fontWeight:"bold"}}><Link to="/home" className="menu">Testy Food</Link></h3>
               </div>
           <div className="header-link">
               <div>
                   <Link className="menu" to="/home">Home</Link>
               </div>
               <div>
                   <Link className="menu" to="/orders">Orders</Link>
               </div>
               <div>
                   <Link className="menu" to="/admin">Admin</Link>
               </div>
               <div>
                   <Link className="menu" to="/deals">Deals</Link>
               </div>
               <div style = {{color:'tomato'}}>
                   {loggedInUser.issSignedIn ? loggedInUser.name : <Link className="btn-login menu" to="/login">Login</Link>}
               </div>
           </div>
       </div>
   </div>
      
    )
}

export default Header;