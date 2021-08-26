import {Link} from 'react-router-dom';


const NavBar=()=>{
    return (
        <>
         <Link to='/'>SignUp</Link>
         <Link to='/login'>Login</Link>
         <Link to='/dash'> Dashboard</Link>
         <Link to='/history'> History</Link>
         <Link to='/logout'>LogOut</Link> 
        </>
    )
}


export default NavBar;